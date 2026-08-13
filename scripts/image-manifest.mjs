// Manifest of every placeholder image referenced by lib/data/*.ts + app pages.
// Grouped by page/section to mirror the content-depth pass in AGENTS.md.
// Run `node scripts/generate-images.mjs` after adding entries here.

const SUB = "Zemitech Urban — Placeholder Image";

function hero(file, label, category, opts = {}) {
  return { file, label, category, sub: SUB, w: 1600, h: 900, style: "hero", ...opts };
}
function diagram(file, label, sub) {
  return { file, label, sub, w: 1400, h: 1000, style: "diagram" };
}
function swatch(file, label, hex) {
  return { file, label, hex, w: 500, h: 500, style: "swatch" };
}

export const MANIFEST = [
  // ---------- Home ----------
  hero("/images/home/hero-5-commercial.jpg", "Commercial Fit-out", "Commercial"),
  hero("/images/home/hero-6-infrastructure.jpg", "Township Infrastructure", "Infrastructure"),
  hero("/images/home/hero-7-living-room.jpg", "Living Room Design", "Interior Design"),
  hero("/images/home/how-we-work-1-consult.jpg", "Consultation & Site Visit", "How We Work"),
  hero("/images/home/how-we-work-2-design.jpg", "Design & 3D Approval", "How We Work"),
  hero("/images/home/how-we-work-3-build.jpg", "Build & Execution", "How We Work"),
  hero("/images/home/how-we-work-4-handover.jpg", "Handover & Walkthrough", "How We Work"),
  hero("/images/home/video-thumbnail-walkthrough.jpg", "Site Walkthrough Video", "Featured Video"),
  diagram("/images/home/areas-served-map.jpg", "Pune Service Area Map", "Narhe · Kondhwa · Wagholi · Hinjewadi · Baner · Viman Nagar · Pirangut"),

  // ---------- About ----------
  hero("/images/about/timeline-2019-founding.jpg", "Zemitech Urban Founded, 2019", "Company Timeline"),
  hero("/images/about/timeline-2021-first-major-project.jpg", "First Major Township Contract", "Company Timeline"),
  hero("/images/about/timeline-2022-division-split.jpg", "Interior Design Division Launches", "Company Timeline"),
  hero("/images/about/timeline-2024-scale.jpg", "240+ Projects Milestone", "Company Timeline"),
  hero("/images/about/office-exterior.jpg", "Narhe Office Exterior", "About Us"),
  hero("/images/about/team-site-review.jpg", "Site Review Meeting", "About Us"),
  hero("/images/about/design-studio.jpg", "Interior Design Studio", "About Us"),
  hero("/images/about/site-walkthrough.jpg", "Client Site Walkthrough", "About Us"),

  // ---------- Construction overview ----------
  hero("/images/construction/site-progress-foundation.jpg", "Foundation Stage Progress", "Construction"),
  hero("/images/construction/site-progress-structure.jpg", "RCC Structural Stage", "Construction"),
  hero("/images/construction/material-closeup-steel.jpg", "TMT Steel Reinforcement Close-up", "Materials"),
  hero("/images/construction/material-closeup-concrete.jpg", "Concrete Pour Close-up", "Materials"),
  hero("/images/construction/team-on-site.jpg", "Site Supervision Team", "Construction"),
  hero("/images/construction/completed-work-facade.jpg", "Completed Building Facade", "Construction"),

  // ---------- Construction / Residential ----------
  hero("/images/construction/residential-site-progress-1.jpg", "Residential Footing & Columns", "Residential"),
  hero("/images/construction/residential-site-progress-2.jpg", "Residential Brickwork Stage", "Residential"),
  hero("/images/construction/residential-material-tiles.jpg", "Flooring Tile Selection", "Residential"),
  hero("/images/construction/residential-completed-exterior.jpg", "Completed Villa Exterior", "Residential"),
  hero("/images/construction/residential-completed-interior-shell.jpg", "Move-in Ready Interior Shell", "Residential"),
  hero("/images/construction/residential-team-inspection.jpg", "Stage Quality Inspection", "Residential"),
  diagram("/images/construction/residential-floorplan-vastu-diagram.jpg", "Vastu-Aligned Floor Plan", "Illustrative Layout — Not To Scale"),

  // ---------- Construction / Commercial ----------
  hero("/images/construction/commercial-site-progress-1.jpg", "Commercial Shell & Core", "Commercial"),
  hero("/images/construction/commercial-site-progress-2.jpg", "Partition & Ceiling Work", "Commercial"),
  hero("/images/construction/commercial-material-glazing.jpg", "Facade Glazing Close-up", "Commercial"),
  hero("/images/construction/commercial-completed-office.jpg", "Completed Office Floor", "Commercial"),
  hero("/images/construction/commercial-team-mep.jpg", "MEP Vendor Coordination", "Commercial"),
  hero("/images/construction/commercial-fitout-detail.jpg", "Reception Fit-out Detail", "Commercial"),
  diagram("/images/construction/commercial-mep-sequencing-diagram.jpg", "MEP Sequencing Diagram", "Structural → Rough-in → Ceiling → Fixtures"),

  // ---------- Construction / Infrastructure ----------
  hero("/images/construction/infrastructure-road-work.jpg", "Internal Road Construction", "Infrastructure"),
  hero("/images/construction/infrastructure-drainage-work.jpg", "Storm-water Drainage Line", "Infrastructure"),
  hero("/images/construction/infrastructure-boundary-wall.jpg", "Boundary Wall Construction", "Infrastructure"),
  hero("/images/construction/infrastructure-amenity-block.jpg", "Clubhouse Amenity Block", "Infrastructure"),
  hero("/images/construction/infrastructure-team-survey.jpg", "Site Survey & Grading", "Infrastructure"),
  hero("/images/construction/infrastructure-aerial-progress.jpg", "Aerial Township Progress View", "Infrastructure"),
  diagram("/images/construction/infrastructure-phasing-diagram.jpg", "Zone Phasing Diagram", "Phase 1 → Phase 2 → Phase 3"),

  // ---------- Interior Design overview ----------
  hero("/images/interior/design-process-moodboard.jpg", "Material Mood Board", "Interior Design"),
  hero("/images/interior/design-process-3d-render.jpg", "3D Design Render", "Interior Design"),
  hero("/images/interior/material-plywood-closeup.jpg", "Plywood Carcass Close-up", "Materials"),
  hero("/images/interior/material-hardware-closeup.jpg", "Soft-close Hardware Close-up", "Materials"),
  hero("/images/interior/factory-production.jpg", "Factory Modular Production", "Interior Design"),
  hero("/images/interior/site-installation.jpg", "On-site Carpentry Installation", "Interior Design"),
  hero("/images/interior/style-contemporary.jpg", "Contemporary Style Interior", "Design Styles"),
  hero("/images/interior/style-minimalist.jpg", "Minimalist Style Interior", "Design Styles"),
  hero("/images/interior/style-classic.jpg", "Classic Style Interior", "Design Styles"),
  hero("/images/interior/style-industrial.jpg", "Industrial Style Interior", "Design Styles"),

  // ---------- Interior / Living Room ----------
  hero("/images/interior/living-room-tv-unit-closeup.jpg", "TV Unit Joinery Close-up", "Living Room"),
  hero("/images/interior/living-room-lighting-detail.jpg", "Layered Ceiling Lighting Detail", "Living Room"),
  hero("/images/interior/living-room-seating-layout.jpg", "Seating & Traffic-flow Layout", "Living Room"),
  hero("/images/interior/living-room-storage-detail.jpg", "Console Storage Detail", "Living Room"),
  hero("/images/interior/living-room-completed-1.jpg", "Completed Living Room — Wide Angle", "Living Room"),
  hero("/images/interior/living-room-completed-2.jpg", "Completed Living Room — Seating Corner", "Living Room"),

  // ---------- Interior / Bedroom ----------
  hero("/images/interior/bedroom-wardrobe-interior.jpg", "Wardrobe Interior Organization", "Bedroom"),
  hero("/images/interior/bedroom-study-unit.jpg", "Built-in Study Unit", "Bedroom"),
  hero("/images/interior/bedroom-lighting-detail.jpg", "Bedside Lighting Detail", "Bedroom"),
  hero("/images/interior/bedroom-kids-room.jpg", "Modular Kids' Room Storage", "Bedroom"),
  hero("/images/interior/bedroom-completed-1.jpg", "Completed Master Bedroom", "Bedroom"),
  hero("/images/interior/bedroom-completed-2.jpg", "Completed Guest Bedroom", "Bedroom"),

  // ---------- Kitchen overview: Island + U-Shape sub-sections ----------
  hero("/images/interior/kitchen-island.jpg", "Island Kitchen Layout", "Kitchen Design"),
  hero("/images/interior/kitchen-u-shape.jpg", "U-Shape Kitchen Layout", "Kitchen Design"),

  // ---------- Kitchen / Modular ----------
  hero("/images/interior/kitchen-modular-countertop-texture.jpg", "Countertop Texture Close-up", "Modular Kitchen"),
  hero("/images/interior/kitchen-modular-hardware-closeup.jpg", "Soft-close Channel Close-up", "Modular Kitchen"),
  hero("/images/interior/kitchen-modular-storage-detail.jpg", "Bottle Pull-out Storage Detail", "Modular Kitchen"),
  hero("/images/interior/kitchen-modular-angle-1.jpg", "Modular Kitchen — Straight Run", "Modular Kitchen"),
  hero("/images/interior/kitchen-modular-angle-2.jpg", "Modular Kitchen — Tall Unit Bank", "Modular Kitchen"),
  hero("/images/interior/kitchen-modular-angle-3.jpg", "Modular Kitchen — Hob & Chimney", "Modular Kitchen"),

  // ---------- Kitchen / L-Shape ----------
  hero("/images/interior/kitchen-lshape-corner-storage.jpg", "Magic Corner Storage Detail", "L-Shape Kitchen"),
  hero("/images/interior/kitchen-lshape-hardware-closeup.jpg", "Drawer Hardware Close-up", "L-Shape Kitchen"),
  hero("/images/interior/kitchen-lshape-countertop-texture.jpg", "Wraparound Countertop Texture", "L-Shape Kitchen"),
  hero("/images/interior/kitchen-lshape-angle-1.jpg", "L-Shape Kitchen — Wide Angle", "L-Shape Kitchen"),
  hero("/images/interior/kitchen-lshape-angle-2.jpg", "L-Shape Kitchen — Corner Junction", "L-Shape Kitchen"),
  hero("/images/interior/kitchen-lshape-angle-3.jpg", "L-Shape Kitchen — Breakfast Counter", "L-Shape Kitchen"),

  // ---------- Kitchen material & hardware swatches (shared across kitchen pages) ----------
  swatch("/images/interior/swatch-laminate.jpg", "Laminate Finish", "#b98a5e"),
  swatch("/images/interior/swatch-acrylic.jpg", "Acrylic Finish", "#3878cf"),
  swatch("/images/interior/swatch-pu.jpg", "PU Finish", "#5c9427"),
  swatch("/images/interior/swatch-granite.jpg", "Granite Countertop", "#45505f"),
  swatch("/images/interior/swatch-quartz.jpg", "Quartz Countertop", "#c7d2e0"),
  swatch("/images/interior/swatch-sintered-stone.jpg", "Sintered Stone Countertop", "#12181f"),

  // ---------- Team ----------
  hero("/images/team/manish-k-sah-at-work.jpg", "Er. Manish K. Sah on Site", "Team"),
  hero("/images/team/ashutosh-kumar-at-work.jpg", "Er. Ashutosh Kumar Reviewing Drawings", "Team"),
  hero("/images/team/kumar-s-chandra-at-work.jpg", "Dr. Kumar S. Chandra in Client Meeting", "Team"),

  // ---------- Certifications ----------
  hero("/images/certifications/quality-check-structural.jpg", "Structural Quality Check", "Quality Process"),
  hero("/images/certifications/quality-check-electrical.jpg", "Electrical Quality Check", "Quality Process"),
  hero("/images/certifications/quality-check-interior-finish.jpg", "Interior Finish Quality Check", "Quality Process"),
  hero("/images/certifications/site-safety-ppe.jpg", "Site Safety & PPE Compliance", "Quality Process"),
  hero("/images/certifications/quality-check-interior-installation.jpg", "Interior Installation Quality Check", "Quality Process"),

  // ---------- Blog: inline images for existing posts ----------
  hero("/images/blog/kitchen-layout-guide-straight.jpg", "Straight Kitchen Layout Example", "Blog"),
  hero("/images/blog/kitchen-layout-guide-parallel.jpg", "Parallel Kitchen Layout Example", "Blog"),
  hero("/images/blog/construction-timeline-foundation-stage.jpg", "Foundation Stage Timeline", "Blog"),
  hero("/images/blog/construction-timeline-finishing-stage.jpg", "Finishing Stage Timeline", "Blog"),
  hero("/images/blog/office-fitout-mep-install.jpg", "MEP Installation in Progress", "Blog"),
  hero("/images/blog/office-fitout-final-handover.jpg", "Office Fit-out Final Handover", "Blog"),
  hero("/images/blog/wardrobe-planning-hanging-vs-folded.jpg", "Hanging vs Folded Storage Ratio", "Blog"),
  hero("/images/blog/wardrobe-planning-kids-room.jpg", "Adjustable Kids' Wardrobe Shelving", "Blog"),
  diagram("/images/blog/township-phasing-zone-map.jpg", "Township Zone Phasing Map", "Illustrative — Not To Scale"),
  hero("/images/blog/township-phasing-road-work.jpg", "Phase 1 Road Construction", "Blog"),
  diagram("/images/blog/boq-explainer-sample-lineitems.jpg", "Sample BOQ Line Items", "Illustrative Extract"),
  hero("/images/blog/boq-explainer-site-review.jpg", "Reviewing BOQ Against Site Progress", "Blog"),

  // ---------- Blog: new posts ----------
  hero("/images/blog/vastu-tips-cover.jpg", "Vastu Tips for Residential Construction", "Construction"),
  hero("/images/blog/vastu-tips-entrance-orientation.jpg", "Main Entrance Orientation", "Blog"),
  diagram("/images/blog/vastu-tips-room-placement-diagram.jpg", "Vastu Room Placement Diagram", "Illustrative — Not To Scale"),
  hero("/images/blog/budget-interior-cover.jpg", "Budgeting a Full Home Interior", "Interior Design"),
  diagram("/images/blog/budget-interior-cost-breakdown-diagram.jpg", "Interior Cost Break-up Diagram", "Illustrative Proportions"),
  hero("/images/blog/budget-interior-material-selection.jpg", "Material Selection Meeting", "Blog"),
  hero("/images/blog/contractor-red-flags-cover.jpg", "Signs Your Contractor Is Cutting Corners", "Construction"),
  hero("/images/blog/contractor-red-flags-site-inspection.jpg", "Independent Site Inspection", "Blog"),
  hero("/images/blog/contractor-red-flags-material-check.jpg", "Verifying Material Grade On-site", "Blog"),

  // ---------- Contact / Inquiry ----------
  hero("/images/contact/office-exterior.jpg", "Narhe Office Exterior", "Contact"),
  hero("/images/inquiry/consultation-call.jpg", "Free Consultation Call", "Inquiry"),

  // ---------- Projects: new project covers ----------
  hero("/images/projects/wagholi-twin-villas-cover.jpg", "Wagholi Twin Villas", "Residential"),
  hero("/images/projects/pirangut-farmhouse-retreat-cover.jpg", "Pirangut Farmhouse Retreat", "Residential"),
  hero("/images/projects/baner-boutique-showroom-fitout-cover.jpg", "Baner Boutique Showroom Fit-out", "Commercial"),
  hero("/images/projects/hinjewadi-coworking-space-cover.jpg", "Hinjewadi Co-working Space", "Commercial"),
  hero("/images/projects/narhe-layout-roads-drainage-cover.jpg", "Narhe Layout Roads & Drainage", "Infrastructure"),
  hero("/images/projects/baner-2bhk-turnkey-interior-cover.jpg", "Baner 2BHK Turnkey Interior", "Interior"),
  hero("/images/projects/hinjewadi-studio-interior-cover.jpg", "Hinjewadi Studio Apartment Interior", "Interior"),
  hero("/images/projects/wagholi-master-bedroom-makeover-cover.jpg", "Wagholi Master Bedroom Makeover", "Interior"),

  // ---------- Projects: shared gallery image pool (reused across galleries with unique alt text per use) ----------
  ...Array.from({ length: 12 }, (_, i) =>
    hero(`/images/projects/pool/residential-${String(i + 1).padStart(2, "0")}.jpg`, `Residential Site Photo ${i + 1}`, "Residential")
  ),
  ...Array.from({ length: 8 }, (_, i) =>
    hero(`/images/projects/pool/commercial-${String(i + 1).padStart(2, "0")}.jpg`, `Commercial Site Photo ${i + 1}`, "Commercial")
  ),
  ...Array.from({ length: 8 }, (_, i) =>
    hero(`/images/projects/pool/infrastructure-${String(i + 1).padStart(2, "0")}.jpg`, `Infrastructure Site Photo ${i + 1}`, "Infrastructure")
  ),
  ...Array.from({ length: 12 }, (_, i) =>
    hero(`/images/projects/pool/interior-${String(i + 1).padStart(2, "0")}.jpg`, `Interior Site Photo ${i + 1}`, "Interior")
  ),
];
