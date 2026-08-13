import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { blogPosts } from "@/lib/data/blog";

export default function AdminOverviewPage() {
  const cards = [
    { label: "Total Projects", value: projects.length, href: "/admin/dashboard/projects" },
    { label: "Gallery Images", value: projects.reduce((n, p) => n + 1 + p.gallery.length, 0), href: "/admin/dashboard/media" },
    { label: "Blog Posts", value: blogPosts.length, href: "/admin/dashboard/settings" },
    { label: "Videos Linked", value: 0, href: "/admin/dashboard/videos" },
  ];

  return (
    <div>
      <p className="font-mono-label text-xs uppercase tracking-wide text-green-700">Admin</p>
      <h1 className="text-2xl font-semibold text-blue-950 mt-1">Welcome back</h1>
      <p className="text-ink-soft text-sm mt-1">Manage your site&apos;s projects, gallery and homepage videos here.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="rounded-2xl bg-white border border-line p-6 hover:border-blue-300 transition-colors">
            <p className="text-3xl font-semibold text-blue-700">{c.value}</p>
            <p className="text-sm text-ink-soft mt-1">{c.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">
        <p className="font-semibold text-blue-950">This is a demo admin panel</p>
        <p className="text-sm text-ink-soft mt-2 leading-relaxed">
          Everything you add here (projects, photos, videos) previews instantly but resets on refresh, since no
          database is connected yet. Before launch, wire these forms to the Supabase tables described in{" "}
          <code className="bg-white px-1.5 py-0.5 rounded border border-blue-100">README.md</code> so changes persist and appear
          on the live site.
        </p>
      </div>
    </div>
  );
}
