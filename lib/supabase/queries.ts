import { createClient, createPublicClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { fallbackProjects, type Project } from "@/lib/data/projects";
import { fallbackBlogPosts, type BlogPost } from "@/lib/data/blog";

// Row shapes mirror supabase/schema.sql exactly — these are the same column
// names lib/supabase/actions.ts writes. A few legacy aliases (content,
// cover_image, gallery, built_up_area, youtube_url) are kept optional so rows
// created by older versions of the admin still render.
export type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  category: Project["category"];
  location: string | null;
  year: string | number | null;
  area: string | null;
  summary: string | null;
  description: string[] | null;
  scope: string[] | null;
  challenge: string | null;
  solution: string | null;
  cover_image_url: string | null;
  gallery_urls: string[] | null;
  video_url: string | null;
  client_quote_text: string | null;
  client_quote_author: string | null;
  client_quote_location: string | null;
  published: boolean;
  sort_order: number | null;
  created_at: string;
  updated_at?: string;
  cover_image?: string | null;
  gallery?: string[] | null;
  built_up_area?: string | null;
  youtube_url?: string | null;
};

export type BlogPostRow = {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  excerpt: string | null;
  cover_image_url: string | null;
  content_md: string | null;
  read_minutes: number | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at?: string;
  content?: string | null;
  cover_image?: string | null;
};

// Columns needed to render blog listing cards — skips the (potentially large)
// markdown body so /blog and the related-posts strip stay fast.
const BLOG_LIST_COLUMNS = "id, slug, title, category, excerpt, cover_image_url, read_minutes, published, published_at, created_at";

function nonEmpty(value?: string | null): string | null {
  return value && value.trim() !== "" ? value : null;
}

// Helper to assign reliable fallback images when cover_image_url is missing or empty
function getCategoryFallbackImage(category?: string): string {
  switch (category) {
    case "residential":
      return "/images/construction/residential/hero.png";
    case "commercial":
      return "/images/construction/industrial/hero.png";
    case "infrastructure":
      return "/images/construction/structural-civil-engineering/hero.png";
    default:
      return "/images/interior/turnkey-home-interiors/hero.png";
  }
}

function mapProject(row: ProjectRow): Project {
  const coverImage = nonEmpty(row.cover_image_url) ?? nonEmpty(row.cover_image) ?? getCategoryFallbackImage(row.category);
  const gallery = (row.gallery_urls?.length ? row.gallery_urls : row.gallery) ?? [];
  const description = (row.description ?? []).filter((d) => d && d.trim() !== "");
  const author = nonEmpty(row.client_quote_author);

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    location: row.location || "",
    year: row.year != null ? String(row.year) : "",
    area: nonEmpty(row.area) ?? nonEmpty(row.built_up_area) ?? "",
    summary: nonEmpty(row.summary) ?? row.title,
    description: description.length > 0 ? description : [nonEmpty(row.summary) ?? row.title],
    scope: row.scope ?? [],
    challenge: row.challenge ?? "",
    solution: row.solution ?? "",
    coverImage,
    galleryUrls: gallery.filter((g) => g !== coverImage),
    videoUrl: nonEmpty(row.video_url) ?? nonEmpty(row.youtube_url),
    clientQuote: author
      ? {
          quote: row.client_quote_text || `Delivered for ${author}`,
          author,
          location: row.client_quote_location || row.location || "",
        }
      : undefined,
    published: row.published,
  };
}

function mapBlogPost(row: Partial<BlogPostRow> & Pick<BlogPostRow, "id" | "slug" | "title">): BlogPost {
  let contentMd = nonEmpty(row.content_md) ?? nonEmpty(row.content) ?? "";
  // Rows seeded from the bundled demo posts without a body still get one.
  if (!contentMd) contentMd = fallbackBlogPosts.find((p) => p.slug === row.slug)?.contentMd ?? "";

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: nonEmpty(row.excerpt) ?? "",
    contentMd,
    category: nonEmpty(row.category) ?? "General",
    coverImage: nonEmpty(row.cover_image_url) ?? nonEmpty(row.cover_image) ?? "/images/blog/hero.png",
    readMinutes: row.read_minutes || 5,
    publishedAt: row.published_at || row.created_at || new Date().toISOString(),
    published: row.published ?? true,
  };
}

