import type { MetadataRoute } from "next";
import { company } from "@/lib/data/company";
import { getProjects, getBlogPosts } from "@/lib/supabase/queries";

const baseUrl = `https://${company.domain}`;

const staticRoutes = [
  "",
  "/about",
  "/construction",
  "/construction/residential",
  "/construction/industrial",
  "/construction/renovation",
  "/construction/structural-civil-engineering",
  "/interior-design",
  "/interior-design/kitchen",
  "/interior-design/living-room",
  "/interior-design/bedroom",
  "/interior-design/turnkey-home-interiors",
  "/interior-design/office",
  "/projects",
  "/gallery",
  "/team",
  "/certifications",
  "/blog",
  "/contact",
  "/inquiry",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // lastModified is intentionally omitted for static routes and project
  // pages below — neither has a real "last updated" timestamp to report,
  // and stamping every entry with the request-time `new Date()` on every
  // sitemap fetch falsely claims constant freshness, which search engines
  // are known to discount rather than trust. Only blog posts have a real
  // per-item date (publishedAt), so only they set lastModified.
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));

  const [projects, blogPosts] = await Promise.all([getProjects(), getBlogPosts()]);

  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
