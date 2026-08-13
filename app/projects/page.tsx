import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Project Portfolio",
  description:
    "15+ completed residential, commercial, infrastructure & interior design projects across Narhe, Kondhwa, Wagholi, Hinjewadi and wider Pune — filter by category.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        headline="Projects across construction and interior design"
        sub="A sample of recently completed residential, commercial, infrastructure and interior work across Pune."
        image="/images/projects/hero-projects.jpg"
        breadcrumbs={[{ name: "Projects", href: "/projects" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ProjectsGrid projects={projects} />
        </Container>
      </section>
      <CTASection title="Have a project in mind?" sub="Tell us about it and we'll follow up with next steps." />
    </>
  );
}
