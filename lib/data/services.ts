export type ProcessStep = { title: string; description: string };
export type Faq = { question: string; answer: string };
export type SpecTableData = {
  title: string;
  note?: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
};
export type GalleryImage = { src: string; alt: string; caption: string };
export type DesignStyle = { name: string; description: string; image: string; alt: string };

export type ServicePage = {
  slug: string;
  division: "construction" | "interior-design";
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeadline: string;
  heroSub: string;
  heroImage: string;
  intro: string[];
  highlights: { title: string; description: string }[];
  process: ProcessStep[];
  inclusions: string[];
  faqs: Faq[];
  projectCategory: string;
  // New Flexible Image & Content Model
  overviewImage?: string;
  capabilityImages?: string[];
  processImages?: string[];
  materialImages?: string[];
  detailImages?: string[];
  beforeAfter?: { before: string; after: string; caption?: string }[];
  projectImages?: string[];
  galleryImages?: string[];

  // Content-depth additions — see AGENTS.md Part 1.2 / 1.3
  longFormTitle?: string;
  longForm?: string[]; // 400–600 words total, supports "[label](/href)" inline links
  specTable?: SpecTableData;
  specsSheet?: { label: string; value: string }[]; // "by the numbers" strip
  gallery?: GalleryImage[]; // 4–6 additional image slots
  costFactors?: { title: string; description: string; image?: string }[]; 
  designStyles?: DesignStyle[]; 
};

// Shared across interior-design, interior-living-room and interior-bedroom —
// the brief calls for a "design styles we work in" section on each.
const designStyles: DesignStyle[] = [
  {
    name: "Contemporary",
    description:
      "Clean lines, neutral bases with one accent material, and hardware that stays out of the way. Our most-requested style for full-home interiors — it dates slowly and photographs well without chasing a trend.",
    image: "/images/interior/style-contemporary.jpg",
    alt: "Contemporary interior with clean-lined cabinetry, neutral palette and a single accent material",
  },
  {
    name: "Minimalist",
    description:
      "Fewer visible surfaces, more concealed storage, and a tighter material palette than contemporary — usually two finishes maximum. Works best when the storage plan is designed first and the aesthetic follows.",
    image: "/images/interior/style-minimalist.jpg",
    alt: "Minimalist interior with concealed storage, handleless cabinetry and a restrained two-finish palette",
  },
  {
    name: "Classic",
    description:
      "Panelled shutters, warmer wood tones, and detailing like cornices or fluted fronts. More labour-intensive to execute well, so we plan extra carpentry time into the schedule rather than rushing the finish.",
    image: "/images/interior/style-classic.jpg",
    alt: "Classic interior with panelled wooden shutters, cornice detailing and warm wood tones",
  },
  {
    name: "Industrial",
    description:
      "Exposed textures — matte metal, concrete-look laminate, open shelving — paired with warmer lighting so the look doesn't read cold. Popular for home offices and open-plan living-dining spaces specifically.",
    image: "/images/interior/style-industrial.jpg",
    alt: "Industrial-style interior with matte metal fixtures, concrete-look laminate and open shelving",
  },
];

