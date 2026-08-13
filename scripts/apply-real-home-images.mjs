import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BRAIN_DIR = "/Users/sateshgavara/.gemini/antigravity-ide/brain/ca344826-00e9-43ed-a10f-a336e7d5bb42";

// Real AI Generated Photorealistic Images Pool
const AI_POOL = {
  construction: `${BRAIN_DIR}/home_hero_1_construction_1786513718672.png`,
  living: `${BRAIN_DIR}/home_hero_2_interior_1786513842367.png`,
  villa: `${BRAIN_DIR}/home_hero_3_residential_1786513868839.png`,
  kitchen: `${BRAIN_DIR}/home_hero_4_kitchen_1786516615322.png`,
  commercial: `${BRAIN_DIR}/home_hero_5_commercial_1786513884351.png`,
  infrastructure: `${BRAIN_DIR}/home_hero_6_infrastructure_1786513899392.png`,
  livingTv: `${BRAIN_DIR}/home_hero_7_living_room_1786516640956.png`,
  civilFrame: `${BRAIN_DIR}/home_division_construction_1786516662370.png`,
  joinery: `${BRAIN_DIR}/home_division_interior_1786516688494.png`,
  lShapeKitchen: `${BRAIN_DIR}/interior_kitchen_l_shape_1786516703670.png`,
  islandKitchen: `${BRAIN_DIR}/interior_kitchen_island_1786516725656.png`,
  manishHeadshot: `${BRAIN_DIR}/team_manish_k_sah_1786513917257.png`
};

// Map specific file paths to best-matching real AI image
const EXACT_MAPPINGS = {
  // Home Carousel & Cards
  "/images/home/hero-1-construction.jpg": AI_POOL.construction,
  "/images/home/hero-2-interior.jpg": AI_POOL.living,
  "/images/home/hero-3-residential.jpg": AI_POOL.villa,
  "/images/home/hero-4-kitchen.jpg": AI_POOL.kitchen,
  "/images/home/hero-5-commercial.jpg": AI_POOL.commercial,
  "/images/home/hero-6-infrastructure.jpg": AI_POOL.infrastructure,
  "/images/home/hero-7-living-room.jpg": AI_POOL.livingTv,
  "/images/home/division-construction.jpg": AI_POOL.civilFrame,
  "/images/home/division-interior.jpg": AI_POOL.joinery,
  "/images/home/how-we-work-1-consult.jpg": AI_POOL.commercial,
  "/images/home/how-we-work-2-design.jpg": AI_POOL.livingTv,
  "/images/home/how-we-work-3-build.jpg": AI_POOL.civilFrame,
  "/images/home/how-we-work-4-handover.jpg": AI_POOL.living,
  "/images/home/video-thumbnail-walkthrough.jpg": AI_POOL.kitchen,

  // Projects Covers
  "/images/projects/hillcrest-villa-cover.jpg": AI_POOL.villa,
  "/images/projects/orchid-residency-cover.jpg": AI_POOL.living,
  "/images/projects/wagholi-twin-villas-cover.jpg": AI_POOL.villa,
  "/images/projects/baner-retail-cover.jpg": AI_POOL.commercial,
  "/images/projects/green-township-cover.jpg": AI_POOL.infrastructure,
  "/images/projects/kondhwa-interior-cover.jpg": AI_POOL.livingTv,
  "/images/projects/meridian-office-cover.jpg": AI_POOL.commercial,
  "/images/projects/viman-nagar-kitchen-cover.jpg": AI_POOL.kitchen,
  "/images/projects/baner-2bhk-turnkey-interior-cover.jpg": AI_POOL.living,
  "/images/projects/hinjewadi-studio-interior-cover.jpg": AI_POOL.livingTv,
  "/images/projects/wagholi-master-bedroom-makeover-cover.jpg": AI_POOL.joinery,
  "/images/projects/hinjewadi-coworking-space-cover.jpg": AI_POOL.commercial,
  "/images/projects/narhe-layout-roads-drainage-cover.jpg": AI_POOL.infrastructure,
  "/images/projects/wagholi-twin-villas-cover.jpg": AI_POOL.villa,
  "/images/projects/pirangut-farmhouse-retreat-cover.jpg": AI_POOL.villa,
  "/images/projects/hero-projects.jpg": AI_POOL.villa,

  // Interiors & Services
  "/images/interior/hero-interior.jpg": AI_POOL.living,
  "/images/interior/hero-kitchen.jpg": AI_POOL.kitchen,
  "/images/interior/hero-living-room.jpg": AI_POOL.livingTv,
  "/images/interior/hero-bedroom.jpg": AI_POOL.joinery,
  "/images/interior/kitchen-modular.jpg": AI_POOL.kitchen,
  "/images/interior/kitchen-l-shape.jpg": AI_POOL.lShapeKitchen,
  "/images/interior/kitchen-island.jpg": AI_POOL.islandKitchen,
  "/images/interior/kitchen-u-shape.jpg": AI_POOL.kitchen,

  // Construction Heroes & Services
  "/images/construction/hero-construction.jpg": AI_POOL.construction,
  "/images/construction/hero-residential.jpg": AI_POOL.villa,
  "/images/construction/hero-commercial.jpg": AI_POOL.commercial,
  "/images/construction/hero-infrastructure.jpg": AI_POOL.infrastructure,

  // Team
  "/images/team/manish-k-sah.jpg": AI_POOL.manishHeadshot,
  "/images/team/hero-team.jpg": AI_POOL.commercial
};

