/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');

async function generateAssets() {
  // 1. Extract raw H-mark from hastava-logo.png
  // Exact H mark bounds: left: 0, top: 0, width: 456, height: 546
  const rawHBuffer = await sharp('public/brand/hastava-logo.png')
    .extract({ left: 0, top: 0, width: 456, height: 546 })
    .toBuffer();

  // Create square transparent asset (546 x 546) with centered H-mark
  // 456 width in 546 square means left offset = (546 - 456)/2 = 45
  const square546 = await sharp({
    create: {
      width: 546,
      height: 546,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{ input: rawHBuffer, left: 45, top: 0 }])
  .png()
  .toBuffer();

  // Create raw transparent cropped H-mark (456 x 546)
  const rawHTransparent = await sharp(rawHBuffer).png().toBuffer();

  // Save canonical files
  fs.writeFileSync('public/brand/hastava-mark.png', square546);
  fs.writeFileSync('public/brand/hastava-mark-transparent.png', rawHTransparent);
  
  // Also create square versions for app icons
  const icon512 = await sharp(square546).resize(512, 512).png().toBuffer();
  const icon32 = await sharp(square546).resize(32, 32).png().toBuffer();

  fs.writeFileSync('src/app/icon.png', icon512);
  fs.writeFileSync('src/app/apple-icon.png', icon512);
  fs.writeFileSync('public/favicon.ico', icon32);
  fs.writeFileSync('public/favicon.png', icon512);

  // SVG representation of H-mark (embedded base64 of raw mark)
  const base64Raw = rawHTransparent.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456 546" width="100%" height="100%">
  <image href="data:image/png;base64,${base64Raw}" width="456" height="546" />
</svg>
`;
  fs.writeFileSync('public/brand/hastava-mark.svg', svgContent);

  console.log('Successfully generated:');
  console.log('- public/brand/hastava-mark.png (546x546 square transparent)');
  console.log('- public/brand/hastava-mark-transparent.png (456x546 raw transparent)');
  console.log('- public/brand/hastava-mark.svg');
  console.log('- src/app/icon.png');
  console.log('- src/app/apple-icon.png');
  console.log('- public/favicon.ico');
  console.log('- public/favicon.png');
}

generateAssets().catch(console.error);
