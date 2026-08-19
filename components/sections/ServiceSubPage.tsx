import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";
import MaterialBoard from "@/components/sections/MaterialBoard";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import type { SubService } from "@/lib/data/services";

import ConstructionApprovalsSection from "@/components/sections/ConstructionApprovalsSection";
import FourStepProcessSection from "@/components/sections/FourStepProcessSection";

// Renders every construction/interior-design sub-service page from one data
// object — Hero, Offerings, Scope, Materials, FAQ, Final CTA. Exactly 6
// sections, always in this order, so every sub-service page stays consistent.
export default function ServiceSubPage({ service }: { service: SubService }) {
  const isConstruction = service.parentHref === "/construction" || service.slug.includes("construction") || service.slug.includes("structural") || service.slug.includes("industrial") || service.slug.includes("renovation");
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: service.parentLabel, href: service.parentHref },
    { name: service.navLabel, href: `/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd(
          [{ name: "Home", href: siteUrl }, ...breadcrumbs].map((b) => ({
            name: b.name,
            url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}`,
          }))
        )}
      />
      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.metaDescription,
          url: `${siteUrl}/${service.slug}`,
          siteUrl,
          legalName: company.legalName,
        })}
      />

      <ServiceHero
        headline={service.title}
        copy={service.heroCopy}
        primaryCtaText={service.primaryCtaText}
        primaryCtaLink="/contact"
        image={service.heroImage}
      />

      {/* Mandatory Government, Environmental & Design Approvals Section for Construction Pages */}
      {isConstruction && <ConstructionApprovalsSection />}

      <ServiceProblemCards
        eyebrow={service.cards.eyebrow}
        title={service.cards.title}
        sub={service.cards.sub}
        cards={service.cards.items}
      />

      <ServiceScopeGrid
        eyebrow={service.scope.eyebrow}
        title={service.scope.title}
        sub={service.scope.sub}
        groups={service.scope.groups}
      />

      {/* Mandatory 4-Step Execution Process (Consultation, Design, Build, Handover) */}
      <FourStepProcessSection category={isConstruction ? "construction" : "interior"} />

      <MaterialBoard
        eyebrow={service.materials.eyebrow}
        title={service.materials.title}
        sub={service.materials.sub}
        materials={service.materials.items}
      />

      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common Questions" align="center" />
          <div className="mt-10">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </Container>
      </section>

      <ServiceFinalCTA
        title={service.finalCta.title}
        copy={service.finalCta.copy}
        primaryCtaText={service.finalCta.primaryCtaText}
      />
    </>
  );
}
