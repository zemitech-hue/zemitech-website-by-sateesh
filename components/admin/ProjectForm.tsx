"use client";

import { useState, useTransition } from "react";
import ImageUploadField from "@/components/admin/ImageUploadField";
import GalleryUploadField from "@/components/admin/GalleryUploadField";
import type { Project } from "@/lib/types/project";

const categories = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "interior", label: "Interior Design" },
];

export default function ProjectForm({
  project,
  action,
}: {
  project?: Project;
  action: (formData: FormData) => Promise<{ error: string } | void>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        setError(null);
        startTransition(async () => {
          const result = await action(formData);
          if (result?.error) setError(result.error);
        });
      }}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title" name="title" defaultValue={project?.title} required />
        <Field label="URL slug" name="slug" defaultValue={project?.slug} required placeholder="e.g. narhe-hillcrest-villa" />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-blue-950 mb-1.5">Category</label>
          <select
            name="category"
            defaultValue={project?.category ?? "residential"}
            className="w-full px-4 py-2.5 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        <Field label="Location" name="location" defaultValue={project?.location} placeholder="e.g. Narhe, Pune" required />
        <Field label="Year" name="year" defaultValue={project?.year} placeholder="e.g. 2025" required />
      </div>

      <Field label="Built-up area" name="area" defaultValue={project?.area} placeholder="e.g. 3,200 sq. ft." required />
      <TextArea label="Summary (1 sentence)" name="summary" defaultValue={project?.summary} rows={2} required />
      <TextArea
        label="Description (one paragraph per line)"
        name="description"
        defaultValue={project?.description.join("\n")}
        rows={4}
      />
      <TextArea
        label="Scope of work (one item per line)"
        name="scope"
        defaultValue={project?.scope.join("\n")}
        rows={3}
        placeholder={"Full construction\nInterior fit-out"}
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <TextArea label="The challenge" name="challenge" defaultValue={project?.challenge} rows={4} />
        <TextArea label="Our solution" name="solution" defaultValue={project?.solution} rows={4} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 border-t border-line pt-6">
        <Field label="Client quote (optional)" name="client_quote_text" defaultValue={project?.clientQuote?.quote} />
        <Field label="Client name" name="client_quote_author" defaultValue={project?.clientQuote?.author} />
        <Field label="Client location" name="client_quote_location" defaultValue={project?.clientQuote?.location} />
      </div>

      <Field
        label="Video URL (YouTube or Instagram link — optional)"
        name="video_url"
        defaultValue={project?.videoUrl ?? undefined}
        placeholder="https://www.youtube.com/watch?v=... or https://www.instagram.com/reel/..."
      />

      <div className="border-t border-line pt-6 space-y-6">
        <ImageUploadField name="cover_image_url" bucket="project-images" label="Cover photo" defaultValue={project?.coverImage} />
        <GalleryUploadField name="gallery_urls" bucket="project-images" label="Gallery photos" defaultValue={project?.galleryUrls} />
      </div>

      <label className="flex items-center gap-2.5 text-sm font-medium text-blue-950">
        <input type="checkbox" name="published" defaultChecked={project?.published ?? true} className="w-4 h-4" />
        Published (visible on the live site)
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg disabled:opacity-60"
      >
        {isPending ? "Saving…" : "Save project"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-blue-950 mb-1.5">{label}</label>
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  defaultValue,
  rows = 3,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-blue-950 mb-1.5">{label}</label>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
