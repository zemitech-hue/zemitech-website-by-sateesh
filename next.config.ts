import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    qualities: [75, 92],
    // Project/blog photos are uploaded through the admin panel straight to
    // Supabase Storage and referenced by their public URL, not copied into
    // public/images/ — so next/image needs the Supabase project's hostname
    // allow-listed. Every Supabase project's storage URL is
    // <project-ref>.supabase.co, hence the single-segment wildcard.
    remotePatterns: [{ protocol: "https", hostname: "*.supabase.co" }],
    // In dev, skip the /_next/image optimizer route entirely so images are
    // served straight from public/ with no caching layer to go stale —
    // overwriting a file on disk is reflected on refresh with no server
    // restart needed. Production builds still get full optimization.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
