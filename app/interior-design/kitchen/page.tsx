import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { subServices } from "@/lib/data/services";
import { subServiceMetadata } from "@/lib/seo";

const service = subServices["interior-kitchen"];

export const metadata = subServiceMetadata(service);

export default function KitchenPage() {
  return <ServiceSubPage service={service} />;
}
