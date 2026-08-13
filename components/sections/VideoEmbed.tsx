"use client";

import { useState } from "react";
import Image from "next/image";

// Reuses the YouTube-embed pattern from app/admin/dashboard/videos/page.tsx —
// click-to-load poster so the page never ships an unnecessary iframe. Pass
// youtubeId once a real walkthrough video exists; until then it renders the
// poster with a disabled state rather than embedding a fake video ID.
export default function VideoEmbed({
  youtubeId,
  poster,
  posterAlt,
  title,
}: {
  youtubeId?: string | null;
  poster: string;
  posterAlt: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing && youtubeId) {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-line bg-blue-950">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => youtubeId && setPlaying(true)}
      disabled={!youtubeId}
      className="relative aspect-video w-full rounded-2xl overflow-hidden border border-line bg-blue-950 group disabled:cursor-default"
      aria-label={youtubeId ? `Play video: ${title}` : `${title} — video coming soon`}
    >
      <Image src={poster} alt={posterAlt} fill className="object-cover opacity-70 group-hover:opacity-60 transition-opacity" sizes="(max-width: 1024px) 100vw, 800px" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
          <svg width="22" height="22" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M5 3l8 5-8 5V3z" fill="var(--zu-blue-700)" />
          </svg>
        </span>
        <span className="font-mono-label text-xs uppercase tracking-wide text-white/90 bg-blue-950/50 rounded-full px-3 py-1">
          {youtubeId ? title : "Site walkthrough video — coming soon"}
        </span>
      </div>
    </button>
  );
}
