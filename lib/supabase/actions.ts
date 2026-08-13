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

// ===================== PROJECTS =====================

function projectFields(formData: FormData) {
  const quote = String(formData.get("client_quote_text") ?? "").trim();
  return {
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    category: String(formData.get("category") ?? "residential"),
    location: String(formData.get("location") ?? "").trim(),
    year: String(formData.get("year") ?? "").trim(),
    area: String(formData.get("area") ?? "").trim(),
    summary: String(formData.get("summary") ?? "").trim(),
    description: linesToArray(formData.get("description")),
    scope: linesToArray(formData.get("scope")),
    challenge: String(formData.get("challenge") ?? "").trim(),
    solution: String(formData.get("solution") ?? "").trim(),
    cover_image_url: String(formData.get("cover_image_url") ?? "").trim() || null,
    gallery_urls: linesToArray(formData.get("gallery_urls")),
    video_url: String(formData.get("video_url") ?? "").trim() || null,
    client_quote_text: quote || null,
    client_quote_author: quote ? String(formData.get("client_quote_author") ?? "").trim() : null,
    client_quote_location: quote ? String(formData.get("client_quote_location") ?? "").trim() : null,
    published: formData.get("published") === "on",
  };
}

export async function createProject(formData: FormData) {
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
  return {
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    category: String(formData.get("category") ?? "General").trim(),
    excerpt: String(formData.get("excerpt") ?? "").trim(),
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
