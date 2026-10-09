import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// next/image can only optimize local files and the hosts listed in
// next.config.ts — anything else (pasted Unsplash/CDN links, data: URLs)
// must be served as-is, or the page throws at render time.
export function needsUnoptimizedImage(src: string) {
  if (src.startsWith("/")) return false;
  try {
    const { protocol, hostname } = new URL(src);
    return !(protocol === "https:" && hostname.endsWith(".supabase.co"));
  } catch {
    return true;
  }
}
