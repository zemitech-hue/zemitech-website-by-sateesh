import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { subServices } from "@/lib/data/services";
import { subServiceMetadata } from "@/lib/seo";

const service = subServices["construction-industrial"];

export const metadata = subServiceMetadata(service);

export default function IndustrialPage() {
  return <ServiceSubPage service={service} />;
}
