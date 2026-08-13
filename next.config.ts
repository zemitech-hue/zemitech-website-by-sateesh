import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    // In dev, skip the /_next/image optimizer route entirely so images are
    // served straight from public/ with no caching layer to go stale —
    // overwriting a file on disk is reflected on refresh with no server
    // restart needed. Production builds still get full optimization.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
