import Link from "next/link";
import Image from "next/image";
import { Plus, Video, Play } from "lucide-react";
import { getAllProjectsForAdmin } from "@/lib/supabase/queries";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteProject } from "@/lib/supabase/actions";

export default async function AdminVideosPage() {
  const allProjects = await getAllProjectsForAdmin();
  const videoProjects = allProjects.filter((p) => Boolean(p.videoUrl));

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-blue-950 flex items-center gap-2">
            <Video className="w-6 h-6 text-purple-700" />
            YouTube Video Reels Manager
          </h1>
          <p className="text-xs font-mono-label text-slate-500 mt-1">
            Upload YouTube Shorts URLs featuring project walkthroughs and site progress.
          </p>
        </div>

        <Link
          href="/admin/dashboard/videos/new"
          className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shrink-0 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Video Reel</span>
        </Link>
      </div>

      {videoProjects.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center">
          <Video className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-600 font-medium text-sm">No video reels uploaded yet.</p>
          <Link
            href="/admin/dashboard/videos/new"
            className="inline-block mt-4 text-xs font-bold text-purple-700 bg-purple-50 px-4 py-2 rounded-xl border border-purple-200 hover:bg-purple-100 transition-colors"
          >
            + Add First Video Reel
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {videoProjects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-slate-950 shrink-0 border border-slate-200 flex items-center justify-center">
                  {p.coverImage && <Image src={p.coverImage} alt="" fill className="object-cover" unoptimized />}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-current" />
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="font-bold text-slate-900 text-sm sm:text-base truncate">{p.title}</p>
                  <p className="text-xs font-mono-label text-slate-500 truncate mt-0.5">
                    {p.location} • {p.year} • <span className="capitalize">{p.category}</span>
                    {!p.published && <span className="ml-2 text-amber-600 font-bold">Draft</span>}
                  </p>
                  {p.videoUrl && (
                    <p className="text-xs text-purple-700 font-mono truncate mt-1">
                      {p.videoUrl}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 w-full sm:w-auto justify-end">
                <Link
                  href={`/admin/dashboard/projects/${p.id}`}
                  className="text-xs font-bold text-purple-700 bg-purple-50 px-3.5 py-2 rounded-xl border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  Edit
                </Link>
                <DeleteButton id={p.id} action={deleteProject} label="video" />
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
