import BlogForm from "@/components/admin/BlogForm";
import { createBlogPost } from "@/lib/supabase/actions";

export default function NewBlogPostPage() {
  return <BlogForm action={createBlogPost} />;
}
