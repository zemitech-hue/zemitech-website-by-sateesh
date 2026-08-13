import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import BlogCard from "@/components/sections/BlogCard";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "In-depth guides on construction timelines, BOQs, vastu, kitchen layouts and interior budgeting from Zemitech Urban — practical, Pune-specific advice.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog / News"
        headline="Guides on construction and interior design"
        sub="Practical, specific answers to the questions we hear most from clients — not generic advice."
        image="/images/blog/hero-blog.jpg"
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
