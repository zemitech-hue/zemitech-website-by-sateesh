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

function getYouTubeThumbnail(url: string | null): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
  return null;
}

// ===================== PROJECTS =====================

function projectFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const clientName = String(formData.get("client_name") ?? formData.get("client_quote_author") ?? "").trim();
  const clientLocation = String(formData.get("client_location") ?? formData.get("client_quote_location") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const year = String(formData.get("year") ?? "").trim();
  const category = String(formData.get("category") ?? "residential");
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const slug = rawSlug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `project-${Date.now()}`;
  const videoUrl = String(formData.get("video_url") ?? "").trim() || null;
  const defaultCategoryImages: Record<string, string> = {
    residential: "/images/construction/residential/hero.png",
    commercial: "/images/construction/industrial/hero.png",
    interior: "/images/interior/turnkey-home-interiors/hero.png",
    infrastructure: "/images/construction/structural-civil-engineering/hero.png",
  };

  const userCoverImage = String(formData.get("cover_image_url") ?? "").trim();
  const ytThumbnail = getYouTubeThumbnail(videoUrl);
  const coverImage = userCoverImage || ytThumbnail || defaultCategoryImages[category] || "/images/construction/residential/hero.png";

  return {
    slug,
    title,
    category,
    location: location || "Pune",
    year: year || new Date().getFullYear().toString(),
    area: String(formData.get("area") ?? "Turnkey Site"),
    summary: String(formData.get("summary") ?? title),
    description: linesToArray(formData.get("description")).length > 0 ? linesToArray(formData.get("description")) : [title],
    scope: linesToArray(formData.get("scope")),
    challenge: String(formData.get("challenge") ?? ""),
    solution: String(formData.get("solution") ?? ""),
    cover_image_url: coverImage,
    gallery_urls: linesToArray(formData.get("gallery_urls")),
    video_url: videoUrl,
    client_quote_text: clientName ? `Delivered for ${clientName}` : null,
    client_quote_author: clientName || null,
    client_quote_location: clientLocation || location || null,
    published: formData.get("published") === "on",
  };
}

export async function createProject(_prevState: unknown, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").insert(projectFields(formData));
  if (error) return { error: error.message };
  revalidatePath("/projects");
  revalidatePath("/gallery");
  revalidatePath("/admin/dashboard/projects");
  redirect("/admin/dashboard/projects");
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").update(projectFields(formData)).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/projects");
  revalidatePath("/gallery");
  revalidatePath("/admin/dashboard/projects");
  redirect("/admin/dashboard/projects");
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  await supabase.from("projects").delete().eq("id", id);
  revalidatePath("/projects");
  revalidatePath("/gallery");
  revalidatePath("/admin/dashboard/projects");
}

// ===================== BLOG =====================

function blogFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const slug = rawSlug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `post-${Date.now()}`;
  const excerpt = String(formData.get("excerpt") ?? "").trim() || title;

  return {
    slug,
    title,
    category: String(formData.get("category") ?? "General").trim(),
    excerpt,
    cover_image_url: String(formData.get("cover_image_url") ?? "").trim() || null,
    content_md: String(formData.get("content_md") ?? ""),
    read_minutes: Number(formData.get("read_minutes") ?? 5) || 5,
    published: formData.get("published") === "on",
  };
}

export async function createBlogPost(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("blog_posts").insert(blogFields(formData));
  if (error) return { error: error.message };
  revalidatePath("/blog");
  revalidatePath("/admin/dashboard/blog");
  redirect("/admin/dashboard/blog");
}

export async function updateBlogPost(id: string, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("blog_posts").update(blogFields(formData)).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/blog");
  revalidatePath("/admin/dashboard/blog");
  redirect("/admin/dashboard/blog");
}

export async function deleteBlogPost(id: string) {
  const supabase = await createClient();
  await supabase.from("blog_posts").delete().eq("id", id);
  revalidatePath("/blog");
  revalidatePath("/admin/dashboard/blog");
}

// ===================== COMPANY SETTINGS =====================

export async function updateCompanySettings(formData: FormData) {
  const office_address = String(formData.get("office_address") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  const supabase = await createClient();
  const { error } = await supabase
    .from("company_settings")
    .upsert({ id: "main", office_address, email, phone, updated_at: new Date().toISOString() });

  if (error) return { error: error.message };
  revalidatePath("/");
  revalidatePath("/contact");
  revalidatePath("/admin/dashboard/company");
  return { success: true };
}

// ===================== TEAM MEMBERS =====================

export async function createTeamMember(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim();
  const experience = String(formData.get("experience") ?? "").trim();
  const image_url = String(formData.get("image_url") ?? "").trim() || "/images/team/avatar-1.png";

  const supabase = await createClient();
  const { error } = await supabase.from("team_members").insert({
    name,
    role,
    experience,
    image_url,
  });

  if (error) {
    if (error.message.includes("schema cache") || error.message.includes("does not exist")) {
      return {
        error: "The table 'public.team_members' has not been created in your Supabase project yet. Please run the SQL snippet in your Supabase SQL Editor.",
      };
    }
    return { error: error.message };
  }
  revalidatePath("/team");
  revalidatePath("/about");
  revalidatePath("/admin/dashboard/team");
  redirect("/admin/dashboard/team");
}

export async function deleteTeamMember(id: string) {
  const supabase = await createClient();
  await supabase.from("team_members").delete().eq("id", id);
  revalidatePath("/team");
  revalidatePath("/admin/dashboard/team");
}

