"use client";

import { useState, useTransition } from "react";
import ImageUploadField from "@/components/admin/ImageUploadField";
import type { BlogPost } from "@/lib/types/blog";
import { Newspaper, CheckCircle2 } from "lucide-react";

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
      className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8"
    >
      {/* Header Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-blue-700" />
            {post ? "Edit Blog Article" : "Create New Blog Article"}
          </h2>
          <p className="text-xs font-mono-label text-slate-500 mt-1">
            Upload 1 cover image, title heading, and article content.
          </p>
        </div>
        <span className="text-xs font-mono-label font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Clean Blog Creator
        </span>
      </div>

      {/* Row 1: Title & Category */}
      <div className="grid sm:grid-cols-3 gap-5">
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono-label font-bold text-slate-700 uppercase tracking-wider mb-2">
            Blog Article Heading / Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={post?.title}
            required
            placeholder="e.g. 10 Essential Vastu Tips for Villa Construction"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-mono-label font-bold text-slate-700 uppercase tracking-wider mb-2">
            Category
          </label>
          <input
            type="text"
            name="category"
            defaultValue={post?.category ?? "Construction & Interiors"}
            required
            placeholder="e.g. Construction Tips"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
        </div>
      </div>

      {/* Upload 1 Cover Photo */}
      <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-blue-700" />
            Article Cover Image (Single Upload)
          </h3>
          <p className="text-xs font-mono-label text-slate-500 mt-0.5">
            Select 1 cover photo for the blog post listing card and header banner.
          </p>
        </div>

        <ImageUploadField
          name="cover_image_url"
          bucket="blog-images"
          label="Select Blog Cover Photo"
          defaultValue={post?.coverImage}
        />
      </div>

      {/* Blog Article Content */}
      <div>
        <label className="block text-xs font-mono-label font-bold text-slate-700 uppercase tracking-wider mb-2">
          Blog Content
        </label>
        <textarea
          name="content_md"
          defaultValue={post?.contentMd}
          rows={12}
          required
          placeholder="Write or paste your article content here..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
        />
      </div>

      {/* Live Status Checkbox */}
      <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-100">
        <label className="flex items-center gap-3 text-sm font-bold text-slate-800 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            defaultChecked={post?.published ?? true}
            className="w-4 h-4 rounded text-blue-700 focus:ring-blue-600 cursor-pointer"
          />
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Publish directly on live website
          </span>
        </label>

        {error && <p className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200">{error}</p>}

        <button
          type="submit"
          disabled={isPending}
          className="px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-700/20 hover:shadow-lg disabled:opacity-60 transition-all cursor-pointer"
        >
          {isPending ? "Saving Article..." : post ? "Update Article" : "Publish Blog Article"}
        </button>
      </div>
    </form>
  );
}
