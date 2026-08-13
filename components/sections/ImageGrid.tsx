"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

export type GridImage = { src: string; alt: string; caption?: string };

export default function ImageGrid({
  images,
  columns = 3,
  aspect = "aspect-[4/3]",
  lightbox = true,
  showCaptions = true,
}: {
  images: GridImage[];
  columns?: 2 | 3 | 4;
  aspect?: string;
  lightbox?: boolean;
  showCaptions?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, prev, next]);

  const colClass = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];

  return (
    <>
      <div className={`grid grid-cols-2 ${colClass} gap-4`}>
        {images.map((img, i) => (
          <figure key={`${img.src}-${i}`} className="rounded-xl overflow-hidden border border-line bg-white">
            {lightbox ? (
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className={`relative ${aspect} w-full bg-blue-100 group block`}
                aria-label={`Expand image: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <span className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/20 transition-colors" aria-hidden="true" />
              </button>
            ) : (
              <div className={`relative ${aspect} bg-blue-100`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            )}
            {showCaptions && img.caption && (
              <figcaption className="px-3 py-2.5 text-xs text-ink-soft font-mono-label leading-snug">{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {lightbox && openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-blue-950/92 flex items-center justify-center p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={images[openIndex].alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg width="22" height="22" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-6 text-white/80 hover:text-white w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-6 text-white/80 hover:text-white w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="relative w-full max-w-4xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          {images[openIndex].caption && (
            <p className="absolute bottom-6 inset-x-0 text-center text-sm text-blue-50/80 font-mono-label px-6">
              {images[openIndex].caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}
