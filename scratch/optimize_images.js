/* eslint-disable */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");

async function run() {
  const files = fs.readdirSync(IMAGES_DIR);
  console.log(`Auditing ${files.length} assets in public/images...`);

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    
    // Check for double extension patterns (e.g. .jpg.png or .webp.png)
    let isTarget = false;
    let targetName = "";

    if (file.endsWith(".jpg.png")) {
      isTarget = true;
      targetName = file.replace(".jpg.png", ".webp");
    } else if (file.endsWith(".webp.png")) {
      isTarget = true;
      targetName = file.replace(".webp.png", ".webp");
    } else if (file === "export-logistics.png") {
      isTarget = true;
      targetName = "export-logistics.webp";
    }

    if (isTarget) {
      const targetPath = path.join(IMAGES_DIR, targetName);
      console.log(`Optimizing: ${file} -> ${targetName}`);
      
      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(targetPath);
          
        // Delete original file to remove bloat
        fs.unlinkSync(filePath);
        console.log(`Successfully converted and removed legacy asset: ${file}`);
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err);
      }
    }
  }
  console.log("Image optimization complete.");
}

run();
