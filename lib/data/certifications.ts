export type Certification = {
  name: string;
  issuer: string;
  description: string;
  icon: "gst" | "iso" | "safety" | "registration";
};

export const certifications: Certification[] = [
  {
    name: "GST Registration",
    issuer: "Government of India",
    description: "Registered under GSTIN 27AACCZ5366K1Z5, compliant for all commercial billing and contracts.",
    icon: "gst",
  },
  {
    name: "Company Registration",
    issuer: "Ministry of Corporate Affairs",
    description: "Zemitech Urban Private Limited is a registered private limited company operating since 2019.",
    icon: "registration",
  },
  {
    name: "Site Safety Compliance",
    issuer: "Internal Safety Standard",
    description: "All active sites follow documented safety protocols including PPE enforcement and periodic audits.",
    icon: "safety",
  },
  {
    name: "Quality Assurance Process",
    issuer: "Internal QA Standard",
    description: "Stage-wise quality checks documented and photo-logged at every major construction and interior milestone.",
    icon: "iso",
  },
];

export const affiliations = [
  "Builders Association of India (regional membership — verify before publishing)",
  "Confederation of Real Estate Developers' Associations of India (verify before publishing)",
];

export type QualityCheckStage = {
  stage: string;
  inspects: string[];
  image: string;
  alt: string;
};

// What our stage-wise quality inspection actually looks at, milestone by
// milestone — construction and interior are checked separately since the
// failure modes at each stage are different.
export const qualityProcess: QualityCheckStage[] = [
  {
    stage: "Foundation & Structure",
    inspects: [
      "Reinforcement placement and spacing against structural drawings, before concrete is poured",
      "Concrete mix consistency and curing time compliance",
      "Column and slab alignment against approved layout",
    ],
    image: "/images/certifications/cert-1.png",
    alt: "Structural quality check inspecting reinforcement placement before a concrete pour",
  },
  {
    stage: "Electrical & Plumbing (MEP)",
    inspects: [
      "Wiring gauge and conduit routing against the electrical layout",
      "Earthing and circuit load testing before walls are closed",
      "Plumbing pressure testing at all wet-area points",
    ],
    image: "/images/certifications/cert-2.png",
    alt: "Electrical quality check testing wiring and circuit load before walls are closed",
  },
  {
    stage: "Finishing & Waterproofing",
    inspects: [
      "Waterproofing membrane continuity at all wet areas and the roof slab",
      "Tile/flooring level and grout consistency",
      "Paint coat count and surface preparation",
    ],
    image: "/images/certifications/cert-3.png",
    alt: "Finishing quality check reviewing tile level, grout consistency and paint surface preparation",
  },
  {
    stage: "Interior Installation",
    inspects: [
      "Modular unit fit, alignment and hardware function (hinges, channels, soft-close)",
      "Material and finish match against the approved specification sheet",
      "Punch-list closure before final handover",
    ],
    image: "/images/certifications/cert-4.png",
    alt: "Interior installation quality check verifying modular unit alignment and hardware function",
  },
];

export const siteSafetyImage = {
  src: "/images/certifications/cert-5.png",
  alt: "Site workers wearing PPE — helmets, safety vests and boots — as required by Zemitech Urban's site safety standard",
};
