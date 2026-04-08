const fs = require('fs');

const requiredFiles = ['index.html', 'script.js', 'sum.js'];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Build failed: missing required file: ${file}`);
  }
}

console.log('Build successful');
