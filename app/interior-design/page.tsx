import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/sections/ServiceHero";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { getProjects } from "@/lib/supabase/queries";
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { interiorSubServices } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Interior Design Company in Pune — Turnkey, Kitchens, Living & Bedroom Interiors",
  description:
    "Turnkey interior design & factory modular execution in Pune. Modular kitchens, living room TV consoles, master bedroom wardrobes, 2BHK/3BHK turnkey homes, office fit-outs & custom joinery.",
  alternates: { canonical: "/interior-design" },
};

const interiorStyles = [
  { name: "Contemporary", description: "Clean lines, neutral tones, and sleek handleless cabinetry. Our most popular style for Pune apartments.", image: "/images/interior/overview/style-1.jpg" },
  { name: "Minimalist", description: "Concealed storage, handleless shutters, and a restrained two-tone palette for clutter-free living.", image: "/images/interior/overview/style-2.jpg" },
  { name: "Classic", description: "Warm wood grains, panelled shutters, cornice detailing, and rich brass/bronze hardware accents.", image: "/images/interior/overview/style-3.jpg" },
  { name: "Industrial", description: "Exposed textures, concrete-finish laminate, matte black metal frames, and warm ambient filament lighting.", image: "/images/interior/overview/style-4.jpg" },
];

const interiorFaqs = [
  { question: "Do you handle single-room interiors (like just a modular kitchen) as well as full homes?", answer: "Yes — you can commission a single modular kitchen, a living room, or a bedroom, or opt for a full turnkey 2BHK/3BHK home interior." },
  { question: "What is the typical timeline for an interior project?", answer: "Single rooms (kitchen or living room) take 15–25 working days on-site. Turnkey 2BHK/3BHK home interiors take 45–75 working days from 3D approval." },
  { question: "How do 3D design approvals work?", answer: "Before any manufacturing begins in our factory, we present photorealistic 3D renders of every room. Production starts only after you sign off on the 3D design." },
  { question: "Why do you use factory manufacturing instead of site carpentry?", answer: "Factory manufacturing uses automated CNC cutting and edge-banding under controlled conditions — tighter joints, moisture-sealed edges, and a shorter on-site install." },
];

export const revalidate = 60;

export default async function InteriorDesignOverviewPage() {
  const projects = await getProjects();
  const interiorProjects = projects.filter((p) => p.category === "interior").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [{ name: "Interior Design", href: "/interior-design" }];

  return (
    <>
      <JsonLd data={faqJsonLd(interiorFaqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />
      <JsonLd data={serviceJsonLd({ name: "Interior Design Services", description: metadata.description as string, url: `${siteUrl}/interior-design`, siteUrl, legalName: company.legalName })} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Interiors Designed & Manufactured by One Team"
        copy="From modular kitchens to full 3BHK turnkey homes — 3D-approved before a single panel is cut, manufactured in factory, and installed with a 5-year hardware warranty."
        primaryCtaText="Discuss Your Interior Project"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Interior Portfolio"
        secondaryCtaLink="/projects"
        image="/images/interior/overview/hero.jpg"
      />

      {/* Section 2 — Sub-service navigation cards (pulled from lib/data/services.ts) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            eyebrow="Specializations"
            title="Explore Our Interior Design Services"
            sub="Select an interior service category to view design cards, scope checklists, and material boards."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorSubServices.map((s) => (
              <div
                key={s.slug}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-400/80 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={s.heroImage}
                    alt={s.navLabel}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 backdrop-blur-md bg-orange-950/80 text-orange-400 border border-white/15 text-xs font-mono-label font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Interior Design
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-orange-600 transition-colors">
                    {s.navLabel}
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-1">
                    {s.heroCopy}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button href={`/${s.slug}`} variant="primary" className="w-full justify-center bg-orange-600 hover:bg-orange-700 border-orange-500">
                      Explore {s.navLabel.split(" ")[0]} →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3 — Design styles we work in */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <SectionHeading
            eyebrow="Design Aesthetics"
            title="Styles Tailored to Your Home"
            sub="We don't push a single house style. We adapt to the aesthetic that fits your lifestyle."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto gap-8">
            {interiorStyles.map((style) => (
              <div
                key={style.name}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {style.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4 — Featured interior projects */}
      {interiorProjects.length > 0 && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
              <SectionHeading eyebrow="Portfolio" title="Featured Interior Projects" align="left" />
              <Button href="/projects" variant="outline">
                View All Interior Projects
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {interiorProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Section 5 — FAQ */}
      <section className="py-20 bg-white border-b border-slate-200">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Interior Design Questions & Answers" align="center" />
          <div className="mt-12">
            <FaqAccordion faqs={interiorFaqs} />
          </div>
        </Container>
      </section>

      {/* Section 6 — Final CTA */}
      <ServiceFinalCTA
        title="Ready to Transform Your Home Interiors?"
        copy="Tell us about your property type (2BHK, 3BHK, Villa, Office) and target move-in date. Our interior design team will schedule a free site consultation and 3D design brief."
        primaryCtaText="Book Free Interior Consultation"
      />
    </>
  );
}
