"use client";

import { useState } from "react";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

function slugifyFilename(name: string) {
  const ext = name.split(".").pop() || "jpg";
  const base = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  return `${base}.${ext}`;
}

export default function GalleryUploadField({
  name,
  bucket,
  label,
  defaultValue,
}: {
  name: string;
  bucket: "project-images" | "blog-images";
  label: string;
  defaultValue?: string[];
}) {
  const [urls, setUrls] = useState<string[]>(defaultValue ?? []);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFiles(files: FileList) {
    setUploading(true);
    setError(null);
    try {
      const supabase = createClient();
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        const path = slugifyFilename(file.name);
        const { error: uploadError } = await supabase.storage.from(bucket).upload(path, file, {
          cacheControl: "3600",
          upsert: false,
        });
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from(bucket).getPublicUrl(path);
        uploaded.push(data.publicUrl);
      }
      setUrls((prev) => [...prev, ...uploaded]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-blue-950 mb-2">{label}</label>
      <textarea name={name} value={urls.join("\n")} readOnly className="hidden" />
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 mb-3">
        {urls.map((url, i) => (
          <div key={url} className="relative aspect-square rounded-lg overflow-hidden border border-line">
            <Image src={url} alt="" fill className="object-cover" unoptimized />
            <button
              type="button"
              onClick={() => setUrls((prev) => prev.filter((_, j) => j !== i))}
              className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
              aria-label="Remove image"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
      <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-medium text-blue-700 hover:text-blue-900 border border-blue-200 rounded-lg px-4 py-2">
        <UploadCloud className="w-4 h-4" />
        {uploading ? "Uploading…" : "Add photos"}
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          disabled={uploading}
          onChange={(e) => {
            if (e.target.files?.length) handleFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </label>
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
    </div>
  );
}
