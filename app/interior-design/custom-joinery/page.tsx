import type { Metadata } from "next";
import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { subServices } from "@/lib/data/services";

const service = subServices["interior-custom-joinery"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/${service.slug}` },
};

export default function CustomJoineryPage() {
  return <ServiceSubPage service={service} />;
}
