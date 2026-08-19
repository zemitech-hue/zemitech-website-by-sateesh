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
  siteUrl,
  legalName,
}: {
  name: string;
  description: string;
  url: string;
  siteUrl: string;
  legalName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": "GeneralContractor",
      name: legalName,
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
  siteUrl,
  legalName,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  siteUrl: string;
  legalName: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Organization", name: legalName, url: siteUrl },
    publisher: { "@type": "Organization", name: legalName, url: siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

// Not wired up anywhere yet — Zemitech Urban has no verified public review
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
