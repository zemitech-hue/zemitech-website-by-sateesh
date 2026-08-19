"use client";

import { useActionState } from "react";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { Project } from "@/lib/types/project";
import { Image as ImageIcon, MapPin, User, CheckCircle2, Building2, Sparkles } from "lucide-react";
import SupabaseStatusBadge from "@/components/admin/SupabaseStatusBadge";

type FormState = { error?: string } | null;

export default function PhotoProjectForm({
  action,
  project,
}: {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  project?: Project | null;
}) {
  const [errorState, formAction, isPending] = useActionState(action, null);
  const error = errorState?.error;

  return (
    <div className="w-full flex justify-center py-4">
      <form action={formAction} className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-xl w-full max-w-xl space-y-6">
        
        {/* Header Info with Supabase Connection Badge */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 flex-wrap gap-2">
          <div>
            <h2 className="text-xl font-extrabold text-blue-950 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-700" />
              Upload Built Property
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Select property image first, followed by project details.
            </p>
          </div>
          <SupabaseStatusBadge compact />
        </div>

        {/* TOP PRIORITY #1: PROPERTY COVER PHOTO UPLOAD */}
        <div className="bg-gradient-to-br from-blue-50 via-blue-50/70 to-blue-100/50 rounded-2xl p-5 border border-blue-200/90 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-blue-950 flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-700" />
              1. Property Cover Photo (Top Priority)
            </h3>
            <span className="text-[10px] font-mono-label text-blue-700 font-bold bg-white px-2 py-0.5 rounded-full border border-blue-200">
              Optional (Auto Fallback)
            </span>
          </div>

          <ImageUploadField
            name="cover_image_url"
            bucket="project-images"
            label="Select Property Photo"
            defaultValue={project?.coverImage}
          />
        </div>

        {/* 3 DETAILS */}
        <div className="space-y-4 pt-1">
          
          {/* Detail 2: Title */}
          <div>
            <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              2. Property / Project Title *
            </label>
            <div className="relative">
              <input
                type="text"
                name="title"
                defaultValue={project?.title}
                required
                placeholder="e.g. 4BHK Luxury Villa"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* Detail 3: Client Name */}
          <div>
            <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              3. Client Name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="client_quote_author"
                defaultValue={project?.clientQuote?.author}
                required
                placeholder="e.g. Mr. S. Kulkarni"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* Detail 4: Location & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                4. Location *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  defaultValue={project?.location ?? "Baner, Pune"}
                  required
                  placeholder="e.g. Baner, Pune"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Project Type
              </label>
              <select
                name="category"
                defaultValue={project?.category ?? "residential"}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              >
                <option value="residential">Residential Construction</option>
                <option value="commercial">Commercial Construction</option>
                <option value="interior">Interior Design</option>
                <option value="infrastructure">Infrastructure &amp; Civil</option>
              </select>
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-100">
          <label className="flex items-center gap-2.5 text-xs font-bold text-slate-800 cursor-pointer">
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
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-700/20 hover:shadow-lg disabled:opacity-60 transition-all cursor-pointer"
          >
            {isPending ? "Uploading..." : project ? "Update Property" : "Upload Built Property"}
          </button>
        </div>

      </form>
    </div>
  );
}
