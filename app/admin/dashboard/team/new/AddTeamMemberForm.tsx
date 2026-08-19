"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createTeamMember } from "@/lib/supabase/actions";
import { UserPlus, Upload, User, Briefcase, Award, AlertCircle, CheckCircle2, Image as ImageIcon } from "lucide-react";

export default function AddTeamMemberForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Compress and convert uploaded image file directly to lightweight Data URL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = document.createElement("img");
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_DIM = 800; // Optimal 800px photo resolution
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_DIM) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          }
        } else {
          if (height > MAX_DIM) {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.85); // High quality compression (~150KB)
          setImagePreview(compressedDataUrl);
        } else {
          setImagePreview(event.target?.result as string);
        }
      };
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imagePreview) {
      setError("Please select an employee photo to upload.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.set("image_url", imagePreview); // Inject compressed data URL

    const res = await createTeamMember(formData);

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-bold flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* TOP PRIORITY FIELD 1: DIRECT PHOTO UPLOAD */}
      <div>
        <label className="block text-xs font-mono-label font-bold uppercase text-slate-900 tracking-wider mb-2 flex items-center gap-1.5">
          <ImageIcon className="w-4 h-4 text-amber-500" />
          <span>1. Employee Photo Upload (Required)</span>
        </label>
        
        <div className="mt-1 flex items-center gap-5 p-4 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/40 hover:bg-amber-50/80 transition-colors">
          {imagePreview ? (
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
              <Image src={imagePreview} alt="Employee Preview" fill className="object-cover" />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-2xl bg-slate-100 border border-slate-300 flex flex-col items-center justify-center text-slate-400 shrink-0">
              <Upload className="w-8 h-8 text-amber-500 mb-1" />
              <span className="text-[10px] font-bold uppercase">No Photo</span>
            </div>
          )}

          <div className="flex-1 space-y-2">
            <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer border border-amber-300">
              <Upload className="w-4 h-4" />
              <span>{imagePreview ? "Change Photo" : "Upload Photo File"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                required={!imagePreview}
              />
            </label>
            <p className="text-xs text-slate-500 font-medium">
              Upload JPG, PNG, or WEBP photo directly from your device.
            </p>
            {imagePreview && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Photo Compressed &amp; Ready to Save</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hidden input for formData image_url */}
      <input type="hidden" name="image_url" value={imagePreview || ""} />

      {/* FIELD 2: FULL NAME */}
      <div>
        <label className="block text-xs font-mono-label font-bold uppercase text-slate-700 tracking-wider mb-2 flex items-center gap-1.5">
          <User className="w-4 h-4 text-amber-600" />
          <span>2. Employee Name</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Satesh Gavara"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
        />
      </div>

      {/* FIELD 3: ROLE / DESIGNATION */}
      <div>
        <label className="block text-xs font-mono-label font-bold uppercase text-slate-700 tracking-wider mb-2 flex items-center gap-1.5">
          <Briefcase className="w-4 h-4 text-amber-600" />
          <span>3. Role / Designation</span>
        </label>
        <input
          type="text"
          name="role"
          required
          placeholder="e.g. Managing Director & Lead Engineer"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
        />
      </div>

      {/* FIELD 4: YEARS OF EXPERIENCE */}
      <div>
        <label className="block text-xs font-mono-label font-bold uppercase text-slate-700 tracking-wider mb-2 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-amber-600" />
          <span>4. Years of Experience</span>
        </label>
        <input
          type="text"
          name="experience"
          required
          placeholder="e.g. 8+ Years"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
        />
      </div>

      {/* FORM ACTION BUTTONS */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
        <Link
          href="/admin/dashboard/team"
          className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={loading || !imagePreview}
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50 border border-amber-300"
        >
          <UserPlus className="w-4 h-4" />
          <span>{loading ? "Saving Employee..." : "Save Employee"}</span>
        </button>
      </div>
    </form>
  );
}
