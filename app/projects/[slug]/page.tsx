import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import ProjectCard from "@/components/sections/ProjectCard";
import ImageGrid from "@/components/sections/ImageGrid";
import VideoEmbed from "@/components/sections/VideoEmbed";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";
import { getProject, getProjects } from "@/lib/supabase/queries";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
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
  const project = await getProject(slug);
  if (!project) return notFound();

  const allProjects = await getProjects();
  const related = allProjects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);
  const galleryImages = project.galleryUrls.map((src, i) => ({ src, alt: `${project.title} — photo ${i + 1}` }));

  return (
    <>
      <section className="relative bg-blue-950 w-full" style={{ height: "100dvh", minHeight: "100svh" }}>
        <div className="absolute inset-0">
          <GracefulImage src={project.coverImage} alt={project.title} fill className="object-cover opacity-70" priority sizes="100vw" />
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
            {project.scope.length > 0 && (
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
            )}
          </aside>
        </Container>
      </section>

      {/* Challenge / Solution */}
      {(project.challenge || project.solution) && (
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
      )}

      {(project.videoUrl || galleryImages.length > 0) && (
        <section className="pb-16 sm:pb-20">
          <Container>
            {project.videoUrl && (
              <div className={galleryImages.length > 0 ? "mb-14" : ""}>
                <SectionHeading eyebrow="Video" title="Site walkthrough" />
                <div className="mt-10 max-w-3xl mx-auto">
                  <VideoEmbed url={project.videoUrl} />
                </div>
              </div>
            )}
            {galleryImages.length > 0 && (
              <div>
                <SectionHeading eyebrow="Gallery" title="A closer look" />
                <div className="mt-10">
                  <ImageGrid images={galleryImages} columns={3} showCaptions={false} />
                </div>
              </div>
            )}
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
