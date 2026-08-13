export type NavChild = { label: string; href: string; blurb?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Construction",
    href: "/construction",
    children: [
      { label: "Residential Villa Construction", href: "/construction/residential", blurb: "Independent homes & villas" },
      { label: "Structural & Civil Engineering", href: "/construction/structural-civil-engineering", blurb: "Design & engineering" },
      { label: "Turnkey Home Renovation", href: "/construction/renovation", blurb: "Full structural upgrades" },
      { label: "Industrial Warehouses", href: "/construction/industrial", blurb: "Sheds & industrial setups" },
    ],
  },
  {
    label: "Interior Design",
    href: "/interior-design",
    children: [
      { label: "Modular Kitchen Design", href: "/interior-design/kitchen", blurb: "L-shape & island kitchens" },
      { label: "Living Room & Ceilings", href: "/interior-design/living-room", blurb: "TV consoles & family spaces" },
      { label: "Master Bedroom Wardrobes", href: "/interior-design/bedroom", blurb: "Beds & storage solutions" },
      { label: "Turnkey 2BHK & 3BHK", href: "/interior-design/turnkey-home-interiors", blurb: "Full-home interior fit-outs" },
      { label: "Office Interior Fit-Outs", href: "/interior-design/office", blurb: "Workspaces & reception" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerSitemap = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Certifications", href: "/certifications" },
    { label: "Careers", href: "/contact" },
  ],
  construction: [
    { label: "Residential Construction", href: "/construction/residential" },
    { label: "Structural & Civil Engineering", href: "/construction/structural-civil-engineering" },
    { label: "Turnkey Home Renovation", href: "/construction/renovation" },
    { label: "Industrial Warehouses", href: "/construction/industrial" },
  ],
  interior: [
    { label: "Modular Kitchen Design", href: "/interior-design/kitchen" },
    { label: "Living Room & Ceilings", href: "/interior-design/living-room" },
    { label: "Master Bedroom & Wardrobes", href: "/interior-design/bedroom" },
    { label: "Turnkey 2BHK & 3BHK", href: "/interior-design/turnkey-home-interiors" },
    { label: "Office Interior Fit-Outs", href: "/interior-design/office" },
  ],
  resources: [
    { label: "Project Portfolio", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
};
