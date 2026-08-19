// Single source of truth for the 12 construction + interior-design sub-service
// pages and the 2 division overview pages. Every sub-service page is rendered
// by components/sections/ServiceSubPage.tsx from one entry here — see
// app/construction/residential/page.tsx for the (near-empty) page wrapper.

export type Faq = { question: string; answer: string };
export type ScopeGroup = { category: string; items: string[] };

export type Card = {
  title: string;
  image: string;
  description: string;
  highlights?: string[];
  ctaText?: string;
};

export type Material = {
  name: string;
  image: string;
  description?: string;
  highlights?: string[];
  ctaText?: string;
};

export type SubService = {
  slug: string; // e.g. "construction/residential"
  division: "construction" | "interior-design";
  parentLabel: string;
  parentHref: string;
  navLabel: string; // short label used in nav/breadcrumbs/nav-cards
  title: string; // <h1>
  metaTitle: string;
  metaDescription: string;
  heroCopy: string;
  heroImage: string;
  primaryCtaText: string;
  cards: { eyebrow: string; title: string; sub?: string; items: Card[] };
  scope: { eyebrow: string; title: string; sub?: string; groups: ScopeGroup[] };
  materials: { eyebrow: string; title: string; sub?: string; items: Material[] };
  faqs: Faq[];
  finalCta: { title: string; copy: string; primaryCtaText: string };
  projectCategory: string;
};

