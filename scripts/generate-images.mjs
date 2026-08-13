// Generates branded placeholder images for public/images/, matching the visual
// style already used in the repo (dark blueprint-grid panel + diagonal accent +
// text label) so every new image slot introduced in this content/SEO pass
// resolves to a real file instead of a broken path. Run with:
//   node scripts/generate-images.mjs [--force]
//
// Add new entries to MANIFEST (grouped by page/section) rather than one-off
// scripts — this keeps every placeholder visually consistent and re-runnable.
import sharp from "sharp";
import { mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const FORCE = process.argv.includes("--force");

const PALETTE = {
  blueDark: "#0a1f3d",
  blueDark2: "#0f2e5c",
  blueLine: "rgba(255,255,255,0.07)",
  green: "#97c95e",
  greenLine: "#7cb93d",
  bgLight: "#f2f6fc",
  lineLight: "#dde5f0",
  blue950: "#0a1f3d",
  blue700: "#1b4b91",
};

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > maxChars) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function gridPattern(id, color, size = 40) {
  return `<pattern id="${id}" width="${size}" height="${size}" patternUnits="userSpaceOnUse">
    <path d="M ${size} 0 L 0 0 0 ${size}" fill="none" stroke="${color}" stroke-width="1"/>
  </pattern>`;
}

function heroSvg({ width, height, label, sub, category }) {
  const titleSize = Math.max(20, Math.round(width / 26));
  const subSize = Math.max(10, Math.round(width / 78));
  const maxChars = Math.round(width / (titleSize * 0.6));
  const lines = wrapText(label, maxChars);
  const lineHeight = titleSize * 1.25;
  const blockHeight = lines.length * lineHeight;
  const startY = height / 2 - blockHeight / 2 + titleSize * 0.8;
  const catLabel = category ? escapeXml(category.toUpperCase()) : "ZEMITECH URBAN";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>${gridPattern("g", PALETTE.blueLine)}</defs>
    <rect width="100%" height="100%" fill="${PALETTE.blueDark}"/>
    <polygon points="${width * 0.62},0 ${width},0 ${width},${height} ${width * 0.38},${height}" fill="${PALETTE.blueDark2}" opacity="0.55"/>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <g>
      <line x1="${width / 2 - blockHeight * 0.9}" y1="${startY - titleSize * 1.6}" x2="${width / 2 - blockHeight * 0.9}" y2="${startY - titleSize * 1.6 + 18}" stroke="${PALETTE.greenLine}" stroke-width="2"/>
      <line x1="${width / 2 - blockHeight * 0.9}" y1="${startY - titleSize * 1.6}" x2="${width / 2 - blockHeight * 0.9 + 18}" y2="${startY - titleSize * 1.6}" stroke="${PALETTE.greenLine}" stroke-width="2"/>
    </g>
    <text x="50%" y="${startY - titleSize * 1.3}" font-family="Arial, Helvetica, sans-serif" font-size="${subSize}" font-weight="600" letter-spacing="2" fill="${PALETTE.green}" text-anchor="middle">${catLabel}</text>
    ${lines
      .map(
        (l, i) =>
          `<text x="50%" y="${startY + i * lineHeight}" font-family="Arial, Helvetica, sans-serif" font-size="${titleSize}" font-weight="700" fill="#ffffff" text-anchor="middle">${escapeXml(l)}</text>`
      )
      .join("\n")}
    ${sub ? `<text x="50%" y="${startY + lines.length * lineHeight + subSize * 1.6}" font-family="Arial, Helvetica, sans-serif" font-size="${subSize}" font-weight="500" fill="#c7d6ec" text-anchor="middle">${escapeXml(sub)}</text>` : ""}
  </svg>`;
}

function diagramSvg({ width, height, label, sub }) {
  const titleSize = Math.max(16, Math.round(width / 34));
  const subSize = Math.max(10, Math.round(width / 90));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>${gridPattern("gl", PALETTE.lineLight, 32)}</defs>
    <rect width="100%" height="100%" fill="${PALETTE.bgLight}"/>
    <rect width="100%" height="100%" fill="url(#gl)"/>
    <rect x="1.5" y="1.5" width="${width - 3}" height="${height - 3}" fill="none" stroke="${PALETTE.blue700}" stroke-width="1" opacity="0.4"/>
    <line x1="24" y1="24" x2="24" y2="46" stroke="${PALETTE.greenLine}" stroke-width="3"/>
    <line x1="24" y1="24" x2="46" y2="24" stroke="${PALETTE.greenLine}" stroke-width="3"/>
    <line x1="${width - 24}" y1="${height - 24}" x2="${width - 24}" y2="${height - 46}" stroke="${PALETTE.greenLine}" stroke-width="3"/>
    <line x1="${width - 24}" y1="${height - 24}" x2="${width - 46}" y2="${height - 24}" stroke="${PALETTE.greenLine}" stroke-width="3"/>
    <text x="50%" y="46%" font-family="Arial, Helvetica, sans-serif" font-size="${titleSize}" font-weight="700" fill="${PALETTE.blue950}" text-anchor="middle">${escapeXml(label)}</text>
    ${sub ? `<text x="50%" y="53%" font-family="Arial, Helvetica, sans-serif" font-size="${subSize}" font-weight="500" letter-spacing="1.5" fill="${PALETTE.blue700}" text-anchor="middle">${escapeXml(sub.toUpperCase())}</text>` : ""}
  </svg>`;
}

function swatchSvg({ width, height, label, hex }) {
  const size = Math.max(10, Math.round(width / 11));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="${hex}"/>
    <rect width="100%" height="100%" fill="black" opacity="0.06"/>
    <rect x="0" y="${height - height * 0.28}" width="100%" height="${height * 0.28}" fill="black" opacity="0.28"/>
    <text x="50%" y="${height - height * 0.11}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="600" fill="#ffffff" text-anchor="middle">${escapeXml(label)}</text>
  </svg>`;
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function generate(entry) {
  const outPath = join(ROOT, "public", entry.file);
  if (!FORCE && (await exists(outPath))) return "skip";
  await mkdir(dirname(outPath), { recursive: true });
  const width = entry.w ?? 1600;
  const height = entry.h ?? 900;
  let svg;
  if (entry.style === "diagram") svg = diagramSvg({ width, height, label: entry.label, sub: entry.sub });
  else if (entry.style === "swatch") svg = swatchSvg({ width, height, label: entry.label, hex: entry.hex ?? PALETTE.blue700 });
  else svg = heroSvg({ width, height, label: entry.label, sub: entry.sub, category: entry.category });

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 82 })
    .toFile(outPath);
  return "wrote";
}

export async function run(manifest) {
  let wrote = 0,
    skipped = 0;
  for (const entry of manifest) {
    const result = await generate(entry);
    if (result === "wrote") wrote++;
    else skipped++;
  }
  console.log(`Placeholder images: ${wrote} written, ${skipped} skipped (already existed).`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { MANIFEST } = await import("./image-manifest.mjs");
  await run(MANIFEST);
}