// Helper to determine if an error is a harmless transient auth/cache error (e.g. JWT clock skew)
function isIgnorableQueryError(error?: { message?: string } | null): boolean {
  if (!error || !error.message) return false;
  const msg = error.message.toLowerCase();
  return msg.includes("schema cache") || msg.includes("jwt") || msg.includes("clock") || msg.includes("expired");
}

// Public-facing reads — published rows only, works with or without a signed-in session.
// Bundled demo content is only used when Supabase isn't configured or the query
// fails; an empty table means "nothing published", so admin deletes show up live.
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

    if (error || !data) {
      if (error && !isIgnorableQueryError(error)) console.error("getProjects:", error.message);
      return fallbackProjects.slice(0, limit);
    }
    return (data as ProjectRow[]).map(mapProject);
  } catch {
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

    if (error) return fallbackProjects.find((p) => p.slug === slug) || null;
    return data ? mapProject(data as ProjectRow) : null;
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
      .select(BLOG_LIST_COLUMNS)
      .eq("published", true)
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error || !data) {
      if (error && !isIgnorableQueryError(error)) console.error("getBlogPosts:", error.message);
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

    if (error) return fallbackBlogPosts.find((p) => p.slug === slug) || null;
    return data ? mapBlogPost(data as BlogPostRow) : null;
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
      if (!isIgnorableQueryError(error)) console.error("getAllProjectsForAdmin:", error.message);
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
      .select(BLOG_LIST_COLUMNS)
      .order("published_at", { ascending: false });

    if (error) {
      if (!isIgnorableQueryError(error)) console.error("getAllBlogPostsForAdmin:", error.message);
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
  office_address: "Office no-115, Gravity Commercial Complex, Behind Mitcon school, Balewadi-411045, Pune",
  email: "info@zemaraspaces.com",
  phone: "+91 98677 30900",
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

import { defaultTeamMembers, getStoredTeamMembers, getStoredTeamMemberById } from "@/lib/data/team-storage";

function sortTeam(members: TeamMember[]): TeamMember[] {
  return [...members].sort((a, b) => (a.created_at ?? "").localeCompare(b.created_at ?? ""));
}

export type TeamMembersForAdmin = {
  members: TeamMember[];
  // "database" — live Supabase rows (editable)
  // "defaults" — Supabase is connected but has no rows yet; the bundled team
  //              is what the public site shows until it's imported
  // "local"    — no Supabase project; edits go to lib/data/team-members.json
  source: "database" | "defaults" | "local";
  error?: string;
};

// Public read. Supabase is the source of truth once connected; the bundled
// leadership team only fills in while the table is still empty.
export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!isSupabaseConfigured()) return sortTeam(getStoredTeamMembers());
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase.from("team_members").select("*").order("created_at", { ascending: true });
    if (error) {
      if (!isIgnorableQueryError(error)) console.error("getTeamMembers:", error.message);
      return sortTeam(defaultTeamMembers);
    }
    return data && data.length > 0 ? (data as TeamMember[]) : sortTeam(defaultTeamMembers);
  } catch {
    return sortTeam(defaultTeamMembers);
  }
}

export async function getTeamMembersForAdmin(): Promise<TeamMembersForAdmin> {
  if (!isSupabaseConfigured()) return { members: sortTeam(getStoredTeamMembers()), source: "local" };
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("team_members").select("*").order("created_at", { ascending: true });
    if (error) return { members: sortTeam(defaultTeamMembers), source: "defaults", error: error.message };
    if (!data || data.length === 0) return { members: sortTeam(defaultTeamMembers), source: "defaults" };
    return { members: data as TeamMember[], source: "database" };
  } catch (err) {
    return {
      members: sortTeam(defaultTeamMembers),
      source: "defaults",
      error: err instanceof Error ? err.message : "Could not reach Supabase",
    };
  }
}

export async function getTeamMemberByIdForAdmin(id: string): Promise<TeamMember | null> {
  if (!isSupabaseConfigured()) return getStoredTeamMemberById(id);
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("team_members").select("*").eq("id", id).maybeSingle();
    if (error || !data) return null;
    return data as TeamMember;
  } catch {
    return null;
  }
}
