import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import BlogCard from "@/components/sections/BlogCard";
import BlogContent from "@/components/sections/BlogContent";
import { blogPosts } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const date = new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="pt-10 pb-6">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
          <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mt-6">
            {post.category} · {date} · {post.readMinutes} min read
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-blue-950 mt-3 leading-tight">{post.title}</h1>
        </Container>
      </section>

      <Container className="max-w-3xl">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-blue-100">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
        </div>
      </Container>

      <section className="py-12">
        <Container className="max-w-3xl">
          <BlogContent blocks={post.content} />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-bg-tint">
          <Container>
            <SectionHeading eyebrow="Related Reading" title="More on this topic" />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
