"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

function linesToArray(value: FormDataEntryValue | null): string[] {
  return String(value ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

// ===================== AUTH =====================

export async function signIn(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return { error: "No Supabase project connected yet — add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local (see .env.local.example)." };
  }
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error: error.message };
  }
  redirect("/admin/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin");
}

// Server actions are plain POST endpoints, so each mutation re-checks the
// session itself instead of trusting that only the dashboard UI calls it.
async function requireAdmin() {
  if (!isSupabaseConfigured()) return { supabase: null, error: null };
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { supabase: null, error: "Your admin session has expired — please sign in again." };
  return { supabase, error: null };
}

function getYouTubeThumbnail(url: string | null): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
  return null;
}

// Every admin mutation can surface on many public pages (home featured grid,
// /projects, /gallery, /blog, detail pages, related strips), so refresh the
// whole route tree instead of maintaining a fragile list of paths.
function revalidateSite() {
  revalidatePath("/", "layout");
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Slugs are unique in both tables; append a short suffix instead of failing
// with a duplicate-key error when two items share a title.
async function uniqueSlug(table: "projects" | "blog_posts", base: string, fallbackPrefix: string) {
  const slug = base || `${fallbackPrefix}-${Date.now().toString(36)}`;
  const supabase = await createClient();
  const { data } = await supabase.from(table).select("id").eq("slug", slug).maybeSingle();
  return data ? `${slug}-${Date.now().toString(36).slice(-5)}` : slug;
}

function readText(formData: FormData, ...keys: string[]): string | undefined {
  for (const key of keys) {
    if (formData.has(key)) return String(formData.get(key) ?? "").trim();
  }
  return undefined;
}

// ===================== PROJECTS =====================

const defaultCategoryImages: Record<string, string> = {
  residential: "/images/construction/residential/hero.png",
  commercial: "/images/construction/industrial/hero.png",
  interior: "/images/interior/turnkey-home-interiors/hero.png",
  infrastructure: "/images/construction/structural-civil-engineering/hero.png",
};

// Only the fields actually present in the submitted form are returned, so an
// edit form that doesn't expose e.g. summary/scope/gallery never wipes them.
function projectPatch(formData: FormData) {
  const patch: Record<string, unknown> = {};

  const title = readText(formData, "title");
  if (title !== undefined) patch.title = title;

  const category = readText(formData, "category");
  if (category) patch.category = category;

  const location = readText(formData, "location");
  if (location !== undefined) patch.location = location || "Pune";

  const year = readText(formData, "year");
  if (year !== undefined) patch.year = year || new Date().getFullYear().toString();

  for (const key of ["area", "summary", "challenge", "solution"] as const) {
    const value = readText(formData, key);
    if (value !== undefined) patch[key] = value;
  }
  for (const key of ["description", "scope", "gallery_urls"] as const) {
    if (formData.has(key)) patch[key] = linesToArray(formData.get(key));
  }
  // Keep the card / SEO summary in step with the description when the form
  // only exposes the description.
  const firstParagraph = (patch.description as string[] | undefined)?.[0];
  if (firstParagraph && patch.summary === undefined) patch.summary = firstParagraph;

  const videoUrl = readText(formData, "video_url");
  if (videoUrl !== undefined) patch.video_url = videoUrl || null;

  const cover = readText(formData, "cover_image_url");
  if (cover !== undefined) {
    patch.cover_image_url =
      cover ||
      getYouTubeThumbnail((patch.video_url as string | null) ?? null) ||
      defaultCategoryImages[(patch.category as string) ?? "residential"] ||
      defaultCategoryImages.residential;
  }

  const clientName = readText(formData, "client_name", "client_quote_author");
  if (clientName !== undefined) {
    patch.client_quote_author = clientName || null;
    patch.client_quote_text = clientName ? `Delivered for ${clientName}` : null;
    patch.client_quote_location = readText(formData, "client_location", "client_quote_location") || location || null;
  }

  // Unchecked checkboxes are omitted from FormData, so presence of the form
  // itself means "published" must always be written.
  patch.published = formData.get("published") === "on";
  return patch;
}

export async function createProject(_prevState: unknown, formData: FormData) {
  const patch = projectPatch(formData);
  const title = String(patch.title ?? "");
  const category = String(patch.category ?? "residential");

  const row = {
    title,
    category,
    location: "Pune",
    year: new Date().getFullYear().toString(),
    area: "Turnkey Site",
    summary: title,
    description: [title],
    scope: [],
    challenge: "",
    solution: "",
    gallery_urls: [],
    cover_image_url: defaultCategoryImages[category] ?? defaultCategoryImages.residential,
    ...patch,
    slug: await uniqueSlug("projects", slugify(readText(formData, "slug") || title), "project"),
  };

  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase.from("projects").insert(row);
  if (error) return { error: error.message };
  revalidateSite();
  redirect(patch.video_url ? "/admin/dashboard/videos" : "/admin/dashboard/projects");
}

export async function updateProject(id: string, formData: FormData) {
  const patch = projectPatch(formData);
  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase.from("projects").update(patch).eq("id", id);
  if (error) return { error: error.message };
  revalidateSite();
  redirect(patch.video_url ? "/admin/dashboard/videos" : "/admin/dashboard/projects");
}

export async function deleteProject(id: string) {
  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidateSite();
}

export async function setProjectPublished(id: string, published: boolean) {
  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase.from("projects").update({ published }).eq("id", id);
  if (error) return { error: error.message };
  revalidateSite();
}

// ===================== BLOG =====================

function markdownToPlainText(md: string) {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|~-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function blogFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const contentMd = String(formData.get("content_md") ?? "").trim();
  const plain = markdownToPlainText(contentMd);
  const words = plain ? plain.split(" ").length : 0;
  const excerpt =
    String(formData.get("excerpt") ?? "").trim() ||
    (plain.length > 180 ? `${plain.slice(0, 177).replace(/\s+\S*$/, "")}…` : plain) ||
    title;

  return {
    title,
    category: String(formData.get("category") ?? "").trim() || "General",
    excerpt,
    cover_image_url: String(formData.get("cover_image_url") ?? "").trim() || null,
    content_md: contentMd,
    read_minutes: Math.max(1, Math.round(words / 200)),
    published: formData.get("published") === "on",
  };
}

export async function createBlogPost(formData: FormData) {
  const fields = blogFields(formData);
  const slug = await uniqueSlug("blog_posts", slugify(readText(formData, "slug") || fields.title), "post");
  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase.from("blog_posts").insert({ ...fields, slug, published_at: new Date().toISOString() });
  if (error) return { error: error.message };
  revalidateSite();
  redirect("/admin/dashboard/blog");
}

// The slug is kept on edit so existing links / search results don't break
// when a title is tweaked.
export async function updateBlogPost(id: string, formData: FormData) {
  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase.from("blog_posts").update(blogFields(formData)).eq("id", id);
  if (error) return { error: error.message };
  revalidateSite();
  redirect("/admin/dashboard/blog");
}

export async function deleteBlogPost(id: string) {
  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidateSite();
}

export async function setBlogPostPublished(id: string, published: boolean) {
  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase.from("blog_posts").update({ published }).eq("id", id);
  if (error) return { error: error.message };
  revalidateSite();
}

// ===================== COMPANY SETTINGS =====================

export async function updateCompanySettings(formData: FormData) {
  const office_address = String(formData.get("office_address") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };
  const { error } = await supabase
    .from("company_settings")
    .upsert({ id: "main", office_address, email, phone, updated_at: new Date().toISOString() });

  if (error) return { error: error.message };
  revalidateSite();
  return { success: true };
}

// ===================== TEAM MEMBERS =====================

import { defaultTeamMembers, saveStoredTeamMember, deleteStoredTeamMember } from "@/lib/data/team-storage";

function teamFields(formData: FormData) {
  let exp = String(formData.get("experience") ?? "").trim();
  // If someone pastes a whole paragraph into experience, sanitize to concise badge format
  if (exp.length > 30) {
    const match = exp.match(/\b(\d+\+?\s*(?:years?|yrs?))\b/i);
    exp = match ? match[1] : "5+ Years";
  }

  return {
    name: String(formData.get("name") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    experience: exp || "Experienced",
    image_url: String(formData.get("image_url") ?? "").trim() || "/images/about/zemara-team.png",
  };
}

// Supabase is the only store in production (Vercel's filesystem is read-only
// and per-instance). The JSON file is used only when no project is connected.
export async function createTeamMember(formData: FormData) {
  const fields = teamFields(formData);
  if (!fields.name) return { error: "Employee name is required" };
  if (!fields.role) return { error: "Role or designation is required" };

  if (!isSupabaseConfigured()) {
    const id = `tm-${Date.now()}`;
    saveStoredTeamMember({ id, ...fields, created_at: new Date().toISOString() });
    revalidateSite();
    return { success: true, id };
  }

  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };

  // id is a uuid column with a database default — let Postgres generate it.
  const { data, error } = await supabase.from("team_members").insert(fields).select("id").single();
  if (error) return { error: `Could not save employee: ${error.message}` };

  revalidateSite();
  return { success: true, id: data.id as string };
}

export async function updateTeamMember(id: string, formData: FormData) {
  const fields = teamFields(formData);
  if (!fields.name) return { error: "Employee name is required" };
  if (!fields.role) return { error: "Role or designation is required" };

  if (!isSupabaseConfigured()) {
    saveStoredTeamMember({ id, ...fields });
    revalidateSite();
    return { success: true, id };
  }

  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };

  const { data, error } = await supabase.from("team_members").update(fields).eq("id", id).select("id");
  if (error) return { error: `Could not update employee: ${error.message}` };
  if (!data || data.length === 0) return { error: "Employee not found — it may have been deleted." };

  revalidateSite();
  return { success: true, id };
}

export async function deleteTeamMember(id: string) {
  if (!isSupabaseConfigured()) {
    deleteStoredTeamMember(id);
    revalidateSite();
    return;
  }

  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };

  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidateSite();
}

// Copies the bundled leadership team into Supabase so it can be edited from
// the dashboard. Only runs while the table is empty, so it never duplicates.
export async function importDefaultTeamMembers() {
  const { supabase, error: authError } = await requireAdmin();
  if (authError || !supabase) return { error: authError ?? "Supabase is not connected." };

  const { count, error: countError } = await supabase
    .from("team_members")
    .select("id", { count: "exact", head: true });
  if (countError) return { error: countError.message };
  if (count && count > 0) return { error: "The team table already has members — refresh the page." };

  const rows = defaultTeamMembers.map(({ name, role, experience, image_url, created_at }) => ({
    name,
    role,
    experience,
    image_url,
    created_at,
  }));
  const { error } = await supabase.from("team_members").insert(rows);
  if (error) return { error: error.message };

  revalidateSite();
  return { success: true };
}
