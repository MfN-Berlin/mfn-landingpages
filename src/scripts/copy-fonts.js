const fs = require('fs');
const path = require('path');

const copyFonts = () => {
  const sourceDir = path.join(__dirname, '..', 'src', 'fonts');
  const targetDir = path.join(__dirname, '..', 'public', 'static', 'fonts');

  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Copy all font files
  fs.readdirSync(sourceDir).forEach(file => {
    if (file.endsWith('.woff') || file.endsWith('.woff2')) {
      fs.copyFileSync(
        path.join(sourceDir, file),
        path.join(targetDir, file)
      );
    }
  });

  console.log('✅ Fonts copied successfully');
};

copyFonts(); 