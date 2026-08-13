"use client";

import { useState } from "react";
import Image from "next/image";
import { projects as seedProjects, Project } from "@/lib/data/projects";

type DraftProject = {
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  imagePreview: string | null;
  galleryPreviews: string[];
};

const emptyDraft: DraftProject = {
  title: "",
  category: "residential",
  location: "",
  year: String(new Date().getFullYear()),
  summary: "",
  challenge: "",
  solution: "",
  imagePreview: null,
  galleryPreviews: [],
};

export default function AdminProjectsPage() {
  const [added, setAdded] = useState<DraftProject[]>([]);
  const [draft, setDraft] = useState<DraftProject>(emptyDraft);
  const [saved, setSaved] = useState(false);

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setDraft((d) => ({ ...d, imagePreview: reader.result as string }));
    reader.readAsDataURL(file);
  }

  function handleGalleryImages(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () =>
        setDraft((d) => ({ ...d, galleryPreviews: [...d.galleryPreviews, reader.result as string] }));
      reader.readAsDataURL(file);
    });
  }

  function removeGalleryImage(index: number) {
    setDraft((d) => ({ ...d, galleryPreviews: d.galleryPreviews.filter((_, i) => i !== index) }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAdded((a) => [draft, ...a]);
    setDraft(emptyDraft);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div>
      <p className="font-mono-label text-xs uppercase tracking-wide text-green-700">Projects</p>
      <h1 className="text-2xl font-semibold text-blue-950 mt-1">Project portfolio</h1>
      <p className="text-ink-soft text-sm mt-1">Add a new project with a cover photo, location and short summary.</p>

      <div className="mt-8 grid lg:grid-cols-5 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl bg-white border border-line p-6 h-fit space-y-4">
          <h2 className="font-semibold text-blue-950">Add New Project</h2>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Cover Image</label>
            <label className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-line hover:border-blue-300 h-40 cursor-pointer overflow-hidden relative bg-bg-tint">
              {draft.imagePreview ? (
                <Image src={draft.imagePreview} alt="Preview" fill className="object-cover" />
              ) : (
                <span className="text-sm text-ink-soft">Click to upload an image</span>
              )}
              <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Project Title</label>
            <input
              required
              value={draft.title}
              onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
              placeholder="e.g. Riverside Villa"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-blue-950 mb-1.5">Category</label>
              <select
                value={draft.category}
                onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}
                className="w-full rounded-xl border border-line px-3 py-2.5 text-sm bg-white outline-none"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="interior">Interior</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-950 mb-1.5">Year</label>
              <input
                value={draft.year}
                onChange={(e) => setDraft((d) => ({ ...d, year: e.target.value }))}
                className="w-full rounded-xl border border-line px-3 py-2.5 text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Location</label>
            <input
              value={draft.location}
              onChange={(e) => setDraft((d) => ({ ...d, location: e.target.value }))}
              placeholder="e.g. Kondhwa, Pune"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Short Summary</label>
            <textarea
              value={draft.summary}
              onChange={(e) => setDraft((d) => ({ ...d, summary: e.target.value }))}
              rows={3}
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Challenge</label>
            <textarea
              value={draft.challenge}
              onChange={(e) => setDraft((d) => ({ ...d, challenge: e.target.value }))}
              rows={2}
              placeholder="What made this project specific or difficult?"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">Solution</label>
            <textarea
              value={draft.solution}
              onChange={(e) => setDraft((d) => ({ ...d, solution: e.target.value }))}
              rows={2}
              placeholder="How did we solve it?"
              className="w-full rounded-xl border border-line px-4 py-2.5 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-950 mb-1.5">
              Gallery Images ({draft.galleryPreviews.length})
            </label>
            <label className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-line hover:border-blue-300 h-16 cursor-pointer bg-bg-tint">
              <span className="text-sm text-ink-soft">Click to add gallery images (6–8 recommended)</span>
              <input type="file" accept="image/*" multiple onChange={handleGalleryImages} className="hidden" />
            </label>
            {draft.galleryPreviews.length > 0 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {draft.galleryPreviews.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-blue-100 group">
                    <Image src={src} alt={`Gallery image ${i + 1}`} fill className="object-cover" />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(i)}
                      className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium"
                      aria-label={`Remove gallery image ${i + 1}`}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button type="submit" className="w-full rounded-full bg-blue-700 text-white py-3 text-sm font-semibold hover:bg-blue-800 transition-colors">
            Save Project
          </button>
          {saved && <p className="text-sm text-green-700">Saved to this session. Connect Supabase to persist permanently.</p>}
        </form>

        <div className="lg:col-span-3">
          <h2 className="font-semibold text-blue-950 mb-3">Live Projects ({seedProjects.length + added.length})</h2>
          <div className="space-y-3">
            {added.map((p, i) => (
              <ProjectRow key={`draft-${i}`} title={p.title || "Untitled project"} location={p.location} category={p.category} image={p.imagePreview} isNew />
            ))}
            {seedProjects.map((p: Project) => (
              <ProjectRow key={p.slug} title={p.title} location={p.location} category={p.category} image={p.coverImage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({
  title,
  location,
  category,
  image,
  isNew,
}: {
  title: string;
  location: string;
  category: string;
  image: string | null;
  isNew?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white border border-line p-3">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-blue-100 shrink-0">
        {image && <Image src={image} alt={title} fill className="object-cover" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-blue-950 truncate">{title}</p>
        <p className="text-xs text-ink-soft">{location} · {category}</p>
      </div>
      {isNew && (
        <span className="text-[10px] font-mono-label uppercase tracking-wide bg-green-100 text-green-700 px-2 py-1 rounded-full">
          New
        </span>
      )}
    </div>
  );
}