export const subServices: Record<string, SubService> = {
  "construction-residential": {
    slug: "construction/residential",
    division: "construction",
    parentLabel: "Construction",
    parentHref: "/construction",
    navLabel: "Residential Construction",
    title: "Residential Villa Construction",
    metaTitle: "Residential Construction Company in Pune | Zemitech Urban",
    metaDescription:
      "Custom villas & independent homes built in Pune by Zemitech Urban — fixed BOQ, stage-wise billing, 8-11 month timelines.",
    heroCopy: "Build your home with a structured construction process, dedicated site execution and transparent project management.",
    heroImage: "/images/construction/residential/hero.png",
    primaryCtaText: "Discuss Your Villa Project",
    cards: {
      eyebrow: "Capabilities",
      title: "Residential Solutions We Deliver",
      sub: "Types of residential projects Zemitech Urban designs and constructs.",
      items: [
        {
          title: "Independent Luxury Villas",
          image: "/images/construction/residential/card-1.png",
          description: "Bespoke standalone luxury villas built with turnkey RCC structures, modern architectural elevations, double-height ceiling voids, and premium Vastu-compliant layouts tailored to your family's lifestyle.",
          highlights: ["Vastu-Compliant Architectural Plan", "IS 456 Seismic Resistant RCC Frame", "Custom Facade & Cantilever Balconies", "Turnkey Material Specification BOQ"],
          ctaText: "Book Appointment for Luxury Villa",
        },
        {
          title: "Modern Duplex Homes",
          image: "/images/construction/residential/card-2.png",
          description: "Multi-level modern family duplexes engineered with open-plan living rooms, floating internal staircases, private terrace gardens, and integrated dual-car covered garage space.",
          highlights: ["Open-Plan Multi-Level Spans", "Custom Floating Steel/RCC Stairs", "Private Skylight & Terrace Access", "Integrated Automated Entry Gates"],
          ctaText: "Book Appointment for Duplex Home",
        },
        {
          title: "Multi-Floor Residences",
          image: "/images/construction/residential/card-3.png",
          description: "Multi-storey residential buildings constructed to strict structural engineering standards, featuring heavy load-bearing raft foundations, passenger elevator shafts, and soundproof party wall isolation.",
          highlights: ["Heavy Load Raft / Footing Design", "Elevator Shaft & Stairwell RCC", "Soundproof AAC Block Party Walls", "Dedicated Utility Meter Room Fit-Out"],
          ctaText: "Book Appointment for Multi-Floor Project",
        },
        {
          title: "Custom Turnkey Homes",
          image: "/images/construction/residential/card-4.png",
          description: "Full end-to-end home construction from soil testing, excavation, structural RCC framework to factory modular kitchen fit-outs, sanitary installation, and pristine handover condition.",
          highlights: ["Single Point Engineering Accountability", "Weekly Photo-Logged Site Progress", "100% In-House Skilled Crews", "Fixed-Scope Agreement & BOQ"],
          ctaText: "Book Appointment for Turnkey Villa",
        },
      ],
    },
    scope: {
      eyebrow: "Detailed Scope",
      title: "What We Handle",
      groups: [
        { category: "Planning & Preparation", items: ["Site assessment", "Scope definition", "BOQ preparation", "Project planning"] },
        { category: "Civil & Structural", items: ["Foundation", "RCC", "Columns", "Beams", "Slabs", "Masonry"] },
        { category: "Finishing", items: ["Flooring", "Doors", "Windows", "Painting", "Internal finishing"] },
      ],
    },
    materials: {
      eyebrow: "Quality Standards",
      title: "Construction Quality",
      sub: "Specified material grades, approved brands, and rigorous on-site execution supervision.",
      items: [
        { name: "M25 / M30 Ready-Mix Concrete", image: "/images/construction/residential/material-1.png", description: "UltraTech/ACC RMC mixed under lab supervision, engineered for superior 30 N/mm² compressive strength and zero voids." },
        { name: "Fe550D TMT Reinforcement Steel", image: "/images/construction/residential/material-2.png", description: "Tata Tiscon Fe550D earthquake-resistant TMT steel bars providing enhanced ductility and structural tension flexibility." },
        { name: "Autoclaved Aerated Concrete Blocks", image: "/images/construction/residential/material-3.png", description: "Precision thermal-insulating AAC masonry blocks providing 3x thermal efficiency and reduced dead load on foundations." },
        { name: "Vitrified & Natural Stone Flooring", image: "/images/construction/residential/material-4.png", description: "Stain-resistant 1200x600mm double-charge vitrified tiles and polished Italian marble laid with high-flex polymer adhesive." },
      ],
    },
    faqs: [
      { question: "Can I use my own architect's plan?", answer: "Yes, we regularly execute on architect-supplied drawings and simply take over structural engineering and construction." },
      { question: "What's a typical timeline for a 2,000 sq. ft. home?", answer: "Most independent homes of this size take 8–11 months from foundation to handover, depending on design complexity and approvals." },
      { question: "Do you provide a warranty after handover?", answer: "Yes, structural and waterproofing work carries a defect liability period post-handover — details are specified in the agreement." },
      { question: "Can you build on a plot with a sloped or irregular shape?", answer: "Yes — our soil testing and structural design stage accounts for irregular plots and sloped sites; foundation type is adjusted accordingly." },
    ],
    finalCta: { title: "Ready to Build Your Dream Home?", copy: "Tell us about your plot location, size, and timeline to get a transparent estimate.", primaryCtaText: "Discuss Your Villa Project" },
    projectCategory: "residential",
  },


  "construction-industrial": {
    slug: "construction/industrial",
    division: "construction",
    parentLabel: "Construction",
    parentHref: "/construction",
    navLabel: "Industrial Warehouses",
    title: "Industrial Warehouses & Sheds Built for Functional Performance",
    metaTitle: "Industrial Warehouse Construction Pune | Zemitech Urban",
    metaDescription: "Industrial warehouse, PEB shed and manufacturing plant construction in Pune — heavy floor loads, clear-span steel, engineered for logistics.",
    heroCopy: "Heavy-duty structures engineered for logistics, manufacturing, and storage.",
    heroImage: "/images/construction/industrial/hero.png",
    primaryCtaText: "Discuss Your Requirement",
    cards: {
      eyebrow: "Facilities",
      title: "Industrial Facilities We Construct",
      sub: "Engineered industrial solutions built for heavy floor loads, logistics, and clear-span headroom.",
      items: [
        { title: "Logistics Warehouses", image: "/images/construction/industrial/card-1.png", description: "High-bay logistics warehouses with heavy-duty flooring and container loading bays." },
        { title: "Pre-Engineered Sheds (PEB)", image: "/images/construction/industrial/card-2.png", description: "Clear-span steel PEB structures designed for rapid assembly and maximum internal space." },
        { title: "Heavy Storage Facilities", image: "/images/construction/industrial/card-3.png", description: "Enclosed industrial storage units with high load-bearing foundations and crane gantries." },
        { title: "Manufacturing Plants", image: "/images/construction/industrial/card-4.png", description: "Turnkey manufacturing plants integrated with heavy electrical, ventilation, and drainage systems." },
      ],
    },
    scope: {
      eyebrow: "Capabilities",
      title: "Project Scope",
      groups: [
        { category: "Core Construction", items: ["Site preparation", "Civil works", "Foundations", "Structural steel systems", "Roofing", "Flooring", "Services coordination"] },
      ],
    },
    materials: {
      eyebrow: "Planning",
      title: "Industrial Planning Considerations",
      items: [
        { name: "Vehicle Access & Loading Docks", image: "/images/construction/industrial/material-1.png", description: "Heavy-axle turning radiuses and articulated truck dock levellers for rapid container turnaround." },
        { name: "Heavy Floor Load Flooring", image: "/images/construction/industrial/material-2.png", description: "VDF laser-screed concrete floors with steel fiber reinforcement rated for 8+ ton point loads." },
        { name: "Clear-Span Steel Trusses", image: "/images/construction/industrial/material-3.png", description: "Pre-engineered structural steel portal frames providing up to 45m column-free clear workspace." },
        { name: "High-Capacity Drainage", image: "/images/construction/industrial/material-4.png", description: "Cast-iron industrial trench drains and high-flow rainwater gutters for extreme monsoon runoff." },
      ],
    },
    faqs: [
      { question: "What floor loads can your industrial flooring handle?", answer: "Flooring is engineered to the forklift and rack-load specification you provide, typically rated for heavy pallet-truck traffic." },
      { question: "Do you build pre-engineered steel (PEB) sheds?", answer: "Yes, clear-span PEB structures are a standard part of our industrial scope, sized for rapid assembly and maximum usable floor area." },
      { question: "Can you coordinate approach roads and loading dock access?", answer: "Yes, heavy-vehicle turning radius and loading dock ramps are planned at the site-layout stage, not added afterward." },
      { question: "How is stormwater handled on an industrial site?", answer: "Drainage is sized to the site's actual roof and yard catchment area, with capacity for heavier industrial effluent where applicable." },
    ],
    finalCta: { title: "Planning an Industrial Facility?", copy: "Tell us what you're building, where you're building it and what you need from our team.", primaryCtaText: "Discuss Your Requirement" },
    projectCategory: "commercial",
  },

  "construction-renovation": {
    slug: "construction/renovation",
    division: "construction",
    parentLabel: "Construction",
    parentHref: "/construction",
    navLabel: "Turnkey Home Renovation",
    title: "Transform Your Existing Home Without Managing Multiple Contractors",
    metaTitle: "Home Renovation Contractor in Pune | Zemitech Urban",
    metaDescription: "Turnkey home renovation in Pune — civil changes, flooring, plumbing and paint handled under one project manager, one fixed BOQ.",
    heroCopy: "From civil changes and flooring to plumbing and paint, we handle the entire renovation scope under one project manager.",
    heroImage: "/images/construction/renovation/hero.png",
    primaryCtaText: "Plan My Renovation",
    cards: {
      eyebrow: "Spaces",
      title: "What Can Be Renovated?",
      sub: "Complete or phased home refurbishment and civil transformation.",
      items: [
        { title: "Complete Home Overhaul", image: "/images/construction/renovation/card-1.png", description: "Full house civil restructuring, re-tiling, wall removal, electrical rewiring, and complete interiors." },
        { title: "Modular Kitchen Upgrade", image: "/images/construction/renovation/card-2.png", description: "Demolishing old kitchen platforms and installing factory modular cabinets with quartz tops." },
        { title: "Living & Entertainment Room", image: "/images/construction/renovation/card-3.png", description: "False ceiling installation, floating media wall consoles, and decorative panelling." },
        { title: "Structural & Civil Modifications", image: "/images/construction/renovation/card-4.png", description: "Wall removal, balcony enclosures, waterproof bathroom tiling, and plumbing overhauls." },
      ],
    },
    scope: {
      eyebrow: "Capabilities",
      title: "Renovation Scope",
      groups: [
        { category: "Core Works", items: ["Civil modifications", "Flooring", "Painting", "Electrical", "Plumbing", "Ceilings", "Joinery", "Interior finishing"] },
      ],
    },
    materials: {
      eyebrow: "Selections",
      title: "Materials & Finishes",
      items: [
        { name: "Vitrified Flooring Options", image: "/images/construction/renovation/material-1.png", description: "Large-format 1200x600mm vitrified tiles installed over self-levelling screed with expansion joints." },
        { name: "Washable Acrylic Paints", image: "/images/construction/renovation/material-2.png", description: "Asian Paints Royale low-VOC washable acrylic emulsion paints with anti-fungal barrier protection." },
        { name: "Sanitary & Bathroom Fittings", image: "/images/construction/renovation/material-3.png", description: "Concealed Kohler & Grohe thermostatic diverters with multi-layer polymer waterproofing membranes." },
        { name: "Joinery & Woodwork Finishes", image: "/images/construction/renovation/material-4.png", description: "BWP marine plywood cabinetry finished with 1mm anti-fingerprint acrylic or veneer laminates." },
      ],
    },
    faqs: [
      { question: "Can I stay in my home during renovation?", answer: "For phased renovations, yes — we sequence work room by room. For full structural overhauls, we'll flag upfront if the scope requires you to vacate." },
      { question: "Do you handle structural changes like wall removal?", answer: "Yes, structural modifications are assessed by our engineers first to confirm load-bearing impact before any wall comes down." },
      { question: "How is renovation priced?", answer: "Off a fixed-scope BOQ agreed before work starts, the same discipline as new construction — not a rough per-room estimate." },
      { question: "Can renovation include a full interior fit-out afterward?", answer: "Yes, many renovation clients move directly into a modular kitchen and interior fit-out with our interior design division once civil work is done." },
    ],
    finalCta: { title: "Ready to Transform Your Existing Home?", copy: "Tell us about your property location and required scope to get an instant consultation.", primaryCtaText: "Plan My Renovation" },
    projectCategory: "residential",
  },

  "construction-structural-civil-engineering": {
    slug: "construction/structural-civil-engineering",
    division: "construction",
    parentLabel: "Construction",
    parentHref: "/construction",
    navLabel: "Structural & Civil Engineering",
    title: "Structural & Civil Engineering for Reliable Project Execution",
    metaTitle: "Structural & Civil Engineering Pune | Zemitech Urban",
    metaDescription: "Structural RCC framing, deep foundations and civil engineering execution in Pune — we build to your architect's or engineer's design with rigorous site control.",
    heroCopy: "Executing structural designs with rigorous site control and engineering oversight.",
    heroImage: "/images/construction/structural-civil-engineering/hero.png",
    primaryCtaText: "Talk to Our Team",
    cards: {
      eyebrow: "Capabilities",
      title: "Engineering Scope",
      sub: "Civil engineering and RCC structural execution services.",
      items: [
        {
          title: "Structural RCC Framing",
          image: "/images/construction/structural-civil-engineering/card-1.png",
          description: "Precision RCC column and beam structural framework engineered to IS 456 standards. Our site engineers supervise mix ratios, vibrator compaction, and shuttering alignment for high-rise or standalone buildings.",
          highlights: ["M25 / M30 Ready-Mix Concrete Grade", "Tata Tiscon Fe550D Rebar Steel", "Laser Level Column Verticality", "14-Day Wet Curing Protocol"],
          ctaText: "Book Structural RCC Inspection",
        },
        {
          title: "Deep Foundation & Excavation",
          image: "/images/construction/structural-civil-engineering/card-2.png",
          description: "Full soil-tested deep foundations including pile footings, combined raft slabs, and reinforced soil retaining walls. Designed to handle high axial loads and monsoon soil expansion across Pune regions.",
          highlights: ["Borehole Soil & SPT Load Audit", "RCC Pile & Raft Footing Design", "Soil Retaining & Anchor Walls", "Anti-Seepage Dewatering Channel"],
          ctaText: "Book Foundation & Soil Assessment",
        },
        {
          title: "Masonry & Plastering",
          image: "/images/construction/structural-civil-engineering/card-3.png",
          description: "High-precision AAC block masonry and red-brick partition walls bonded with polymer mortar. Finished with double-coat external sand-faced waterproof plastering and internal smooth gypsum punning.",
          highlights: ["Thermal Insulating AAC Blocks", "Polymer Jointing Mortar Bonding", "Sand-Face Waterproof External Plaster", "Gypsum Smooth Wall Punning"],
          ctaText: "Book Masonry & Plastering Scope",
        },
        {
          title: "Site Civil Infrastructure",
          image: "/images/construction/structural-civil-engineering/card-4.png",
          description: "Comprehensive site infrastructure execution including heavy-vehicle concrete access roads, stormwater drainage culverts, boundary retaining walls, and underground RWH storage tanks.",
          highlights: ["Concrete VDF Approach Roads", "Heavy Flow Stormwater Culverts", "RCC Boundary Retaining Walls", "Rainwater Harvesting Tank Fit-Out"],
          ctaText: "Book Civil Infrastructure Audit",
        },
      ],
    },
    scope: {
      eyebrow: "Process",
      title: "Engineering Before Execution",
      sub: "We execute designs provided by your architect or structural engineer with absolute fidelity.",
      groups: [
        { category: "Pre-execution Flow", items: ["Requirement", "Assessment", "Design & planning", "BOQ", "Execution"] },
        { category: "Civil Scope", items: ["Masonry", "Flooring", "Plastering", "Site works", "Drainage", "Finishing"] },
      ],
    },
    materials: {
      eyebrow: "Quality",
      title: "Quality & Site Checks",
      items: [
        { name: "Level & Plumb Checks", image: "/images/construction/structural-civil-engineering/material-1.png", description: "Laser level alignment and plumb bob verifications conducted at every column lift to ensure 100% vertical precision." },
        { name: "Reinforcement Inspection", image: "/images/construction/structural-civil-engineering/material-2.png", description: "Mandatory structural engineer sign-off on rebar spacing, lap length, and cover blocks before concrete pour." },
        { name: "Concrete Cube Testing", image: "/images/construction/structural-civil-engineering/material-3.png", description: "Compressive strength testing of concrete cubes at 7 and 28 days to verify structural load compliance." },
        { name: "Curing Process Monitoring", image: "/images/construction/structural-civil-engineering/material-4.png", description: "Strict 14-day wet ponding and hessian cloth curing protocol for maximum concrete strength gain." },
      ],
    },
    faqs: [
      { question: "Can you execute a design from our own architect or structural engineer?", answer: "Yes — we execute third-party structural drawings with the same site discipline and quality checks as our own designs." },
      { question: "Do you handle deep foundations and retaining walls?", answer: "Yes, pile foundations, raft footings and soil retaining walls are part of our structural scope, specified from the soil report." },
      { question: "What quality checks happen during structural work?", answer: "Reinforcement inspection, concrete cube testing and level/plumb checks at every major stage, photo-logged as part of site reporting." },
      { question: "Do you provide structural stability audits for existing buildings?", answer: "Yes, we carry out structural audits and retrofitting assessments for existing structures, not only new-build work." },
    ],
    finalCta: { title: "Have a Structural or Civil Requirement?", copy: "Tell us what you're building, where you're building it and what you need from our team.", primaryCtaText: "Talk to Our Team" },
    projectCategory: "infrastructure",
  },

  "interior-kitchen": {
    slug: "interior-design/kitchen",
    division: "interior-design",
    parentLabel: "Interior Design",
    parentHref: "/interior-design",
    navLabel: "Modular Kitchen Design",
    title: "Modular Kitchens Designed Around the Way You Cook and Live",
    metaTitle: "Modular Kitchen Interior Design in Pune | Zemitech Urban",
    metaDescription: "Modular kitchen design in Pune — L-shape, U-shape, parallel and island layouts, BWP marine-grade plywood, soft-close hardware, 15-25 day execution.",
    heroCopy: "Highly functional, perfectly fitted, and built with materials that withstand Indian cooking.",
    heroImage: "/images/interior/kitchen/hero.png",
    primaryCtaText: "Design My Kitchen",
    cards: {
      eyebrow: "Configurations",
      title: "Kitchen Layouts",
      sub: "Select the ideal floor plan configuration tailored to your cooking style and floor area.",
      items: [
        { title: "L-Shaped", image: "/images/interior/kitchen/card-1.png", description: "Optimizes corner space along two adjoining walls to form an efficient work triangle between sink, stove, and refrigerator." },
        { title: "U-Shaped", image: "/images/interior/kitchen/card-2.png", description: "Surrounds three sides with expansive countertop surface area and maximized base and wall storage." },
        { title: "Parallel", image: "/images/interior/kitchen/card-3.png", description: "Two parallel runs of cabinetry, creating an efficient high-productivity corridor ideal for busy homes." },
        { title: "Island", image: "/images/interior/kitchen/card-4.png", description: "An L-shape or straight counter run with a central freestanding island for prep, breakfast dining, and entertaining." },
      ],
    },
    scope: {
      eyebrow: "Included",
      title: "What Comes With Every Kitchen",
      groups: [
        { category: "Carcass & Hardware", items: ["BWP marine plywood carcass", "Soft-close hinges & channels", "Quartz or granite countertop", "Modular drawer systems"] },
        { category: "Electricals & Fit", items: ["Concealed appliance wiring", "Chimney & hob cutouts", "Under-cabinet lighting", "Backsplash tiling"] },
      ],
    },
    materials: {
      eyebrow: "Finishes",
      title: "Materials & Finishes",
      items: [
        { name: "High-Gloss & Matte Laminates", image: "/images/interior/kitchen/material-1.png", description: "1mm anti-fingerprint scuff-resistant laminates pressed over marine plywood with matching 2mm PVC edge banding." },
        { name: "Natural Teak & Oak Veneers", image: "/images/interior/kitchen/material-2.png", description: "Hand-selected 0.5mm natural wood veneers sealed with non-yellowing polyurethane clear protective coats." },
        { name: "Seamless Acrylic Shutter Tops", image: "/images/interior/kitchen/material-3.png", description: "2mm ultra-gloss acrylic sheets offering mirror-like reflections and high impact scratch resistance." },
        { name: "Toughened Fluted Glass Panels", image: "/images/interior/kitchen/material-4.png", description: "8mm toughened ribbed fluted glass set in slim aluminum profile frames with soft-close hinges." },
      ],
    },
    faqs: [
      { question: "What's the standard kitchen carcass material?", answer: "BWP (marine-grade) or MR-grade plywood, specified upfront in your material sheet — carcass grade is never substituted mid-project." },
      { question: "Do you include chimney and hob installation?", answer: "Yes, chimney and hob cutouts and installation are part of our standard modular kitchen scope." },
      { question: "How long does a modular kitchen take?", answer: "Typically 15–25 working days on site once the 3D design and material sheet are approved." },
      { question: "Can I mix finishes, e.g. laminate base with acrylic uppers?", answer: "Yes, mixing shutter finishes across base and wall units is common and priced per unit in your material sheet." },
    ],
    finalCta: { title: "Let's Design Your Kitchen", copy: "Tell us about your home and let's discuss the right approach for your space.", primaryCtaText: "Design My Kitchen" },
    projectCategory: "interior",
  },

  "interior-living-room": {
    slug: "interior-design/living-room",
    division: "interior-design",
    parentLabel: "Interior Design",
    parentHref: "/interior-design",
    navLabel: "Living Room Design",
    title: "Living Rooms Designed Around Your Space, Style and Everyday Life",
    metaTitle: "Living Room Interior Design in Pune | Zemitech Urban",
    metaDescription: "Custom living room interior design in Pune — TV units, layered lighting, seating layouts. Designed and built by one team, 18-25 working days.",
    heroCopy: "Creating the perfect central hub for your home with integrated storage, lighting, and bespoke media units.",
    heroImage: "/images/interior/living-room/hero.png",
    primaryCtaText: "Design Your Living Room",
    cards: {
      eyebrow: "Components",
      title: "Living Room Elements",
      sub: "Bespoke elements designed to transform your central living space into an inviting, high-end sanctuary.",
      items: [
        { title: "TV Entertainment Units", image: "/images/interior/living-room/card-1.png", description: "Custom floating TV consoles with concealed AV cable channels, LED backlighting, and veneer feature backdrops." },
        { title: "Feature Wall Panelling", image: "/images/interior/living-room/card-2.png", description: "Bespoke fluted wood, metallic accent trims, and acoustic wall panels that add architectural depth." },
        { title: "False Ceilings & Lighting", image: "/images/interior/living-room/card-3.png", description: "Layered 3-circuit ceiling lighting combining indirect warm LED cove strips, track lights, and focal pendants." },
        { title: "Concealed Storage Systems", image: "/images/interior/living-room/card-4.png", description: "Flush handleless cabinetry and crockery display units integrated seamlessly into the walls." },
      ],
    },
    scope: {
      eyebrow: "Included",
      title: "What's Included",
      groups: [
        { category: "Standard Scope", items: ["TV unit design & execution", "False ceiling & 3-circuit lighting", "Seating & storage layout", "Paint & wall finish execution"] },
      ],
    },
    materials: {
      eyebrow: "Finishes",
      title: "Material Board",
      items: [
        { name: "Natural Teak Veneer Panels", image: "/images/interior/living-room/material-1.png", description: "Hand-crafted natural wood veneer sheets providing rich warm grain textures across main feature walls." },
        { name: "Acoustic Fluted Wall Strips", image: "/images/interior/living-room/material-2.png", description: "Charcoal WPC and natural oak fluted wall slats engineered to dampen ambient room echo and add vertical depth." },
        { name: "Textured Anti-Scratch Laminates", image: "/images/interior/living-room/material-3.png", description: "High-pressure tactile suede and metallic laminates applied over termite-treated HDMR core boards." },
        { name: "Italian Marble & Quartz Tops", image: "/images/interior/living-room/material-4.png", description: "Polished St. Laurent and Statuario quartz stone tops with chamfered edges for floating console surfaces." },
      ],
    },
    faqs: [
      { question: "Can you design around furniture we already own?", answer: "Yes, tell us what you're keeping and we'll design the layout, storage and lighting around it." },
      { question: "Do you include false ceiling work?", answer: "Yes, false ceiling design and layered lighting are a standard part of our living room scope." },
      { question: "How long does a living room interior take from design to handover?", answer: "Typically 18–25 working days for execution once the 3D design and material sheet are approved." },
      { question: "What's included in a 'layered lighting plan'?", answer: "Ambient, task and accent lighting, each on separate switching where possible, planned per activity zone." },
    ],
    finalCta: { title: "Ready to Design Your Living Room?", copy: "Tell us about your space and let's create a stunning centerpiece for your home.", primaryCtaText: "Book Free Consultation" },
    projectCategory: "interior",
  },

  "interior-bedroom": {
    slug: "interior-design/bedroom",
    division: "interior-design",
    parentLabel: "Interior Design",
    parentHref: "/interior-design",
    navLabel: "Bedroom Design",
    title: "Master Bedrooms Designed for Comfort, Storage and Calm",
    metaTitle: "Bedroom Interior Design in Pune | Zemitech Urban",
    metaDescription: "Master, kids' & guest bedroom interior design in Pune — custom wardrobes measured to what you own, warm layered lighting, 15-20 day execution.",
    heroCopy: "Custom beds, integrated wardrobes, and thoughtful layouts that maximize space without clutter.",
    heroImage: "/images/interior/bedroom/hero.png",
    primaryCtaText: "Design My Bedroom",
    cards: {
      eyebrow: "Components",
      title: "Bedroom Elements",
      sub: "Tailored bedroom components crafted for comfort, quiet luxury, and smart storage.",
      items: [
        { title: "Master Beds & Headboards", image: "/images/interior/bedroom/card-1.png", description: "King and queen platform beds with integrated upholstered backrests and concealed warm backlighting." },
        { title: "Floor-to-Ceiling Wardrobes", image: "/images/interior/bedroom/card-2.png", description: "Custom measured wardrobe units with dedicated hanging rails, sensor-activated LED strips, and internal drawers." },
        { title: "Walk-In Closets & Storage", image: "/images/interior/bedroom/card-3.png", description: "Spacious walk-in closet configurations with vanity drawers, open display shelves, and accessory racks." },
        { title: "Bedside Units & Study Nooks", image: "/images/interior/bedroom/card-4.png", description: "Floating bedside drawer units and integrated WFH study desks matched to the room's finish." },
      ],
    },
    scope: {
      eyebrow: "Included",
      title: "Wardrobe & Storage Scope",
      groups: [
        { category: "Standard Scope", items: ["Sliding or hinged wardrobe", "Internal drawer & shelf layout", "Motion-sensor LED wardrobe lighting", "Study / WFH unit (optional)"] },
      ],
    },
    materials: {
      eyebrow: "Selections",
      title: "Materials & Finishes",
      items: [
        { name: "Upholstered Velvet Backrests", image: "/images/interior/bedroom/material-1.png", description: "Custom high-density foam headboards covered in stain-repellent velvet fabric for supreme comfort." },
        { name: "Tactile Wood Grain Laminates", image: "/images/interior/bedroom/material-2.png", description: "Natural oak and walnut wood-grain laminates bonded over marine-grade shutter panels." },
        { name: "Acoustic Wall Panels", image: "/images/interior/bedroom/material-3.png", description: "Padded sound-insulating fabric wall panels providing a quiet, peaceful sleep environment." },
        { name: "Soft-Close German Wardrobe Hinges", image: "/images/interior/bedroom/material-4.png", description: "Heavy-duty Hettich Sensys 110° soft-close hinges tested for 200,000 quiet door operations." },
      ],
    },
    faqs: [
      { question: "Can wardrobe internals be customized for existing clothing volume?", answer: "Yes — we measure what you own before finalizing shelf, drawer and hanging-rod proportions inside the wardrobe." },
      { question: "Do you design kids' rooms that can be updated later?", answer: "Yes, we use modular storage systems in kids' rooms specifically so furniture can be reconfigured as they grow." },
      { question: "How long does a single bedroom interior take?", answer: "Typically 15–20 working days for execution once the 3D design and material sheet are approved." },
      { question: "What's the standard depth for a wardrobe?", answer: "24 inches (610 mm) is our standard wardrobe depth, adjusted where room dimensions require it." },
    ],
    finalCta: { title: "Ready to Design Your Bedroom?", copy: "Tell us about your requirements and let's create your personal sanctuary.", primaryCtaText: "Book Free Consultation" },
    projectCategory: "interior",
  },

  "interior-office": {
    slug: "interior-design/office",
    division: "interior-design",
    parentLabel: "Interior Design",
    parentHref: "/interior-design",
    navLabel: "Office Interior Fit-Outs",
    title: "Office Interiors Designed for Better Workspaces",
    metaTitle: "Office Interior Design Pune | Zemitech Urban",
    metaDescription: "Turnkey corporate and startup office fit-outs in Pune, delivered on time with full MEP coordination.",
    heroCopy: "Turnkey corporate and startup office fit-outs delivered on time, with full MEP coordination.",
    heroImage: "/images/interior/office/hero.png",
    primaryCtaText: "Discuss Your Workspace",
    cards: {
      eyebrow: "Layouts",
      title: "Office Zones",
      sub: "Functional corporate workspace layouts designed for productivity, collaboration, and brand identity.",
      items: [
        { title: "Reception & Welcome Desk", image: "/images/interior/office/card-1.png", description: "Brand-aligned arrival reception desks featuring backlit signage and warm guest seating." },
        { title: "Modular Workstation Pods", image: "/images/interior/office/card-2.png", description: "Linear and cluster workstation desks with integrated wire management and acoustic dividers." },
        { title: "Glass Conference & Meeting Rooms", image: "/images/interior/office/card-3.png", description: "Double-glazed glass partition meeting rooms optimized for privacy and AV presentation." },
        { title: "Executive Suites & Cabins", image: "/images/interior/office/card-4.png", description: "Private leadership office suites designed with veneer credenzas and ambient lighting." },
      ],
    },
    scope: {
      eyebrow: "Included",
      title: "Fit-Out Scope",
      groups: [
        { category: "Standard Scope", items: ["Space planning & partitions", "Electrical & AV point planning", "HVAC & fire compliance coordination", "Branding & signage integration"] },
      ],
    },
    materials: {
      eyebrow: "Selections",
      title: "Materials & Finishes",
      items: [
        { name: "Teak & Oak Wood Veneers", image: "/images/interior/office/material-1.png", description: "Architectural natural teak and white oak veneers finished with anti-glare matte protective coats for executive office desks." },
        { name: "Acoustic Toughened Glass", image: "/images/interior/office/material-2.png", description: "12mm acoustic laminated glass wall partitions providing 42dB sound isolation for high-privacy conference rooms." },
        { name: "Powder-Coated Metal Frames", image: "/images/interior/office/material-3.png", description: "Precision CNC cut aluminum and steel workstation legs finished with scratch-resistant matte black powder coating." },
        { name: "High-Traffic Commercial Carpet Tiles", image: "/images/interior/office/material-4.png", description: "Heavy-duty nylon carpet tiles backed with sound-absorbing felt backing, engineered for high caster wheel traffic." },
      ],
    },
    faqs: [
      { question: "Do you handle fire and building-code compliance?", answer: "Yes, fire-rated partitions, sprinkler coverage and exit-path clearances are designed in from the space-planning stage." },
      { question: "Can you work around our lease start date?", answer: "Yes — we plan every office fit-out backwards from your opening date, the same discipline as our commercial construction work." },
      { question: "Do you coordinate HVAC and electrical vendors?", answer: "Yes, MEP vendor coordination so trades don't collide on site is part of our standard office fit-out scope." },
      { question: "What's a typical office fit-out timeline?", answer: "60–90 working days from design freeze to handover for a mid-size floor, depending on MEP complexity." },
    ],
    finalCta: { title: "Planning a New Office?", copy: "Tell us about your office requirement and let's discuss the right approach.", primaryCtaText: "Discuss Your Workspace" },
    projectCategory: "commercial",
  },

};

