import type { Metadata } from "next";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Zemitech Urban Private Limited has delivered 240+ construction and interior design projects across Pune since 2019 — built by in-house teams, not stitched together across sub-contractors.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${company.brandName}`,
    description: "Construction and interior design, under one roof — 240+ projects across Pune since 2019.",
    url: `https://${company.domain}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
