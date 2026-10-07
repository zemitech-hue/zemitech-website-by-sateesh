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
import { pageMetadata } from "@/lib/seo";
import { Calendar, Clock, Tag } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage ?? undefined,
    imageAlt: post.title,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const allPosts = await getBlogPosts(100);
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug);
  const sameCategory = otherPosts.filter((p) => p.category === post.category);
  const differentCategory = otherPosts.filter((p) => p.category !== post.category);
  const related = [...sameCategory, ...differentCategory].slice(0, 3);
  const siteUrl = `https://${company.domain}`;
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  // Ensure content is never completely empty
  const articleContent = post.contentMd || post.excerpt;

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
            ? post.coverImage.startsWith("http")
              ? post.coverImage
              : `${siteUrl}${post.coverImage}`
            : `${siteUrl}/images/brand/image.png`,
          datePublished: new Date(post.publishedAt).toISOString(),
        })}
      />

      {/* Main Blog Article Section with generous top spacing below fixed navbar */}
      <article className="pt-32 sm:pt-36 lg:pt-40 pb-16 bg-white min-h-screen">
        <Container className="max-w-4xl">
          
          {/* 1. COVER IMAGE ON TOP */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 mb-8 sm:mb-10">
            <GracefulImage
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              preload
            />
            {/* Subtle Gradient Shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* 2. BREADCRUMBS & METADATA UNDER THE IMAGE */}
          <div className="space-y-4">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-mono-label uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-amber-600" />
                <span>{post.category}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono-label">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{date}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono-label">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{post.readMinutes} min read</span>
              </span>
            </div>

            {/* 3. BLOG TITLE UNDER THE IMAGE */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-[1.2] pt-2">
              {post.title}
            </h1>

            {/* 4. INTRODUCTORY EXCERPT CALLOUT (IF AVAILABLE) */}
            {post.excerpt && post.excerpt !== post.title && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-amber-500 text-slate-700 text-base sm:text-lg leading-relaxed font-medium mt-4">
                {post.excerpt}
              </div>
            )}
          </div>

          {/* Divider */}
          <hr className="my-8 sm:my-10 border-slate-200" />

          {/* 5. FULL ARTICLE CONTENT UNDER THE IMAGE & TITLE */}
          <div className="prose prose-slate max-w-none">
            <BlogContent content={articleContent} />
          </div>

        </Container>
      </article>

      {/* Related Reading */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
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
