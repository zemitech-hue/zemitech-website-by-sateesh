import BlogForm from "@/components/admin/BlogForm";
import { createBlogPost } from "@/lib/supabase/actions";

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-blue-950 mb-6">New blog post</h1>
      <BlogForm action={createBlogPost} />
    </div>
  );
}
