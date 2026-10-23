const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'cat-stage.jpg': 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
  'cat-led.jpg': 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
  'cat-tents.jpg': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
  'cat-furniture.jpg': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
  'use-corporate.jpg': 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  'use-wedding.jpg': 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
  'use-concert.jpg': 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
  'feat-mic.jpg': 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80'
};

const targetDir = path.join(__dirname, '..', 'assets', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(targetDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await download(url, dest);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Error downloading ${filename}:`, e.message);
    }
  }
}

run();
