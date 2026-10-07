import Link from "next/link";
import { Plus, Building2 } from "lucide-react";
import { getAllProjectsForAdmin } from "@/lib/supabase/queries";
import AdminItemRow from "@/components/admin/AdminItemRow";
import { deleteProject, setProjectPublished } from "@/lib/supabase/actions";

export default async function AdminProjectsPage() {
  const projects = await getAllProjectsForAdmin();

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-blue-950 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-700" />
            Built Property Photos
          </h1>
          <p className="text-xs font-mono-label text-slate-500 mt-1">
            Manage built property photo listings displayed across your website.
          </p>
        </div>

        <Link
          href="/admin/dashboard/projects/new"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shrink-0 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Property Photo</span>
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center">
          <Building2 className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-600 font-medium text-sm">No property photos uploaded yet.</p>
          <Link
            href="/admin/dashboard/projects/new"
            className="inline-block mt-4 text-xs font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            + Upload First Property Photo
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map((p) => (
            <AdminItemRow
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.coverImage}
              meta={
                <>
                  {[p.location, p.year].filter(Boolean).join(" • ")} • <span className="capitalize">{p.category}</span>
                  {p.clientQuote?.author && <> • Client: {p.clientQuote.author}</>}
                </>
              }
              editHref={`/admin/dashboard/projects/${p.id}`}
              liveHref={`/projects/${p.slug}`}
              published={p.published}
              label="property"
              onDelete={deleteProject}
              onTogglePublish={setProjectPublished}
            />
          ))}
        </div>
      )}

    </div>
  );
}
