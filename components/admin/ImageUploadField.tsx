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

export default function ImageUploadField({
  name,
  bucket,
  label,
  defaultValue,
}: {
  name: string;
  bucket: "project-images" | "blog-images";
  label: string;
  defaultValue?: string | null;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    try {
      const supabase = createClient();
      const path = slugifyFilename(file.name);
      const { error: uploadError } = await supabase.storage.from(bucket).upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from(bucket).getPublicUrl(path);
      setUrl(data.publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-blue-950 mb-2">{label}</label>
      <input type="hidden" name={name} value={url} />
      <div className="flex items-center gap-4">
        {url ? (
          <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-line shrink-0">
            <Image src={url} alt="" fill className="object-cover" unoptimized />
            <button
              type="button"
              onClick={() => setUrl("")}
              className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
              aria-label="Remove image"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div className="w-28 h-20 rounded-lg border border-dashed border-line flex items-center justify-center text-ink-soft shrink-0">
            <UploadCloud className="w-5 h-5" />
          </div>
        )}
        <label className="cursor-pointer text-sm font-medium text-blue-700 hover:text-blue-900 border border-blue-200 rounded-lg px-4 py-2">
          {uploading ? "Uploading…" : url ? "Replace" : "Upload image"}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
        </label>
      </div>
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
    </div>
  );
}
