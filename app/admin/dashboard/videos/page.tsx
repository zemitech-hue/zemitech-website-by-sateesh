import Link from "next/link";
import { Plus, Video } from "lucide-react";
import { getAllProjectsForAdmin } from "@/lib/supabase/queries";
import AdminItemRow from "@/components/admin/AdminItemRow";
import { deleteProject, setProjectPublished } from "@/lib/supabase/actions";

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
            <AdminItemRow
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.coverImage}
              video
              meta={
                <>
                  {[p.location, p.year].filter(Boolean).join(" • ")} • <span className="capitalize">{p.category}</span>
                  <span className="block text-purple-700 truncate">{p.videoUrl}</span>
                </>
              }
              editHref={`/admin/dashboard/projects/${p.id}`}
              liveHref={`/projects/${p.slug}`}
              published={p.published}
              label="video reel"
              onDelete={deleteProject}
              onTogglePublish={setProjectPublished}
            />
          ))}
        </div>
      )}

    </div>
  );
}
