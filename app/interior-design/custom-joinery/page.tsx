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
  title: "Custom Wood & Veneer Wall Joinery | Zemitech Urban",
  description: "Custom Joinery Designed Down to the Detail.",
  alternates: { canonical: "/interior-design/custom-joinery" },
};

export default function CustomJoineryPage() {
  const relatedProjects = projects.filter((p) => p.category === "interior").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Interior Design", href: "/interior-design" },
    { name: "Custom Joinery", href: "/interior-design/custom-joinery" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Custom Joinery Designed Down to the Detail"
        copy="Bespoke woodwork, paneling, and furniture crafted with precision and premium materials."
        primaryCtaText="Discuss a Custom Requirement"
        primaryCtaLink="/contact"
        image="/images/interior/hero-joinery.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — What We Create */}
      <ServiceProblemCards
        eyebrow="Capabilities"
        title="What We Create"
        sub="Bespoke architectural woodworking and custom joinery crafted to millimeter precision."
        cards={[
          {
            title: "Bespoke Fluted Wall Panelling",
            image: "/images/interior/joinery-fluted-panel.jpg",
            description: "Precision CNC slatted vertical wood panels with concealed LED warm cove lighting and hidden door integration.",
          },
          {
            title: "Media Consoles & TV Backdrops",
            image: "/images/interior/joinery-media-console.jpg",
            description: "Custom entertainment units combining Italian marble backings, veneer storage cabinets, and concealed wire conduits.",
          },
          {
            title: "Architectural Wardrobe Systems",
            image: "/images/interior/joinery-wardrobe-system.jpg",
            description: "Floor-to-ceiling sliding and hinged wardrobe shutters custom-manufactured in factory with soft-close hardware.",
          },
          {
            title: "Custom Woodwork & Partitions",
            image: "/images/interior/joinery-lattice-partition.jpg",
            description: "Decorative CNC lattice partitions, acoustic wood slatted divider screens, and custom furniture joinery.",
          },
        ]}
      />

      {/* Section 3 — Veneer & Material Selection */}
      <MaterialBoard
        eyebrow="Library"
        title="Veneer & Material Selection"
        materials={[
          { name: "Natural Wood Textures", image: "/images/interior/joinery-fluted-panel.jpg" },
          { name: "Veneers", image: "/images/interior/kitchen-mat-veneer.jpg" },
          { name: "Laminates", image: "/images/interior/kitchen-mat-laminate.jpg" },
          { name: "Finishes", image: "/images/interior/joinery-media-console.jpg" },
        ]}
      />

      {/* Section 4 — Detail Matters */}
      <EditorialGallery
        eyebrow="Craftsmanship"
        title="Detail Matters"
        images={[
          { src: "/images/interior/joinery-fluted-panel.jpg", caption: "Wood grain matching" },
          { src: "/images/interior/kitchen-mat-veneer.jpg", caption: "Seamless joints" },
          { src: "/images/interior/joinery-media-console.jpg", caption: "Perfect edge banding" },
          { src: "/images/interior/joinery-wardrobe-system.jpg", caption: "Flush handles" },
        ]}
      />

      {/* Section 5 — CTA */}
      <ServiceFinalCTA
        title="Have a Custom Joinery Requirement?"
        copy="Tell us about your interior requirement and let's discuss the right approach."
        primaryCtaText="Start a Conversation"
      />
    </>
  );
}
