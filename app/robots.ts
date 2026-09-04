import type { MetadataRoute } from "next";
import { company } from "@/lib/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
      // Explicit allow rules for AI answer-engine and assistant crawlers
      // (Google AI Overviews, ChatGPT/SearchGPT, Perplexity, Claude, Copilot)
      // so Zemara Spaces can be cited as a source, not just indexed for
      // classic search. These would already be allowed by the "*" rule
      // above, but naming them keeps the crawl policy unambiguous as new
      // bots read it, and matches the /llms.txt discovery convention.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "anthropic-ai",
          "Google-Extended",
          "GoogleOther",
          "Applebot",
          "Applebot-Extended",
          "Bingbot",
          "CCBot",
          "Amazonbot",
        ],
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `https://${company.domain}/sitemap.xml`,
  };
}
