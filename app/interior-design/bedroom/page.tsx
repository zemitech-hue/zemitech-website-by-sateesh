import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";
import MaterialBoard from "@/components/sections/MaterialBoard";
import EditorialGallery from "@/components/sections/EditorialGallery";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Master Bedroom Wardrobes & Beds | Zemitech Urban",
  description: "Master Bedrooms Designed for Comfort, Storage and Calm.",
  alternates: { canonical: "/interior-design/bedroom" },
};

export default function BedroomPage() {
  const relatedProjects = projects.filter((p) => p.category === "interior").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Interior Design", href: "/interior-design" },
    { name: "Master Bedroom", href: "/interior-design/bedroom" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Master Bedrooms Designed for Comfort, Storage and Calm"
        copy="Custom beds, integrated wardrobes, and thoughtful layouts that maximize space without clutter."
        primaryCtaText="Design My Bedroom"
        primaryCtaLink="/contact"
        image="/images/interior/hero-bedroom.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Bedroom Elements */}
      <ServiceProblemCards
        eyebrow="Components"
        title="Bedroom Elements"
        sub="Tailored bedroom components crafted for comfort, quiet luxury, and smart storage."
        cards={[
          {
            title: "Master Beds & Headboards",
            image: "/images/interior/bedroom-master-bed.jpg",
            description: "King and queen platform beds with integrated upholstered cushion backrests and concealed warm backlighting.",
          },
          {
            title: "Floor-to-Ceiling Wardrobes",
            image: "/images/interior/bedroom-sliding-wardrobe.jpg",
            description: "Custom measured wardrobe units with dedicated hanging rails, sensor-activated LED strips, and internal drawers.",
          },
          {
            title: "Walk-In Closets & Storage",
            image: "/images/interior/bedroom-walkin-closet.jpg",
            description: "Spacious walk-in closet configurations with glass-top vanity drawers, open display shelves, and accessory racks.",
          },
          {
            title: "Bedside Units & Study Nooks",
            image: "/images/interior/bedroom-study-nook.jpg",
            description: "Floating bedside drawer units and integrated WFH study desks crafted to match the room's timber veneer finish.",
          },
        ]}
      />

      {/* Section 3 — Wardrobe Solutions */}
      <ServiceProblemCards
        eyebrow="Configurations"
        title="Wardrobe Solutions"
        sub="Precision engineered wardrobe shutter and storage systems designed around your wardrobe inventory."
        cards={[
          {
            title: "Sliding Door Systems",
            image: "/images/interior/bedroom-sliding-wardrobe.jpg",
            description: "Smooth aluminium tracking sliding shutters designed to maximize bedroom floor space in compact rooms.",
          },
          {
            title: "Hinged Door Wardrobes",
            image: "/images/interior/bedroom-completed-2.jpg",
            description: "Full 90-degree opening shutters with soft-close hinges for complete 100% internal closet visibility.",
          },
          {
            title: "Walk-in Dressing Rooms",
            image: "/images/interior/bedroom-walkin-closet.jpg",
            description: "Bespoke open shelving and glass display islands creating a boutique luxury dressing room experience.",
          },
          {
            title: "Hydraulic Bed Storage",
            image: "/images/interior/bedroom-master-bed.jpg",
            description: "Easy-lift hydraulic bed frames providing dust-sealed under-bed storage for extra bedding and heavy luggage.",
          },
        ]}
      />

      {/* Section 4 — Materials & Finishes */}
      <MaterialBoard
        eyebrow="Selections"
        title="Materials & Finishes"
        materials={[
          { name: "Veneers", image: "/images/interior/kitchen-mat-veneer.jpg" },
          { name: "Laminates", image: "/images/interior/kitchen-mat-laminate.jpg" },
          { name: "Wood Textures", image: "/images/interior/joinery-fluted-panel.jpg" },
          { name: "Hardware", image: "/images/interior/bedroom-sliding-wardrobe.jpg" },
        ]}
      />

      {/* Section 5 — CTA */}
      <ServiceFinalCTA
        title="Ready to Design Your Bedroom?"
        copy="Tell us about your requirements and let's create your personal sanctuary."
        primaryCtaText="Book Free Consultation"
      />
    </>
  );
}
