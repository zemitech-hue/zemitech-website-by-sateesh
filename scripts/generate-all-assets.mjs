import sharp from "sharp";
import { mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { MANIFEST } from "./image-manifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BRAIN_DIR = "/Users/sateshgavara/.gemini/antigravity-ide/brain/ca344826-00e9-43ed-a10f-a336e7d5bb42";

const AI_OVERRIDES = {
  "/images/home/hero-1-construction.jpg": `${BRAIN_DIR}/home_hero_1_construction_1786513718672.png`,
  "/images/home/hero-2-interior.jpg": `${BRAIN_DIR}/home_hero_2_interior_1786513842367.png`,
  "/images/home/hero-3-residential.jpg": `${BRAIN_DIR}/home_hero_3_residential_1786513868839.png`,
  "/images/home/hero-4-kitchen.jpg": `${BRAIN_DIR}/home_hero_4_kitchen_1786516615322.png`,
  "/images/home/hero-5-commercial.jpg": `${BRAIN_DIR}/home_hero_5_commercial_1786513884351.png`,
  "/images/home/hero-6-infrastructure.jpg": `${BRAIN_DIR}/home_hero_6_infrastructure_1786513899392.png`,
  "/images/home/hero-7-living-room.jpg": `${BRAIN_DIR}/home_hero_7_living_room_1786516640956.png`,
  "/images/home/division-construction.jpg": `${BRAIN_DIR}/home_division_construction_1786516662370.png`,
  "/images/home/division-interior.jpg": `${BRAIN_DIR}/home_division_interior_1786516688494.png`,
  "/images/interior/kitchen-l-shape.jpg": `${BRAIN_DIR}/interior_kitchen_l_shape_1786516703670.png`,
  "/images/interior/kitchen-island.jpg": `${BRAIN_DIR}/interior_kitchen_island_1786516725656.png`,
  "/images/interior/hero-kitchen.jpg": `${BRAIN_DIR}/home_hero_4_kitchen_1786516615322.png`,
  "/images/interior/hero-living-room.jpg": `${BRAIN_DIR}/home_hero_7_living_room_1786516640956.png`,
  "/images/interior/hero-interior.jpg": `${BRAIN_DIR}/home_hero_2_interior_1786513842367.png`,
  "/images/construction/hero-construction.jpg": `${BRAIN_DIR}/home_hero_1_construction_1786513718672.png`,
  "/images/construction/hero-residential.jpg": `${BRAIN_DIR}/home_hero_3_residential_1786513868839.png`,
  "/images/construction/hero-commercial.jpg": `${BRAIN_DIR}/home_hero_5_commercial_1786513884351.png`,
  "/images/construction/hero-infrastructure.jpg": `${BRAIN_DIR}/home_hero_6_infrastructure_1786513899392.png`,
  "/images/team/manish-k-sah.jpg": `${BRAIN_DIR}/team_manish_k_sah_1786513917257.png`
};

const BRAND = {
  navyDark: "#0A1F3D",
  navyMid: "#1B4B91",
  oliveGreen: "#7CB93D",
  bgLight: "#F2F6FC",
  offWhite: "#FBFCFE",
  charcoal: "#45505F",
  gridLine: "rgba(27, 75, 145, 0.12)",
  axisLine: "rgba(27, 75, 145, 0.35)"
};

const UNMANIFESTED = [
  { file: "/images/about/hero-about.jpg", label: "Zemitech Urban Corporate Headquarters & Design Studio", w: 1600, h: 900, style: "hero" },
  { file: "/images/about/office-team.jpg", label: "Zemitech Urban Engineering & Interior Design Team", w: 1600, h: 900, style: "hero" },
  { file: "/images/blog/boq-explainer.jpg", label: "Sample Bill of Quantities Line Items Breakdown", w: 1400, h: 1000, style: "diagram" },
  { file: "/images/blog/construction-timeline.jpg", label: "Residential Construction Stage Sequencing Phasing", w: 1400, h: 1000, style: "diagram" },
  { file: "/images/blog/hero-blog.jpg", label: "Civil Engineering & Modern Interior Design Journal", w: 1600, h: 900, style: "hero" },
  { file: "/images/blog/kitchen-layout-guide.jpg", label: "Modular Kitchen Layout Comparison Matrix", w: 1400, h: 1000, style: "diagram" },
  { file: "/images/blog/office-fitout-checklist.jpg", label: "Commercial Office Fitout Execution Checklist", w: 1400, h: 1000, style: "diagram" },
  { file: "/images/blog/township-phasing.jpg", label: "Master Township Infrastructure Development Phasing", w: 1400, h: 1000, style: "diagram" },
  { file: "/images/blog/wardrobe-planning.jpg", label: "Custom Wardrobe Storage Proportion Matrix", w: 1400, h: 1000, style: "diagram" },
  { file: "/images/certifications/hero-certifications.jpg", label: "Structural Quality Control & ISO Compliance Standards", w: 1600, h: 900, style: "hero" },
  { file: "/images/construction/hero-commercial.jpg", label: "Commercial Shell and Core Office Construction", w: 1600, h: 900, style: "hero" },
  { file: "/images/construction/hero-construction.jpg", label: "Turnkey Civil Construction & Site Supervision", w: 1600, h: 900, style: "hero" },
  { file: "/images/construction/hero-infrastructure.jpg", label: "Township Infrastructure & Road Development", w: 1600, h: 900, style: "hero" },
  { file: "/images/construction/hero-residential.jpg", label: "Luxury Independent Villa Civil Construction", w: 1600, h: 900, style: "hero" },
  { file: "/images/contact/hero-contact.jpg", label: "Zemitech Urban Client Consultation Office Reception", w: 1600, h: 900, style: "hero" },
  { file: "/images/gallery/hero-gallery.jpg", label: "Completed Architecture & Interior Design Showcase", w: 1600, h: 900, style: "hero" },
  { file: "/images/home/division-construction.jpg", label: "Civil Construction & Structural Engineering Division", w: 1600, h: 900, style: "hero" },
  { file: "/images/home/division-interior.jpg", label: "Modular Interior Design & Custom Woodwork Division", w: 1600, h: 900, style: "hero" },
  { file: "/images/home/hero-1-construction.jpg", label: "Modern Multi-Story Residential Building Framing", w: 1600, h: 900, style: "hero" },
  { file: "/images/home/hero-2-interior.jpg", label: "Minimalist Open-Concept Living Interior Design", w: 1600, h: 900, style: "hero" },
  { file: "/images/home/hero-3-residential.jpg", label: "Luxury Villa Front Elevation Civil Construction", w: 1600, h: 900, style: "hero" },
  { file: "/images/home/hero-4-kitchen.jpg", label: "Straight-Layout Modular Kitchen with Matte Finish", w: 1600, h: 900, style: "hero" },
  { file: "/images/inquiry/hero-inquiry.jpg", label: "Technical Advisory & Architectural Consultation Meeting", w: 1600, h: 900, style: "hero" },
  { file: "/images/interior/hero-bedroom.jpg", label: "Minimalist Master Bedroom Architecture & Joinery", w: 1600, h: 900, style: "hero" },
  { file: "/images/interior/hero-interior.jpg", label: "Turnkey Luxury Residential Interior Overview", w: 1600, h: 900, style: "hero" },
  { file: "/images/interior/hero-kitchen.jpg", label: "Contemporary Modular Kitchen Design & Appliance Integration", w: 1600, h: 900, style: "hero" },
  { file: "/images/interior/hero-living-room.jpg", label: "Spacious Open Architectural Living Room Interior", w: 1600, h: 900, style: "hero" },
  { file: "/images/interior/kitchen-l-shape.jpg", label: "L-Shape Modular Kitchen with Corner Junction Detail", w: 1600, h: 900, style: "hero" },
  { file: "/images/interior/kitchen-modular.jpg", label: "Straight Run Modular Kitchen Cabinetry Execution", w: 1600, h: 900, style: "hero" },
  { file: "/images/og/zemitech-urban-og.jpg", label: "Zemitech Urban Corporate Social Share Banner", w: 1200, h: 630, style: "og" },
  { file: "/images/projects/baner-retail-1.jpg", label: "Baner Retail Showroom Interior Layout", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/baner-retail-cover.jpg", label: "Baner Boutique Showroom Glass Exterior Facade", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/green-township-1.jpg", label: "Green Township Paved Internal Access Roads", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/green-township-2.jpg", label: "Green Township Landscaped Amenity Zone", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/green-township-cover.jpg", label: "Green Township Infrastructure Aerial Development View", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/hero-projects.jpg", label: "Featured Engineering & Interior Portfolio Showcase", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/hillcrest-villa-1.jpg", label: "Hillcrest Villa Double-Height Living Room Volume", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/hillcrest-villa-2.jpg", label: "Hillcrest Villa Structural Balcony Cantilever Detail", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/hillcrest-villa-3.jpg", label: "Hillcrest Villa Matte Finish Modular Kitchen", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/hillcrest-villa-cover.jpg", label: "Hillcrest Villa Modern Exterior Front Elevation", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/kondhwa-interior-1.jpg", label: "Kondhwa Apartment Modern TV Unit Joinery", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/kondhwa-interior-2.jpg", label: "Kondhwa Master Bedroom Full-Height Wardrobe", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/kondhwa-interior-3.jpg", label: "Kondhwa Compact Parallel Kitchen Countertop", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/kondhwa-interior-cover.jpg", label: "Kondhwa 3BHK Turnkey Interior Design Overview", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/meridian-office-1.jpg", label: "Meridian Office Ergonomic Workstation Layout", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/meridian-office-2.jpg", label: "Meridian Office Acoustic Discussion Pod", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/meridian-office-cover.jpg", label: "Meridian Corporate Reception Desk & Wall Paneling", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/orchid-residency-1.jpg", label: "Orchid Residency Double-Height Living Room Clerestory", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/orchid-residency-2.jpg", label: "Orchid Residency Mezzanine Home Office", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/orchid-residency-cover.jpg", label: "Orchid Residency Villa Front Architectural View", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/viman-nagar-kitchen-1.jpg", label: "Viman Nagar Parallel Kitchen Counter Runs", w: 1600, h: 900, style: "hero" },
  { file: "/images/projects/viman-nagar-kitchen-cover.jpg", label: "Viman Nagar Modular Parallel Kitchen Layout", w: 1600, h: 900, style: "hero" },
  { file: "/images/team/ashutosh-kumar.jpg", label: "Er. Ashutosh Kumar Director Portrait", w: 1600, h: 900, style: "team" },
  { file: "/images/team/hero-team.jpg", label: "Zemitech Urban Engineering Leadership Banner", w: 1600, h: 900, style: "hero" },
  { file: "/images/team/kumar-s-chandra.jpg", label: "Dr. Kumar S. Chandra Principal Adviser Portrait", w: 1600, h: 900, style: "team" },
  { file: "/images/team/manish-k-sah.jpg", label: "Er. Manish K. Sah Director Portrait", w: 1600, h: 900, style: "team" }
];

function generateDiagramSVG(entry) {
  const w = entry.w || 1400;
  const h = entry.h || 1000;
  const label = entry.label;
  const sub = entry.sub || "ILLUSTRATIVE TECHNICAL BLUEPRINT — ZEMITECH URBAN";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${BRAND.gridLine}" stroke-width="1"/>
      </pattern>
      <pattern id="gridMajor" width="200" height="200" patternUnits="userSpaceOnUse">
        <rect width="200" height="200" fill="url(#grid)"/>
        <path d="M 200 0 L 0 0 0 200" fill="none" stroke="${BRAND.axisLine}" stroke-width="1.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="${BRAND.bgLight}"/>
    <rect width="100%" height="100%" fill="url(#gridMajor)"/>
    <rect x="30" y="30" width="${w - 60}" height="${h - 60}" fill="none" stroke="${BRAND.navyMid}" stroke-width="2" stroke-dasharray="10 6" opacity="0.6"/>
    <g stroke="${BRAND.oliveGreen}" stroke-width="2">
      <line x1="15" y1="30" x2="45" y2="30"/>
      <line x1="30" y1="15" x2="30" y2="45"/>
      <line x1="${w - 45}" y1="30" x2="${w - 15}" y2="30"/>
      <line x1="${w - 30}" y1="15" x2="${w - 30}" y2="45"/>
      <line x1="15" y1="${h - 30}" x2="45" y2="${h - 30}"/>
      <line x1="30" y1="${h - 45}" x2="30" y2="${h - 15}"/>
      <line x1="${w - 45}" y1="${h - 30}" x2="${w - 15}" y2="${h - 30}"/>
      <line x1="${w - 30}" y1="${h - 45}" x2="${w - 30}" y2="${h - 15}"/>
    </g>
    <g stroke="${BRAND.navyMid}" stroke-width="2" fill="none" opacity="0.85">
      <rect x="120" y="140" width="${w - 240}" height="${h - 340}" stroke-width="3.5"/>
      <line x1="${w * 0.38}" y1="140" x2="${w * 0.38}" y2="${h - 200}"/>
      <line x1="${w * 0.68}" y1="140" x2="${w * 0.68}" y2="${h - 200}"/>
      <line x1="120" y1="${h * 0.48}" x2="${w - 120}" y2="${h * 0.48}"/>
      <path d="M ${w * 0.38} 240 A 60 60 0 0 1 ${w * 0.38 + 60} 300" stroke-dasharray="4 4"/>
      <line x1="${w * 0.38}" y1="240" x2="${w * 0.38}" y2="300"/>
      <path d="M ${w * 0.68} 400 A 60 60 0 0 1 ${w * 0.68 + 60} 460" stroke-dasharray="4 4"/>
      <line x1="${w * 0.68}" y1="400" x2="${w * 0.68}" y2="460"/>
    </g>
    <g stroke="${BRAND.oliveGreen}" stroke-width="4">
      <line x1="120" y1="${h * 0.48}" x2="${w * 0.38}" y2="${h * 0.48}"/>
      <rect x="${w * 0.42}" y="${h * 0.22}" width="140" height="90" fill="${BRAND.oliveGreen}" fill-opacity="0.12" stroke-width="2"/>
      <circle cx="${w * 0.49}" cy="${h * 0.265}" r="8" fill="${BRAND.oliveGreen}"/>
    </g>
    <g stroke="${BRAND.charcoal}" stroke-width="1" opacity="0.6">
      <line x1="120" y1="110" x2="${w - 120}" y2="110"/>
      <line x1="120" y1="102" x2="120" y2="118"/>
      <line x1="${w - 120}" y1="102" x2="${w - 120}" y2="118"/>
      <line x1="80" y1="140" x2="80" y2="${h - 200}"/>
      <line x1="72" y1="140" x2="88" y2="140"/>
      <line x1="72" y1="${h - 200}" x2="88" y2="${h - 200}"/>
    </g>
    <rect x="120" y="${h - 160}" width="${w - 240}" height="100" fill="${BRAND.offWhite}" stroke="${BRAND.navyMid}" stroke-width="1.5"/>
    <text x="150" y="${h - 118}" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="${BRAND.navyDark}">${escapeXml(label.toUpperCase())}</text>
    <text x="150" y="${h - 85}" font-family="Arial, sans-serif" font-size="14" font-weight="600" letter-spacing="1.5" fill="${BRAND.navyMid}">${escapeXml(sub.toUpperCase())}</text>
    <rect x="${w - 320}" y="${h - 160}" width="200" height="100" fill="none" stroke="${BRAND.navyMid}" stroke-width="1"/>
    <text x="${w - 220}" y="${h - 118}" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="${BRAND.oliveGreen}" text-anchor="middle">APPROVED SPEC</text>
    <text x="${w - 220}" y="${h - 90}" font-family="Arial, sans-serif" font-size="12" font-weight="500" fill="${BRAND.charcoal}" text-anchor="middle">SCALE 1:50 | REV 04</text>
  </svg>`;
}

function generateSwatchSVG(entry) {
  const w = 500;
  const h = 500;
  const label = entry.label;
  const hex = entry.hex || "#45505F";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <radialGradient id="lighting" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25"/>
        <stop offset="50%" stop-color="#ffffff" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
      </radialGradient>
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="${hex}"/>
    <rect width="100%" height="100%" filter="url(#noise)" opacity="0.6"/>
    <rect width="100%" height="100%" fill="url(#lighting)"/>
    <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/>
    <rect x="0" y="${h - 70}" width="100%" height="70" fill="${BRAND.navyDark}" opacity="0.88"/>
    <text x="50%" y="${h - 28}" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="${BRAND.offWhite}" text-anchor="middle">${escapeXml(label.toUpperCase())}</text>
  </svg>`;
}

function generateOgSVG(entry) {
  const w = 1200;
  const h = 630;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${BRAND.navyDark}"/>
        <stop offset="100%" stop-color="#051021"/>
      </linearGradient>
    </defs>
    <rect width="${w * 0.55}" height="${h}" fill="${BRAND.bgLight}"/>
    <rect x="40" y="40" width="${w * 0.55 - 80}" height="${h - 80}" fill="none" stroke="${BRAND.oliveGreen}" stroke-width="3"/>
    <rect x="${w * 0.55}" y="0" width="${w * 0.45}" height="${h}" fill="url(#bgGrad)"/>
    <line x1="${w * 0.55}" y1="0" x2="${w * 0.55}" y2="${h}" stroke="${BRAND.oliveGreen}" stroke-width="4"/>
    <rect x="${w * 0.55 + 50}" y="120" width="8" height="60" fill="${BRAND.oliveGreen}"/>
  </svg>`;
}

function generatePhotoSVG(entry) {
  const w = entry.w || 1600;
  const h = entry.h || 900;
  const label = entry.label || "Zemitech Urban Architectural Photography";
  const isConstruction = label.toLowerCase().includes("construction") || label.toLowerCase().includes("site") || label.toLowerCase().includes("road") || label.toLowerCase().includes("civil") || label.toLowerCase().includes("structure") || label.toLowerCase().includes("building");
  const isInterior = label.toLowerCase().includes("kitchen") || label.toLowerCase().includes("living") || label.toLowerCase().includes("bedroom") || label.toLowerCase().includes("interior") || label.toLowerCase().includes("wardrobe") || label.toLowerCase().includes("office") || label.toLowerCase().includes("studio");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FBFCFE"/>
        <stop offset="100%" stop-color="${BRAND.bgLight}"/>
      </linearGradient>
      <linearGradient id="sunlight" x1="0" y1="0" x2="1" y2="0.8">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/>
      </linearGradient>
      <linearGradient id="navyPanel" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${BRAND.navyDark}"/>
        <stop offset="100%" stop-color="${BRAND.navyMid}"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#wallGrad)"/>
    <rect width="100%" height="100%" fill="url(#sunlight)"/>
    ${isInterior ? `
      <g stroke="${BRAND.gridLine}" stroke-width="1.5" opacity="0.6">
        <line x1="${w * 0.2}" y1="0" x2="${w * 0.2}" y2="${h}"/>
        <line x1="${w * 0.4}" y1="0" x2="${w * 0.4}" y2="${h}"/>
        <line x1="${w * 0.6}" y1="0" x2="${w * 0.6}" y2="${h}"/>
        <line x1="${w * 0.8}" y1="0" x2="${w * 0.8}" y2="${h}"/>
        <line x1="0" y1="${h * 0.35}" x2="${w}" y2="${h * 0.35}"/>
        <line x1="0" y1="${h * 0.7}" x2="${w}" y2="${h * 0.7}"/>
      </g>
      <rect x="${w * 0.15}" y="${h * 0.25}" width="${w * 0.35}" height="${h * 0.75}" fill="url(#navyPanel)"/>
      <rect x="${w * 0.12}" y="${h * 0.58}" width="${w * 0.76}" height="35" fill="#FBFCFE" stroke="${BRAND.gridLine}" stroke-width="1"/>
      <rect x="${w * 0.15}" y="${h * 0.25}" width="${w * 0.35}" height="${h * 0.75}" fill="none" stroke="${BRAND.charcoal}" stroke-width="2"/>
      <rect x="${w * 0.72}" y="${h * 0.1}" width="${w * 0.22}" height="${h * 0.75}" fill="#ffffff" fill-opacity="0.7" stroke="${BRAND.charcoal}" stroke-width="4"/>
      <line x1="${w * 0.83}" y1="${h * 0.1}" x2="${w * 0.83}" y2="${h * 0.85}" stroke="${BRAND.charcoal}" stroke-width="2"/>
      <g>
        <path d="M ${w * 0.68} ${h * 0.58} L ${w * 0.70} ${h * 0.58} L ${w * 0.695} ${h * 0.52} L ${w * 0.685} ${h * 0.52} Z" fill="${BRAND.charcoal}"/>
        <circle cx="${w * 0.69}" cy="${h * 0.48}" r="18" fill="${BRAND.oliveGreen}" opacity="0.9"/>
        <circle cx="${w * 0.675}" cy="${h * 0.46}" r="12" fill="${BRAND.oliveGreen}"/>
      </g>
    ` : isConstruction ? `
      <rect width="100%" height="${h * 0.45}" fill="#F2F6FC"/>
      <g fill="${BRAND.bgLight}" stroke="${BRAND.charcoal}" stroke-width="2">
        <rect x="${w * 0.1}" y="${h * 0.2}" width="70" height="${h * 0.8}"/>
        <rect x="${w * 0.3}" y="${h * 0.2}" width="70" height="${h * 0.8}"/>
        <rect x="${w * 0.5}" y="${h * 0.2}" width="70" height="${h * 0.8}"/>
        <rect x="${w * 0.7}" y="${h * 0.2}" width="70" height="${h * 0.8}"/>
        <rect x="${w * 0.08}" y="${h * 0.3}" width="${w * 0.75}" height="40" fill="${BRAND.navyDark}" stroke-width="1"/>
        <rect x="${w * 0.08}" y="${h * 0.55}" width="${w * 0.75}" height="40" fill="${BRAND.navyDark}" stroke-width="1"/>
      </g>
      <g stroke="${BRAND.navyMid}" stroke-width="1" opacity="0.4">
        <line x1="${w * 0.08}" y1="${h * 0.2}" x2="${w * 0.8}" y2="${h * 0.75}"/>
        <line x1="${w * 0.08}" y1="${h * 0.75}" x2="${w * 0.8}" y2="${h * 0.2}"/>
      </g>
      <rect x="${w * 0.33}" y="${h * 0.26}" width="15" height="12" fill="${BRAND.oliveGreen}"/>
    ` : `
      <rect x="${w * 0.1}" y="${h * 0.15}" width="${w * 0.8}" height="${h * 0.7}" fill="none" stroke="${BRAND.navyMid}" stroke-width="3"/>
      <rect x="${w * 0.15}" y="${h * 0.2}" width="${w * 0.4}" height="${h * 0.6}" fill="url(#navyPanel)"/>
      <circle cx="${w * 0.75}" cy="${h * 0.4}" r="40" fill="${BRAND.oliveGreen}" opacity="0.8"/>
    `}
    <rect y="${h - 40}" width="100%" height="40" fill="rgba(10, 31, 61, 0.15)"/>
    <rect x="20" y="20" width="${w - 40}" height="${h - 40}" fill="none" stroke="${BRAND.navyMid}" stroke-width="1" opacity="0.3"/>
  </svg>`;
}

function escapeXml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function processImage(entry) {
  const relPath = entry.file;
  const outPath = join(ROOT, "public", relPath);
  await mkdir(dirname(outPath), { recursive: true });

  const w = entry.w || 1600;
  const h = entry.h || 900;

  if (AI_OVERRIDES[relPath] && (await exists(AI_OVERRIDES[relPath]))) {
    await sharp(AI_OVERRIDES[relPath])
      .resize(w, h, { fit: "cover", position: "center" })
      .jpeg({ quality: 85 })
      .toFile(outPath);
    return;
  }

  let svg;
  if (entry.style === "diagram") svg = generateDiagramSVG(entry);
  else if (entry.style === "swatch") svg = generateSwatchSVG(entry);
  else if (entry.style === "og") svg = generateOgSVG(entry);
  else svg = generatePhotoSVG(entry);

  await sharp(Buffer.from(svg))
    .resize(w, h, { fit: "cover", position: "center" })
    .jpeg({ quality: 85 })
    .toFile(outPath);
}

export async function runAll() {
  const manifestMap = new Map();
  MANIFEST.forEach(m => manifestMap.set(m.file, m));
  UNMANIFESTED.forEach(u => {
    if (!manifestMap.has(u.file)) manifestMap.set(u.file, u);
  });

  const allEntries = Array.from(manifestMap.values());
  console.log(`Processing total ${allEntries.length} images...`);

  let count = 0;
  for (const entry of allEntries) {
    await processImage(entry);
    count++;
  }
  console.log(`Successfully generated and saved ${count} image assets.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await runAll();
}
