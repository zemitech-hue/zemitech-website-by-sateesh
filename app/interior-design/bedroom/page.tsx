import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { subServices } from "@/lib/data/services";
import { subServiceMetadata } from "@/lib/seo";

const service = subServices["interior-bedroom"];

export const metadata = subServiceMetadata(service);

export default function BedroomPage() {
  return <ServiceSubPage service={service} />;
}
