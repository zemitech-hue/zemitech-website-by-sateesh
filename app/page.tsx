import type { Metadata } from "next";
import HeroCarousel from "@/components/sections/HeroCarousel";
import HeroFeatureBar from "@/components/sections/HeroFeatureBar";
import AboutHomeSection from "@/components/sections/AboutHomeSection";
import AboutTeamSection from "@/components/sections/AboutTeamSection";
import WhyChooseUsHomeSection from "@/components/sections/WhyChooseUsHomeSection";
import HomeServicesSection from "@/components/sections/HomeServicesSection";
import ProjectProcessTimeline from "@/components/sections/ProjectProcessTimeline";
import CostCalculator from "@/components/sections/CostCalculator";
import StatsStrip from "@/components/sections/StatsStrip";
import Marquee from "@/components/sections/Marquee";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BottomCalloutBanner from "@/components/sections/BottomCalloutBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/sections/ProjectCard";
import JsonLd, { faqJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { getProjects } from "@/lib/supabase/queries";
import { homeFaqs } from "@/lib/data/home";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "Zemitech Urban — Construction, Interior & Architecture Solutions in Pune",
  description: "Zemitech Urban delivers residential villa construction, structural engineering, turnkey home interiors & architectural design across Pune with 100% in-house engineering.",
  alternates: { canonical: "/" },
};

export const revalidate = 60;

export default async function HomePage() {
  const featuredProjects = await getProjects(6);

  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />

      {/* 1. HERO CAROUSEL BANNER */}
      <HeroCarousel />

      {/* 2. 4 FEATURE STRIP (Quality Construction, Modern Architecture, Elegant Interiors, On-Time Delivery) */}
      <HeroFeatureBar />

      {/* 3. ABOUT ZEMITECH URBAN SECTION */}
      <AboutHomeSection />

      {/* 3B. CONTINUOUS SCROLLING TEAM MEMBERS SECTION */}
      <AboutTeamSection />

      {/* 4. WHY CHOOSE US SECTION (6 ICON GRID + ROOM SHOWCASE PHOTO) */}
      <WhyChooseUsHomeSection />

      {/* 5. OUR SERVICES SECTION (Construction, Architecture, Interior Design) */}
      <HomeServicesSection />

      {/* 6. OUR PROJECT PROCESS SECTION (6 STEPS: Consultation to Handover) */}
      <ProjectProcessTimeline />

      {/* 7. DYNAMIC COST CALCULATOR */}
      <CostCalculator />

      {/* 8. FEATURED PROJECTS SECTION (Spaces We've Built) */}
      <section className="py-20 bg-slate-50/80 border-b border-slate-200">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <SectionHeading
              eyebrow="Our Projects"
              title="Spaces We've Built"
              sub="A sample of recently completed residential villas, commercial spaces, and turnkey home interiors across Pune."
              align="left"
            />
            <Button href="/projects" variant="primary" showArrow className="shrink-0 font-black">
              View All Projects
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* 9. STANDALONE STATS STRIP & MARQUEE */}
      <StatsStrip />
      <Marquee />

      {/* 10. WHAT OUR CLIENTS SAY (TESTIMONIALS) */}
      <TestimonialsSection />

      {/* 11. FAQ ACCORDION SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
          <div className="mt-10">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </Container>
      </section>

      {/* 12. BOTTOM CALLOUT BANNER (Let's Create Something Great Together) */}
      <BottomCalloutBanner />
    </>
  );
}
