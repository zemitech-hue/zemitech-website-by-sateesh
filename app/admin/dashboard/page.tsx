import Link from "next/link";
import { Building2, Newspaper, Video, ShieldCheck, Plus, ArrowRight, Sparkles, MapPin, Users } from "lucide-react";
import { getAllProjectsForAdmin, getAllBlogPostsForAdmin } from "@/lib/supabase/queries";

export default async function AdminDashboardOverview() {
  const [projects, posts] = await Promise.all([getAllProjectsForAdmin(), getAllBlogPostsForAdmin()]);
  const publishedProjects = projects.filter((p) => p.published).length;
  const videoProjects = projects.filter((p) => Boolean(p.videoUrl)).length;
  const publishedPosts = posts.filter((p) => p.published).length;

  return (
    <div className="space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">Admin Overview</h1>
          <p className="text-xs font-mono-label text-slate-500 mt-1">
            Manage Zemitech Urban built properties, YouTube video reels, and Pune blog articles.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href="/admin/dashboard/projects/new"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Upload Photo</span>
          </Link>
          <Link
            href="/admin/dashboard/videos/new"
            className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Upload Video Reel</span>
          </Link>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Card 1: Property Photos */}
        <Link
          href="/admin/dashboard/projects"
          className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono-label font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                {publishedProjects} Published
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">{projects.length}</h3>
            <p className="text-sm font-bold text-slate-800 mt-1">Property Photos</p>
            <p className="text-xs text-slate-500 mt-0.5">
              {publishedProjects} published on website, {projects.length - publishedProjects} draft.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-blue-900">
            <span>Manage Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 2: YouTube Video Reels */}
        <Link
          href="/admin/dashboard/videos"
          className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono-label font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                {videoProjects} Reels Active
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">{videoProjects}</h3>
            <p className="text-sm font-bold text-slate-800 mt-1">YouTube Video Reels</p>
            <p className="text-xs text-slate-500 mt-0.5">
              YouTube Shorts video walkthroughs featuring site progress.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700 group-hover:text-purple-900">
            <span>Manage Video Reels</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 3: Blog Posts */}
        <Link
          href="/admin/dashboard/blog"
          className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
                <Newspaper className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono-label font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                {publishedPosts} Published
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">{posts.length}</h3>
            <p className="text-sm font-bold text-slate-800 mt-1">Blog Articles</p>
            <p className="text-xs text-slate-500 mt-0.5">
              {publishedPosts} articles live on main blog and homepage.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-slate-900">
            <span>Manage Blog Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 4: Company Settings */}
        <Link
          href="/admin/dashboard/company"
          className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono-label font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Contact Profile
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Address &amp; Contact</h3>
            <p className="text-xs text-slate-500 mt-1">
              Update official office address, phone number, and email.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
            <span>Update Company Settings</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 5: Team Directory */}
        <Link
          href="/admin/dashboard/team"
          className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono-label font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                Employees
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Team Directory</h3>
            <p className="text-xs text-slate-500 mt-1">
              Add new employee photos, roles, and experience.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700 group-hover:text-indigo-900">
            <span>Manage Team Members</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

      </div>

      {/* Quick Security Status Card */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">System Security &amp; Credentials Portal</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Test Supabase API keys, database latency, and Row Level Security (RLS) health.
            </p>
          </div>
        </div>

        <Link
          href="/admin/dashboard/security"
          className="inline-flex items-center gap-2 bg-white text-blue-950 hover:bg-slate-100 text-xs font-extrabold px-5 py-3 rounded-xl shadow-md transition-all shrink-0"
        >
          <Sparkles className="w-4 h-4 text-blue-700" />
          <span>Launch Security Portal</span>
        </Link>
      </div>

    </div>
  );
}
