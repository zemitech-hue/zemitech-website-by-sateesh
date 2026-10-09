"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createTeamMember } from "@/lib/supabase/actions";
import type { TeamMember } from "@/lib/supabase/queries";
import {
  UserPlus,
  Upload,
  User,
  Briefcase,
  Award,
  AlertCircle,
  CheckCircle2,
  Image as ImageIcon,
  Link2,
  Sparkles,
} from "lucide-react";

interface AddTeamMemberFormProps {
  member?: TeamMember;
  action?: (formData: FormData) => Promise<{ success?: boolean; error?: string } | undefined>;
}

export default function AddTeamMemberForm({ member, action }: AddTeamMemberFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [inputMode, setInputMode] = useState<"upload" | "url">("upload");
  const [imagePreview, setImagePreview] = useState<string | null>(member?.image_url || null);
  const [urlInput, setUrlInput] = useState(member?.image_url || "");

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
        try {
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
            const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.85);
            setImagePreview(compressedDataUrl);
          } else {
            setImagePreview(event.target?.result as string);
          }
        } catch {
          setImagePreview(event.target?.result as string);
        }
      };
      img.onerror = () => {
        setImagePreview(event.target?.result as string);
      };
    };

    reader.readAsDataURL(file);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUrlInput(val);
    setImagePreview(val.trim() ? val.trim() : null);
  };

  const setPresetAvatar = (url: string) => {
    setImagePreview(url);
    setUrlInput(url);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    // Resolve final image url
    const resolvedImage =
      (inputMode === "url" ? urlInput.trim() : imagePreview) ||
      member?.image_url ||
      "/images/about/zemara-team.png";

    formData.set("image_url", resolvedImage);

    try {
      const runner = action || createTeamMember;
      const res = await runner(formData);

      if (res?.error) {
        setError(res.error);
        setLoading(false);
      } else {
        setSuccess(true);
        setTimeout(() => {
          router.push("/admin/dashboard/team");
          router.refresh();
        }, 600);
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setError("An unexpected error occurred. Please try again.");
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

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Employee saved successfully! Redirecting to directory...</span>
        </div>
      )}

      {/* SECTION 1: PHOTO UPLOAD OR URL */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-mono-label font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4 text-amber-500" />
            <span>1. Employee Photo</span>
          </label>
          <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-bold">
            <button
              type="button"
              onClick={() => setInputMode("upload")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                inputMode === "upload" ? "bg-white text-slate-950 shadow-xs" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Upload File
            </button>
            <button
              type="button"
              onClick={() => setInputMode("url")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                inputMode === "url" ? "bg-white text-slate-950 shadow-xs" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Image URL
            </button>
          </div>
        </div>

        <div className="p-5 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/40">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {imagePreview ? (
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0 bg-slate-100">
                <Image
                  src={imagePreview}
                  alt="Employee Preview"
                  fill
                  className="object-cover"
                  unoptimized={imagePreview.startsWith("data:")}
                />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-slate-100 border border-slate-300 flex flex-col items-center justify-center text-slate-400 shrink-0">
                <User className="w-10 h-10 text-amber-500 mb-1" />
                <span className="text-[10px] font-bold uppercase">Default</span>
              </div>
            )}

            <div className="flex-1 w-full space-y-2">
              {inputMode === "upload" ? (
                <>
                  <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer border border-amber-300">
                    <Upload className="w-4 h-4" />
                    <span>{imagePreview ? "Change Photo" : "Select Photo File"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-slate-500 font-medium">
                    Upload JPG, PNG, or WEBP photo. It will automatically compress for fast loading.
                  </p>
                </>
              ) : (
                <div className="space-y-1.5">
                  <div className="relative">
                    <Link2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/photo-..."
                      value={urlInput}
                      onChange={handleUrlChange}
                      className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 text-slate-900 bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">Paste any public image link (Unsplash, CDN, or Cloudinary).</p>
                </div>
              )}

              {/* Quick Preset Avatars */}
              <div className="pt-2 flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono-label uppercase text-slate-500 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" /> Presets:
                </span>
                <button
                  type="button"
                  onClick={() => setPresetAvatar("/images/about/zemara-team.png")}
                  className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 hover:border-amber-400 text-slate-700"
                >
                  Executive Team
                </button>
                <button
                  type="button"
                  onClick={() => setPresetAvatar("/images/about/milestone-2019-construction.png")}
                  className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 hover:border-amber-400 text-slate-700"
                >
                  Site Engineer
                </button>
                <button
                  type="button"
                  onClick={() => setPresetAvatar("/images/about/milestone-2022-interiors.png")}
                  className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 hover:border-amber-400 text-slate-700"
                >
                  Design Studio
                </button>
              </div>
            </div>
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
          defaultValue={member?.name || ""}
          required
          placeholder="e.g. Er. Manish K. Sah"
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
          defaultValue={member?.role || ""}
          required
          placeholder="e.g. Lead Civil Engineer & Project Manager"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
        />
      </div>

      {/* FIELD 4: YEARS OF EXPERIENCE */}
      <div>
        <label className="block text-xs font-mono-label font-bold uppercase text-slate-700 tracking-wider mb-2 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-amber-600" />
          <span>4. Years of Experience (Badge)</span>
        </label>
        <input
          type="text"
          name="experience"
          defaultValue={member?.experience || ""}
          required
          placeholder="e.g. 5+ Years"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
        />
        <p className="text-[11px] text-slate-500 mt-1.5">
          Short badge format only (e.g. <strong>5+ Years</strong>, <strong>8+ Years</strong>, or <strong>14+ Years</strong>).
        </p>
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
          disabled={loading || success}
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50 border border-amber-300"
        >
          <UserPlus className="w-4 h-4" />
          <span>
            {loading
              ? "Saving Employee..."
              : success
              ? "Saved!"
              : member
              ? "Update Employee"
              : "Save Employee"}
          </span>
        </button>
      </div>
    </form>
  );
}
