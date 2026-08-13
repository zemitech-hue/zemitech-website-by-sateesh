import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HeroCarousel from "@/components/sections/HeroCarousel";
import StatsStrip from "@/components/sections/StatsStrip";
import Marquee from "@/components/sections/Marquee";
import ServiceCarousel from "@/components/sections/ServiceCarousel";
import ProjectCard from "@/components/sections/ProjectCard";
import BlogCard from "@/components/sections/BlogCard";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import StepsWithImages from "@/components/sections/StepsWithImages";
import AreasServedSection from "@/components/sections/AreasServedSection";
import JsonLd, { faqJsonLd } from "@/components/JsonLd";
import { homeUsps, homeFaqs, howWeWork } from "@/lib/data/home";
import { projects } from "@/lib/data/projects";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Construction & Interior Design Company in Pune",
  description:
    "Zemitech Urban delivers residential, commercial & infrastructure construction and interior design across Pune — one team, from foundation to final styling.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      
      {/* 1. Hero Section — Left Center Text with Soft Radial Scrim */}
      <HeroCarousel />

      {/* 2. Our Divisions — Placed Directly After Hero Section with 6 Services Each */}
      <section className="py-20 relative bg-white border-b border-slate-200">
        <Container>
          <SectionHeading eyebrow="Our Divisions" title="Two divisions, one point of contact" align="center" />
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <DivisionCard
              tag="Construction"
              title="Construction Services"
              description="Residential, commercial and infrastructure construction — in-house site teams, fixed-scope BOQ, weekly reporting."
              href="/construction"
              image="/images/home/division-construction.jpg"
              links={[
                { label: "Residential Villa Construction", href: "/construction/residential" },
                { label: "Commercial Office Fit-Outs", href: "/construction/commercial" },
                { label: "Township Infrastructure & Roads", href: "/construction/infrastructure" },
                { label: "Structural & Civil Engineering", href: "/construction" },
                { label: "Turnkey Home Renovation", href: "/construction/residential" },
                { label: "Industrial Warehouses & Sheds", href: "/construction/commercial" },
              ]}
            />
            <DivisionCard
              tag="Interior Design"
              title="Interior Design Services"
              description="Design and execution by one team — modular kitchens, living rooms, bedrooms and full turnkey homes."
              href="/interior-design"
              image="/images/home/division-interior.jpg"
              links={[
                { label: "Modular Kitchen Interior Design", href: "/interior-design/kitchen" },
                { label: "Living Room TV Consoles & Ceilings", href: "/interior-design/living-room" },
                { label: "Master Bedroom Wardrobes & Beds", href: "/interior-design/bedroom" },
                { label: "Turnkey 2BHK & 3BHK Home Interiors", href: "/interior-design" },
                { label: "Office Interior Fit-Outs", href: "/construction/commercial" },
                { label: "Custom Wood & Veneer Wall Joinery", href: "/interior-design/living-room" },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* 3. Standalone Stats Strip */}
      <StatsStrip />

      {/* 4. Marquee Strip */}
      <Marquee />

      {/* 5. USPs (Why Zemitech Urban) */}
      <section className="py-20 relative overflow-hidden bg-white min-h-[80vh] flex items-center border-b border-slate-200">
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Why Zemitech Urban"
            title="One accountable team, from foundation to final styling"
            sub="Construction and interior design are handled by the same company — no handoffs, no finger-pointing between contractors."
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeUsps.map((u, i) => (
              <ScrollReveal key={u.title}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col h-full relative overflow-hidden group border border-slate-200 hover:border-blue-700/60 hover:shadow-2xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-mono font-bold text-base mb-5 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 shadow-xs border border-blue-100">
                    0{i + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">{u.title}</h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-1">{u.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Comprehensive Service Showcase (2 Cards Per Row) */}
      <ServiceCarousel />

      {/* 7. How We Work — 2 Rows of 2 Large Image Cards */}
      <section className="py-20 bg-slate-50/80 border-y border-slate-200/80 relative">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="From first call to handover, in four stages"
            sub="The same company-wide sequence behind every construction and interior project, whatever the scale."
            align="center"
          />
          <div className="mt-14">
            <StepsWithImages steps={howWeWork} />
          </div>
        </Container>
      </section>

      {/* 8. Featured projects */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200">
        <Container>
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionHeading eyebrow="Recent Work" title="A sample of recently completed projects" align="center" />
            <Button href="/projects" variant="outline" showArrow className="mt-2">View All Projects</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      <AreasServedSection />

      {/* 9. Dual Opposite-Scrolling Testimonials with Indian Client Avatars */}
      <TestimonialsSection />

      {/* 10. Blog */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200">
        <Container>
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionHeading eyebrow="From the Blog" title="Guides on construction & interior design" align="center" />
            <Button href="/blog" variant="outline" showArrow className="mt-2">View All Articles</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Common Questions" title="Frequently asked questions" align="center" />
          <div className="mt-12">
            <FaqAccordion faqs={homeFaqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

function DivisionCard({
  tag,
  title,
  description,
  href,
  image,
  links,
}: {
  tag: string;
  title: string;
  description: string;
  href: string;
  image: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md hover:border-blue-700/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span className="absolute top-4 left-4 backdrop-blur-md bg-blue-950/85 text-green-400 border border-white/15 text-xs font-mono-label font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
          {tag}
        </span>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">{description}</p>
        <ul className="mt-5 space-y-2.5 flex-1">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-2.5 group/link">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover/link:scale-125 transition-transform shrink-0" />
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <Button href={href} variant="secondary" showArrow className="mt-7 self-start shadow-md shadow-green-600/20">
          Explore {tag}
        </Button>
      </div>
    </div>
  );
}
