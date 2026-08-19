import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import BlogCard from "@/components/sections/BlogCard";
import BlogContent from "@/components/sections/BlogContent";
import GracefulImage from "@/components/ui/GracefulImage";
import JsonLd, { articleJsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { getBlogPost, getBlogPosts } from "@/lib/supabase/queries";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
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
  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const allPosts = await getBlogPosts(100);
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);
  const sameCategory = otherPosts.filter((p) => p.category === post.category);
  const differentCategory = otherPosts.filter((p) => p.category !== post.category);
  const related = [...sameCategory, ...differentCategory].slice(0, 3);
  const siteUrl = `https://${company.domain}`;
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl },
          { name: "Blog", url: `${siteUrl}/blog` },
          { name: post.title, url: postUrl },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          url: postUrl,
          image: post.coverImage
            ? (post.coverImage.startsWith("http") ? post.coverImage : `${siteUrl}${post.coverImage}`)
            : `${siteUrl}/images/og/zemitech-urban-og.png`,
          siteUrl,
          legalName: company.legalName,
          datePublished: new Date(post.publishedAt).toISOString(),
        })}
      />
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
          <GracefulImage src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" preload />
        </div>
      </Container>

      <section className="py-12">
        <Container className="max-w-3xl">
          <BlogContent content={post.contentMd} />
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
