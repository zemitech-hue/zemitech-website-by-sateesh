import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
// Self-hosted via @fontsource (npm) rather than next/font/google, so the build
// never depends on reaching fonts.googleapis.com/fonts.gstatic.com at build time.
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import JsonLd from "@/components/JsonLd";
import { company } from "@/lib/data/company";

const siteUrl = `https://${company.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.brandName} — Turnkey Construction & Interior Design`,
    template: `%s | ${company.brandName}`,
  },
  description:
    "Zemara Spaces is a turnkey construction and interior design company delivering residential, commercial, and infrastructure projects, and full-home interiors, under one accountable team.",
  keywords: [
    "construction company",
    "interior design company",
    "modular kitchen design",
    "residential construction",
    "commercial construction contractor",
    "turnkey interior execution",
    "Zemara Spaces",
  ],
  openGraph: {
    type: "website",
    siteName: company.brandName,
    title: `${company.brandName} — Turnkey Construction & Interior Design`,
    description:
      "Residential, commercial, and infrastructure construction, and full-home interior design — delivered by one accountable team.",
    url: siteUrl,
    images: ["/images/brand/image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.brandName} — Turnkey Construction & Interior Design`,
    description: "Turnkey construction and interior design delivered by one accountable team.",
    images: ["/images/brand/image.png"],
  },
  alternates: { canonical: siteUrl },
  verification: {
    google: "NKReUpjraXvcNuyMU1mip_VA2jZGm0R3BjUYnlJ1hVA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationId = `${siteUrl}/#organization`;
  const verifiedSocialProfiles = Object.values(company.social).filter(Boolean);

  // Both business types are real: Zemara Spaces runs construction and
  // interior design as one company (see company.divisions), so the
  // Organization is typed as all three schema.org types rather than
  // picking just one and under-describing the other division.
  //
  // `name` is the brand ("Zemara Spaces"), not the registered legalName —
  // an unrelated company (zemitechurban.com, safety-audit/compliance
  // consulting, no relation) also trades as "Zemitech Urban", so leading
  // structured data with that name risks Google conflating the two
  // entities. legalName is still declared, as its own schema.org property,
  // for registration/GSTIN accuracy — it just isn't the primary identity
  // signal anymore. No `sameAs` yet: the social URLs previously here
  // (instagram.com/zemitechurban etc.) are unverified — confirmed NOT to
  // be this business's real accounts — so they were removed rather than
  // publish wrong same-entity signals. Add real Zemara Spaces profile URLs
  // to company.social once they exist, and sameAs will resume automatically.
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "InteriorDesigner"],
    "@id": organizationId,
    name: company.brandName,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}${company.logo}`,
    image: `${siteUrl}${company.logo}`,
    telephone: company.phonePrimary,
    email: company.emailPrimary,
    vatID: company.gstin,
    foundingDate: String(company.founded),
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: "Pune",
      addressRegion: company.address.state,
      postalCode: "411041",
      addressCountry: "IN",
    },
    // Approximate coordinates for Pune office — verify against Google Business
    // Profile before relying on this for precision map-pin placement.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.4485,
      longitude: 73.8262,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    areaServed: [
      ...company.majorCities.map((name) => ({ "@type": "City", name })),
      ...company.areasServed.map((name) => ({ "@type": "Place", name })),
    ],
    // Omitted rather than emitting empty/unverified URLs — see company.social.
    ...(verifiedSocialProfiles.length > 0 ? { sameAs: verifiedSocialProfiles } : {}),
    // Rate bands mirror the live cost calculator on the homepage
    // (components/sections/CostCalculator.tsx) — keep both in sync.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction & Interior Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction",
            description: company.divisions[0].description,
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            minPrice: 1650,
            maxPrice: 2450,
            priceCurrency: "INR",
            unitText: "per sq ft",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Design",
            description: company.divisions[1].description,
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            minPrice: 450,
            maxPrice: 1200,
            priceCurrency: "INR",
            unitText: "per sq ft",
          },
        },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.brandName,
    publisher: { "@id": organizationId },
  };

  return (
    <html lang="en" className="antialiased">
      <head>
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Maharashtra, India" />
        <meta name="geo.position" content="18.4485;73.8262" />
        <meta name="ICBM" content="18.4485, 73.8262" />
      </head>
      <body className="flex flex-col bg-background text-foreground">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
