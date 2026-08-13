import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import ProjectCard from "@/components/sections/ProjectCard";
import ImageGrid from "@/components/sections/ImageGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.location}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="relative bg-blue-950">
        <div className="relative h-[320px] sm:h-[380px] lg:h-[460px]">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover opacity-70" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-blue-950/10" />
        </div>
        <Container className="absolute inset-x-0 bottom-0 pb-8">
          <div className="mb-4 [&_a]:text-blue-100/70 [&_span]:!text-white">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Projects", href: "/projects" }, { name: project.title, href: `/projects/${project.slug}` }]} />
          </div>
          <span className="inline-block font-mono-label text-xs uppercase tracking-wide text-green-400 mb-2">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">{project.title}</h1>
          <p className="text-blue-100/80 mt-1">{project.location} · {project.year}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5">
            {project.description.map((p) => (
              <p key={p} className="text-ink-soft leading-relaxed">{p}</p>
            ))}
          </div>
          <aside className="rounded-2xl bg-bg-tint border border-line p-6 h-fit space-y-4">
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">Location</p>
              <p className="text-sm text-ink">{project.location}</p>
            </div>
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">Area</p>
              <p className="text-sm text-ink">{project.area}</p>
            </div>
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">Year</p>
              <p className="text-sm text-ink">{project.year}</p>
            </div>
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-2">Scope of Work</p>
              <ul className="space-y-1.5">
                {project.scope.map((s) => (
                  <li key={s} className="text-sm text-ink-soft flex gap-2">
                    <span className="text-green-600">—</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      {/* Challenge / Solution */}
      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading eyebrow="What Made This Project Specific" title="Challenge & solution" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-line p-6">
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-2">The Challenge</p>
              <p className="text-ink-soft leading-relaxed">{project.challenge}</p>
            </div>
            <div className="rounded-2xl bg-white border border-line p-6">
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-2">Our Solution</p>
              <p className="text-ink-soft leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {project.clientQuote && (
            <div className="mt-12 max-w-2xl mx-auto text-center">
              <svg width="28" height="28" viewBox="0 0 24 24" className="mx-auto text-green-500" aria-hidden="true">
                <path d="M7 8c-2.2 0-4 1.8-4 4v4h6v-6H6c0-1.1.9-2 2-2V8zm10 0c-2.2 0-4 1.8-4 4v4h6v-6h-3c0-1.1.9-2 2-2V8z" fill="currentColor" />
              </svg>
              <blockquote className="text-lg sm:text-xl text-blue-950 leading-relaxed mt-4 font-display">
                &ldquo;{project.clientQuote.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-blue-950">{project.clientQuote.author}</p>
              <p className="text-xs text-ink-soft">{project.clientQuote.location}</p>
            </div>
          )}
        </Container>
      </section>

      {project.galleryDetailed.length > 0 && (
        <section className={`pb-16 sm:pb-20 ${project.clientQuote ? "" : "pt-0"}`}>
          <Container>
            <SectionHeading eyebrow="Gallery" title="A closer look" />
            <div className="mt-10">
              <ImageGrid images={project.galleryDetailed} columns={3} />
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-bg-tint">
          <Container>
            <SectionHeading eyebrow="More Projects" title="Similar work" />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection title="Planning something similar?" sub="Tell us about your project and we'll follow up with next steps." />
    </>
  );
}
