// Single source of truth for company facts.
// Editing this file (or the equivalent row in the admin "Site Settings" panel
// once wired to Supabase) updates the footer, contact page, and structured data everywhere.

export const company = {
  legalName: "Zemitech Urban Private Limited",
  brandName: "Zemitech Urban",
  tagline: "Building & Renovation",
  founded: 2019,
  gstin: "27AACCZ5366K1Z5",
  domain: "zemitechurban.com",
  logo: "/images/brand/zemitech-urban-logo.png",

  phonePrimary: "+91 99990 67709",
  phonePrimaryHref: "tel:+919999067709",
  whatsappNumber: "919999067709",
  emailPrimary: "zemitechurban@gmail.com",
  emailSecondary: "zemitech2019@gmail.com",

  address: {
    line1: "Office No. 15/1, Samarth Sankul",
    line2: "Narhe, Pune – 411041",
    state: "Maharashtra",
    country: "India",
    mapEmbedQuery: "Samarth Sankul, Narhe, Pune 411041",
  },

  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 6:30 PM" },
    { day: "Sunday", time: "By appointment only" },
  ],

  social: {
    instagram: "https://instagram.com/zemitechurban",
    facebook: "https://facebook.com/zemitechurban",
    youtube: "https://youtube.com/@zemitechurban",
    linkedin: "https://linkedin.com/company/zemitech-urban",
  },

  stats: [
    { value: "240+", label: "Projects Completed" },
    { value: "8,300+", label: "Hours on Site" },
    { value: "6+", label: "Years of Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ],

  // Neighbourhoods/areas actively served — sourced from the project location
  // data in lib/data/projects.ts, reused for local-SEO content blocks (Home,
  // Construction overview, Interior Design overview, Contact) instead of a
  // generic "we serve Pune" line.
  areasServed: [
    "Narhe",
    "Kondhwa",
    "Wagholi",
    "Hinjewadi",
    "Baner",
    "Viman Nagar",
    "Pirangut",
  ],

  divisions: [
    {
      slug: "construction",
      name: "Construction",
      shortName: "Construction",
      description:
        "Residential, commercial and infrastructure construction — from foundation to finish, managed end-to-end by our own site teams.",
    },
    {
      slug: "interior-design",
      name: "Interior Design",
      shortName: "Interior Design",
      description:
        "Full-home and commercial interior design and execution, from modular kitchens to complete turnkey fit-outs.",
    },
  ],
};

export type Company = typeof company;
