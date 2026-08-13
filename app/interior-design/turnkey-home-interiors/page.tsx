import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import RoomByRoomInteractive from "@/components/sections/RoomByRoomInteractive";
import MaterialBoard from "@/components/sections/MaterialBoard";
import CostFactorsList from "@/components/sections/CostFactorsList";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import { projects } from "@/lib/data/projects";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Turnkey 2BHK & 3BHK Home Interiors | Zemitech Urban",
  description: "Complete 2BHK & 3BHK Interiors, Designed and Executed by One Team.",
  alternates: { canonical: "/interior-design/turnkey-home-interiors" },
};

export default function TurnkeyInteriorsPage() {
  const relatedProjects = projects.filter((p) => p.category === "interior").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Interior Design", href: "/interior-design" },
    { name: "Turnkey Home Interiors", href: "/interior-design/turnkey-home-interiors" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Complete 2BHK & 3BHK Interiors, Designed and Executed by One Team"
        copy="One single point of contact for design, manufacturing, civil adjustments, and final fit-out."
        primaryCtaText="Plan My Home Interiors"
        primaryCtaLink="/contact"
        image="/images/interior/hero-turnkey.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — What's Included? (Using RoomByRoomInteractive) */}
      <RoomByRoomInteractive
        eyebrow="Scope"
        title="What's Included?"
        sub="A detailed breakdown of our room-by-room design and fit-out capabilities."
        rooms={[
          {
            name: "Living Room",
            image: "/images/interior/living-tv-console-unit.jpg",
            scope: ["TV unit design & execution", "False ceiling & lighting", "Wall treatments & panels", "Custom display units"],
          },
          {
            name: "Modular Kitchen",
            image: "/images/interior/kitchen-layout-l-shape.jpg",
            scope: ["Cabinetry & storage", "Countertop integration", "Hardware & accessories", "Appliance housing"],
          },
          {
            name: "Master Bedroom",
            image: "/images/interior/bedroom-master-bed.jpg",
            scope: ["Custom wardrobe", "Designer bed & headboard", "Side tables", "Dresser unit"],
          },
          {
            name: "Guest/Kids Bedroom",
            image: "/images/interior/bedroom-study-nook.jpg",
            scope: ["Storage & wardrobes", "Bed frame", "Study table", "Space planning"],
          },
          {
            name: "Dining Area",
            image: "/images/interior/joinery-fluted-panel.jpg",
            scope: ["Crockery units", "Feature wall", "Lighting selection", "Dining layout"],
          },
        ]}
      />

      {/* Section 3 — Specific Services */}
      <ServiceProblemCards
        eyebrow="Explore More"
        title="Specific Services"
        sub="Explore specialized interior design solutions for individual rooms in your home."
        cards={[
          {
            title: "Modular Kitchens",
            image: "/images/interior/kitchen-layout-l-shape.jpg",
            description: "Custom L-shape, parallel and island modular kitchens built with marine-grade BWP plywood and soft-close hardware.",
          },
          {
            title: "Living Room Interiors",
            image: "/images/interior/living-tv-console-unit.jpg",
            description: "Entertainment TV wall units, 3-circuit ceiling lighting, accent veneer panelling, and traffic-flow seating.",
          },
          {
            title: "Bedroom Interiors",
            image: "/images/interior/bedroom-master-bed.jpg",
            description: "Custom platform beds, full-height sliding door wardrobes, vanity dressers, and integrated WFH study desks.",
          },
          {
            title: "Custom Wood Joinery",
            image: "/images/interior/joinery-fluted-panel.jpg",
            description: "Bespoke fluted wood wall panels, natural wood veneer feature walls, and CNC architectural woodwork.",
          },
        ]}
      />

      {/* Section 4 — Materials & Finishes */}
      <MaterialBoard
        eyebrow="Library"
        title="Materials & Finishes"
        materials={[
          { name: "Wood & Veneers", image: "/images/interior/kitchen-mat-veneer.jpg" },
          { name: "Laminates", image: "/images/interior/kitchen-mat-laminate.jpg" },
          { name: "Lighting", image: "/images/interior/living-false-ceiling.jpg" },
          { name: "Countertops", image: "/images/interior/kitchen-layout-island.jpg" },
        ]}
      />

      {/* Section 5 — Final CTA */}
      <ServiceFinalCTA
        title="Ready to Design Your Complete Home?"
        copy="Tell us about your home and let's discuss the right approach."
        primaryCtaText="Get a Free Interior Consultation"
      />
    </>
  );
}
