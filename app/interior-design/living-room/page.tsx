import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { subServices } from "@/lib/data/services";
import { subServiceMetadata } from "@/lib/seo";

const service = subServices["interior-living-room"];

export const metadata = subServiceMetadata(service);

export default function LivingRoomPage() {
  return <ServiceSubPage service={service} />;
}
