import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SpecTable from "@/components/ui/SpecTable";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ProjectCard from "@/components/sections/ProjectCard";
import ImageGrid from "@/components/sections/ImageGrid";
import TextureSwatchRow from "@/components/sections/TextureSwatchRow";
import TrustBar from "@/components/sections/TrustBar";
import SplitSection from "@/components/sections/SplitSection";
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/JsonLd";
import { KitchenType, kitchenOverview } from "@/lib/data/kitchens";
import { company } from "@/lib/data/company";
import { projects } from "@/lib/data/projects";

export default function KitchenTypeTemplate({ kitchen }: { kitchen: KitchenType }) {
  const breadcrumbs = [
    { name: "Interior Design", href: "/interior-design" },
    { name: "Kitchen Design", href: "/interior-design/kitchen" },
    { name: kitchen.name, href: `/${kitchen.slug}` },
  ];
  const relatedProjects = projects.filter((p) => p.category === "interior").slice(0, 3);
  const siteUrl = `https://${company.domain}`;

  return (
    <>
      <JsonLd data={faqJsonLd(kitchen.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [{ name: "Home", href: `https://${company.domain}` }, ...breadcrumbs].map((b) => ({
            name: b.name,
            url: b.href.startsWith("http") ? b.href : `https://${company.domain}${b.href}`,
          }))
        )}
      />
      <JsonLd
        data={serviceJsonLd({
          name: kitchen.name,
          description: kitchen.metaDescription,
          url: `${siteUrl}/${kitchen.slug}`,
          siteUrl,
          legalName: company.legalName,
        })}
      />
      <PageHero
        eyebrow={`Kitchen Design / ${kitchen.name}`}
        headline={`${kitchen.name}, built for how you cook.`}
        sub={kitchen.description[0]}
        image={kitchen.heroImage}
        breadcrumbs={breadcrumbs}
      />

      <TrustBar />

      <section className="py-16 sm:py-20">
        <Container className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5">
            {kitchen.description.map((p) => (
              <p key={p} className="text-ink-soft leading-relaxed">{p}</p>
            ))}
            <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 text-sm text-blue-950">
              <span className="font-semibold">Layout note: </span>
              {kitchen.layoutNote}
            </div>
          </div>
          <aside className="rounded-2xl bg-bg-tint border border-line p-6 h-fit space-y-5">
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">Ideal For</p>
              <p className="text-sm text-ink">{kitchen.idealFor}</p>
            </div>
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">Minimum Space</p>
              <p className="text-sm text-ink">{kitchen.minSpace}</p>
            </div>
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">Investment</p>
              <p className="text-sm text-ink">{kitchen.priceIndicator}</p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading eyebrow="Layout Features" title={`What comes with a ${kitchen.name.toLowerCase()}`} />
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {kitchen.features.map((f) => (
              <div key={f} className="flex items-start gap-3 rounded-xl bg-white border border-line p-4">
                <svg width="18" height="18" viewBox="0 0 16 16" className="shrink-0 mt-0.5 text-green-600" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-ink">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-white border border-line p-6">
            <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-3">
              Standard on Every Kitchen
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {kitchenOverview.standardInclusions.map((item) => (
                <div key={item} className="text-sm text-ink-soft">— {item}</div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SplitSection
        eyebrow="In Depth"
        title={kitchen.longFormTitle}
        paragraphs={kitchen.longForm}
        image={kitchen.gallery[0]?.src ?? kitchen.heroImage}
        imageAlt={kitchen.gallery[0]?.alt ?? kitchen.name}
        imageCaption={kitchen.gallery[0]?.caption}
        bg="bg-bg-tint"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Material & Hardware Specification"
            title="Carcass, finish, hardware & countertop tiers"
            sub="Indicative price tiers — your exact specification and quote are fixed in a written material sheet before manufacturing starts."
          />
          <div className="mt-10 space-y-8">
            <SpecTable {...kitchen.specTable} />
            <TextureSwatchRow title="Finish & Countertop Swatches" swatches={kitchen.swatches} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading eyebrow="In Progress & Detail Shots" title={`A closer look at a ${kitchen.name.toLowerCase()}`} />
          <div className="mt-10">
            <ImageGrid images={kitchen.gallery} columns={3} />
          </div>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Recent Work" title="Interior projects we've delivered" />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Common Questions" title="Frequently asked questions" />
          <div className="mt-8">
            <FaqAccordion faqs={kitchen.faqs} />
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to plan your ${kitchen.name.toLowerCase()}?`}
        sub="Share your kitchen dimensions and we'll get back with a layout recommendation."
      />
    </>
  );
}
