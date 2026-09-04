import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Zemara Spaces for a free construction or interior design consultation in Pune — call, WhatsApp, or send an enquiry.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
