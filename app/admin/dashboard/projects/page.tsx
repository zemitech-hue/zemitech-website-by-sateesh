import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { getAllProjectsForAdmin } from "@/lib/supabase/queries";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteProject } from "@/lib/supabase/actions";

export default async function AdminProjectsPage() {
  const projects = await getAllProjectsForAdmin();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-blue-950">Projects</h1>
        <Link
          href="/admin/dashboard/projects/new"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg"
        >
          <Plus className="w-4 h-4" />
          New project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="text-ink-soft">No projects yet. Add your first one.</p>
      ) : (
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.id} className="flex items-center gap-4 bg-white border border-line rounded-xl p-4">
              <div className="relative w-20 h-14 rounded-lg overflow-hidden bg-bg-tint shrink-0">
                {p.coverImage && <Image src={p.coverImage} alt="" fill className="object-cover" unoptimized />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-blue-950 truncate">{p.title}</p>
                <p className="text-sm text-ink-soft truncate">
                  {p.location} · {p.year} · {p.category}
                  {!p.published && <span className="ml-2 text-amber-600 font-medium">Draft</span>}
                </p>
              </div>
              <Link
                href={`/admin/dashboard/projects/${p.id}`}
                className="text-sm font-medium text-blue-700 hover:text-blue-900 shrink-0"
              >
                Edit
              </Link>
              <DeleteButton id={p.id} action={deleteProject} label="project" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
