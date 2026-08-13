import Link from "next/link";
import { Building2, Newspaper } from "lucide-react";
import { getAllProjectsForAdmin, getAllBlogPostsForAdmin } from "@/lib/supabase/queries";

export default async function AdminDashboardOverview() {
  const [projects, posts] = await Promise.all([getAllProjectsForAdmin(), getAllBlogPostsForAdmin()]);
  const publishedProjects = projects.filter((p) => p.published).length;
  const publishedPosts = posts.filter((p) => p.published).length;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-blue-950 mb-6">Overview</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        <Link
          href="/admin/dashboard/projects"
          className="rounded-2xl border border-line bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
            <Building2 className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-blue-950">{projects.length}</p>
          <p className="text-sm text-ink-soft mt-1">Projects — {publishedProjects} published, {projects.length - publishedProjects} draft</p>
        </Link>
        <Link
          href="/admin/dashboard/blog"
          className="rounded-2xl border border-line bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
            <Newspaper className="w-5 h-5" />
          </div>
          <p className="text-2xl font-bold text-blue-950">{posts.length}</p>
          <p className="text-sm text-ink-soft mt-1">Blog posts — {publishedPosts} published, {posts.length - publishedPosts} draft</p>
        </Link>
      </div>
    </div>
  );
}
