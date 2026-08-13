import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="font-mono-label text-sm text-green-700 uppercase tracking-wide">404</p>
      <h1 className="text-3xl sm:text-4xl font-semibold text-blue-950 mt-3">This page isn&apos;t built yet.</h1>
      <p className="text-ink-soft mt-4 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Try the homepage, or explore our services below.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="outline">Contact Us</Button>
      </div>
      <div className="mt-6 text-sm">
        <Link href="/construction" className="text-blue-700 hover:underline">Construction</Link>
        <span className="mx-2 text-ink-soft">·</span>
        <Link href="/interior-design" className="text-blue-700 hover:underline">Interior Design</Link>
        <span className="mx-2 text-ink-soft">·</span>
        <Link href="/projects" className="text-blue-700 hover:underline">Projects</Link>
      </div>
    </Container>
  );
}
