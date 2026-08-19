import type { Project } from "@/lib/types/project";
export type { Project };

export const fallbackProjects: Project[] = [
  {
    id: "proj-demo-1",
    slug: "modern-4bhk-luxury-villa-construction-baner",
    title: "Modern 4BHK Luxury Villa Construction",
    category: "residential",
    location: "Baner, Pune",
    year: "2025",
    area: "3,800 sq ft",
    summary: "Turnkey G+2 luxury residential villa built with M30 RMC structure, post-tensioned slab framing, and Italian marble flooring in Baner, Pune.",
    description: [
      "Turnkey G+2 luxury residential villa built with M30 RMC structure, post-tensioned slab framing, and Italian marble flooring in Baner, Pune.",
      "Designed and executed by Zemitech Urban with complete site engineering, elevation 3D renders, and turnkey handover."
    ],
    scope: ["Civil RCC Framing", "Elevation Design", "Flooring & Plumbing", "Exterior Waterproofing"],
    challenge: "High water table during monsoon foundation excavation.",
    solution: "Implemented continuous dewatering pumps and reinforced micro-pile raft foundation.",
    coverImage: "/images/construction/residential/hero.png",
    galleryUrls: ["/images/construction/residential/card-1.png", "/images/construction/residential/card-2.png"],
    videoUrl: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    clientQuote: {
      quote: "Zemitech Urban delivered our villa within 9 months with incredible quality and fixed BOQ rates.",
      author: "Rajesh Deshmukh",
      location: "Baner, Pune"
    },
    published: true,
  },
  {
    id: "proj-demo-2",
    slug: "turnkey-interior-fit-out-3bhk-kothrud",
    title: "Turnkey Interior Fit-Out 3BHK",
    category: "interior",
    location: "Kothrud, Pune",
    year: "2025",
    area: "1,650 sq ft",
    summary: "Complete 3BHK turnkey interior design featuring acrylic modular kitchen, CNC louvers, ambient LED cove ceilings, and custom master bedroom wardrobes.",
    description: [
      "Complete 3BHK turnkey interior design featuring acrylic modular kitchen, CNC louvers, ambient LED cove ceilings, and custom master bedroom wardrobes.",
      "Executed within 45 days with factory-manufactured modular cabinets and 100% in-house carpentry installation."
    ],
    scope: ["Modular Kitchen", "Living Room Ceilings", "Master Bedroom Wardrobes", "Custom Lighting"],
    challenge: "Tight 45-day execution window requested before housewarming.",
    solution: "Parallelized factory modular panel pressing with on-site electrical framing.",
    coverImage: "/images/interior/turnkey-home-interiors/hero.png",
    galleryUrls: ["/images/interior/kitchen/card-1.png", "/images/interior/living-room/card-1.png"],
    clientQuote: {
      quote: "Our home looks straight out of an architectural magazine. Flawless finish!",
      author: "Priya & Amit Kulkarni",
      location: "Kothrud, Pune"
    },
    published: true,
  },
  {
    id: "proj-demo-3",
    slug: "pre-engineered-industrial-warehouse-chakan",
    title: "Pre-Engineered Industrial Warehouse",
    category: "infrastructure",
    location: "Chakan, Pune",
    year: "2024",
    area: "25,000 sq ft",
    summary: "High-bay PEB industrial warehouse with FM2 laser screed concrete flooring, 10-ton overhead crane gantry, and insulated galvalume roofing.",
    description: [
      "High-bay PEB industrial warehouse with FM2 laser screed concrete flooring, 10-ton overhead crane gantry, and insulated galvalume roofing.",
      "Engineered for heavy logistics and manufacturing operations with zero structural deflection."
    ],
    scope: ["PEB Steel Erection", "Laser Screed Flooring", "Dock Levelers", "Stormwater Drainage"],
    challenge: "Strict monsoon deadline for factory machinery installation.",
    solution: "Used pre-fabricated primary steel trusses with 24/7 site installation crews.",
    coverImage: "/images/construction/industrial/hero.png",
    galleryUrls: ["/images/construction/industrial/card-1.png", "/images/construction/industrial/card-2.png"],
    published: true,
  },
  {
    id: "proj-demo-4",
    slug: "commercial-corporate-office-interior-hinjewadi",
    title: "Corporate IT Office Interior",
    category: "commercial",
    location: "Hinjewadi, Pune",
    year: "2024",
    area: "8,500 sq ft",
    summary: "Modern IT workspace with 120 workstations, glass conference suites, acoustic baffle ceilings, and smart access control in Phase 1 Hinjewadi.",
    description: [
      "Modern IT workspace with 120 workstations, glass conference suites, acoustic baffle ceilings, and smart access control in Phase 1 Hinjewadi.",
      "Designed to maximize natural daylight and foster collaborative engineering workflows."
    ],
    scope: ["Acoustic Partitions", "HVAC Ducting", "Modular Workstations", "Server Room Setup"],
    challenge: "Strict building management work hour restrictions in operational IT park.",
    solution: "Off-site modular fabrication of partition walls and night-shift quiet installation.",
    coverImage: "/images/interior/office/hero.png",
    galleryUrls: ["/images/interior/office/card-1.png", "/images/interior/office/card-2.png"],
    published: true,
  },
  {
    id: "proj-demo-5",
    slug: "heritage-bungalow-structural-renovation-koregaon-park",
    title: "Heritage Bungalow Structural Renovation",
    category: "residential",
    location: "Koregaon Park, Pune",
    year: "2024",
    area: "4,200 sq ft",
    summary: "Complete structural retrofitting, foundation jacketing, and contemporary interior modernization of a 35-year-old independent bungalow.",
    description: [
      "Complete structural retrofitting, foundation jacketing, and contemporary interior modernization of a 35-year-old independent bungalow.",
      "Retained classic stone facade while rebuilding internal RCC floor slabs."
    ],
    scope: ["RCC Column Jacketing", "Roof Waterproofing", "New Floor Plan Layout", "Modern Plumbing"],
    challenge: "Severe structural micro-cracks in load-bearing masonry walls.",
    solution: "Injected epoxy resin grout and reinforced columns with carbon fiber wrapping.",
    coverImage: "/images/construction/renovation/hero.png",
    galleryUrls: ["/images/construction/renovation/card-1.png", "/images/construction/renovation/card-2.png"],
    published: true,
  },
  {
    id: "proj-demo-6",
    slug: "minimalist-luxury-apartment-interiors-viman-nagar",
    title: "Minimalist Luxury Apartment Interiors",
    category: "interior",
    location: "Viman Nagar, Pune",
    year: "2024",
    area: "2,200 sq ft",
    summary: "Minimalist 4BHK residence with veneered wall paneling, concealed magnetic track lighting, and custom quartz island kitchen.",
    description: [
      "Minimalist 4BHK residence with veneered wall paneling, concealed magnetic track lighting, and custom quartz island kitchen.",
      "Features seamless hidden flush doors and warm ambient warm-white illumination."
    ],
    scope: ["Veneer Paneling", "Island Kitchen", "Concealed Lighting", "Bathroom Vanities"],
    challenge: "Complex hidden door alignment across 40 feet of continuous wooden veneer wall.",
    solution: "Used concealed 3D adjustable Italian SOSS hinges and laser-guided alignment.",
    coverImage: "/images/interior/living-room/hero.png",
    galleryUrls: ["/images/interior/living-room/card-1.png", "/images/interior/bedroom/card-1.png"],
    published: true,
  },
];
