"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export default function AdminMediaPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [uploaded, setUploaded] = useState<{ src: string; caption: string }[]>([]);

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleUpload() {
    if (!preview) return;
    setUploaded((u) => [{ src: preview, caption }, ...u]);
    setPreview(null);
    setCaption("");
  }

  const existingImages = projects.flatMap((p) => [p.coverImage, ...p.gallery]);

  return (
    <div>
      <p className="font-mono-label text-xs uppercase tracking-wide text-green-700">Gallery</p>
      <h1 className="text-2xl font-semibold text-blue-950 mt-1">Upload a project photo</h1>
      <p className="text-ink-soft text-sm mt-1">Upload one image at a time to add it to the site gallery.</p>

      <div className="mt-8 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 rounded-2xl bg-white border border-line p-6 h-fit space-y-4">
          <label className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-line hover:border-blue-300 h-48 cursor-pointer overflow-hidden relative bg-bg-tint">
            {preview ? (
              <Image src={preview} alt="Preview" fill className="object-cover" />
            ) : (
              <span className="text-sm text-ink-soft text-center px-4">Click to choose an image<br />JPG or PNG, up to 8MB</span>
            )}
            <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
          </label>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Caption (optional)</label>
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. Hillcrest Villa — living room"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm outline-none"
            />
          </div>

          <button
            onClick={handleUpload}
            disabled={!preview}
            className="w-full rounded-full bg-blue-700 text-white py-3 text-sm font-semibold hover:bg-blue-800 disabled:opacity-50 transition-colors"
          >
            Upload to Gallery
          </button>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-semibold text-blue-950 mb-3">Gallery ({existingImages.length + uploaded.length})</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {uploaded.map((img, i) => (
              <div key={`new-${i}`} className="relative aspect-square rounded-lg overflow-hidden bg-blue-100 ring-2 ring-green-400">
                <Image src={img.src} alt={img.caption || "Uploaded image"} fill className="object-cover" />
              </div>
            ))}
            {existingImages.slice(0, 16).map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-blue-100">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
