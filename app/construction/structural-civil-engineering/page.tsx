import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { subServices } from "@/lib/data/services";
import { subServiceMetadata } from "@/lib/seo";

const service = subServices["construction-structural-civil-engineering"];

export const metadata = subServiceMetadata(service);

export default function StructuralCivilPage() {
  return <ServiceSubPage service={service} />;
}
