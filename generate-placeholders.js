/**
 * Run this with Node.js to generate 120 placeholder frames in public/sequence
 * Usage: node generate-placeholders.js
 */
const fs = require('fs');
const path = require('path');

// Ensure the directory exists
const targetDir = path.join(__dirname, 'public', 'sequence');
if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

const transparentWebpBase64 = "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";

async function generateFrames() {
  const binaryData = Buffer.from(transparentWebpBase64, 'base64');
  
  for (let i = 0; i <= 120; i++) {
    const filePath = path.join(targetDir, `frame_${i}.webp`);
    fs.writeFileSync(filePath, binaryData);
  }
  
  console.log(`Generated 121 placeholder frames (frame_0.webp to frame_120.webp) in ${targetDir}`);
}

generateFrames();
