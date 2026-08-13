import type { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

// Full-bleed image band with an overlaid reg-corners content card — the second
// "premium" layout variant, used where one strong image should carry a section
// rather than being boxed into a grid card.
export default function FullBleedBand({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  cardSide = "left",
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  cardSide?: "left" | "right";
}) {
  return (
    <section className="relative">
      <div className="relative h-[420px] sm:h-[480px]">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/20 to-transparent" />
      </div>
      <Container>
        <div className={`relative -mt-40 sm:-mt-48 pb-10 flex ${cardSide === "right" ? "justify-end" : "justify-start"}`}>
          <div className="reg-corners bg-white rounded-2xl border border-line shadow-xl shadow-blue-950/10 p-7 sm:p-9 max-w-md">
            {eyebrow && <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-green-700 mb-3">{eyebrow}</p>}
            {title && <h2 className="text-2xl sm:text-3xl font-semibold text-blue-950 leading-tight mb-4">{title}</h2>}
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
