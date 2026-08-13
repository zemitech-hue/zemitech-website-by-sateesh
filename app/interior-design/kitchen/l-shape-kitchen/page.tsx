import type { Metadata } from "next";
import KitchenTypeTemplate from "@/components/sections/KitchenTypeTemplate";
import { kitchenTypes } from "@/lib/data/kitchens";

const kitchen = kitchenTypes["l-shape-kitchen"];

export const metadata: Metadata = {
  title: kitchen.metaTitle,
  description: kitchen.metaDescription,
  alternates: { canonical: "/interior-design/kitchen/l-shape-kitchen" },
};

export default function LShapeKitchenPage() {
  return <KitchenTypeTemplate kitchen={kitchen} />;
}
