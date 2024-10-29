const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

// Rate limiting setup
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_IP = 5;
const requestLog = new Map();

// Input validation
const validateInput = (rating, feedback) => {
  if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5) {
    throw new Error('Invalid rating');
  }
  
  if (feedback && typeof feedback !== 'string') {
    throw new Error('Invalid feedback format');
  }

  if (feedback.length > 1000) { // Limit feedback length
    throw new Error('Feedback too long');
  }

  // Basic XSS protection
  const sanitizedFeedback = feedback
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/['"]/g, '') // Remove quotes
    .trim();

  return { rating, feedback: sanitizedFeedback };
};

// Rate limiting check
const checkRateLimit = (ip) => {
  const now = Date.now();
  const userRequests = requestLog.get(ip) || [];
  
  // Remove old requests
  const recentRequests = userRequests.filter(
    time => time > now - RATE_LIMIT_WINDOW
  );
  
  if (recentRequests.length >= MAX_REQUESTS_PER_IP) {
    throw new Error('Rate limit exceeded');
  }
  
  // Log new request
  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
};

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get client IP
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    // Check rate limit
    checkRateLimit(clientIp);

    const { rating, feedback, date } = req.body;
    
    // Validate and sanitize input
    const sanitizedInput = validateInput(rating, feedback);
    
    // Create CSV line with sanitized input
    const formattedDate = format(new Date(date), 'yyyy-MM-dd HH:mm:ss');
    const csvLine = `${formattedDate},${sanitizedInput.rating},"${sanitizedInput.feedback}"\n`;
    
    // Use a more secure file path
    const filePath = path.join(process.cwd(), 'private', 'feedback.csv');
    const dirPath = path.dirname(filePath);
    
    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true, mode: 0o750 }); // Restricted permissions
    }
    
    // Create or append to file with restricted permissions
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, 'Date,Rating,Feedback\n', { 
        encoding: 'utf8',
        mode: 0o640 // Owner read/write, group read only
      });
    }
    
    // Append feedback
    fs.appendFileSync(filePath, csvLine, { 
      encoding: 'utf8',
      mode: 0o640
    });
    
    res.status(200).json({ message: 'Feedback saved successfully' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    
    // Send appropriate error message
    const errorMessage = error.message === 'Rate limit exceeded' 
      ? 'Too many requests. Please try again later.'
      : 'Error saving feedback';
    
    res.status(error.message === 'Rate limit exceeded' ? 429 : 500)
      .json({ message: errorMessage });
  }
}
