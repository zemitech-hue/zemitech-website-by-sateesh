import { company } from "@/lib/data/company";

const siteUrl = `https://${company.domain}`;

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
       
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    // Referencing the Organization by @id (rather than repeating its name)
    // keeps every service page pointing at one canonical entity. The
    // provider's public-facing name is the brand, not the registered
    // legalName — a different, unrelated company also trades as
    // "Zemitech Urban", so leading with the legal name here risks Google
    // conflating the two entities in search/knowledge-graph matching.
    provider: {
      "@id": `${siteUrl}/#organization`,
      "@type": "GeneralContractor",
      name: company.brandName,
      legalName: company.legalName,
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
  };
}

export function articleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  const publisher = { "@id": `${siteUrl}/#organization`, "@type": "Organization", name: company.brandName, url: siteUrl };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: publisher,
    publisher,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

// Not wired up anywhere yet — Zemara Spaces has no verified public review
// count, and emitting a fake AggregateRating would violate Google's
// structured-data guidelines. Once real reviews exist (see
// lib/data/testimonials.ts), call this from TestimonialsSection with real
// ratingValue/reviewCount and render it via <JsonLd data={...} />.
export function aggregateRatingJsonLd({
  itemName,
  ratingValue,
  reviewCount,
}: {
  itemName: string;
  ratingValue: number;
  reviewCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: itemName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    },
  };
}
