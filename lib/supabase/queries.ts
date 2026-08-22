import { createClient, createPublicClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { fallbackProjects, type Project } from "@/lib/data/projects";
import { fallbackBlogPosts, type BlogPost } from "@/lib/data/blog";

export type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  category: "residential" | "commercial" | "infrastructure";
  project_type: string;
  location: string;
  client: string;
  timeline: string;
  built_up_area: string;
  status: "Completed" | "In Progress" | "Upcoming";
  year: number;
  cover_image: string;
  hero_image: string;
  gallery: string[];
  scope: string[];
  challenge: string;
  solution: string;
  key_outcomes: string[];
  sort_order: number;
  published: boolean;
  video_url?: string | null;
  youtube_url?: string | null;
  created_at: string;
};

export type BlogPostRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  cover_image: string;
  author_name: string;
  author_avatar: string;
  read_minutes: number;
  published_at: string;
  published: boolean;
  created_at: string;
};

// Helper to assign reliable fallback images when cover_image is missing or empty
function getCategoryFallbackImage(category?: string): string {
  switch (category) {
    case "residential":
      return "/images/construction/residential/hero.png";
    case "commercial":
      return "/images/construction/structural-civil-engineering/hero.png";
    case "infrastructure":
      return "/images/construction/industrial/hero.png";
    default:
      return "/images/interior/turnkey-home-interiors/hero.png";
  }
}

function mapProject(row: ProjectRow): Project {
  const fallbackImg = getCategoryFallbackImage(row.category);
  const validCoverImage = row.cover_image && row.cover_image.trim() !== "" ? row.cover_image : fallbackImg;
  const validGallery = row.gallery && row.gallery.length > 0 ? row.gallery : [validCoverImage];

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category as any,
    location: row.location,
    year: String(row.year),
    area: row.built_up_area || "N/A",
    summary: row.challenge || row.title,
    description: [row.challenge || "", row.solution || ""].filter(Boolean),
    scope: row.scope || [],
    challenge: row.challenge || "",
    solution: row.solution || "",
    coverImage: validCoverImage,
    galleryUrls: validGallery,
    videoUrl: row.video_url || row.youtube_url || null,
    published: row.published,
  };
}

function mapBlogPost(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    contentMd: row.content,
    category: row.category,
    coverImage: row.cover_image || "/images/interior/turnkey-home-interiors/hero.png",
    readMinutes: row.read_minutes || 5,
    publishedAt: row.published_at,
    published: row.published,
  };
}

// Helper to determine if an error is a harmless transient auth/cache error (e.g. JWT clock skew)
function isIgnorableQueryError(error?: { message?: string } | null): boolean {
  if (!error || !error.message) return false;
  const msg = error.message.toLowerCase();
  return (
    msg.includes("schema cache") ||
    msg.includes("jwt issued at future") ||
    msg.includes("jwt") ||
    msg.includes("clock") ||
    msg.includes("expired")
  );
}

// Public-facing reads — published rows only, works with or without a signed-in session
export async function getProjects(limit: number = 100): Promise<Project[]> {
  if (!isSupabaseConfigured()) return fallbackProjects.slice(0, limit);
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error || !data || data.length === 0) {
      if (error && !isIgnorableQueryError(error)) {
        console.error("getProjects:", error.message);
      }
      return fallbackProjects.slice(0, limit);
    }
    return (data as ProjectRow[]).map(mapProject);
  } catch (err) {
    return fallbackProjects.slice(0, limit);
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  if (!isSupabaseConfigured()) return fallbackProjects.find((p) => p.slug === slug) || null;
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();

    if (error || !data) return fallbackProjects.find((p) => p.slug === slug) || null;
    return mapProject(data as ProjectRow);
  } catch {
    return fallbackProjects.find((p) => p.slug === slug) || null;
  }
}

export async function getBlogPosts(limit: number = 100): Promise<BlogPost[]> {
  if (!isSupabaseConfigured()) return fallbackBlogPosts.slice(0, limit);
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error || !data || data.length === 0) {
      if (error && !isIgnorableQueryError(error)) {
        console.error("getBlogPosts:", error.message);
      }
      return fallbackBlogPosts.slice(0, limit);
    }
    return (data as BlogPostRow[]).map(mapBlogPost);
  } catch {
    return fallbackBlogPosts.slice(0, limit);
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured()) return fallbackBlogPosts.find((p) => p.slug === slug) || null;
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();

    if (error || !data) return fallbackBlogPosts.find((p) => p.slug === slug) || null;
    return mapBlogPost(data as BlogPostRow);
  } catch {
    return fallbackBlogPosts.find((p) => p.slug === slug) || null;
  }
}

// Admin reads — includes drafts
export async function getAllProjectsForAdmin(): Promise<Project[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) {
      if (!isIgnorableQueryError(error)) {
        console.error("getAllProjectsForAdmin:", error.message);
      }
      return [];
    }
    return (data as ProjectRow[]).map(mapProject);
  } catch {
    return [];
  }
}

export async function getProjectByIdForAdmin(id: string): Promise<Project | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("projects").select("*").eq("id", id).maybeSingle();
    if (error || !data) return null;
    return mapProject(data as ProjectRow);
  } catch {
    return null;
  }
}

export async function getAllBlogPostsForAdmin(): Promise<BlogPost[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      if (!isIgnorableQueryError(error)) {
        console.error("getAllBlogPostsForAdmin:", error.message);
      }
      return [];
    }
    return (data as BlogPostRow[]).map(mapBlogPost);
  } catch {
    return [];
  }
}

export async function getBlogPostByIdForAdmin(id: string): Promise<BlogPost | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).maybeSingle();
    if (error || !data) return null;
    return mapBlogPost(data as BlogPostRow);
  } catch {
    return null;
  }
}

export type CompanySettings = {
  id: string;
  office_address: string;
  email: string;
  phone: string;
  updated_at?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  experience: string;
  image_url: string;
  created_at?: string;
};

export const fallbackCompanySettings: CompanySettings = {
  id: "main",
  office_address: "Office No. 15/1, Samarth Sankul, Narhe, Pune – 411041",
  email: "zemitechurban@gmail.com",
  phone: "+91 99990 67709",
};

export const fallbackTeamMembers: TeamMember[] = [];

export async function getCompanySettings(): Promise<CompanySettings> {
  if (!isSupabaseConfigured()) return fallbackCompanySettings;
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase.from("company_settings").select("*").eq("id", "main").maybeSingle();
    if (error || !data) return fallbackCompanySettings;
    return data as CompanySettings;
  } catch {
    return fallbackCompanySettings;
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase.from("team_members").select("*").order("created_at", { ascending: false });
    if (error || !data) return [];
    return data as TeamMember[];
  } catch {
    return [];
  }
}