function selectPoolImage(relPath) {
  const p = relPath.toLowerCase();
  if (p.includes("kitchen")) return AI_POOL.kitchen;
  if (p.includes("living")) return AI_POOL.livingTv;
  if (p.includes("bedroom") || p.includes("wardrobe") || p.includes("joinery") || p.includes("interior")) return AI_POOL.living;
  if (p.includes("commercial") || p.includes("office") || p.includes("retail") || p.includes("fitout")) return AI_POOL.commercial;
  if (p.includes("infrastructure") || p.includes("road") || p.includes("township") || p.includes("drainage")) return AI_POOL.infrastructure;
  if (p.includes("villa") || p.includes("residential") || p.includes("exterior") || p.includes("facade")) return AI_POOL.villa;
  return AI_POOL.civilFrame;
}

async function walk(dir) {
  let files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const res = join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await walk(res));
    } else if (/\.(jpg|jpeg|png)$/.test(entry.name)) {
      files.push(res);
    }
  }
  return files;
}

async function run() {
  const imgDir = join(ROOT, "public", "images");
  const allImages = await walk(imgDir);

  console.log(`Processing ${allImages.length} image files under public/images...`);

  let count = 0;
  for (const absPath of allImages) {
    const relPath = "/" + absPath.substring(join(ROOT, "public").length + 1).replace(/\\/g, "/");

    // Do NOT touch brand logos
    if (relPath.includes("brand/zemitech-urban-logo")) continue;

    // Skip diagrams and swatches (they are intentional vector/macro graphics)
    if (relPath.includes("diagram") || relPath.includes("-map") || relPath.includes("swatch")) continue;

    const sourceImage = EXACT_MAPPINGS[relPath] || selectPoolImage(relPath);

    // Determine target dimensions
    let w = 1600;
    let h = 900;
    if (relPath.includes("og/zemitech-urban-og")) {
      w = 1200;
      h = 630;
    }

    await sharp(sourceImage)
      .resize(w, h, { fit: "cover", position: "center" })
      .jpeg({ quality: 85 })
      .toFile(absPath + ".tmp");

    const fs = await import("node:fs/promises");
    await fs.rename(absPath + ".tmp", absPath);
    count++;
  }

  console.log(`Successfully replaced ${count} images with real AI photorealistic photography!`);
}

run().catch(console.error);
