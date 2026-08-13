import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import { getBlogPostByIdForAdmin } from "@/lib/supabase/queries";
import { updateBlogPost } from "@/lib/supabase/actions";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getBlogPostByIdForAdmin(id);
  if (!post) return notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-blue-950 mb-6">Edit post</h1>
      <BlogForm post={post} action={updateBlogPost.bind(null, id)} />
    </div>
  );
}
