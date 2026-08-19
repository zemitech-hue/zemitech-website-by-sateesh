import Image from "next/image";

export default function CaptionedImage({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 33vw",
  preload = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  sizes?: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <figure className={`rounded-2xl overflow-hidden border border-line bg-white reg-corners flex flex-col ${className}`}>
      <div className={`relative ${aspect} bg-blue-100 flex-1 w-full`}>
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} preload={preload} />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-xs text-ink-soft font-mono-label leading-relaxed shrink-0">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
