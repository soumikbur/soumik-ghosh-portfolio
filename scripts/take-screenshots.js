const cp = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outDir = path.resolve(__dirname, '..', 'docs', 'images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const targets = [
  { url: 'http://localhost:3000/', file: 'portfolio-home.png' },
  { url: 'http://localhost:3000/projects', file: 'portfolio-projects.png' },
  { url: 'http://localhost:3000/about', file: 'portfolio-about.png' },
  { url: 'http://localhost:3000/projects/panorama-water-tank', file: 'portfolio-project-detail.png' },
];

for (const target of targets) {
  const dest = path.join(outDir, target.file);
  console.log(`Capturing ${target.url} -> ${dest}`);
  try {
    cp.execFileSync(edgePath, [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      `--screenshot=${dest}`,
      '--window-size=1280,900',
      '--hide-scrollbars',
      target.url,
    ], { timeout: 15000 });
    const stat = fs.statSync(dest);
    console.log(`Captured ${target.file}: ${stat.size} bytes`);
  } catch (err) {
    console.error(`Error capturing ${target.file}:`, err.message);
  }
}
