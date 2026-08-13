function resolveEmbed(url: string): { title: string; src: string } | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = u.pathname.startsWith("/shorts/")
        ? u.pathname.split("/")[2]
        : u.searchParams.get("v");
      if (id) return { title: "YouTube video", src: `https://www.youtube-nocookie.com/embed/${id}` };
    }
    if (host === "youtu.be") {
      const id = u.pathname.slice(1);
      if (id) return { title: "YouTube video", src: `https://www.youtube-nocookie.com/embed/${id}` };
    }
    if (host === "instagram.com") {
      const path = u.pathname.replace(/\/$/, "");
      if (path.startsWith("/reel/") || path.startsWith("/p/") || path.startsWith("/reels/")) {
        return { title: "Instagram post", src: `https://www.instagram.com${path}/embed` };
      }
    }
  } catch {
    return null;
  }
  return null;
}

export default function VideoEmbed({ url }: { url: string }) {
  const embed = resolveEmbed(url);
  if (!embed) return null;

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-line bg-black">
      <iframe
        src={embed.src}
        title={embed.title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
