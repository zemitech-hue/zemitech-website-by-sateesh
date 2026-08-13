export type HeroSlide = {
  eyebrow: string;
  headline: string;
  sub: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  tag: "Construction" | "Interior Design";
};

// Powers the dynamically scrolling homepage hero banner. Add/reorder slides here
// (or from Admin → Homepage Banner once wired to Supabase) — the carousel auto-advances.
export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Construction Division",
    headline: "Structures built to outlast the blueprint.",
    sub: "240+ residential, commercial and infrastructure projects delivered across Pune with in-house site teams.",
    image: "/images/home/hero-1-construction.jpg",
    ctaLabel: "Explore Construction Services",
    ctaHref: "/construction",
    tag: "Construction",
  },
  {
    eyebrow: "Interior Design Division",
    headline: "Interiors designed and built by the same team.",
    sub: "From a single modular kitchen to a full turnkey home — 3D-approved before a single panel is cut.",
    image: "/images/home/hero-2-interior.jpg",
    ctaLabel: "Explore Interior Design",
    ctaHref: "/interior-design",
    tag: "Interior Design",
  },
  {
    eyebrow: "Residential Construction",
    headline: "A home built around how you actually live.",
    sub: "Vastu-aware layouts, stage-wise billing, and a single project manager from foundation to handover.",
    image: "/images/home/hero-3-residential.jpg",
    ctaLabel: "See Residential Projects",
    ctaHref: "/construction/residential",
    tag: "Construction",
  },
  {
    eyebrow: "Kitchen Design",
    headline: "The one room everyone actually uses.",
    sub: "Modular, parallel and L-shape kitchens — factory-built carcasses, soft-close hardware as standard.",
    image: "/images/home/hero-4-kitchen.jpg",
    ctaLabel: "Explore Kitchen Design",
    ctaHref: "/interior-design/kitchen",
    tag: "Interior Design",
  },
  {
    eyebrow: "Commercial Construction",
    headline: "Commercial space that opens on schedule.",
    sub: "Offices, retail and IT park fit-outs sequenced backwards from your opening date, with MEP trades coordinated on one drawing.",
    image: "/images/home/hero-5-commercial.jpg",
    ctaLabel: "Explore Commercial Construction",
    ctaHref: "/construction/commercial",
    tag: "Construction",
  },
  {
    eyebrow: "Infrastructure Projects",
    headline: "Infrastructure that carries a whole community.",
    sub: "Township roads, drainage and amenity blocks phased around your sales and possession timeline, not ours.",
    image: "/images/home/hero-6-infrastructure.jpg",
    ctaLabel: "Explore Infrastructure Projects",
    ctaHref: "/construction/infrastructure",
    tag: "Construction",
  },
  {
    eyebrow: "Living Room Design",
    headline: "A living room that works for a normal Tuesday, too.",
    sub: "Seating, storage and a full layered lighting plan designed around your actual routine, not just how it photographs.",
    image: "/images/home/hero-7-living-room.jpg",
    ctaLabel: "Explore Living Room Design",
    ctaHref: "/interior-design/living-room",
    tag: "Interior Design",
  },
];

export const homeUsps = [
  {
    title: "One team, start to finish",
    description: "Design, engineering, execution and interiors handled in-house — not stitched together across sub-contractors.",
  },
  {
    title: "Transparent, fixed-scope pricing",
    description: "Detailed BOQ or material sheet agreed before work starts. No vague 'finishing' lump sums.",
  },
  {
    title: "Weekly, photo-logged reporting",
    description: "You always know where your site or interior installation actually stands.",
  },
  {
    title: "6+ years, 240+ projects",
    description: "Across residential, commercial, infrastructure and interior work throughout Pune.",
  },
  {
    title: "In-house site supervision",
    description: "Core crews report to our own project managers daily — not a rotating cast of anonymous subcontractors.",
  },
  {
    title: "Post-handover accountability",
    description: "Defect liability on construction and hardware warranty on interiors — support doesn't end at handover.",
  },
];

export type VisualStep = { title: string; description: string; image: string; alt: string };

// Company-wide "How We Work" narrative — distinct from the per-service
// ProcessSteps text list on each construction/interior page.
export const howWeWork: VisualStep[] = [
  {
    title: "Consult",
    description: "A free site visit or call to understand your brief, budget and timeline — no obligation to proceed.",
    image: "/images/home/how-we-work-1-consult.jpg",
    alt: "Zemitech Urban team conducting a free client consultation and site visit",
  },
  {
    title: "Design",
    description: "Structural drawings or 3D renders, refined until you approve the final layout and material sheet.",
    image: "/images/home/how-we-work-2-design.jpg",
    alt: "Design and 3D approval stage with client reviewing renders",
  },
  {
    title: "Build",
    description: "Our own site or factory teams execute against the approved plan, with weekly photo-logged updates.",
    image: "/images/home/how-we-work-3-build.jpg",
    alt: "Construction and execution stage with site team at work",
  },
  {
    title: "Handover",
    description: "Final walkthrough, snag-list closure, and documentation — followed by post-handover support.",
    image: "/images/home/how-we-work-4-handover.jpg",
    alt: "Handover and final walkthrough stage with client and project manager",
  },
];

export const homeFaqs = [
  { question: "Which areas do you operate in?", answer: "We're based in Narhe, Pune, and take on construction and interior projects across Narhe, Kondhwa, Wagholi, Hinjewadi, Baner, Viman Nagar, Pirangut and the wider Pune region." },
  { question: "Can you handle both construction and interiors for the same project?", answer: "Yes — many of our clients start with construction and move directly into our interior design division for a fully coordinated handover." },
  { question: "How do I get a quote?", answer: "Share your requirement through the enquiry form or WhatsApp, and we'll schedule a site visit or call to scope your project before quoting." },
  { question: "Do you offer free consultations?", answer: "Yes, an initial consultation and site assessment is free and comes with no obligation." },
  { question: "Do you work with landowners, developers, and individual homeowners?", answer: "Yes, all three — from a single independent home to township-scale infrastructure work for developers." },
  { question: "How is Zemitech Urban different from hiring a separate architect and contractor?", answer: "We run construction and interior design as one accountable company with one project manager per project, rather than you coordinating separate firms and absorbing the gaps between them." },
  { question: "What's your typical response time to an enquiry?", answer: "We aim to respond within one business day and schedule a site visit or call shortly after, depending on your availability." },
  { question: "Is a quote free, and does requesting one commit me to anything?", answer: "Yes, quotes and initial site assessments are free with no obligation to proceed — we're happy to just talk through your project first." },
];
