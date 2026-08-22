import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import GalleryGrid, { GalleryPhoto } from "@/components/sections/GalleryGrid";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { getProjects } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of Zemitech Urban's residential, commercial, infrastructure and interior design projects across Pune, filterable by category.",
  alternates: { canonical: "/gallery" },
};

export const revalidate = 60;

export default async function GalleryPage() {
  const projects = await getProjects();
  const galleryImages: GalleryPhoto[] = projects.flatMap((p) => [
    ...(p.coverImage ? [{ src: p.coverImage, alt: `${p.title} — cover photo`, caption: `${p.title}, ${p.location}`, category: p.category }] : []),
    ...p.galleryUrls.map((src: string, i: number) => ({ src, alt: `${p.title} — photo ${i + 1}`, caption: `${p.title}, ${p.location}`, category: p.category })),
  ]);
  const siteUrl = `https://${company.domain}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl },
          { name: "Gallery", url: `${siteUrl}/gallery` },
        ])}
      />
      <PageHero
        eyebrow="Gallery"
        headline="A closer look at completed work"
        sub="Photos from our construction sites and interior installations across Pune, filterable by category. Click any photo to view it full size."
        image="/images/construction/residential/hero.png"
        breadcrumbs={[{ name: "Gallery", href: "/gallery" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
