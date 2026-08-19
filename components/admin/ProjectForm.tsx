"use client";

import { useState, useTransition } from "react";
import ImageUploadField from "@/components/admin/ImageUploadField";
import type { Project } from "@/lib/types/project";
import { Building2, Video, User, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const categories = [
  { value: "residential", label: "Residential Construction" },
  { value: "commercial", label: "Commercial Building" },
  { value: "infrastructure", label: "Infrastructure Civil" },
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
      className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8"
    >
      {/* Header Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-700" />
            {project ? "Edit Property / Video Listing" : "Upload Built Property or Video Reel"}
          </h2>
          <p className="text-xs font-mono-label text-slate-500 mt-1">
            Fill required project details and upload 1 photo or video reel URL.
          </p>
        </div>
        <span className="text-xs font-mono-label font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Required Fields Only
        </span>
      </div>

      {/* Row 1: Title & Client Name */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Property / Project Title"
          name="title"
          defaultValue={project?.title}
          placeholder="e.g. 4BHK Independent Luxury Villa"
          required
          icon={<Building2 className="w-4 h-4 text-slate-400" />}
        />
        <Field
          label="Client Name"
          name="client_name"
          defaultValue={project?.clientQuote?.author}
          placeholder="e.g. Mr. S. Kulkarni"
          required
          icon={<User className="w-4 h-4 text-slate-400" />}
        />
      </div>

      {/* Row 2: Location, Project Type & Completion Date */}
      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-mono-label font-bold text-slate-700 uppercase tracking-wider mb-2">
            Project Type
          </label>
          <select
            name="category"
            defaultValue={project?.category ?? "residential"}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          >
            {categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <Field
          label="Location"
          name="location"
          defaultValue={project?.location}
          placeholder="e.g. Narhe, Pune"
          required
          icon={<MapPin className="w-4 h-4 text-slate-400" />}
        />

        <Field
          label="Completion Date / Year"
          name="year"
          defaultValue={project?.year}
          placeholder="e.g. March 2025"
          required
          icon={<Calendar className="w-4 h-4 text-slate-400" />}
        />
      </div>

      {/* Upload Feature 1: Single Property Cover Photo (9:16 Vertical Ratio Ready) */}
      <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-700" />
              1. Built Property Cover Photo (Single Upload)
            </h3>
            <p className="text-xs font-mono-label text-slate-500 mt-0.5">
              Upload 1 high-resolution photo of the completed project (renders in 9:16 vertical ratio).
            </p>
          </div>
          <span className="text-[11px] font-mono-label text-slate-500 font-bold bg-white px-2.5 py-1 rounded-md border border-slate-200">
            9:16 Ratio Optimized
          </span>
        </div>

        <ImageUploadField
          name="cover_image_url"
          bucket="project-images"
          label="Select Property Photo"
          defaultValue={project?.coverImage}
        />
      </div>

      {/* Upload Feature 2: YouTube Video Reel Link (Shorts or Watch URL) */}
      <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Video className="w-4 h-4 text-purple-700" />
            2. YouTube Video Reel URL (Shorts or Watch Link)
          </h3>
          <p className="text-xs font-mono-label text-slate-500 mt-0.5">
            Paste a YouTube Shorts or Video URL to feature vertical 9:16 video reel playback.
          </p>
        </div>

        <div className="relative">
          <input
            type="url"
            name="video_url"
            defaultValue={project?.videoUrl ?? undefined}
            placeholder="https://www.youtube.com/shorts/VIDEO_ID or https://youtu.be/VIDEO_ID"
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
          />
          <Video className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
        </div>
      </div>

      {/* Live Status Checkbox */}
      <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-100">
        <label className="flex items-center gap-3 text-sm font-bold text-slate-800 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            defaultChecked={project?.published ?? true}
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
          {isPending ? "Saving Property..." : project ? "Update Listing" : "Upload Property Details"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  required,
  placeholder,
  icon,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-mono-label font-bold text-slate-700 uppercase tracking-wider mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          name={name}
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
        />
        {icon && <div className="absolute left-4 top-3.5">{icon}</div>}
      </div>
    </div>
  );
}
