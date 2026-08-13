import type { Metadata } from "next";
import KitchenTypeTemplate from "@/components/sections/KitchenTypeTemplate";
import { kitchenTypes } from "@/lib/data/kitchens";

const kitchen = kitchenTypes["modular-kitchen"];

export const metadata: Metadata = {
  title: kitchen.metaTitle,
  description: kitchen.metaDescription,
  alternates: { canonical: "/interior-design/kitchen/modular-kitchen" },
};

export default function ModularKitchenPage() {
  return <KitchenTypeTemplate kitchen={kitchen} />;
}
