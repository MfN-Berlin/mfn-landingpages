const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const mfnDir = path.join(publicDir, 'mfn-landingpages');

// Create mfn-landingpages directory if it doesn't exist
if (!fs.existsSync(mfnDir)) {
  fs.mkdirSync(mfnDir, { recursive: true });
}

// Move all JS and CSS files to mfn-landingpages directory
fs.readdirSync(publicDir).forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.css')) {
    fs.renameSync(
      path.join(publicDir, file),
      path.join(mfnDir, file)
    );
  }
});

// Create static/fonts directory
const fontsDir = path.join(publicDir, 'static', 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}