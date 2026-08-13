"use client";

import { useState } from "react";
import ImageGrid from "@/components/sections/ImageGrid";
import { projectCategories } from "@/lib/data/projects";

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
            className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
              active === cat.value
                ? "bg-blue-700 border-blue-700 text-white"
                : "border-line text-ink-soft hover:border-blue-300"
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
