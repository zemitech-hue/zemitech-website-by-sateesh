import Link from "next/link";
import Image from "next/image";
import { Plus, Building2 } from "lucide-react";
import { getAllProjectsForAdmin } from "@/lib/supabase/queries";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteProject } from "@/lib/supabase/actions";

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
            <div
              key={p.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="relative w-16 h-16 sm:w-20 sm:h-14 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                  {p.coverImage && <Image src={p.coverImage} alt="" fill className="object-cover" unoptimized />}
                </div>

                <div className="min-w-0">
                  <p className="font-bold text-slate-900 text-sm sm:text-base truncate">{p.title}</p>
                  <p className="text-xs font-mono-label text-slate-500 truncate mt-0.5">
                    {p.location} • {p.year} • <span className="capitalize">{p.category}</span>
                    {!p.published && <span className="ml-2 text-amber-600 font-bold">Draft</span>}
                  </p>
                  {p.clientQuote?.author && (
                    <p className="text-xs text-slate-600 font-semibold truncate mt-0.5">
                      Client: {p.clientQuote.author}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 w-full sm:w-auto justify-end">
                <Link
                  href={`/admin/dashboard/projects/${p.id}`}
                  className="text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  Edit
                </Link>
                <DeleteButton id={p.id} action={deleteProject} label="project" />
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
