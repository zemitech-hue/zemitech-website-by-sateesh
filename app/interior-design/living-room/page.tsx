import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";
import MaterialBoard from "@/components/sections/MaterialBoard";
import EditorialGallery from "@/components/sections/EditorialGallery";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Living Room TV Consoles & Ceilings | Zemitech Urban",
  description: "Living Rooms Designed Around Your Space, Style and Everyday Life.",
  alternates: { canonical: "/interior-design/living-room" },
};

export default function LivingRoomPage() {
  const relatedProjects = projects.filter((p) => p.category === "interior").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Interior Design", href: "/interior-design" },
    { name: "Living Room", href: "/interior-design/living-room" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Living Rooms Designed Around Your Space, Style and Everyday Life"
        copy="Creating the perfect central hub for your home with integrated storage, lighting, and bespoke media units."
        primaryCtaText="Design Your Living Room"
        primaryCtaLink="/contact"
        image="/images/interior/Living Rooms.png"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Living Room Elements */}
      <ServiceProblemCards
        eyebrow="Components"
        title="Living Room Elements"
        sub="Bespoke elements designed to transform your central living space into an inviting, high-end sanctuary."
        cards={[
          {
            title: "TV Entertainment Units",
            image: "/images/interior/living-tv-console-unit.jpg",
            description: "Custom floating TV consoles with concealed AV cable channels, LED backlighting, and marble or veneer feature backdrops.",
          },
          {
            title: "Feature Wall Panelling",
            image: "/images/interior/living-wall-panelling.jpg",
            description: "Bespoke fluted wood, metallic accent trims, and acoustic wall panels that add architectural depth to the room.",
          },
          {
            title: "False Ceilings & Lighting",
            image: "/images/interior/living-false-ceiling.jpg",
            description: "Layered 3-circuit ceiling lighting combining indirect warm LED cove strips, magnetic track lights, and focal pendants.",
          },
          {
            title: "Concealed Storage Systems",
            image: "/images/interior/living-concealed-storage.jpg",
            description: "Flush handleless cabinetry and crockery display units integrated seamlessly into the living room walls.",
          },
        ]}
      />

      {/* Section 3 — Wall Treatments */}
      <ServiceProblemCards
        eyebrow="Textures"
        title="Wall Treatments"
        sub="Premium materials and surface finishes engineered for elegance and acoustic warmth."
        cards={[
          {
            title: "Natural Wood Veneer",
            image: "/images/interior/kitchen-mat-veneer.jpg",
            description: "Book-matched natural wood veneers sealed with matte polyurethane polish for a warm tactile feel.",
          },
          {
            title: "Italian Calacatta Marble",
            image: "/images/interior/living-tv-console-unit.jpg",
            description: "Polished Italian marble slabs creating a dramatic centerpiece wall behind main TV media displays.",
          },
          {
            title: "Fluted Panelling & Slats",
            image: "/images/interior/living-wall-panelling.jpg",
            description: "Precision CNC cut vertical timber flutes adding modern depth and acoustic damping.",
          },
          {
            title: "Minimalist Two-Tone Paint",
            image: "/images/interior/living-concealed-storage.jpg",
            description: "Smooth washable acrylic emulsion paint in subtle off-white and warm beige tones.",
          },
        ]}
      />

      {/* Section 4 — Material Board */}
      <MaterialBoard
        eyebrow="Finishes"
        title="Material Board"
        materials={[
          { name: "Veneer", image: "/images/interior/kitchen-mat-veneer.jpg" },
          { name: "Fluted Panels", image: "/images/interior/living-wall-panelling.jpg" },
          { name: "Laminates", image: "/images/interior/kitchen-mat-laminate.jpg" },
          { name: "Stone Tops", image: "/images/interior/living-tv-console-unit.jpg" },
        ]}
      />

      {/* Section 5 — CTA */}
      <ServiceFinalCTA
        title="Ready to Design Your Living Room?"
        copy="Tell us about your space and let's create a stunning centerpiece for your home."
        primaryCtaText="Book Free Consultation"
      />
    </>
  );
}