export const turnkeyHomeInteriors: SubService = {
  slug: "interior-design/turnkey-home-interiors",
  division: "interior-design",
  parentLabel: "Interior Design",
  parentHref: "/interior-design",
  navLabel: "Turnkey 2BHK & 3BHK",
  title: "Complete 2BHK & 3BHK Interiors, Designed and Executed by One Team",
  metaTitle: "Turnkey 2BHK & 3BHK Home Interiors | Zemitech Urban",
  metaDescription: "Complete 2BHK & 3BHK interiors in Pune, designed and executed by one team — single point of contact, 45-75 working days.",
  heroCopy: "One single point of contact for design, manufacturing, civil adjustments, and final fit-out.",
  heroImage: "/images/interior/turnkey-home-interiors/hero.png",
  primaryCtaText: "Plan My Home Interiors",
  cards: {
    eyebrow: "Components",
    title: "Turnkey Package Components",
    sub: "Comprehensive room-by-room design and fit-out packages tailored for 2BHK & 3BHK homes.",
    items: [
      {
        title: "Living Room Joinery & TV Walls",
        image: "/images/interior/turnkey-home-interiors/room-living.png",
        description: "Custom TV wall panels, gypsum false ceiling with warm LED profiles, and veneer panelling.",
      },
      {
        title: "Modular Kitchen & Countertops",
        image: "/images/interior/turnkey-home-interiors/room-kitchen.png",
        description: "BWP marine-grade plywood cabinetry, quartz waterfall countertop, soft-close Blum hardware, and appliance housing.",
      },
      {
        title: "Master Bedroom & Wardrobes",
        image: "/images/interior/turnkey-home-interiors/room-bedroom.png",
        description: "Floor-to-ceiling modular wardrobe with tinted glass, upholstered headboard bed, and warm bedside lighting.",
      },
      {
        title: "Kids Room & Dining Joinery",
        image: "/images/interior/turnkey-home-interiors/room-guest.png",
        description: "Integrated WFH study desk with bookshelves, space-saving bed frame, and custom glass crockery unit.",
      },
    ],
  },
  scope: {
    eyebrow: "Included",
    title: "Turnkey Execution Scope",
    groups: [
      {
        category: "Standard Scope",
        items: [
          "3D Photorealistic Design & Layouts",
          "In-House Factory Manufacturing",
          "Dedicated On-Site Project Manager",
          "Post-Handover Warranty & Support",
        ],
      },
    ],
  },
  materials: {
    eyebrow: "Selections",
    title: "Materials & Finishes",
    items: [
      { name: "Teak Wood & Natural Veneers", image: "/images/interior/turnkey-home-interiors/material-1.png", description: "Hand-picked natural teak wood veneers providing warm luxury aesthetics for main living areas." },
      { name: "High-Pressure Anti-Fingerprint Laminates", image: "/images/interior/turnkey-home-interiors/material-2.png", description: "1mm scratch-resistant matte laminates for daily bedroom and storage usage." },
      { name: "Architectural 3000K Warm LED Lighting", image: "/images/interior/turnkey-home-interiors/material-3.png", description: "Indirect cove lighting profiles and focal COB spotlights creating layered room ambiance." },
      { name: "Non-Porous Quartz & Marble Tops", image: "/images/interior/turnkey-home-interiors/material-4.png", description: "Stain-proof quartz countertops for kitchen platforms and vanity counters with zero maintenance." },
    ],
  },
  faqs: [
    { question: "How long does a full 2BHK/3BHK turnkey interior take?", answer: "45–75 working days from 3D design approval to handover, depending on scope." },
    { question: "Do you handle civil changes as part of turnkey scope?", answer: "Yes, minor civil changes (wall removal, plumbing relocation) are coordinated as part of the same project, under the same project manager." },
    { question: "Is there one project manager for the whole home?", answer: "Yes — a single project manager stays involved from 3D design through factory production to final installation." },
    { question: "Can I choose different finishes for different rooms?", answer: "Yes, each room's material and hardware selection is specified independently in your fixed material sheet." },
  ],
  finalCta: { title: "Ready to Design Your Complete Home?", copy: "Tell us about your home and let's discuss the right approach.", primaryCtaText: "Get a Free Interior Consultation" },
  projectCategory: "interior",
};

export const constructionSubServices = [
  subServices["construction-residential"],
  subServices["construction-structural-civil-engineering"],
  subServices["construction-renovation"],
  subServices["construction-industrial"],
];

export const interiorSubServices = [
  subServices["interior-kitchen"],
  subServices["interior-living-room"],
  subServices["interior-bedroom"],
  { ...turnkeyHomeInteriors, division: "interior-design" as const },
  subServices["interior-office"],
];
