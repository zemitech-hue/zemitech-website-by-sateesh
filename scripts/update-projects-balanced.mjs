import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'lib/data/projects.ts');
let content = fs.readFileSync(file, 'utf8');

// Additional projects to balance category counts to exact multiples of 3
const additionalProjects = `
  {
    slug: "kondhwa-duplex-residence",
    title: "Kondhwa Duplex Residence",
    category: "residential",
    location: "Kondhwa, Pune",
    year: "2025",
    area: "2,850 sq. ft.",
    summary: "A 4BHK duplex residence with open-plan living and custom joinery throughout.",
    description: [
      "Built for an extended family, this 4BHK duplex residence combines spacious living areas with quiet private bedrooms across two levels.",
      "Custom storage joinery was integrated into structural niches during the build to maximize usable floor area."
    ],
    scope: ["Turnkey construction", "Structural engineering", "Interior joinery"],
    challenge: "Maximizing usable floor space in a compact suburban footprint while keeping all living zones well lit.",
    solution: "We integrated storage joinery directly into wall niches during structural framing, saving 70+ sq. ft. of floor space.",
    coverImage: "/images/projects/pool/residential-04.jpg",
    gallery: [
      "/images/projects/pool/residential-04.jpg",
      "/images/projects/pool/residential-05.jpg",
      "/images/projects/pool/residential-06.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/residential-04.jpg", alt: "Kondhwa Duplex duplex living room" },
      { src: "/images/projects/pool/residential-05.jpg", alt: "Kondhwa Duplex master bedroom" },
      { src: "/images/projects/pool/residential-06.jpg", alt: "Kondhwa Duplex exterior front" }
    ]
  },
  {
    slug: "baner-luxury-penthouse",
    title: "Baner Penthouse Residence",
    category: "residential",
    location: "Baner, Pune",
    year: "2024",
    area: "3,600 sq. ft.",
    summary: "A top-floor penthouse build with cantilevered balcony and acoustic glass walling.",
    description: [
      "Designed with floor-to-ceiling glass paneling and a cantilevered balcony overlooking the Baner hills.",
      "Acoustic glazing was specified throughout to insulate the living areas from street ambient noise."
    ],
    scope: ["Penthouse construction", "Glazing & insulation", "Terrace waterproofing"],
    challenge: "Managing wind load and acoustic insulation for an expansive top-floor glass facade.",
    solution: "We specified multi-layer acoustic laminated glazing with reinforced aluminum mullions.",
    coverImage: "/images/projects/pool/residential-07.jpg",
    gallery: [
      "/images/projects/pool/residential-07.jpg",
      "/images/projects/pool/residential-08.jpg",
      "/images/projects/pool/residential-09.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/residential-07.jpg", alt: "Baner Penthouse living room glass wall" },
      { src: "/images/projects/pool/residential-08.jpg", alt: "Baner Penthouse cantilevered balcony" },
      { src: "/images/projects/pool/residential-09.jpg", alt: "Baner Penthouse terrace garden" }
    ]
  },
  {
    slug: "kondhwa-commercial-arcade",
    title: "Kondhwa Retail & Commercial Arcade",
    category: "commercial",
    location: "Kondhwa, Pune",
    year: "2024",
    area: "14,500 sq. ft.",
    summary: "A multi-tenant retail and office arcade with structured basement parking.",
    description: [
      "A 3-story commercial complex accommodating retail shops on the ground level and office suites on upper floors.",
      "Designed for high footfall durability with polished granite common corridors and automated fire systems."
    ],
    scope: ["Shell & core construction", "MEP infrastructure", "Basement parking"],
    challenge: "Sequencing retail shopfront fit-outs while heavy upper-floor office work was underway.",
    solution: "We separated service access shafts and completed ground floor retail access corridors first.",
    coverImage: "/images/projects/pool/commercial-04.jpg",
    gallery: [
      "/images/projects/pool/commercial-04.jpg",
      "/images/projects/pool/commercial-05.jpg",
      "/images/projects/pool/commercial-06.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/commercial-04.jpg", alt: "Kondhwa Commercial Arcade facade" },
      { src: "/images/projects/pool/commercial-05.jpg", alt: "Kondhwa Commercial Arcade retail shopfront" },
      { src: "/images/projects/pool/commercial-06.jpg", alt: "Kondhwa Commercial Arcade office corridor" }
    ]
  },
  {
    slug: "narhe-tech-park-fitout",
    title: "Narhe Innovation Hub",
    category: "commercial",
    location: "Narhe, Pune",
    year: "2025",
    area: "11,000 sq. ft.",
    summary: "A 140-seat tech hub with acoustic discussion pods and centralized server room.",
    description: [
      "Turnkey office fit-out including modular workstation bays, acoustic conference pods, and dedicated server room.",
      "Delivered within a compressed 60-day schedule ahead of tenant move-in date."
    ],
    scope: ["Commercial fit-out", "Server room HVAC", "Acoustic wall paneling"],
    challenge: "Fitting a high-density IT layout into a non-standard floor shape without bottlenecking circulation.",
    solution: "We arranged workstation bays radially around a central circulation corridor with perimeter meeting pods.",
    coverImage: "/images/projects/pool/commercial-07.jpg",
    gallery: [
      "/images/projects/pool/commercial-07.jpg",
      "/images/projects/pool/commercial-08.jpg",
      "/images/projects/pool/commercial-01.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/commercial-07.jpg", alt: "Narhe Innovation Hub open workstation bay" },
      { src: "/images/projects/pool/commercial-08.jpg", alt: "Narhe Innovation Hub acoustic pod" },
      { src: "/images/projects/pool/commercial-01.jpg", alt: "Narhe Innovation Hub conference room" }
    ]
  },
  {
    slug: "wagholi-access-network",
    title: "Wagholi Township Arterial Access",
    category: "infrastructure",
    location: "Wagholi, Pune",
    year: "2025",
    area: "2.4 km road corridor",
    summary: "A 4-lane paved access road network with integrated stormwater drainage culverts.",
    description: [
      "Arterial township road infrastructure connecting residential sectors to the main highway corridor.",
      "Built with heavy-duty interlocking concrete paver shoulders and underground storm lines."
    ],
    scope: ["Road grading & paving", "Stormwater drainage culverts", "Street lighting poles"],
    challenge: "Maintaining residential access while excavating deep storm drainage lines during monsoon season.",
    solution: "We phased excavation in 300m segments with temporary bypass lanes.",
    coverImage: "/images/projects/pool/infrastructure-05.jpg",
    gallery: [
      "/images/projects/pool/infrastructure-05.jpg",
      "/images/projects/pool/infrastructure-06.jpg",
      "/images/projects/pool/infrastructure-07.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/infrastructure-05.jpg", alt: "Wagholi Access Network asphalt road" },
      { src: "/images/projects/pool/infrastructure-06.jpg", alt: "Wagholi Access Network drainage line" },
      { src: "/images/projects/pool/infrastructure-07.jpg", alt: "Wagholi Access Network street light installation" }
    ]
  },
  {
    slug: "narhe-duplex-interior-fitout",
    title: "Narhe Duplex Turnkey Interior",
    category: "interior",
    location: "Narhe, Pune",
    year: "2025",
    area: "2,200 sq. ft.",
    summary: "A full turnkey interior design for a modern duplex apartment, featuring custom navy cabinetry.",
    description: [
      "Complete interior design including living room TV unit joinery, modular kitchen, and built-in bedroom wardrobes.",
      "Executed in Zemitech Urban's signature minimalist palette of deep navy, off-white walls, and soft charcoal accents."
    ],
    scope: ["Turnkey interior design", "Modular kitchen", "Living & bedroom joinery"],
    challenge: "Unifying interior design aesthetics across two floors while giving each bedroom a distinct character.",
    solution: "We maintained a consistent navy-and-white base palette while varying bedroom accent finishes.",
    coverImage: "/images/projects/pool/interior-07.jpg",
    gallery: [
      "/images/projects/pool/interior-07.jpg",
      "/images/projects/pool/interior-08.jpg",
      "/images/projects/pool/interior-09.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/interior-07.jpg", alt: "Narhe Duplex living room TV unit" },
      { src: "/images/projects/pool/interior-08.jpg", alt: "Narhe Duplex modular kitchen" },
      { src: "/images/projects/pool/interior-09.jpg", alt: "Narhe Duplex bedroom wardrobe" }
    ]
  },
`;

// Insert additional projects before `];`
const lastBracketIdx = content.lastIndexOf('];');
if (lastBracketIdx !== -1) {
  content = content.substring(0, lastBracketIdx) + additionalProjects + content.substring(lastBracketIdx);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated projects.ts with balanced 21 projects!');
}
