"use client";

import { useState, useTransition } from "react";
import ImageUploadField from "@/components/admin/ImageUploadField";
import type { BlogPost } from "@/lib/types/blog";

export default function BlogForm({
  post,
  action,
}: {
  post?: BlogPost;
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
        <Field label="Title" name="title" defaultValue={post?.title} required />
        <Field label="URL slug" name="slug" defaultValue={post?.slug} required placeholder="e.g. how-to-choose-a-kitchen-layout" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Category" name="category" defaultValue={post?.category ?? "General"} required />
        <Field label="Read time (minutes)" name="read_minutes" defaultValue={post ? String(post.readMinutes) : "5"} />
      </div>

      <TextArea label="Excerpt (1-2 sentences, shown on listing cards)" name="excerpt" defaultValue={post?.excerpt} rows={2} required />

      <ImageUploadField name="cover_image_url" bucket="blog-images" label="Cover photo" defaultValue={post?.coverImage} />

      <div>
        <label className="block text-sm font-medium text-blue-950 mb-1.5">
          Post content (Markdown)
        </label>
        <p className="text-xs text-ink-soft mb-2">
          <code># Heading</code>, <code>## Subheading</code>, blank line between paragraphs,{" "}
          <code>- item</code> for bullet lists, <code>![alt](image-url)</code> for images,{" "}
          pipe-separated rows for tables. Upload an image above or elsewhere and paste its URL to embed it inline.
        </p>
        <textarea
          name="content_md"
          defaultValue={post?.contentMd}
          rows={20}
          className="w-full px-4 py-3 rounded-lg border border-line font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <label className="flex items-center gap-2.5 text-sm font-medium text-blue-950">
        <input type="checkbox" name="published" defaultChecked={post?.published ?? true} className="w-4 h-4" />
        Published (visible on the live site)
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg disabled:opacity-60"
      >
        {isPending ? "Saving…" : "Save post"}
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
}: {
  label: string;
  name: string;
  defaultValue?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-blue-950 mb-1.5">{label}</label>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        required={required}
        className="w-full px-4 py-2.5 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
