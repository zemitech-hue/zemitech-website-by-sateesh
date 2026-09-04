import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { subServices } from "@/lib/data/services";
import { subServiceMetadata } from "@/lib/seo";

const service = subServices["construction-renovation"];

export const metadata = subServiceMetadata(service);

export default function RenovationPage() {
  return <ServiceSubPage service={service} />;
}
