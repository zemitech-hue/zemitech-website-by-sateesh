"use client";

import { useState } from "react";
import ImageGrid from "@/components/sections/ImageGrid";
import { projectCategories } from "@/lib/types/project";

export type GalleryPhoto = { src: string; alt: string; caption: string; category: string };

export default function GalleryGrid({ images }: { images: GalleryPhoto[] }) {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`rounded-full px-4.5 py-2 text-xs sm:text-sm font-extrabold border transition-all cursor-pointer ${
              active === cat.value
                ? "bg-amber-400 border-amber-300 text-slate-950 font-black shadow-xs"
                : "border-slate-300 text-slate-700 hover:border-amber-400 hover:bg-amber-50/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <ImageGrid images={filtered} columns={4} aspect="aspect-square" />
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-soft text-sm mt-10">No photos in this category yet — check back soon.</p>
      )}
    </div>
  );
}
