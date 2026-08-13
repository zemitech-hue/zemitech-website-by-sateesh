import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import CaptionedImage from "@/components/ui/CaptionedImage";
import { renderRichText } from "@/lib/richText";

// Asymmetric 60/40 split-screen pattern — content one side, image the other.
// One of the "premium" layout variants required beyond the centered
// heading + card-grid pattern used everywhere else on the site.
export default function SplitSection({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  imageCaption,
  imageSide = "right",
  bg = "",
  children,
}: {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  image: string;
  imageAlt: string;
  imageCaption?: string;
  imageSide?: "left" | "right";
  bg?: string;
  children?: ReactNode;
}) {
  const content = (
    <div className="lg:col-span-3 flex flex-col justify-center">
      {eyebrow && <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-green-700 mb-3">{eyebrow}</p>}
      {title && <h2 className="text-2xl sm:text-3xl font-semibold text-blue-950 leading-tight mb-5">{title}</h2>}
      {paragraphs && (
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-ink-soft leading-relaxed">
              {renderRichText(p)}
            </p>
          ))}
        </div>
      )}
      {children}
    </div>
  );

  const imageBlock = (
    <div className="lg:col-span-2 h-full flex flex-col">
      <CaptionedImage
        src={image}
        alt={imageAlt}
        caption={imageCaption}
        className="h-full flex flex-col"
        aspect="h-full min-h-[380px] lg:min-h-[440px]"
      />
    </div>
  );

  return (
    <section className={`py-16 sm:py-20 ${bg}`}>
      <Container className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-stretch">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            {content}
          </>
        ) : (
          <>
            {content}
            {imageBlock}
          </>
        )}
      </Container>
    </section>
  );
}
