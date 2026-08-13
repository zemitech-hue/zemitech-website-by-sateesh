import type { MetadataRoute } from "next";
import { company } from "@/lib/data/company";
import { projects } from "@/lib/data/projects";
import { blogPosts } from "@/lib/data/blog";

const baseUrl = `https://${company.domain}`;

const staticRoutes = [
  "",
  "/about",
  "/construction",
  "/construction/residential",
  "/construction/commercial",
  "/construction/infrastructure",
  "/interior-design",
  "/interior-design/kitchen",
  "/interior-design/kitchen/modular-kitchen",
  "/interior-design/kitchen/l-shape-kitchen",
  "/interior-design/living-room",
  "/interior-design/bedroom",
  "/projects",
  "/gallery",
  "/team",
  "/certifications",
  "/blog",
  "/contact",
  "/inquiry",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
