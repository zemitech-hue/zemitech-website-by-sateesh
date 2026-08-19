import type { Metadata } from "next";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zemitech Urban for a free construction or interior design consultation in Pune — call, WhatsApp, or send an enquiry.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${company.brandName}`,
    description: "Call, WhatsApp, or send an enquiry — free site visit and consultation, no obligation to proceed.",
    url: `https://${company.domain}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
