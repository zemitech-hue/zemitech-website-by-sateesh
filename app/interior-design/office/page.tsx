import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { subServices } from "@/lib/data/services";
import { subServiceMetadata } from "@/lib/seo";

const service = subServices["interior-office"];

export const metadata = subServiceMetadata(service);

export default function OfficeInteriorsPage() {
  return <ServiceSubPage service={service} />;
}
