"use client";

import { useState } from "react";

type VideoEntry = { platform: "YouTube" | "Instagram"; url: string; title: string };

function extractYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return match?.[1] ?? null;
}

export default function AdminVideosPage() {
  const [videos, setVideos] = useState<VideoEntry[]>([]);
  const [platform, setPlatform] = useState<"YouTube" | "Instagram">("YouTube");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setVideos((v) => [{ platform, url, title: title || "Untitled video" }, ...v]);
    setUrl("");
    setTitle("");
  }

  return (
    <div>
      <p className="font-mono-label text-xs uppercase tracking-wide text-green-700">Videos</p>
      <h1 className="text-2xl font-semibold text-blue-950 mt-1">YouTube & Instagram</h1>
      <p className="text-ink-soft text-sm mt-1">Paste a video link to feature it on the homepage and gallery.</p>

      <div className="mt-8 grid lg:grid-cols-5 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl bg-white border border-line p-6 h-fit space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Platform</label>
            <div className="flex gap-2">
              {(["YouTube", "Instagram"] as const).map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                    platform === p ? "bg-blue-700 text-white border-blue-700" : "border-line text-ink-soft"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Video URL</label>
            <input
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={platform === "YouTube" ? "https://youtube.com/watch?v=..." : "https://instagram.com/reel/..."}
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Site walkthrough — Hillcrest Villa"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm outline-none"
            />
          </div>

          <button type="submit" className="w-full rounded-full bg-blue-700 text-white py-3 text-sm font-semibold hover:bg-blue-800 transition-colors">
            Add Video
          </button>
        </form>

        <div className="lg:col-span-3">
          <h2 className="font-semibold text-blue-950 mb-3">Featured Videos ({videos.length})</h2>
          {videos.length === 0 && (
            <p className="text-sm text-ink-soft rounded-xl border border-dashed border-line p-6 text-center">
              No videos added yet. Add a YouTube or Instagram link to feature it here.
            </p>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            {videos.map((v, i) => {
              const ytId = v.platform === "YouTube" ? extractYouTubeId(v.url) : null;
              return (
                <div key={i} className="rounded-xl bg-white border border-line overflow-hidden">
                  <div className="aspect-video bg-blue-950 flex items-center justify-center">
                    {ytId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${ytId}`}
                        title={v.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    ) : (
                      <span className="text-blue-100 text-xs font-mono-label">{v.platform} preview</span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-blue-950 truncate">{v.title}</p>
                    <p className="text-xs text-ink-soft">{v.platform}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
