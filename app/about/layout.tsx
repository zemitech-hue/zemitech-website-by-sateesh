import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Zemara Spaces has delivered 240+ construction and interior design projects across Pune since 2019 — built by in-house teams, not stitched together across sub-contractors.",
  path: "/about",
  image: "/images/about/hero.png",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
