// Shared helper for per-page metadata. Next.js metadata merging is a
// *shallow* replace: a page that defines its own `openGraph` object
// completely overwrites the root layout's `openGraph` (including its
// image), it does not deep-merge field by field. Without this helper,
// any page that sets its own openGraph (e.g. to get the right canonical
// url) silently loses the site's OG image, and every page that doesn't
// override openGraph at all shares the homepage's title/description/image
// when linked on WhatsApp, LinkedIn, etc. This gives every route its own
// accurate share preview from the same title/description already used for
// <title> and meta description, so there's one place to keep them in sync.
import type { Metadata } from "next";
import { company } from "@/lib/data/company";
import type { SubService } from "@/lib/data/services";

const siteUrl = `https://${company.domain}`;
const defaultImage = "/images/brand/image.png";

export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  imageAlt,
  ogTitle,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  ogTitle?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const resolvedOgTitle =
    ogTitle ?? (title.includes(company.brandName) ? title : `${title} | ${company.brandName}`);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: company.brandName,
      title: resolvedOgTitle,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt ?? resolvedOgTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description,
      images: [image],
    },
  };
}

export function subServiceMetadata(service: SubService): Metadata {
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${service.slug}`,
    image: service.heroImage,
    imageAlt: service.title,
  });
}
