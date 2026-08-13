// Single source of truth for the 12 construction + interior-design sub-service
// pages and the 2 division overview pages. Every sub-service page is rendered
// by components/sections/ServiceSubPage.tsx from one entry here — see
// app/construction/residential/page.tsx for the (near-empty) page wrapper.

export type Faq = { question: string; answer: string };
export type Card = { title: string; image: string; description: string };
export type ScopeGroup = { category: string; items: string[] };
export type Material = { name: string; image: string };

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
    heroImage: "/images/construction/residential/hero.jpg",
    primaryCtaText: "Discuss Your Villa Project",
    cards: {
      eyebrow: "Capabilities",
      title: "Residential Solutions We Deliver",
      sub: "Types of residential projects Zemitech Urban designs and constructs.",
      items: [
        { title: "Independent Luxury Villas", image: "/images/construction/residential/card-1.jpg", description: "Bespoke standalone luxury villas built with turnkey RCC structures and custom architecture." },
        { title: "Modern Duplex Homes", image: "/images/construction/residential/card-2.jpg", description: "Multi-level modern family duplexes with open floor plans and integrated private parking." },
        { title: "Multi-Floor Residences", image: "/images/construction/residential/card-3.jpg", description: "Multi-storey residential buildings constructed to strict structural engineering standards." },
        { title: "Custom Turnkey Homes", image: "/images/construction/residential/card-4.jpg", description: "Full end-to-end home construction from foundation excavation to interior move-in handover." },
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
        { name: "M25 / M30 Ready-Mix Concrete", image: "/images/construction/residential/material-1.jpg" },
        { name: "Fe550D TMT Reinforcement Steel", image: "/images/construction/residential/material-2.jpg" },
        { name: "Autoclaved Aerated Concrete Blocks", image: "/images/construction/residential/material-3.jpg" },
        { name: "Vitrified & Natural Stone Flooring", image: "/images/construction/residential/material-4.jpg" },
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

  "construction-commercial": {
    slug: "construction/commercial",
    division: "construction",
    parentLabel: "Construction",
    parentHref: "/construction",
    navLabel: "Commercial Construction",
    title: "Commercial Office Spaces Built Around Your Business",
    metaTitle: "Commercial Construction Contractor Pune | Zemitech Urban",
    metaDescription:
      "Office, retail & IT park construction contractor in Pune — MEP coordination, fire compliance, fit-outs delivered on a fixed opening-date schedule.",
    heroCopy: "From planning and civil works to finishing and handover, manage your office project through one coordinated team.",
    heroImage: "/images/construction/commercial/hero.jpg",
    primaryCtaText: "Discuss Your Office Project",
    cards: {
      eyebrow: "Spaces",
      title: "Commercial Spaces We Work On",
      sub: "Tailored commercial interior and structural construction solutions.",
      items: [
        { title: "Corporate Offices", image: "/images/construction/commercial/card-1.jpg", description: "Multi-floor corporate headquarters with custom executive suites and brand integration." },
        { title: "Startup Workspaces", image: "/images/construction/commercial/card-2.jpg", description: "Flexible workstation clusters, open breakout zones, and high-density desk layouts." },
        { title: "Glass Conference Facilities", image: "/images/construction/commercial/card-3.jpg", description: "Acoustically sound double-glazed meeting rooms and presentation boardrooms." },
        { title: "Retail & Showroom Fit-Outs", image: "/images/construction/commercial/card-4.jpg", description: "Shell-and-core and full retail fit-outs sequenced around a fixed opening date." },
      ],
    },
    scope: {
      eyebrow: "Capabilities",
      title: "What the Fit-Out Includes",
      groups: [
        { category: "Core Works", items: ["Space planning", "Civil modifications", "Partitions", "Doors", "Joinery"] },
        { category: "Finishing & Services", items: ["Flooring", "Ceiling", "Electrical coordination", "HVAC & fire compliance", "Painting"] },
      ],
    },
    materials: {
      eyebrow: "Selections",
      title: "Materials & Finishes",
      items: [
        { name: "Double-Glazed Facade Units", image: "/images/construction/commercial/material-1.jpg" },
        { name: "Fire-Rated Partitions", image: "/images/construction/commercial/material-2.jpg" },
        { name: "Access & Raised Flooring", image: "/images/construction/commercial/material-3.jpg" },
        { name: "Acoustic Ceiling Systems", image: "/images/construction/commercial/material-4.jpg" },
      ],
    },
    faqs: [
      { question: "Do you work inside occupied buildings?", answer: "Yes, we run phased fit-out plans with off-hours work windows where needed to avoid disrupting existing tenants or operations." },
      { question: "Can you coordinate fire and HVAC vendors directly?", answer: "Yes, MEP vendor coordination is part of our standard commercial scope so trades don't conflict on site." },
      { question: "What's a realistic timeline for a mid-size office fit-out?", answer: "For an 8,000–20,000 sq. ft. floor, 60–90 working days from design freeze to handover is typical." },
      { question: "Can construction be sequenced around our lease start date?", answer: "Yes — we plan every commercial project backwards from your opening date, not forwards from a start date." },
    ],
    finalCta: { title: "Planning a New Commercial Space?", copy: "Tell us about your floor area and target move-in timeline to get started.", primaryCtaText: "Discuss Your Office Project" },
    projectCategory: "commercial",
  },

  "construction-infrastructure": {
    slug: "construction/infrastructure",
    division: "construction",
    parentLabel: "Construction",
    parentHref: "/construction",
    navLabel: "Township Infrastructure",
    title: "Infrastructure Built for Long-Term Performance",
    metaTitle: "Infrastructure & Township Construction Pune | Zemitech Urban",
    metaDescription:
      "Township infrastructure contractor in Pune — internal roads, storm-water drainage, boundary works, phased zone handover aligned to sales timelines.",
    heroCopy: "Structured execution for roads, site development and civil infrastructure requirements.",
    heroImage: "/images/construction/infrastructure/hero.jpg",
    primaryCtaText: "Discuss the Requirement",
    cards: {
      eyebrow: "Capabilities",
      title: "Infrastructure Capabilities",
      sub: "Civil infrastructure and township land development services.",
      items: [
        { title: "Internal Concrete Roads", image: "/images/construction/infrastructure/card-1.jpg", description: "RCC rigid pavement internal roads designed for heavy vehicle transit." },
        { title: "Township Site Development", image: "/images/construction/infrastructure/card-2.jpg", description: "Mass earthwork, grading, terracing, and plot demarcation for master-planned layouts." },
        { title: "Stormwater Drainage Systems", image: "/images/construction/infrastructure/card-3.jpg", description: "Reinforced box culverts and roadside RCC storm-water drainage channels." },
        { title: "Boundary Walls & Utilities", image: "/images/construction/infrastructure/card-4.jpg", description: "Compound boundary walls, security gates, and underground utility ducting." },
      ],
    },
    scope: {
      eyebrow: "Detailed Process",
      title: "Road & Civil Construction Process",
      groups: [
        { category: "Execution Stages", items: ["Site preparation", "Earthwork & grading", "Sub-base", "Base preparation", "Surface work", "Drainage & finishing"] },
      ],
    },
    materials: {
      eyebrow: "Selections",
      title: "Materials & Standards",
      items: [
        { name: "WBM & Bitumen Road Base", image: "/images/construction/infrastructure/material-1.jpg" },
        { name: "RCC Hume Pipe Drainage", image: "/images/construction/infrastructure/material-2.jpg" },
        { name: "Precast Boundary Panels", image: "/images/construction/infrastructure/material-3.jpg" },
        { name: "LED Street Lighting", image: "/images/construction/infrastructure/material-4.jpg" },
      ],
    },
    faqs: [
      { question: "Can construction be phased around our sales possession dates?", answer: "Yes, phasing is planned jointly with your sales timeline so priority blocks are handed over first." },
      { question: "How is storm-water drainage sized for a township?", answer: "Based on actual catchment area and site grading from the survey stage — not a standard pipe diameter." },
      { question: "Do you provide as-built documentation after each phase?", answer: "Yes, every phase handover includes as-built drawings and utility maps for future maintenance or later phases." },
      { question: "Can you also build individual units within the township?", answer: "Yes — many infrastructure clients also engage our residential team for unit-level builds within the same development." },
    ],
    finalCta: { title: "Planning Infrastructure for a New Development?", copy: "Tell us what you're building, where you're building it and what you need from our team.", primaryCtaText: "Discuss the Requirement" },
    projectCategory: "infrastructure",
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
    heroImage: "/images/construction/industrial/hero.jpg",
    primaryCtaText: "Discuss Your Requirement",
    cards: {
      eyebrow: "Facilities",
      title: "Industrial Facilities We Construct",
      sub: "Engineered industrial solutions built for heavy floor loads, logistics, and clear-span headroom.",
      items: [
        { title: "Logistics Warehouses", image: "/images/construction/industrial/card-1.jpg", description: "High-bay logistics warehouses with heavy-duty flooring and container loading bays." },
        { title: "Pre-Engineered Sheds (PEB)", image: "/images/construction/industrial/card-2.jpg", description: "Clear-span steel PEB structures designed for rapid assembly and maximum internal space." },
        { title: "Heavy Storage Facilities", image: "/images/construction/industrial/card-3.jpg", description: "Enclosed industrial storage units with high load-bearing foundations and crane gantries." },
        { title: "Manufacturing Plants", image: "/images/construction/industrial/card-4.jpg", description: "Turnkey manufacturing plants integrated with heavy electrical, ventilation, and drainage systems." },
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
        { name: "Vehicle Access & Loading Docks", image: "/images/construction/industrial/material-1.jpg" },
        { name: "Heavy Floor Load Flooring", image: "/images/construction/industrial/material-2.jpg" },
        { name: "Clear-Span Steel Trusses", image: "/images/construction/industrial/material-3.jpg" },
        { name: "High-Capacity Drainage", image: "/images/construction/industrial/material-4.jpg" },
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
    heroImage: "/images/construction/renovation/hero.jpg",
    primaryCtaText: "Plan My Renovation",
    cards: {
      eyebrow: "Spaces",
      title: "What Can Be Renovated?",
      sub: "Complete or phased home refurbishment and civil transformation.",
      items: [
        { title: "Complete Home Overhaul", image: "/images/construction/renovation/card-1.jpg", description: "Full house civil restructuring, re-tiling, wall removal, electrical rewiring, and complete interiors." },
        { title: "Modular Kitchen Upgrade", image: "/images/construction/renovation/card-2.jpg", description: "Demolishing old kitchen platforms and installing factory modular cabinets with quartz tops." },
        { title: "Living & Entertainment Room", image: "/images/construction/renovation/card-3.jpg", description: "False ceiling installation, floating media wall consoles, and decorative panelling." },
        { title: "Structural & Civil Modifications", image: "/images/construction/renovation/card-4.jpg", description: "Wall removal, balcony enclosures, waterproof bathroom tiling, and plumbing overhauls." },
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
        { name: "Vitrified Flooring Options", image: "/images/construction/renovation/material-1.jpg" },
        { name: "Washable Acrylic Paints", image: "/images/construction/renovation/material-2.jpg" },
        { name: "Sanitary & Bathroom Fittings", image: "/images/construction/renovation/material-3.jpg" },
        { name: "Joinery & Woodwork Finishes", image: "/images/construction/renovation/material-4.jpg" },
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
    heroImage: "/images/construction/structural-civil-engineering/hero.jpg",
    primaryCtaText: "Talk to Our Team",
    cards: {
      eyebrow: "Capabilities",
      title: "Engineering Scope",
      sub: "Civil engineering and RCC structural execution services.",
      items: [
        { title: "Structural RCC Framing", image: "/images/construction/structural-civil-engineering/card-1.jpg", description: "Precision RCC columns, beams, post-tensioned slabs, and heavy load framing." },
        { title: "Deep Foundation & Excavation", image: "/images/construction/structural-civil-engineering/card-2.jpg", description: "Pile foundations, raft footings, and soil retaining wall engineering." },
        { title: "Masonry & Plastering", image: "/images/construction/structural-civil-engineering/card-3.jpg", description: "AAC blockwork, solid brick masonry, double-coat external sand-face plastering." },
        { title: "Site Civil Infrastructure", image: "/images/construction/structural-civil-engineering/card-4.jpg", description: "Compound retaining walls, stormwater drainage channels, and site land grading." },
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
        { name: "Level & Plumb Checks", image: "/images/construction/structural-civil-engineering/material-1.jpg" },
        { name: "Reinforcement Inspection", image: "/images/construction/structural-civil-engineering/material-2.jpg" },
        { name: "Concrete Cube Testing", image: "/images/construction/structural-civil-engineering/material-3.jpg" },
        { name: "Curing Process Monitoring", image: "/images/construction/structural-civil-engineering/material-4.jpg" },
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
    heroImage: "/images/interior/kitchen/hero.jpg",
    primaryCtaText: "Design My Kitchen",
    cards: {
      eyebrow: "Configurations",
      title: "Kitchen Layouts",
      sub: "Select the ideal floor plan configuration tailored to your cooking style and floor area.",
      items: [
        { title: "L-Shaped", image: "/images/interior/kitchen/card-1.jpg", description: "Optimizes corner space along two adjoining walls to form an efficient work triangle between sink, stove, and refrigerator." },
        { title: "U-Shaped", image: "/images/interior/kitchen/card-2.jpg", description: "Surrounds three sides with expansive countertop surface area and maximized base and wall storage." },
        { title: "Parallel", image: "/images/interior/kitchen/card-3.jpg", description: "Two parallel runs of cabinetry, creating an efficient high-productivity corridor ideal for busy homes." },
        { title: "Island", image: "/images/interior/kitchen/card-4.jpg", description: "An L-shape or straight counter run with a central freestanding island for prep, breakfast dining, and entertaining." },
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
        { name: "Laminates", image: "/images/interior/kitchen/material-1.jpg" },
        { name: "Veneers", image: "/images/interior/kitchen/material-2.jpg" },
        { name: "Acrylic", image: "/images/interior/kitchen/material-3.jpg" },
        { name: "Glass", image: "/images/interior/kitchen/material-4.jpg" },
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
    heroImage: "/images/interior/living-room/hero.jpg",
    primaryCtaText: "Design Your Living Room",
    cards: {
      eyebrow: "Components",
      title: "Living Room Elements",
      sub: "Bespoke elements designed to transform your central living space into an inviting, high-end sanctuary.",
      items: [
        { title: "TV Entertainment Units", image: "/images/interior/living-room/card-1.jpg", description: "Custom floating TV consoles with concealed AV cable channels, LED backlighting, and veneer feature backdrops." },
        { title: "Feature Wall Panelling", image: "/images/interior/living-room/card-2.jpg", description: "Bespoke fluted wood, metallic accent trims, and acoustic wall panels that add architectural depth." },
        { title: "False Ceilings & Lighting", image: "/images/interior/living-room/card-3.jpg", description: "Layered 3-circuit ceiling lighting combining indirect warm LED cove strips, track lights, and focal pendants." },
        { title: "Concealed Storage Systems", image: "/images/interior/living-room/card-4.jpg", description: "Flush handleless cabinetry and crockery display units integrated seamlessly into the walls." },
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
        { name: "Veneer", image: "/images/interior/living-room/material-1.jpg" },
        { name: "Fluted Panels", image: "/images/interior/living-room/material-2.jpg" },
        { name: "Laminates", image: "/images/interior/living-room/material-3.jpg" },
        { name: "Stone Tops", image: "/images/interior/living-room/material-4.jpg" },
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
    heroImage: "/images/interior/bedroom/hero.jpg",
    primaryCtaText: "Design My Bedroom",
    cards: {
      eyebrow: "Components",
      title: "Bedroom Elements",
      sub: "Tailored bedroom components crafted for comfort, quiet luxury, and smart storage.",
      items: [
        { title: "Master Beds & Headboards", image: "/images/interior/bedroom/card-1.jpg", description: "King and queen platform beds with integrated upholstered backrests and concealed warm backlighting." },
        { title: "Floor-to-Ceiling Wardrobes", image: "/images/interior/bedroom/card-2.jpg", description: "Custom measured wardrobe units with dedicated hanging rails, sensor-activated LED strips, and internal drawers." },
        { title: "Walk-In Closets & Storage", image: "/images/interior/bedroom/card-3.jpg", description: "Spacious walk-in closet configurations with vanity drawers, open display shelves, and accessory racks." },
        { title: "Bedside Units & Study Nooks", image: "/images/interior/bedroom/card-4.jpg", description: "Floating bedside drawer units and integrated WFH study desks matched to the room's finish." },
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
        { name: "Veneers", image: "/images/interior/bedroom/material-1.jpg" },
        { name: "Laminates", image: "/images/interior/bedroom/material-2.jpg" },
        { name: "Wood Textures", image: "/images/interior/bedroom/material-3.jpg" },
        { name: "Wardrobe Hardware", image: "/images/interior/bedroom/material-4.jpg" },
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
    heroImage: "/images/interior/office/hero.jpg",
    primaryCtaText: "Discuss Your Workspace",
    cards: {
      eyebrow: "Layouts",
      title: "Office Zones",
      sub: "Functional corporate workspace layouts designed for productivity, collaboration, and brand identity.",
      items: [
        { title: "Reception & Welcome Desk", image: "/images/interior/office/card-1.jpg", description: "Brand-aligned arrival reception desks featuring backlit signage and warm guest seating." },
        { title: "Modular Workstation Pods", image: "/images/interior/office/card-2.jpg", description: "Linear and cluster workstation desks with integrated wire management and acoustic dividers." },
        { title: "Glass Conference & Meeting Rooms", image: "/images/interior/office/card-3.jpg", description: "Double-glazed glass partition meeting rooms optimized for privacy and AV presentation." },
        { title: "Executive Suites & Cabins", image: "/images/interior/office/card-4.jpg", description: "Private leadership office suites designed with veneer credenzas and ambient lighting." },
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
        { name: "Wood & Veneer", image: "/images/interior/office/material-1.jpg" },
        { name: "Glass Partitions", image: "/images/interior/office/material-2.jpg" },
        { name: "Metal Fixtures", image: "/images/interior/office/material-3.jpg" },
        { name: "Commercial Flooring", image: "/images/interior/office/material-4.jpg" },
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

  "interior-custom-joinery": {
    slug: "interior-design/custom-joinery",
    division: "interior-design",
    parentLabel: "Interior Design",
    parentHref: "/interior-design",
    navLabel: "Custom Wood & Joinery",
    title: "Custom Joinery Designed Down to the Detail",
    metaTitle: "Custom Wood & Veneer Joinery Pune | Zemitech Urban",
    metaDescription: "Bespoke woodwork, panelling, and furniture crafted with precision and premium materials in Pune.",
    heroCopy: "Bespoke woodwork, panelling, and furniture crafted with precision and premium materials.",
    heroImage: "/images/interior/custom-joinery/hero.jpg",
    primaryCtaText: "Discuss a Custom Requirement",
    cards: {
      eyebrow: "Capabilities",
      title: "What We Create",
      sub: "Bespoke architectural woodworking and custom joinery crafted to millimeter precision.",
      items: [
        { title: "Bespoke Fluted Wall Panelling", image: "/images/interior/custom-joinery/card-1.jpg", description: "Precision CNC slatted vertical wood panels with concealed LED cove lighting and hidden door integration." },
        { title: "Media Consoles & TV Backdrops", image: "/images/interior/custom-joinery/card-2.jpg", description: "Custom entertainment units combining stone backings, veneer storage cabinets, and concealed wiring." },
        { title: "Architectural Wardrobe Systems", image: "/images/interior/custom-joinery/card-3.jpg", description: "Floor-to-ceiling sliding and hinged wardrobe shutters manufactured in-factory with soft-close hardware." },
        { title: "Custom Woodwork & Partitions", image: "/images/interior/custom-joinery/card-4.jpg", description: "Decorative CNC lattice partitions, acoustic wood slatted dividers, and custom furniture joinery." },
      ],
    },
    scope: {
      eyebrow: "Included",
      title: "Joinery Scope",
      groups: [
        { category: "Standard Scope", items: ["CNC-cut panelling & partitions", "Custom furniture & media units", "Wardrobe & storage systems", "Finish & polish (veneer / laminate / PU)"] },
      ],
    },
    materials: {
      eyebrow: "Library",
      title: "Veneer & Material Selection",
      items: [
        { name: "Natural Wood Textures", image: "/images/interior/custom-joinery/material-1.jpg" },
        { name: "Veneers", image: "/images/interior/custom-joinery/material-2.jpg" },
        { name: "Laminates", image: "/images/interior/custom-joinery/material-3.jpg" },
        { name: "Polyurethane Finishes", image: "/images/interior/custom-joinery/material-4.jpg" },
      ],
    },
    faqs: [
      { question: "Can you match existing wood finishes in my home?", answer: "Yes, veneer and laminate finishes are matched against existing woodwork samples before manufacturing starts." },
      { question: "Do you build custom furniture, not just wall panelling?", answer: "Yes, media consoles, credenzas and other bespoke furniture pieces are part of our custom joinery scope." },
      { question: "What's the typical lead time for custom joinery?", answer: "Factory manufacturing typically takes 3–5 weeks from approved design, followed by a short on-site installation window." },
      { question: "Is CNC-cut panelling more expensive than site carpentry?", answer: "It's comparable in cost but delivers tighter tolerances and a faster, less disruptive on-site install." },
    ],
    finalCta: { title: "Have a Custom Joinery Requirement?", copy: "Tell us about your interior requirement and let's discuss the right approach.", primaryCtaText: "Start a Conversation" },
    projectCategory: "interior",
  },
};

export type TurnkeyRoom = { name: string; image: string; scope: string[] };

export const turnkeyHomeInteriors = {
  slug: "interior-design/turnkey-home-interiors",
  navLabel: "Turnkey 2BHK & 3BHK",
  title: "Complete 2BHK & 3BHK Interiors, Designed and Executed by One Team",
  metaTitle: "Turnkey 2BHK & 3BHK Home Interiors | Zemitech Urban",
  metaDescription: "Complete 2BHK & 3BHK interiors in Pune, designed and executed by one team — single point of contact, 45-75 working days.",
  heroCopy: "One single point of contact for design, manufacturing, civil adjustments, and final fit-out.",
  heroImage: "/images/interior/turnkey-home-interiors/hero.jpg",
  primaryCtaText: "Plan My Home Interiors",
  rooms: [
    { name: "Living Room", image: "/images/interior/turnkey-home-interiors/room-living.jpg", scope: ["TV unit design & execution", "False ceiling & lighting", "Wall treatments & panels", "Custom display units"] },
    { name: "Modular Kitchen", image: "/images/interior/turnkey-home-interiors/room-kitchen.jpg", scope: ["Cabinetry & storage", "Countertop integration", "Hardware & accessories", "Appliance housing"] },
    { name: "Master Bedroom", image: "/images/interior/turnkey-home-interiors/room-bedroom.jpg", scope: ["Custom wardrobe", "Designer bed & headboard", "Side tables", "Dresser unit"] },
    { name: "Guest / Kids Bedroom", image: "/images/interior/turnkey-home-interiors/room-guest.jpg", scope: ["Storage & wardrobes", "Bed frame", "Study table", "Space planning"] },
    { name: "Dining Area", image: "/images/interior/turnkey-home-interiors/room-dining.jpg", scope: ["Crockery units", "Feature wall", "Lighting selection", "Dining layout"] },
  ] as TurnkeyRoom[],
  materials: [
    { name: "Wood & Veneers", image: "/images/interior/turnkey-home-interiors/material-1.jpg" },
    { name: "Laminates", image: "/images/interior/turnkey-home-interiors/material-2.jpg" },
    { name: "Lighting", image: "/images/interior/turnkey-home-interiors/material-3.jpg" },
    { name: "Countertops", image: "/images/interior/turnkey-home-interiors/material-4.jpg" },
  ] as Material[],
  faqs: [
    { question: "How long does a full 2BHK/3BHK turnkey interior take?", answer: "45–75 working days from 3D design approval to handover, depending on scope." },
    { question: "Do you handle civil changes as part of turnkey scope?", answer: "Yes, minor civil changes (wall removal, plumbing relocation) are coordinated as part of the same project, under the same project manager." },
    { question: "Is there one project manager for the whole home?", answer: "Yes — a single project manager stays involved from 3D design through factory production to final installation." },
    { question: "Can I choose different finishes for different rooms?", answer: "Yes, each room's material and hardware selection is specified independently in your fixed material sheet." },
  ] as Faq[],
  finalCta: { title: "Ready to Design Your Complete Home?", copy: "Tell us about your home and let's discuss the right approach.", primaryCtaText: "Get a Free Interior Consultation" },
  projectCategory: "interior",
};

export const constructionSubServices = [
  subServices["construction-residential"],
  subServices["construction-commercial"],
  subServices["construction-infrastructure"],
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
  subServices["interior-custom-joinery"],
];
