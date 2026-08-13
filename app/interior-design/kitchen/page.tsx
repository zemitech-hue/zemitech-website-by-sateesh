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
  title: "Modular Kitchen Interior Design | Zemitech Urban",
  description: "Modular Kitchens Designed Around the Way You Cook and Live.",
  alternates: { canonical: "/interior-design/kitchen" },
};

export default function KitchenPage() {
  const relatedProjects = projects.filter((p) => p.category === "interior").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Interior Design", href: "/interior-design" },
    { name: "Modular Kitchen", href: "/interior-design/kitchen" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Modular Kitchens Designed Around the Way You Cook and Live"
        copy="Highly functional, perfectly fitted, and built with materials that withstand Indian cooking."
        primaryCtaText="Design My Kitchen"
        primaryCtaLink="/contact"
        image="/images/interior/hero-kitchen.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Kitchen Layouts */}
      <ServiceProblemCards
        eyebrow="Configurations"
        title="Kitchen Layouts"
        sub="Select the ideal floor plan configuration tailored to your cooking style and floor area."
        cards={[
          {
            title: "L-Shaped",
            image: "/images/interior/kitchen-layout-l-shape.jpg",
            description: "Optimizes corner space along two adjoining walls to form an efficient work triangle between sink, stove, and refrigerator.",
          },
          {
            title: "U-Shaped",
            image: "/images/interior/kitchen-layout-u-shape.jpg",
            description: "Surrounds three sides with expansive countertop surface area and maximized base and wall storage cabinets.",
          },
          {
            title: "Parallel",
            image: "/images/interior/kitchen-layout-parallel.jpg",
            description: "Features two parallel runs of cabinetry, creating an efficient high-productivity corridor ideal for busy homes.",
          },
          {
            title: "Island",
            image: "/images/interior/kitchen-layout-island.jpg",
            description: "Combines an L-shape or straight counter run with a central freestanding island for prep, breakfast dining, and entertaining.",
          },
        ]}
      />

      {/* Section 3 — Kitchen Styles */}
      <ServiceProblemCards
        eyebrow="Aesthetics"
        title="Kitchen Styles"
        sub="Explore curated design styles engineered for modern living."
        cards={[
          {
            title: "Modern Minimalist",
            image: "/images/interior/kitchen-style-modern.jpg",
            description: "Handleless shutters, concealed Gola profiles, integrated appliances, and seamless quartz countertops.",
          },
          {
            title: "Contemporary Warm",
            image: "/images/interior/kitchen-style-contemporary.jpg",
            description: "A modern blend of white acrylic upper shutters paired with warm natural wood grain lower cabinets.",
          },
          {
            title: "Neoclassical White",
            image: "/images/interior/kitchen-style-classic.jpg",
            description: "Refined panelled shutter profiles with subtle brass handles, quartz tops, and crown moulding accents.",
          },
          {
            title: "Industrial Chic",
            image: "/images/interior/kitchen-style-minimal.jpg",
            description: "Matte black hardware accents, exposed open shelving, quartz countertops, and clean subway tile backsplashes.",
          },
        ]}
      />

      {/* Section 4 — Materials & Finishes */}
      <MaterialBoard
        eyebrow="Finishes"
        title="Materials & Finishes"
        materials={[
          { name: "Laminates", image: "/images/interior/kitchen-mat-laminate.jpg" },
          { name: "Veneers", image: "/images/interior/kitchen-mat-veneer.jpg" },
          { name: "Acrylic", image: "/images/interior/kitchen-mat-acrylic.jpg" },
          { name: "Glass", image: "/images/interior/kitchen-mat-glass.jpg" },
        ]}
      />

      {/* Section 5 — CTA */}
      <ServiceFinalCTA
        title="Let's Design Your Kitchen"
        copy="Tell us about your home and let's discuss the right approach for your space."
        primaryCtaText="Design My Kitchen"
      />
    </>
  );
}