export const services: Record<string, ServicePage> = {
  construction: {
    slug: "construction",
    division: "construction",
    title: "Construction Services",
    metaTitle: "Construction Services in Pune | Zemitech Urban",
    metaDescription:
      "Residential, commercial & infrastructure construction contractor in Pune — in-house site teams, fixed-scope BOQ, weekly reporting. Free site assessment.",
    eyebrow: "Construction Division",
    heroHeadline: "Structures built to outlast the blueprint.",
    heroSub:
      "From a single villa to a multi-acre township, our construction division manages design, approvals, execution and handover under one roof. We run the crews ourselves, so the schedule you're quoted is the one we hold to.",
    heroImage: "/images/construction/hero-construction.jpg",
    intro: [
      "Zemitech Urban's construction division has delivered 240+ projects across residential, commercial and infrastructure categories in and around Pune. We run our own site supervision teams rather than sub-contracting core execution, which is how we hold both quality and timelines — the same masons and site engineers who priced your foundation are the ones pouring it.",
      "Every project is assigned a dedicated project manager who is your single point of contact from soil testing to final handover — no chasing five different contractors for one answer, and no re-explaining your brief every time a trade changes.",
      "We work across three categories under one roof: [residential construction](/construction/residential) for independent homes and villas, [commercial construction](/construction/commercial) for offices and retail, and [infrastructure projects](/construction/infrastructure) for township-scale civil works. The estimation, approvals and reporting process is the same discipline across all three — only the scale and trades change.",
      "If you already have an architect's drawings, we take over structural engineering and execution directly. If you don't, our in-house design team can take you from a blank plot to a sanctioned plan without a separate architecture firm in the loop.",
      "We're based in Narhe and take on construction projects across Narhe, Kondhwa, Wagholi, Hinjewadi, Baner, Viman Nagar, Pirangut and the wider Pune region — site visits and soil testing are scheduled locally rather than routed through a distant regional office.",
    ],
    highlights: [
      { title: "In-house site teams", description: "Core masonry, structural and finishing crews are managed directly by us, not sub-let to the lowest bidder." },
      { title: "Fixed-scope estimates", description: "Detailed BOQ (Bill of Quantities) before you sign, so costs don't drift mid-project." },
      { title: "Weekly progress reporting", description: "Photo-logged site updates and a shared timeline you can check anytime." },
      { title: "Approval handling", description: "We coordinate structural drawings, municipal approvals and completion certificates on your behalf." },
    ],
    process: [
      { title: "Site Assessment & Soil Testing", description: "Survey, soil report and feasibility check before any design work begins." },
      { title: "Design & Structural Drawings", description: "Architectural layout, structural engineering and municipal-compliant drawings." },
      { title: "Approvals & Documentation", description: "We file and track plan sanctions and NOCs with the relevant local authority." },
      { title: "Foundation & Structure", description: "RCC framework, brickwork and structural work under continuous site supervision." },
      { title: "Finishing & Fit-out", description: "Plastering, flooring, electricals, plumbing, painting and fixtures." },
      { title: "Handover & Documentation", description: "Final walkthrough, snag-list closure and handover of as-built documents." },
    ],
    inclusions: [
      "Detailed Bill of Quantities (BOQ)",
      "Structural design & drawings",
      "Municipal approval coordination",
      "Dedicated project manager",
      "Weekly photo-logged site reports",
      "Quality checks at every stage",
      "Post-handover defect liability support",
    ],
    longFormTitle: "How we actually run a construction site",
    longForm: [
      "Most construction delays don't come from a single dramatic failure — they come from small, unresolved gaps stacking up: a material order placed a week late, a trade waiting on another trade that hasn't finished, a design change agreed verbally and never documented. Our site process exists mainly to close those gaps before they compound.",
      "Every project starts with a soil report and a fixed-scope BOQ, not a rough per-square-foot number. The BOQ itemizes structural steel grade, cement grade, brick or block type, waterproofing system and finish-level specifications line by line, so a 'competitive' quote from elsewhere can actually be compared against ours rather than guessed at. Payments are released against inspected, completed stages — footing, plinth, slab, brickwork, and so on — not on a monthly calendar.",
      "Structural work is supervised by our own site engineers daily, not by a rotating sub-contractor crew. That matters most during the stages that are hardest to inspect after the fact — reinforcement placement before a slab pour, or waterproofing membrane application before it's covered by screed. We photo-log these stages specifically because they're the ones a client can't easily verify once finishing work begins.",
      "Municipal approvals run in parallel with design, not after it — plan sanction timelines in Pune and PCMC jurisdictions typically run 4–8 weeks, and starting that process early is the single biggest lever on overall project timeline that's actually within a contractor's control. We track approval status the same way we track site progress: as a dated, visible line item, not a black box.",
      "The result isn't a faster process on paper — a 2,000 sq. ft. home still takes 8–11 months, the same physics apply to concrete curing regardless of who's pouring it. What changes is variance: fewer surprise change orders, fewer stalled weeks waiting on a decision that should have been made at the BOQ stage, and a handover date that was realistic when it was quoted, not optimistic.",
    ],
    specTable: {
      title: "Materials & Specification Tiers",
      note: "Indicative grades used across construction projects — final specification is fixed in your project's BOQ, not assumed from this table.",
      columns: ["Standard Specification", "Premium Specification"],
      rows: [
        { label: "Structural Steel (TMT)", values: ["Fe 500D reinforcement bars", "Fe 550D reinforcement bars"] },
        { label: "Cement", values: ["OPC 43 Grade", "PPC / OPC 53 Grade"] },
        { label: "Masonry", values: ["Red clay table-moulded bricks", "AAC blocks"] },
        { label: "Waterproofing", values: ["Polymer-modified cementitious coating", "Crystalline waterproofing system"] },
        { label: "Flooring", values: ["Vitrified tiles, 600×600 mm", "Vitrified tiles, 800×800 mm / natural stone"] },
        { label: "Electrical Wiring", values: ["ISI-marked FR-grade PVC insulated copper", "FRLS copper wiring, higher gauge"] },
      ],
    },
    specsSheet: [
      { label: "Avg. Timeline (2,000 sq ft home)", value: "8–11 months" },
      { label: "Defect Liability Period", value: "12 months post-handover" },
      { label: "BOQ Line Items", value: "150+ itemized" },
      { label: "Site Reporting", value: "Weekly, photo-logged" },
    ],
    gallery: [
      { src: "/images/construction/site-progress-foundation.jpg", alt: "Foundation stage progress at a Zemitech Urban construction site, showing footing and column reinforcement", caption: "Foundation stage — footing & column reinforcement" },
      { src: "/images/construction/site-progress-structure.jpg", alt: "RCC structural framework mid-construction with formwork and column casting", caption: "RCC structural stage" },
      { src: "/images/construction/material-closeup-steel.jpg", alt: "Close-up of TMT steel reinforcement bars tied and ready for concrete pour", caption: "TMT steel reinforcement, tagged by grade" },
      { src: "/images/construction/material-closeup-concrete.jpg", alt: "Close-up of a concrete pour in progress with vibrator compaction", caption: "Concrete pour with vibrator compaction" },
      { src: "/images/construction/team-on-site.jpg", alt: "Zemitech Urban site supervision team reviewing drawings on an active construction site", caption: "Site supervision team, daily walk-through" },
      { src: "/images/construction/completed-work-facade.jpg", alt: "Completed building facade with finished plaster and paint", caption: "Completed facade — finishing stage" },
    ],
    costFactors: [
      { title: "Plot size & built-up area", description: "The most direct cost driver — a larger footprint means more foundation, more structure and more finishing area, roughly linearly." },
      { title: "Finish grade selected", description: "The gap between standard and premium tiles, sanitaryware and hardware brands typically moves overall cost by 12–20%." },
      { title: "Site accessibility", description: "Narrow-lane sites that can't take a concrete pump or need manual material carrying add labour cost that a wide-access plot doesn't." },
      { title: "Structural complexity", description: "Cantilevers, larger spans, basements and non-rectangular footprints all increase structural steel and formwork requirements." },
    ],
    faqs: [
      { question: "Do you handle municipal approvals?", answer: "Yes. We coordinate plan sanctions, structural certification and completion/occupancy certificates with the local authority as part of our scope." },
      { question: "How is pricing structured?", answer: "We work off a fixed-scope BOQ agreed before construction starts, billed in stage-linked instalments tied to actual site progress." },
      { question: "Can I visit the site during construction?", answer: "Yes — clients are welcome on site at any time, and we additionally send weekly photo-logged progress reports." },
      { question: "What's the difference between your standard and premium specification tiers?", answer: "Mainly steel grade, cement type, brick/block choice and finish-level materials — see the specification table above. Both tiers meet structural code; premium changes durability and finish, not safety." },
      { question: "Do you subcontract any part of construction?", answer: "Core masonry, structural and finishing crews are managed directly by us. Specialist trades — elevator installation, for example — are engaged through vetted, named vendors, never anonymous subcontracting." },
      { question: "What happens if I want to change something mid-construction?", answer: "Changes are documented as a signed change order with any cost or timeline impact stated upfront — nothing is added or altered on a verbal instruction alone." },
      { question: "How do you handle construction during Pune's monsoon season?", answer: "Structural work is sequenced to avoid open-foundation exposure during peak monsoon weeks where possible, and waterproofing stages are prioritized before monsoon-affected work resumes." },
      { question: "Do you work with landowners on a joint development or only direct clients?", answer: "Both — we take on direct construction contracts as well as execution partnerships under joint development and developer-led projects." },
    ],
    projectCategory: "construction",
  },

  "construction-residential": {
    slug: "construction/residential",
    division: "construction",
    title: "Residential Construction",
    metaTitle: "Residential Construction Company in Pune | Zemitech Urban",
    metaDescription:
      "Custom villas & independent homes built in Pune by Zemitech Urban — vastu-aware layouts, fixed BOQ, stage-wise billing, 8-11 month timelines.",
    eyebrow: "Construction / Residential",
    heroHeadline: "A home built around how you actually live.",
    heroSub:
      "Independent houses, villas and duplexes constructed from first drawing to final coat of paint, by a team that stays on site. One BOQ, one project manager, no sub-contractor handoffs.",
    heroImage: "/images/construction/hero-residential.jpg",
    intro: [
      "Residential construction is the most personal project a family takes on, and it's where scope creep and missed deadlines hurt the most. We keep it simple: one BOQ, one project manager, weekly updates — the same structure we use across our whole [construction division](/construction), applied at home scale.",
      "We've built everything from compact single-family homes to large independent villas across Pune and surrounding townships like Narhe, Wagholi and Pirangut, working directly with families as well as through architects.",
      "A residential build is also the project type where finish decisions get made under the most time pressure — tile selection, fitting brands, paint shades — often during the busiest weeks of the build. We front-load these decisions into the material specification sheet before structural work starts, specifically so finishing doesn't become the stage that runs long.",
      "For families building their first independent home, we also handle the parts that aren't obviously 'construction': coordinating with the architect (yours or ours), tracking plan sanction status with the local authority, and translating vastu preferences into a layout that doesn't compromise structural efficiency.",
      "If your plot also needs interior fit-out once the shell is complete, our [interior design division](/interior-design) can take over directly from handover — many residential clients move straight from construction into a modular kitchen and full-home interior with the same project manager staying involved.",
    ],
    highlights: [
      { title: "Work with your architect, or ours", description: "Bring your own design, or we'll pair you with an in-house architect for layout and elevation." },
      { title: "Vastu-aware planning", description: "Layouts adapted to vastu preferences without compromising structural efficiency, on request." },
      { title: "Stage-wise payment", description: "You pay against completed, inspected stages of work — not arbitrary monthly invoices." },
      { title: "Material transparency", description: "Brand and grade of every major material (steel, cement, tiles, fittings) specified in writing upfront." },
    ],
    process: [
      { title: "Consultation & Requirement Mapping", description: "Understanding family size, budget, plot orientation and must-haves." },
      { title: "Design & Elevation Approval", description: "2D layouts and 3D elevation views signed off before construction." },
      { title: "Plan Sanction", description: "Municipal plan approval handled on your behalf." },
      { title: "Foundation & RCC Structure", description: "Footing, columns, slabs and structural framework." },
      { title: "Brickwork, Plaster & MEP", description: "Walls, electrical conduiting, plumbing lines and finishing base." },
      { title: "Interiors, Paint & Handover", description: "Flooring, painting, fixtures, final cleaning and documented handover." },
    ],
    inclusions: [
      "Architectural & structural drawings",
      "Municipal plan sanction",
      "Stage-wise BOQ & billing",
      "Site supervisor present daily",
      "Water-proofing at all wet areas",
      "Electrical & plumbing as per code",
      "Snag-list walkthrough before handover",
    ],
    longFormTitle: "What goes into building an independent home",
    longForm: [
      "A residential build breaks into five stages that overlap less than people expect: plan sanction, foundation, structure, MEP (electrical/plumbing) rough-in, and finishing. Each stage has its own failure modes, and most timeline overruns trace back to one of two things — a decision that should have been finalized before the stage started, or an approval that was filed later than it should have been.",
      "Plan sanction is the stage families most underestimate. In Pune and PCMC jurisdictions, sanction typically takes 4–8 weeks depending on plot classification and how complete the submitted drawings are. We file as soon as structural drawings are finalized, in parallel with soil testing, so construction can start the week sanction comes through rather than after.",
      "Foundation type depends on soil report results, not assumption — a standard isolated footing foundation suits most independent plots in and around Pune, but sites with poor bearing capacity or a sloped plot may need a raft or pile foundation, which changes both cost and structural steel requirements. This is decided from the soil test, not negotiated later.",
      "The brickwork-and-MEP stage is where vastu preferences, if requested, get implemented — door and window placement, kitchen and pooja room orientation, staircase direction — worked into the structural layout before walls go up, not adjusted afterward. See our [Vastu considerations](#vastu) section below for how we approach this without compromising load-bearing walls or span efficiency.",
      "Finishing is typically the longest single stage by working days, because it involves the most trades working in sequence rather than parallel — flooring can't start until plastering cures, painting can't start until electrical points are capped, fixtures can't go in until painting is done. We sequence this stage against a shared calendar specifically so 'finishing' doesn't become the vague catch-all stage where most quoted timelines quietly slip.",
    ],
    specTable: {
      title: "Residential Materials & Specification Tiers",
      note: "Indicative — your project's exact specification is fixed in the BOQ, not assumed from this table.",
      columns: ["Standard Package", "Premium Package"],
      rows: [
        { label: "Structural Steel (TMT)", values: ["Fe 500D reinforcement bars", "Fe 550D reinforcement bars"] },
        { label: "External Walls", values: ["9 in red clay brick masonry", "9 in AAC block masonry"] },
        { label: "Windows", values: ["UPVC, standard glazing", "Aluminium/UPVC, double glazing"] },
        { label: "Doors", values: ["Flush doors, laminate finish", "Engineered wood, veneer finish"] },
        { label: "Bathroom Fittings", values: ["ISI-marked CP fittings, standard brand", "Premium branded CP fittings"] },
        { label: "Paint", values: ["Acrylic emulsion, 2 coats", "Premium washable emulsion, 3 coats"] },
      ],
    },
    specsSheet: [
      { label: "Avg. Timeline (2,000 sq ft)", value: "8–11 months" },
      { label: "Plan Sanction Time", value: "4–8 weeks (jurisdiction-dependent)" },
      { label: "Defect Liability Period", value: "12 months structural & waterproofing" },
      { label: "Site Supervisor Presence", value: "Daily" },
    ],
    gallery: [
      { src: "/images/construction/residential-site-progress-1.jpg", alt: "Residential construction site showing footing and column layout for an independent home", caption: "Footing & column stage — independent home" },
      { src: "/images/construction/residential-site-progress-2.jpg", alt: "Residential brickwork stage with external wall masonry in progress", caption: "Brickwork stage" },
      { src: "/images/construction/residential-material-tiles.jpg", alt: "Close-up of vitrified flooring tile samples laid out for client selection", caption: "Flooring tile selection, laid for approval" },
      { src: "/images/construction/residential-completed-exterior.jpg", alt: "Completed independent villa exterior with finished elevation and landscaping", caption: "Completed villa exterior" },
      { src: "/images/construction/residential-completed-interior-shell.jpg", alt: "Move-in ready interior shell with plastered walls and finished flooring, ready for interior fit-out", caption: "Move-in ready shell, pre-interior fit-out" },
      { src: "/images/construction/residential-team-inspection.jpg", alt: "Site engineer conducting a stage-wise quality inspection at a residential construction site", caption: "Stage-wise quality inspection" },
    ],
    costFactors: [
      { title: "Plot size & number of floors", description: "A G+1 build costs proportionally more per floor than a ground-only structure due to added structural load requirements." },
      { title: "Finish grade (standard vs. premium fittings)", description: "Sanitaryware, flooring and door/window brand tier typically account for the widest cost swing within a fixed built-up area." },
      { title: "Site access for material & machinery", description: "Plots reachable only by narrow internal lanes need manual material handling, which adds labour cost over crane/pump access." },
      { title: "Vastu-driven layout changes", description: "Re-orienting rooms or the staircase to meet vastu preferences can require additional structural planning depending on plot shape." },
    ],
    faqs: [
      { question: "Can I use my own architect's plan?", answer: "Yes, we regularly execute on architect-supplied drawings and simply take over structural engineering and construction." },
      { question: "What's a typical timeline for a 2,000 sq. ft. home?", answer: "Most independent homes of this size take 8–11 months from foundation to handover, depending on design complexity and approvals." },
      { question: "Do you provide a warranty after handover?", answer: "Yes, structural and waterproofing work carries a defect liability period post-handover — details are specified in the agreement." },
      { question: "How much does residential construction cost per square foot in Pune?", answer: "It varies with plot access, floor count and finish grade — we quote off a detailed BOQ rather than a flat per-sq-ft number, since a headline rate usually hides what's excluded." },
      { question: "Can you build on a plot with a sloped or irregular shape?", answer: "Yes — our soil testing and structural design stage accounts for irregular plots and sloped sites; foundation type is adjusted accordingly, sometimes at a cost premium over a standard rectangular plot." },
      { question: "Do you handle vastu-compliant layouts without extra structural cost?", answer: "Minor vastu adjustments (entrance direction, room placement) are usually cost-neutral when planned from the start; major changes late in design can add structural planning time." },
      { question: "What's included in the defect liability period?", answer: "Structural cracks, waterproofing leaks and major workmanship defects are covered and rectified at no cost during the 12-month post-handover period, per the signed agreement." },
      { question: "Can construction start before plan sanction comes through?", answer: "No — we don't begin foundation work before sanction is granted, since unsanctioned construction risks penalties and complicates resale or loan documentation later." },
    ],
    projectCategory: "residential",
  },

  "construction-commercial": {
    slug: "construction/commercial",
    division: "construction",
    title: "Commercial Construction",
    metaTitle: "Commercial Construction Contractor Pune | Zemitech Urban",
    metaDescription:
      "Office, retail & IT park construction contractor in Pune — MEP coordination, fire compliance, fit-outs delivered on a fixed opening-date schedule.",
    eyebrow: "Construction / Commercial",
    heroHeadline: "Commercial space that opens on schedule.",
    heroSub:
      "Offices, retail units, showrooms and IT park interiors — built for handover dates that don't move. We plan every trade backwards from your opening date, not forwards from a start date.",
    heroImage: "/images/construction/hero-commercial.jpg",
    intro: [
      "In commercial construction, a delayed handover is lost rent or a missed launch date. We plan backwards from your opening date and hold the schedule with weekly progress tracking against a shared timeline, the same discipline behind our whole [construction division](/construction).",
      "Our commercial work spans standalone offices, retail shell-and-core, showroom construction, and interior build-outs inside larger IT parks and malls across Hinjewadi, Baner and the wider Pune commercial corridor.",
      "Commercial builds fail on schedule almost exclusively at the trade-sequencing level — HVAC, fire suppression and electrical crews all needing access to the same ceiling void at once. Our MEP coordination process (detailed further down this page) exists specifically to prevent that collision before it happens on site.",
      "For occupied buildings or live retail environments, we also plan around operating hours — phased work windows, dust and noise containment, and clear handoff points so a fit-out doesn't disrupt the tenants or customers already on site.",
      "Many commercial clients pair this with our [interior design division](/interior-design) for the fit-out finish — flooring, ceiling detailing, branding elements and reception areas — under the same project management, so there's no handoff gap between shell completion and move-in-ready.",
    ],
    highlights: [
      { title: "Schedule-first planning", description: "Construction sequencing built backwards from your target opening date." },
      { title: "Code & compliance", description: "Fire safety, accessibility and commercial building code compliance handled as standard." },
      { title: "Vendor coordination", description: "We coordinate HVAC, fire, and electrical vendors so trades don't collide on site." },
      { title: "Minimal disruption fit-outs", description: "For occupied buildings, phased work plans that keep neighbouring tenants operational." },
    ],
    process: [
      { title: "Requirement & Feasibility Study", description: "Space program, budget and target opening date mapped out." },
      { title: "Design & MEP Coordination", description: "Layout, structural and MEP (mechanical/electrical/plumbing) drawings aligned." },
      { title: "Approvals & NOCs", description: "Fire NOC, building compliance and other commercial approvals coordinated." },
      { title: "Core & Shell / Civil Work", description: "Structural work, partitions, and building envelope." },
      { title: "MEP Installation", description: "Electrical, HVAC, fire-fighting and plumbing systems installed and tested." },
      { title: "Fit-out & Handover", description: "Flooring, ceiling, branding elements and final compliance sign-off." },
    ],
    inclusions: [
      "Space planning & MEP drawings",
      "Fire & building code compliance",
      "Vendor & trade coordination",
      "Schedule tracked against opening date",
      "Punch-list closure before handover",
      "As-built documentation",
    ],
    longFormTitle: "Why commercial timelines slip — and how we hold them",
    longForm: [
      "Ask any commercial tenant who's been through a delayed fit-out what went wrong, and the answer is rarely 'the construction itself was slow.' It's almost always a sequencing conflict — two trades needing the same ceiling void, ductwork, or wall cavity at the same time, discovered only once both crews are already on site.",
      "We solve this with MEP coordination drawings produced before any rough-in work starts, overlaying HVAC ductwork, electrical conduiting, fire sprinkler lines and plumbing on a single reflected ceiling plan. Clashes get caught on paper, not in a ceiling void with two contractors waiting on each other.",
      "The build sequence that avoids conflict is fixed and non-negotiable on our sites: structural and partition work first, then MEP rough-in (all trades together, coordinated against the same drawing), then ceiling and flooring, then fixtures, branding and final finishes. Running MEP trades in parallel without coordination — which is how timelines usually slip — isn't something we allow even under schedule pressure.",
      "Fire and building code compliance is handled as a standing requirement, not a late-stage add-on: fire-rated partitions, sprinkler coverage, emergency signage and exit-path clearances are designed in from the space-planning stage, since retrofitting compliance after fit-out is both expensive and a common cause of occupancy-certificate delays.",
      "For fit-outs inside occupied buildings, we agree work-window hours with building management upfront — often early morning or after-hours for anything generating noise or dust — and sequence work in one identified zone at a time so neighbouring tenants stay operational throughout. See our [MEP coordination](#mep) section below for how the sequencing actually plays out trade by trade.",
    ],
    specTable: {
      title: "Commercial Materials & Specification Tiers",
      note: "Indicative — exact specification is confirmed in your project's BOQ.",
      columns: ["Standard Specification", "Premium Specification"],
      rows: [
        { label: "Facade Glazing", values: ["Single-glazed, standard aluminium frame", "Double-glazed unit (DGU), thermal break frame"] },
        { label: "Fire-rated Partitions", values: ["90-minute rated gypsum partition", "120-minute rated partition system"] },
        { label: "Flooring Base", values: ["Screed finish for tenant fit-out", "Access/raised flooring for cable management"] },
        { label: "Ceiling", values: ["Standard grid false ceiling", "Acoustic tile false ceiling"] },
        { label: "HVAC", values: ["Ductable split units", "VRF (Variable Refrigerant Flow) system"] },
      ],
    },
    specsSheet: [
      { label: "Typical Fit-out Timeline", value: "60–90 working days" },
      { label: "Fire Compliance", value: "NBC 2016-aligned" },
      { label: "MEP Vendors Coordinated", value: "3–5 trades per project" },
      { label: "Punch-list Closure", value: "Before handover, fully documented" },
    ],
    gallery: [
      { src: "/images/construction/commercial-site-progress-1.jpg", alt: "Commercial construction site at shell-and-core stage with structural columns exposed", caption: "Shell-and-core stage" },
      { src: "/images/construction/commercial-site-progress-2.jpg", alt: "Commercial fit-out site with partition framing and ceiling grid installation in progress", caption: "Partition & ceiling grid installation" },
      { src: "/images/construction/commercial-material-glazing.jpg", alt: "Close-up of double-glazed facade glazing unit installed on a commercial building", caption: "Facade glazing close-up" },
      { src: "/images/construction/commercial-completed-office.jpg", alt: "Completed open-plan office floor ready for occupancy", caption: "Completed office floor, move-in ready" },
      { src: "/images/construction/commercial-team-mep.jpg", alt: "Site team coordinating HVAC, electrical and fire vendors on a shared schedule", caption: "MEP vendor coordination on site" },
      { src: "/images/construction/commercial-fitout-detail.jpg", alt: "Close-up of a finished commercial reception fit-out with branding elements", caption: "Reception fit-out detail" },
    ],
    costFactors: [
      { title: "Built-up area & floor count", description: "Larger floor plates and multi-floor fit-outs increase both material quantity and vendor coordination overhead." },
      { title: "MEP complexity (HVAC/fire load)", description: "Higher occupancy density or server/equipment loads change HVAC sizing and fire suppression requirements, and cost with them." },
      { title: "Occupied-building phasing", description: "Working around live tenants usually means off-hours labour rates and a longer overall calendar, even if working days are similar." },
      { title: "Fit-out finish grade", description: "Flooring, ceiling and branding-element quality tier is typically the largest controllable cost variable in a commercial fit-out." },
    ],
    faqs: [
      { question: "Do you work inside occupied buildings?", answer: "Yes, we run phased fit-out plans with off-hours work windows where needed to avoid disrupting existing tenants or operations." },
      { question: "Can you coordinate fire and HVAC vendors directly?", answer: "Yes, MEP vendor coordination is part of our standard commercial scope so trades don't conflict on site." },
      { question: "What's a realistic timeline for a mid-size office fit-out?", answer: "For an 8,000–20,000 sq. ft. floor, 60–90 working days from design freeze to handover is typical, assuming MEP drawings are finalized before rough-in starts." },
      { question: "Do you handle fire NOC and occupancy certificate coordination?", answer: "Yes — fire NOC, building compliance sign-off and occupancy certification are coordinated with the relevant authority as part of our scope." },
      { question: "Can construction be sequenced around our lease start date?", answer: "Yes, this is how we plan every commercial project by default — the schedule is built backwards from your opening date, not forwards from a start date." },
      { question: "Do you build retail shell-and-core for multiple tenants on one site?", answer: "Yes, we regularly deliver shell-and-core blocks designed so each tenant's own designer can fit out independently without touching shared building systems." },
      { question: "What happens if a tenant's design changes mid-construction?", answer: "Design changes are documented as a change order with cost and schedule impact stated before work proceeds — the same discipline as our residential and infrastructure projects." },
      { question: "Is server room or high-load equipment infrastructure part of your scope?", answer: "Yes, where a project needs elevated electrical load, dedicated cooling or raised flooring for equipment, this is planned into the MEP coordination drawings from the outset." },
    ],
    projectCategory: "commercial",
  },

  "construction-infrastructure": {
    slug: "construction/infrastructure",
    division: "construction",
    title: "Infrastructure Projects",
    metaTitle: "Infrastructure & Township Construction Pune | Zemitech Urban",
    metaDescription:
      "Township infrastructure contractor in Pune — internal roads, storm-water drainage, boundary works, phased zone handover aligned to sales timelines.",
    eyebrow: "Construction / Infrastructure",
    heroHeadline: "Infrastructure that carries a whole community.",
    heroSub:
      "Township civil works — internal roads, drainage, boundary structures and common amenities — planned and built at scale, phased around your possession timeline rather than ours.",
    heroImage: "/images/construction/hero-infrastructure.jpg",
    intro: [
      "Township and large-format development work requires a different rhythm from single-building construction — multiple crews, phased handover zones, and civil works that have to work together as one system, using the same in-house discipline as the rest of our [construction division](/construction).",
      "We plan infrastructure phasing alongside the developer's sales timeline, so amenity blocks and internal roads are ready when they're needed, not after — see the phasing approach detailed further down this page.",
      "Our infrastructure scope covers the civil systems that make a township livable before individual units are even ready: internal road networks, storm-water drainage sized to actual catchment area, boundary and compound wall construction, and common amenity blocks like clubhouses and gate structures.",
      "Because these projects run over multiple phases and often multiple years, documentation matters as much as execution — every phase handover comes with as-built drawings and utility maps, so future maintenance or Phase 2 tie-ins don't start from guesswork.",
      "Many of our infrastructure clients also engage our [residential construction](/construction/residential) team directly for individual unit construction within the same township, keeping civil infrastructure and unit-level construction under one accountable contractor rather than two separate agreements.",
    ],
    highlights: [
      { title: "Phased execution", description: "Work sequenced in zones so possession-ready blocks are handed over first." },
      { title: "Civil systems planning", description: "Internal roads, storm-water drainage and utility ducting designed to work as one network." },
      { title: "Amenity block construction", description: "Clubhouses, boundary walls and common facility structures built to spec." },
      { title: "Developer coordination", description: "Regular alignment with sales and marketing timelines for phase-wise possession." },
    ],
    process: [
      { title: "Master Planning Alignment", description: "Civil infrastructure sequencing mapped against the development's phase plan." },
      { title: "Survey & Grading", description: "Site levelling, grading and drainage gradient planning." },
      { title: "Internal Roads & Utilities", description: "Road base, utility ducting, water and drainage lines laid." },
      { title: "Boundary & Amenity Structures", description: "Compound walls, gates, clubhouse and common facility construction." },
      { title: "Landscaping & Common Areas", description: "Common area finishing coordinated with the overall handover plan." },
      { title: "Phase-wise Handover", description: "Zones handed over in line with the developer's possession schedule." },
    ],
    inclusions: [
      "Civil infrastructure master planning",
      "Internal road & drainage construction",
      "Utility ducting & water lines",
      "Boundary wall & amenity block construction",
      "Phase-wise handover documentation",
    ],
    longFormTitle: "How township infrastructure phasing actually works",
    longForm: [
      "Building every road, drain and amenity block across a large township all at once sounds efficient on paper, but in practice it delays every single unit handover to the pace of the slowest-moving zone. Phased construction inverts that: each zone's roads, drainage and utilities are completed as a self-contained unit, so the first possession-ready block can hand over the moment its own infrastructure is done — independent of what's happening elsewhere on site.",
      "Phasing starts with the developer's sales and possession timeline, not with construction convenience. We map civil infrastructure zones against that timeline first, then sequence survey, grading and utility work backwards from each zone's target possession date. See the phasing diagram below for how a typical multi-phase township breaks down.",
      "Storm-water drainage is sized to actual catchment area and grading, not a standard pipe diameter assumed across the whole site — under-sizing drainage is one of the most common causes of waterlogging complaints in newer townships, and it's a design decision made at the survey stage, not something fixable cheaply later.",
      "Internal roads follow a layered construction sequence — sub-grade preparation, base course, then surface (bitumen or paver, depending on specification) — with utility ducting for water, drainage and often fibre laid before the final road surface goes down, since digging up a finished road to lay a missed utility line is both expensive and disruptive to residents who've already moved in.",
      "Boundary walls, gates and amenity blocks like clubhouses are generally the last structures completed within a phase, timed to common-area handover rather than individual unit handover — but their foundations and utility connections are planned from the start of that phase, so they don't become a bottleneck when the developer is ready to open amenities to residents.",
    ],
    specTable: {
      title: "Infrastructure Materials & Specification Tiers",
      note: "Indicative specification — actual grades are fixed per project based on soil report and traffic/utility load.",
      columns: ["Standard Specification", "Premium Specification"],
      rows: [
        { label: "Road Base", values: ["WBM (Water Bound Macadam) with bitumen topping", "RCC road / interlocking paver block"] },
        { label: "Drainage Pipe", values: ["RCC hume pipe, NP2 class", "RCC NP3 class / HDPE pipe"] },
        { label: "Boundary Wall", values: ["Brick masonry compound wall", "Precast panel wall with coping"] },
        { label: "Street Lighting", values: ["Standard sodium-vapour fixtures", "LED fixtures with solar backup"] },
      ],
    },
    specsSheet: [
      { label: "Typical Phase Size", value: "15–45 acres" },
      { label: "Road Base Standard", value: "IRC-aligned specification" },
      { label: "Drainage Design", value: "Sized to catchment area & grading" },
      { label: "Phase Handover Cadence", value: "Zone-wise, per sales timeline" },
    ],
    gallery: [
      { src: "/images/construction/infrastructure-road-work.jpg", alt: "Internal road construction at a township site with base course being laid", caption: "Internal road construction — base course" },
      { src: "/images/construction/infrastructure-drainage-work.jpg", alt: "Storm-water drainage pipeline being laid before road surfacing at a township development", caption: "Storm-water drainage line, pre-road-surface" },
      { src: "/images/construction/infrastructure-boundary-wall.jpg", alt: "Boundary wall construction along a township perimeter", caption: "Boundary wall construction" },
      { src: "/images/construction/infrastructure-amenity-block.jpg", alt: "Clubhouse amenity block under construction within a residential township", caption: "Clubhouse amenity block" },
      { src: "/images/construction/infrastructure-team-survey.jpg", alt: "Site survey and grading team using levelling equipment at a township site", caption: "Site survey & grading" },
      { src: "/images/construction/infrastructure-aerial-progress.jpg", alt: "Aerial view of township infrastructure progress across multiple zones", caption: "Aerial progress view, multi-zone" },
    ],
    costFactors: [
      { title: "Total acreage & phasing", description: "Larger phases spread fixed mobilization costs further, while smaller, faster phases usually cost more per acre." },
      { title: "Soil & grading requirements", description: "Sites needing significant cut-and-fill or poor-bearing soil treatment add cost before any visible structure appears." },
      { title: "Utility network complexity", description: "The number of utility lines (water, drainage, power, fibre) sharing a road corridor affects ducting and trenching cost." },
      { title: "Amenity block scope", description: "Clubhouse size, pool/sports facilities and landscaping level are typically the most variable line items in an infrastructure budget." },
    ],
    faqs: [
      { question: "Do you take on infrastructure work for developers we're already contracted with?", answer: "Yes, we regularly work as the execution partner for township infrastructure under an existing developer's master plan." },
      { question: "Can construction be phased around our sales possession dates?", answer: "Yes, phasing is planned jointly with your sales timeline so priority blocks are handed over first." },
      { question: "How is storm-water drainage sized for a township?", answer: "Based on actual catchment area and site grading from the survey stage — not a standard pipe diameter applied uniformly across the site." },
      { question: "Do you provide as-built documentation after each phase?", answer: "Yes, every phase handover includes as-built drawings and utility maps so future maintenance or later phases can reference exact line locations." },
      { question: "Can you also build individual units within the township alongside infrastructure?", answer: "Yes — many infrastructure clients also engage our residential construction team for unit-level builds within the same development, under one contractor." },
      { question: "What's included in boundary and amenity block construction?", answer: "Compound walls, entrance gates, security cabins, clubhouses and common facility structures — scoped per project against the master plan." },
      { question: "How long does a typical 30-40 acre phase take?", answer: "Roughly 8–14 months for civil infrastructure completion, depending on soil conditions, utility complexity and amenity scope — sequenced against your possession timeline." },
      { question: "Do you handle road and drainage maintenance after handover?", answer: "Defect liability covers workmanship issues for a defined period post-handover; ongoing maintenance beyond that is typically transitioned to the township's facility management team, with our as-built documentation as reference." },
    ],
    projectCategory: "infrastructure",
  },

  "interior-design": {
    slug: "interior-design",
    division: "interior-design",
    title: "Interior Design Services",
    metaTitle: "Interior Design Company in Pune | Zemitech Urban",
    metaDescription:
      "Full-home & commercial interior design and execution in Pune — 3D-approved before manufacturing, factory-finished modular units, one team end-to-end.",
    eyebrow: "Interior Design Division",
    heroHeadline: "Interiors designed and built by the same team.",
    heroSub:
      "From a single modular kitchen to a complete turnkey home, our interior division handles design, material sourcing and on-site installation. You approve a 3D render before a single panel is manufactured.",
    heroImage: "/images/interior/hero-interior.jpg",
    intro: [
      "Our interior design division exists because handoffs between a designer and a separate execution contractor are where most home interior projects lose quality and time. We design and install as one team, the same accountability model behind our [construction division](/construction).",
      "Every project starts with measuring and understanding how a space is actually used — not a generic layout dropped onto your floor plan. That's true whether you're commissioning a single [kitchen](/interior-design/kitchen), a [living room](/interior-design/living-room), a [bedroom](/interior-design/bedroom), or a full turnkey home across all of them.",
      "Design work happens in three stages before manufacturing ever starts: mood-board and material direction, then a photorealistic 3D render of every room, then a fixed material and hardware specification sheet. Nothing is ordered until all three are approved in writing — this is the single biggest difference between how we work and how a design-only or execution-only firm typically operates.",
      "Once approved, modular units — kitchens, wardrobes, storage systems — are manufactured off-site in a controlled factory environment, which gives tighter tolerances on fit and finish than site-carpentered furniture, and cuts the on-site installation window down to days rather than weeks.",
      "We work across contemporary, minimalist, classic and industrial design directions — see the styles section below — and adapt material and hardware specification to whichever budget tier and finish level you're planning around.",
      "Site measurement and installation are run locally across Narhe, Kondhwa, Wagholi, Hinjewadi, Baner, Viman Nagar, Pirangut and the wider Pune region, by the same factory-manufacturing and installation teams on every project, regardless of neighbourhood.",
    ],
    highlights: [
      { title: "Design + execution, one team", description: "The people who design your space are accountable for how it's built." },
      { title: "3D visualization before approval", description: "You see a realistic render of every room before any material is ordered." },
      { title: "Factory-finished modular units", description: "Kitchens and wardrobes built in a controlled factory environment, installed on site." },
      { title: "Fixed-price material sheet", description: "Every material, hardware brand and finish specified and priced before work begins." },
    ],
    process: [
      { title: "Site Measurement & Brief", description: "Detailed measurement and a conversation about how each room is used day to day." },
      { title: "Concept & Mood Boards", description: "Material palette, finish direction and layout concepts presented for feedback." },
      { title: "3D Design & Approval", description: "Photorealistic 3D renders of every space, refined until you approve the final look." },
      { title: "Material Sourcing", description: "Plywood grade, laminate, hardware and fittings finalized against your budget." },
      { title: "Factory Production", description: "Modular units manufactured off-site in a controlled factory environment." },
      { title: "Site Installation & Handover", description: "On-site carpentry, electrical, false ceiling and final styling handover." },
    ],
    inclusions: [
      "Detailed site measurement",
      "3D design & material mood boards",
      "Fixed material & hardware specification sheet",
      "Factory-manufactured modular units",
      "On-site installation & quality check",
      "Post-installation punch-list closure",
    ],
    longFormTitle: "What 'design and execution, one team' really changes",
    longForm: [
      "In a typical interior project, a designer sells you a concept and a separate execution contractor builds it — and the gap between the two is where quality erodes. A designer specifies a hardware brand the contractor substitutes for a cheaper equivalent; a render shows a finish that doesn't match what actually gets installed; a delay in one party's schedule cascades into the other's with nobody accountable for the combined timeline. We collapse that gap by keeping design and execution inside one team, on one contract.",
      "The practical difference shows up earliest at the 3D design stage. Because our own manufacturing and installation team reviews every render before it's presented to you, what you approve is what our factory can actually produce at the specified budget — not an idealized render that gets quietly value-engineered down once production starts.",
      "The material and hardware specification sheet is fixed and priced before manufacturing begins: plywood grade (commercial MR-grade vs. marine BWP-grade), laminate or acrylic or PU shutter finish, hinge and channel brand tier, and countertop material are all named line items, not a vague 'as per site' allowance that leaves room for later substitution.",
      "Manufacturing modular units — kitchen carcasses, wardrobes, storage systems — off-site in a factory environment rather than building them plank-by-plank on site gives tighter tolerances on fit, squareness and finish consistency, and it means the messiest, longest part of a traditional carpentered interior happens away from your home, not inside it.",
      "On-site work is then largely installation, not fabrication — carpentry fitting, electrical points, false ceiling and final styling — which is why a full 2–3 BHK turnkey interior typically installs in 45–75 working days once design is approved, compared to the months a fully site-carpentered equivalent can take.",
    ],
    specTable: {
      title: "Shutter Finish Comparison",
      note: "Price tier is indicative (₹ lowest, ₹₹₹ highest) — final cost depends on carcass size and hardware selection, fixed in your material sheet.",
      columns: ["Laminate", "Acrylic", "PU (Polyurethane)"],
      rows: [
        { label: "Price Tier", values: ["₹", "₹₹", "₹₹₹"] },
        { label: "Finish", values: ["Matte or textured", "High-gloss, mirror-like", "High-gloss, seamless"] },
        { label: "Scratch Resistance", values: ["Moderate", "Low-moderate — shows fingerprints", "High"] },
        { label: "Edge Banding", values: ["Visible seams possible", "Visible seams possible", "Seamless, no edge banding"] },
        { label: "Best For", values: ["Budget-conscious full-home interiors", "Statement shutters, feature units", "High-traffic kitchens & wardrobes"] },
      ],
    },
    specsSheet: [
      { label: "Avg. Full-home Timeline", value: "45–75 working days" },
      { label: "Hardware Warranty", value: "5 years on soft-close fittings" },
      { label: "Material Sheet Items", value: "80+ specified line items" },
      { label: "3D Design Revisions", value: "Included until approval" },
    ],
    gallery: [
      { src: "/images/interior/design-process-moodboard.jpg", alt: "Material mood board with laminate, hardware and countertop samples for a client interior project", caption: "Material mood board, presented for approval" },
      { src: "/images/interior/design-process-3d-render.jpg", alt: "Photorealistic 3D render of a residential interior presented before manufacturing", caption: "3D design render, pre-manufacturing" },
      { src: "/images/interior/material-plywood-closeup.jpg", alt: "Close-up of BWP-grade plywood carcass material used in modular manufacturing", caption: "BWP-grade plywood carcass" },
      { src: "/images/interior/material-hardware-closeup.jpg", alt: "Close-up of soft-close hinge and channel hardware used in modular units", caption: "Soft-close hardware close-up" },
      { src: "/images/interior/factory-production.jpg", alt: "Modular kitchen and wardrobe units in production inside a factory environment", caption: "Factory production, controlled environment" },
      { src: "/images/interior/site-installation.jpg", alt: "On-site carpentry team installing factory-manufactured modular units", caption: "On-site installation" },
    ],
    designStyles,
    faqs: [
      { question: "Do you handle full-home interiors or just kitchens?", answer: "Both — you can commission a single room like a kitchen, or a complete turnkey home interior across every room." },
      { question: "How long does a full-home interior take?", answer: "A typical 2–3 BHK turnkey interior takes 45–75 working days from design approval to handover, depending on scope." },
      { question: "Can I choose my own material brands?", answer: "Yes, our specification sheet is built around your budget and brand preferences before manufacturing begins." },
      { question: "What's the difference between laminate, acrylic and PU shutter finishes?", answer: "Mainly gloss level, scratch resistance and price tier — see the comparison table above. PU is the most durable and seamless but costs the most; laminate is the most budget-friendly." },
      { question: "Do you offer a warranty on modular hardware?", answer: "Yes, soft-close hinges, channels and hardware typically carry a 5-year warranty — exact terms are specified in your project agreement." },
      { question: "Can I see how my kitchen or wardrobe will actually look before it's built?", answer: "Yes — a photorealistic 3D render of every room is presented and revised until you approve it, before any material is ordered or manufactured." },
      { question: "What design styles do you work in?", answer: "Contemporary, minimalist, classic and industrial are our most-requested directions — see the styles section below — though we adapt to a client's specific taste rather than pushing one house style." },
      { question: "Do you handle electrical and false ceiling work as part of interior execution?", answer: "Yes, electrical point planning, false ceiling design and installation are part of our standard interior execution scope, coordinated with modular installation." },
    ],
    projectCategory: "interior",
  },

  "interior-living-room": {
    slug: "interior-design/living-room",
    division: "interior-design",
    title: "Living Room Design",
    metaTitle: "Living Room Interior Design in Pune | Zemitech Urban",
    metaDescription:
      "Custom living room interior design in Pune — TV units, layered lighting, seating layouts. Designed and built by one team, 18-25 working days.",
    eyebrow: "Interior Design / Living Room",
    heroHeadline: "A living room that works for a normal Tuesday, too.",
    heroSub:
      "Seating, storage, entertainment units and lighting designed for how your family actually spends time — not just how it photographs. Every design includes a full layered lighting plan.",
    heroImage: "/images/interior/hero-living-room.jpg",
    intro: [
      "The living room carries the most competing demands in a home — everyday family time, guests, storage, and often a home office corner. We design around your actual routine first, aesthetics second, using the same measure-then-design process as the rest of our [interior design division](/interior-design).",
      "Every living room design includes a lighting plan, since lighting affects how a space feels more than almost any single furniture choice — see the layered lighting approach in the long-form section below.",
      "Material and hardware choices follow the same fixed specification sheet used across our interior work — see the comparison table below for how plywood grade and hardware tier affect durability and cost in a living room specifically, where TV units and storage see daily use.",
      "If you're planning a living room alongside other rooms — a [kitchen](/interior-design/kitchen) or [bedrooms](/interior-design/bedroom) — we design and schedule them together so lighting circuits, false ceiling levels and material choices stay consistent across the home rather than being decided room by room.",
    ],
    highlights: [
      { title: "TV & entertainment units", description: "Custom-built units sized to your wall and cable/router routing planned in from the start." },
      { title: "False ceiling & lighting design", description: "Layered lighting — ambient, task and accent — planned per activity zone." },
      { title: "Seating & traffic flow", description: "Furniture layout tested against how people actually move through the room." },
      { title: "Storage integration", description: "Concealed storage built into TV units, console tables and window seating." },
    ],
    process: [
      { title: "Space & Lifestyle Assessment", description: "Understanding family size, guest frequency and how the room is used through the day." },
      { title: "Layout & Furniture Planning", description: "Seating, TV unit and traffic-flow layout options presented." },
      { title: "3D Design & Lighting Plan", description: "Photorealistic render including a full lighting layout." },
      { title: "Material & Furniture Finalization", description: "Upholstery, laminate and lighting fixtures finalized against budget." },
      { title: "Execution", description: "Carpentry, false ceiling, electrical and painting carried out on site." },
      { title: "Styling & Handover", description: "Final styling, soft furnishings and walkthrough." },
    ],
    inclusions: [
      "Custom TV / entertainment unit",
      "False ceiling & layered lighting plan",
      "Seating & storage furniture",
      "Electrical & AV point planning",
      "Paint & wall finish execution",
      "Final styling on handover",
    ],
    longFormTitle: "Designing a living room that survives daily use",
    longForm: [
      "A living room that photographs well but doesn't hold up to daily use usually fails in one of three places: lighting that only works for one time of day, traffic flow that forces awkward movement around furniture, or storage that looked sufficient on a mood board but isn't in practice. We design against all three from the layout stage, not as an afterthought once the 'look' is decided.",
      "Lighting is planned in three distinct layers, not one ceiling fixture and hope: ambient lighting for general use, task lighting for reading or work corners, and accent lighting — usually cove or wall-wash — for evenings and when hosting. Each layer is on its own switch or circuit, specifically so the room can shift from bright daytime function to a dimmer evening feel without needing every light on at once.",
      "Traffic flow gets tested against furniture placement before anything is finalized — where people actually walk between the entrance, seating and TV unit, and whether the coffee table or console table sits in that path. This matters more in Pune apartment living rooms specifically, where room dimensions are often tighter than the furniture layouts shown in catalogue photography assume.",
      "TV and entertainment units are sized to the actual wall and viewing distance, with cable and router routing planned into the carcass design from the start — a detail that's easy to skip in a rendering but expensive to retrofit once the unit is installed and wired.",
      "Storage is the layer most families underestimate at the design stage. Concealed storage inside console tables, window seating and TV unit side cabinets adds meaningful capacity without adding visible furniture volume — we ask what actually needs a home in this room (remote controls, board games, files, extra linens) before finalizing the storage plan, not after the unit is built.",
    ],
    specTable: {
      title: "Living Room Material & Hardware Tiers",
      note: "Indicative tiers — exact specification is fixed in your project's material sheet.",
      columns: ["Standard Tier", "Premium Tier"],
      rows: [
        { label: "Plywood Grade", values: ["MR-grade commercial ply", "BWP/BWR marine-grade ply"] },
        { label: "TV Unit Hinges & Channels", values: ["Standard soft-close", "Branded (German-tier) soft-close"] },
        { label: "Laminate Thickness", values: ["0.8 mm", "1 mm"] },
        { label: "Upholstery Fabric", values: ["Standard-wear polyester blend", "Performance fabric / leatherette"] },
      ],
    },
    specsSheet: [
      { label: "Avg. Timeline", value: "18–25 working days" },
      { label: "Lighting Circuits Planned", value: "3 layers — ambient / task / accent" },
      { label: "Plywood Grade", value: "MR or BWP, as specified" },
      { label: "Hardware Warranty", value: "5 years" },
    ],
    gallery: [
      { src: "/images/interior/living-room-tv-unit-closeup.jpg", alt: "Close-up of custom TV unit joinery with concealed cable routing", caption: "TV unit joinery, cable routing concealed" },
      { src: "/images/interior/living-room-lighting-detail.jpg", alt: "Close-up of layered false ceiling lighting with cove and spot fixtures", caption: "Layered ceiling lighting detail" },
      { src: "/images/interior/living-room-seating-layout.jpg", alt: "Living room seating and traffic-flow layout plan being reviewed", caption: "Seating & traffic-flow layout" },
      { src: "/images/interior/living-room-storage-detail.jpg", alt: "Close-up of concealed storage inside a console table unit", caption: "Concealed console storage detail" },
      { src: "/images/interior/living-room-completed-1.jpg", alt: "Completed living room, wide angle showing seating, TV unit and lighting", caption: "Completed living room — wide angle" },
      { src: "/images/interior/living-room-completed-2.jpg", alt: "Completed living room seating corner with layered lighting in the evening", caption: "Seating corner, evening lighting" },
    ],
    designStyles,
    faqs: [
      { question: "Can you design around furniture we already own?", answer: "Yes, tell us what you're keeping and we'll design the layout, storage and lighting around it." },
      { question: "Do you include false ceiling work?", answer: "Yes, false ceiling design and layered lighting are a standard part of our living room scope." },
      { question: "How long does a living room interior take from design to handover?", answer: "Typically 18–25 working days for execution once the 3D design and material sheet are approved." },
      { question: "What's included in a 'layered lighting plan'?", answer: "Ambient, task and accent lighting, each on separate switching where possible, planned per activity zone rather than a single ceiling fixture." },
      { question: "Can you fit a home office corner into a living room design?", answer: "Yes, this is a common request — we plan it as a defined zone with its own lighting and often a slide-away desk unit, rather than an afterthought." },
      { question: "Do you handle painting and wall finishes as part of this scope?", answer: "Yes, paint and wall finish execution is included, coordinated with the carpentry and electrical schedule so nothing gets damaged mid-installation." },
      { question: "What TV sizes do your entertainment units accommodate?", answer: "Units are custom-sized to your actual TV and wall dimensions during design — we don't work off a fixed template, so any size from 43\" to 85\"+ is planned individually." },
      { question: "Can living room design be scheduled together with other rooms?", answer: "Yes, and we recommend it — designing the living room alongside adjoining rooms keeps lighting circuits, ceiling levels and material choices consistent across the home." },
    ],
    projectCategory: "interior",
  },

  "interior-bedroom": {
    slug: "interior-design/bedroom",
    division: "interior-design",
    title: "Bedroom Design",
    metaTitle: "Bedroom Interior Design in Pune | Zemitech Urban",
    metaDescription:
      "Master, kids' & guest bedroom interior design in Pune — custom wardrobes measured to what you own, warm layered lighting, 15-20 day execution.",
    eyebrow: "Interior Design / Bedroom",
    heroHeadline: "Bedrooms designed for actual sleep, actual storage.",
    heroSub:
      "Master bedrooms, kids' rooms and guest rooms — wardrobe systems, study units and lighting sized to the room, not a catalogue photo. We measure what you own before designing what stores it.",
    heroImage: "/images/interior/hero-bedroom.jpg",
    intro: [
      "Bedroom interiors succeed or fail on two things: storage that actually fits what you own, and lighting that doesn't feel like an office at 11pm. We design both around real use, not a showroom mock-up, following the same measure-first process used across our [interior design division](/interior-design).",
      "We design master bedrooms, kids' rooms and guest bedrooms with different priorities for each — a kids' room needs to grow with the child; a guest room needs to work hard in a small footprint. See the long-form section below for how we approach wardrobe planning specifically.",
      "Wardrobe hardware and plywood grade follow the same fixed specification sheet used across our interior work — see the comparison table below for how standard and premium tiers differ in durability, which matters most for wardrobes given their daily use.",
      "Bedrooms are frequently designed alongside a [living room](/interior-design/living-room) or full-home turnkey scope — when they are, we keep hardware brand and finish consistent across rooms so the home doesn't read as stitched together from separate decisions.",
    ],
    highlights: [
      { title: "Custom wardrobe systems", description: "Sliding or hinged wardrobes designed to your actual clothing and storage volume." },
      { title: "Study & work-from-home units", description: "Built-in desks sized for laptops, monitors and cable management." },
      { title: "Warm, layered lighting", description: "Bedside, ambient and wardrobe-interior lighting planned separately." },
      { title: "Kids' room flexibility", description: "Modular storage and furniture that can be reconfigured as children grow." },
    ],
    process: [
      { title: "Storage & Routine Assessment", description: "What you own, how you dress, and how the room needs to function day to day." },
      { title: "Wardrobe & Layout Planning", description: "Wardrobe internals, bed placement and study-unit layout options." },
      { title: "3D Design & Approval", description: "Photorealistic render of the finished room, refined until approved." },
      { title: "Material Finalization", description: "Laminate finish, wardrobe hardware and mattress-compatible bed design finalized." },
      { title: "Execution", description: "Carpentry, electrical, false ceiling and painting on site." },
      { title: "Styling & Handover", description: "Final styling and a walkthrough of every storage system." },
    ],
    inclusions: [
      "Custom wardrobe (sliding or hinged)",
      "Bed & side-table design",
      "Study / work-from-home unit (optional)",
      "Layered bedroom lighting plan",
      "Paint & wall finish execution",
      "Final styling on handover",
    ],
    longFormTitle: "What makes bedroom storage actually work long-term",
    longForm: [
      "Most wardrobe disappointment doesn't come from bad carpentry — it comes from internal proportions that were guessed rather than measured. A wardrobe designed off a standard template (a fixed ratio of hanging rod to shelving) rarely matches what a specific household actually owns, and the mismatch shows up within months as overflow storage stacked on top of the wardrobe or piled on a chair.",
      "Before we design internals, we count hanging garments versus folded garments in the household's current wardrobe. That ratio — not square footage, not a generic template — determines how much of the new wardrobe interior is hanging rod versus shelving versus drawer space, and it's genuinely different for almost every household we've measured.",
      "Kids' rooms get a different design principle entirely: modular, reconfigurable internals rather than a fixed layout, specifically because clothing volume and type (infant folded items versus a teenager's hanging wardrobe) change substantially over a few years. Adjustable shelving lets the same wardrobe carcass be reconfigured rather than replaced as needs change — see the kids' room photo further down this page.",
      "Lighting in a bedroom has to do two contradictory jobs — bright enough for dressing and tasks, warm and dim enough for actual sleep — which is why we plan bedside, ambient and wardrobe-interior lighting as separate circuits rather than one ceiling fixture on a single switch. Wardrobe-interior lighting specifically (motion-sensor LED strips) is a small addition that consistently gets flagged in client feedback as more useful than expected.",
      "Study or work-from-home units, where included, are sized for actual equipment — laptop plus monitor plus cable management — rather than a generic desk width, and positioned away from the bed's direct sightline where possible so the room doesn't read as an office when the desk isn't in use.",
    ],
    specTable: {
      title: "Bedroom Material & Hardware Tiers",
      note: "Indicative tiers — exact specification is fixed in your project's material sheet.",
      columns: ["Standard Tier", "Premium Tier"],
      rows: [
        { label: "Plywood Grade", values: ["MR-grade commercial ply", "BWP/BWR marine-grade ply"] },
        { label: "Wardrobe Hinges & Channels", values: ["Standard soft-close", "Branded (German-tier) soft-close"] },
        { label: "Wardrobe Hardware Finish", values: ["Mild-steel, powder-coated", "Stainless steel"] },
        { label: "Laminate Thickness", values: ["0.8 mm", "1 mm"] },
      ],
    },
    specsSheet: [
      { label: "Avg. Timeline (per room)", value: "15–20 working days" },
      { label: "Wardrobe Hardware Warranty", value: "5 years hardware, 1 year finish" },
      { label: "Standard Wardrobe Depth", value: "24 in (610 mm)" },
      { label: "Internal Layout Options", value: "12+ configurations" },
    ],
    gallery: [
      { src: "/images/interior/bedroom-wardrobe-interior.jpg", alt: "Close-up of wardrobe interior organization with hanging rod, shelving and drawers measured to household clothing volume", caption: "Wardrobe interior, measured to clothing volume" },
      { src: "/images/interior/bedroom-study-unit.jpg", alt: "Built-in bedroom study unit sized for laptop, monitor and cable management", caption: "Built-in study unit" },
      { src: "/images/interior/bedroom-lighting-detail.jpg", alt: "Close-up of warm bedside lighting detail in a master bedroom", caption: "Bedside lighting detail" },
      { src: "/images/interior/bedroom-kids-room.jpg", alt: "Modular kids' room wardrobe with adjustable shelving designed to be reconfigured as the child grows", caption: "Modular kids' room storage" },
      { src: "/images/interior/bedroom-completed-1.jpg", alt: "Completed master bedroom with custom wardrobe and layered lighting", caption: "Completed master bedroom" },
      { src: "/images/interior/bedroom-completed-2.jpg", alt: "Completed guest bedroom designed for a compact footprint", caption: "Completed guest bedroom" },
    ],
    designStyles,
    faqs: [
      { question: "Can wardrobe internals be customized for existing clothing volume?", answer: "Yes — we measure what you own before finalizing shelf, drawer and hanging-rod proportions inside the wardrobe." },
      { question: "Do you design kids' rooms that can be updated later?", answer: "Yes, we use modular storage systems in kids' rooms specifically so furniture can be reconfigured as they grow." },
      { question: "How long does a single bedroom interior take?", answer: "Typically 15–20 working days for execution once the 3D design and material sheet are approved." },
      { question: "Sliding or hinged wardrobe doors — which is better?", answer: "Sliding suits rooms with tight floor clearance since doors don't swing into the room; hinged gives full-width access to shelving. We recommend based on your room dimensions during layout planning." },
      { question: "Can you fit a study desk into a small bedroom?", answer: "Yes, we size built-in study units to actual equipment and available wall space — this is a common request in 1-2 BHK apartments specifically." },
      { question: "What's the standard depth for a wardrobe?", answer: "24 inches (610 mm) is our standard wardrobe depth, sized to fit hanging garments comfortably — adjusted where room dimensions require it." },
      { question: "Do you include wardrobe-interior lighting?", answer: "Yes, motion-sensor LED strip lighting inside wardrobe compartments is available and consistently one of the most-appreciated small additions in client feedback." },
      { question: "Can guest and master bedrooms be designed in the same project?", answer: "Yes — when multiple bedrooms are designed together we keep hardware brand and finish consistent across rooms rather than deciding each in isolation." },
    ],
    projectCategory: "interior",
  },
};

export const constructionSubPages = [
  services["construction-residential"],
  services["construction-commercial"],
  services["construction-infrastructure"],
];

export const interiorSubPages = [
  services["interior-living-room"],
  services["interior-bedroom"],
];
