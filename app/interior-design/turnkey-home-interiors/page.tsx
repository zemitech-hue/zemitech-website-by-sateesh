import type { Metadata } from "next";
import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { turnkeyHomeInteriors as service } from "@/lib/data/services";

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/${service.slug}` },
};

export default function TurnkeyInteriorsPage() {
  return <ServiceSubPage service={service} />;
}
