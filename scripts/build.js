const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

console.log('1. Compiling Tailwind CSS...');
execSync('npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --minify', {
  cwd: rootDir,
  stdio: 'inherit'
});

console.log('2. Preparing public directory...');
if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true, force: true });
}
fs.mkdirSync(publicDir, { recursive: true });

// Copy index.html
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(publicDir, 'index.html'));

// Copy dist folder
fs.cpSync(path.join(rootDir, 'dist'), path.join(publicDir, 'dist'), { recursive: true });

// Copy assets folder
if (fs.existsSync(path.join(rootDir, 'assets'))) {
  fs.cpSync(path.join(rootDir, 'assets'), path.join(publicDir, 'assets'), { recursive: true });
}

// Also copy output.css to root of public just in case
if (fs.existsSync(path.join(rootDir, 'dist', 'output.css'))) {
  fs.copyFileSync(path.join(rootDir, 'dist', 'output.css'), path.join(publicDir, 'output.css'));
}

console.log('Build completed successfully!');
console.log('Contents of public/:', fs.readdirSync(publicDir));
