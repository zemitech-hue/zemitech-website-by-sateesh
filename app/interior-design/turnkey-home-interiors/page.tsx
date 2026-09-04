import ServiceSubPage from "@/components/sections/ServiceSubPage";
import { turnkeyHomeInteriors as service } from "@/lib/data/services";
import { subServiceMetadata } from "@/lib/seo";

export const metadata = subServiceMetadata(service);

export default function TurnkeyInteriorsPage() {
  return <ServiceSubPage service={service} />;
}
