import type { Metadata } from "next";
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
import { company } from "@/lib/data/company";

const siteUrl = `https://${company.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.brandName} — Construction & Interior Design in Pune`,
    template: `%s | ${company.brandName}`,
  },
  description:
    "Zemitech Urban is a Pune-based construction and interior design company delivering residential, commercial and infrastructure projects, and full-home interiors, under one accountable team.",
  keywords: [
    "construction company Pune",
    "interior design Pune",
    "modular kitchen Pune",
    "residential construction Pune",
    "commercial construction contractor Pune",
    "Zemitech Urban",
  ],
  openGraph: {
    type: "website",
    siteName: company.brandName,
    title: `${company.brandName} — Construction & Interior Design in Pune`,
    description:
      "Residential, commercial and infrastructure construction, and full-home interior design — delivered by one accountable team in Pune.",
    url: siteUrl,
    images: ["/images/og/zemitech-urban-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.brandName} — Construction & Interior Design in Pune`,
    description: "Construction and interior design in Pune, delivered by one accountable team.",
    images: ["/images/og/zemitech-urban-og.png"],
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.legalName,
    alternateName: company.brandName,
    url: siteUrl,
    logo: `${siteUrl}${company.logo}`,
    telephone: company.phonePrimary,
    email: company.emailPrimary,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: "Pune",
      addressRegion: company.address.state,
      postalCode: "411041",
      addressCountry: "IN",
    },
    sameAs: Object.values(company.social),
  };

  return (
    <html lang="en" className="antialiased">
      <body className="flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
