import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import type { Project } from "@/lib/types/project";
import type { BlogPost } from "@/lib/types/blog";

// Row shapes matching supabase/schema.sql exactly (snake_case columns).
type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  category: Project["category"];
  location: string;
  year: string;
  area: string;
  summary: string;
  description: string[];
  scope: string[];
  challenge: string;
  solution: string;
  cover_image_url: string | null;
  gallery_urls: string[];
  video_url: string | null;
  client_quote_text: string | null;
  client_quote_author: string | null;
  client_quote_location: string | null;
  published: boolean;
};

type BlogPostRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  cover_image_url: string | null;
  content_md: string;
  read_minutes: number;
  published_at: string;
  published: boolean;
};

function mapProject(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    location: row.location,
    year: row.year,
    area: row.area,
    summary: row.summary,
    description: row.description ?? [],
    scope: row.scope ?? [],
    challenge: row.challenge,
    solution: row.solution,
    coverImage: row.cover_image_url,
    galleryUrls: row.gallery_urls ?? [],
    videoUrl: row.video_url,
    clientQuote: row.client_quote_text
      ? { quote: row.client_quote_text, author: row.client_quote_author ?? "", location: row.client_quote_location ?? "" }
      : undefined,
    published: row.published,
  };
}

function mapBlogPost(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    excerpt: row.excerpt,
    coverImage: row.cover_image_url,
    contentMd: row.content_md,
    readMinutes: row.read_minutes,
    publishedAt: row.published_at,
    published: row.published,
  };
}

// Public-facing reads — published rows only, works with or without a
// signed-in session (RLS scopes it either way).
export async function getProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) {
    console.error("getProjects:", error.message);
    return [];
  }
  return (data as ProjectRow[]).map(mapProject);
}

export async function getProject(slug: string): Promise<Project | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error || !data) return null;
  return mapProject(data as ProjectRow);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error) {
    console.error("getBlogPosts:", error.message);
    return [];
  }
  return (data as BlogPostRow[]).map(mapBlogPost);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error || !data) return null;
  return mapBlogPost(data as BlogPostRow);
}

// Admin reads — includes drafts. RLS still applies: only returns rows if
// the caller has an authenticated session, so this is safe to call from
// pages already gated by proxy.ts.
export async function getAllProjectsForAdmin(): Promise<Project[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) {
    console.error("getAllProjectsForAdmin:", error.message);
    return [];
  }
  return (data as ProjectRow[]).map(mapProject);
}

export async function getProjectByIdForAdmin(id: string): Promise<Project | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase.from("projects").select("*").eq("id", id).maybeSingle();
  if (error || !data) return null;
  return mapProject(data as ProjectRow);
}

export async function getAllBlogPostsForAdmin(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured()) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });
  if (error) {
    console.error("getAllBlogPostsForAdmin:", error.message);
    return [];
  }
  return (data as BlogPostRow[]).map(mapBlogPost);
}

export async function getBlogPostByIdForAdmin(id: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).maybeSingle();
  if (error || !data) return null;
  return mapBlogPost(data as BlogPostRow);
}
