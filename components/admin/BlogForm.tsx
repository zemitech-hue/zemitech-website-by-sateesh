"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import ImageUploadField from "@/components/admin/ImageUploadField";
import BlogContent from "@/components/sections/BlogContent";
import type { BlogPost } from "@/lib/types/blog";
import { Newspaper, CheckCircle2, ArrowLeft, Eye, PencilLine, Loader2 } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all";
const labelClass = "block text-xs font-mono-label font-bold text-slate-700 uppercase tracking-wider mb-2";

export default function BlogForm({
  post,
  action,
}: {
  post?: BlogPost;
  action: (formData: FormData) => Promise<{ error: string } | void>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState(post?.contentMd ?? "");
  const [tab, setTab] = useState<"write" | "preview">("write");
  const words = content.trim() ? content.trim().split(/\s+/).length : 0;

  return (
    <form
      action={(formData) => {
        setError(null);
        startTransition(async () => {
          const result = await action(formData);
          if (result?.error) setError(result.error);
        });
      }}
      className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-sm space-y-6 sm:space-y-8"
    >
      {/* Header Banner */}
      <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-5">
        <div className="min-w-0">
          <Link
            href="/admin/dashboard/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-700 mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </Link>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-blue-700 shrink-0" />
            {post ? "Edit Blog Article" : "Create New Blog Article"}
          </h2>
          <p className="text-xs font-mono-label text-slate-500 mt-1">
            Cover image, title and article content. Changes go live on the website as soon as you save.
          </p>
        </div>
        {post?.published && (
          <Link
            href={`/blog/${post.slug}`}
            target="_blank"
            className="shrink-0 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-2 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            View live
          </Link>
        )}
      </div>

      {/* Row 1: Title & Category */}
      <div className="grid sm:grid-cols-3 gap-5">
        <div className="sm:col-span-2">
          <label className={labelClass}>Blog Article Heading / Title</label>
          <input
            type="text"
            name="title"
            defaultValue={post?.title}
            required
            placeholder="e.g. 10 Essential Vastu Tips for Villa Construction"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Category</label>
          <input
            type="text"
            name="category"
            defaultValue={post?.category ?? "Construction & Interiors"}
            required
            placeholder="e.g. Construction Tips"
            className={inputClass}
          />
        </div>
      </div>

      {/* Cover Photo */}
      <div className="bg-slate-50/70 rounded-2xl p-4 sm:p-6 border border-slate-200/80 space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-blue-700" />
            Article Cover Image
          </h3>
          <p className="text-xs font-mono-label text-slate-500 mt-0.5">
            Shown on the blog listing card and at the top of the article.
          </p>
        </div>

        <ImageUploadField name="cover_image_url" bucket="blog-images" label="Select Blog Cover Photo" defaultValue={post?.coverImage} />
      </div>

      {/* Excerpt */}
      <div>
        <label className={labelClass}>
          Short Summary <span className="normal-case font-medium text-slate-400">(optional — auto-generated from content if empty)</span>
        </label>
        <textarea
          name="excerpt"
          defaultValue={post?.excerpt}
          rows={2}
          maxLength={300}
          placeholder="One or two sentences shown on the blog card and in Google results."
          className={inputClass}
        />
      </div>

      {/* Blog Article Content */}
      <div>
        <div className="flex items-end justify-between gap-3 mb-2 flex-wrap">
          <label className={`${labelClass} mb-0`}>Blog Content</label>
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1 text-xs font-bold">
            <button
              type="button"
              onClick={() => setTab("write")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                tab === "write" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <PencilLine className="w-3.5 h-3.5" /> Write
            </button>
            <button
              type="button"
              onClick={() => setTab("preview")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                tab === "preview" ? "bg-white text-blue-700 shadow-sm" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Preview
            </button>
          </div>
        </div>

        {/* The textarea stays mounted (just hidden) so its value is always submitted. */}
        <textarea
          name="content_md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={16}
          required
          placeholder={"Write or paste your article here.\n\n## Use two hashes for a section heading\n- Start a line with a dash for bullet points\n**bold text**, [link text](https://example.com)"}
          className={`${inputClass} font-mono leading-relaxed min-h-[320px] ${tab === "preview" ? "hidden" : ""}`}
        />
        {tab === "preview" && (
          <div className="min-h-[320px] rounded-xl border border-slate-200 bg-white p-4 sm:p-6 overflow-x-auto">
            {content.trim() ? (
              <BlogContent content={content} />
            ) : (
              <p className="text-sm text-slate-400">Nothing to preview yet.</p>
            )}
          </div>
        )}
        <p className="text-xs text-slate-500 mt-2">
          {words} words · about {Math.max(1, Math.round(words / 200))} min read. Formatting: <code>## Heading</code>, <code>- bullet</code>,{" "}
          <code>**bold**</code>, <code>[link](url)</code>.
        </p>
      </div>

      {/* Publish + Save */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
        <label className="flex items-center gap-3 text-sm font-bold text-slate-800 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            defaultChecked={post?.published ?? true}
            className="w-4 h-4 rounded text-blue-700 focus:ring-blue-600 cursor-pointer"
          />
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Publish on live website
          </span>
        </label>

        {error && <p className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg border border-red-200">{error}</p>}

        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-700/20 hover:shadow-lg disabled:opacity-60 transition-all cursor-pointer"
        >
          {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
          {isPending ? "Saving Article..." : post ? "Update Article" : "Publish Blog Article"}
        </button>
      </div>
    </form>
  );
}
