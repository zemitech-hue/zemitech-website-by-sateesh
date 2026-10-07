import Link from "next/link";
import { Plus, Newspaper } from "lucide-react";
import { getAllBlogPostsForAdmin } from "@/lib/supabase/queries";
import AdminItemRow from "@/components/admin/AdminItemRow";
import { deleteBlogPost, setBlogPostPublished } from "@/lib/supabase/actions";

export default async function AdminBlogPage() {
  const posts = await getAllBlogPostsForAdmin();

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-blue-950 flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-blue-700" />
            Blog Articles Manager
          </h1>
          <p className="text-xs font-mono-label text-slate-500 mt-1">
            Manage construction and interior blog posts published on your website.
          </p>
        </div>

        <Link
          href="/admin/dashboard/blog/new"
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shrink-0 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center">
          <Newspaper className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-600 font-medium text-sm">No blog articles written yet.</p>
          <Link
            href="/admin/dashboard/blog/new"
            className="inline-block mt-4 text-xs font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            + Write First Article
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <AdminItemRow
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.coverImage}
              meta={
                <>
                  {p.category} • {new Date(p.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} •{" "}
                  {p.readMinutes} min read
                </>
              }
              editHref={`/admin/dashboard/blog/${p.id}`}
              liveHref={`/blog/${p.slug}`}
              published={p.published}
              label="post"
              onDelete={deleteBlogPost}
              onTogglePublish={setBlogPostPublished}
            />
          ))}
        </div>
      )}

    </div>
  );
}
