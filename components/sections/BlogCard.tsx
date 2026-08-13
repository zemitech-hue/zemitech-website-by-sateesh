import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-3xl overflow-hidden border border-slate-200/90 bg-white/90 shadow-md shadow-blue-950/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-4 left-4 backdrop-blur-md bg-blue-950/85 text-green-400 border border-white/15 text-xs font-mono-label font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
          {post.category}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-xs font-mono-label font-bold text-slate-500">
          <span>{date}</span>
          <span className="flex items-center gap-1 text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readMinutes} min read
          </span>
        </div>

        <h3 className="text-xl font-bold text-blue-950 mt-3 group-hover:text-blue-700 transition-colors leading-snug">
          {post.title}
        </h3>
        
        <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed flex-1">{post.excerpt}</p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-700 group-hover:text-blue-900">
          <span>Read Article</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1.5 transition-transform duration-200"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
