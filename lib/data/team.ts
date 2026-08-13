export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Er. Manish K. Sah",
    role: "Director",
    bio: "Leads project delivery and client relationships across Zemitech Urban's construction division, with oversight of site execution standards.",
  },
  {
    name: "Er. Ashutosh Kumar",
    role: "Director",
    bio: "Oversees engineering, structural planning and technical compliance across residential, commercial and infrastructure projects.",
  },
  {
    name: "Dr. Kumar S. Chandra",
    role: "Principal Adviser",
    bio: "Provides strategic and technical advisory across major projects, with a focus on sustainability and long-term asset quality.",
  },
];

export const departments = [
  {
    name: "Construction & Site Engineering",
    description: "Structural engineering, site supervision and quality control across every active site.",
  },
  {
    name: "Interior Design & Execution",
    description: "Design, 3D visualization, material sourcing and modular manufacturing.",
  },
  {
    name: "Project Management",
    description: "Single point of contact per project — scheduling, vendor coordination and client reporting.",
  },
  {
    name: "Compliance & Approvals",
    description: "Municipal approvals, fire NOC, structural certification and documentation.",
  },
];

// Role-based team functions beyond the three named leaders — described
// honestly as functions/headcount ranges rather than fabricated individuals,
// since we don't publish junior staff profiles.
export const widerTeam = [
  {
    role: "Site Engineers",
    count: "8–10 across active sites",
    description: "Present daily on residential, commercial and infrastructure sites, reporting structural and stage progress directly to the project manager.",
  },
  {
    role: "Interior Designers",
    count: "4–6",
    description: "Handle measurement, mood-boarding and 3D design for every interior project, from a single kitchen to a full-home turnkey scope.",
  },
  {
    role: "Project Coordinators",
    count: "3–5",
    description: "The single point of contact clients deal with day to day — scheduling, vendor coordination and weekly reporting.",
  },
  {
    role: "Quality Inspectors",
    count: "2–3",
    description: "Independent of the execution team, responsible for stage-wise quality checks and photo documentation before sign-off.",
  },
  {
    role: "Factory & Production Staff",
    count: "10–14",
    description: "Manufacture modular kitchen, wardrobe and storage units off-site in our controlled factory environment.",
  },
  {
    role: "Design & Drafting Team",
    count: "3–4",
    description: "Produce structural, MEP and architectural drawings, and coordinate municipal approval documentation.",
  },
];
