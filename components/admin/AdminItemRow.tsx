import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Pencil, Play } from "lucide-react";
import DeleteButton from "@/components/admin/DeleteButton";
import PublishToggle from "@/components/admin/PublishToggle";

type ActionResult = Promise<{ error: string } | void>;

// One responsive list row shared by the projects / videos / blog managers:
// thumbnail + title stack on the left, actions wrap underneath on phones.
export default function AdminItemRow({
  id,
  title,
  meta,
  image,
  editHref,
  liveHref,
  published,
  label,
  video = false,
  onDelete,
  onTogglePublish,
}: {
  id: string;
  title: string;
  meta: React.ReactNode;
  image?: string | null;
  editHref: string;
  liveHref: string;
  published: boolean;
  label: string;
  video?: boolean;
  onDelete: (id: string) => ActionResult;
  onTogglePublish: (id: string, published: boolean) => ActionResult;
}) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
      <Link href={editHref} className="flex items-center gap-3.5 min-w-0 flex-1">
        <div className="relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
          {image && <Image src={image} alt="" fill sizes="96px" className="object-cover" />}
          {video && (
            <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-current" />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-slate-900 text-sm sm:text-base line-clamp-2 sm:truncate group-hover:text-blue-700 transition-colors">
            {title}
          </p>
          <div className="text-xs font-mono-label text-slate-500 truncate mt-0.5">{meta}</div>
        </div>
      </Link>

      <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0">
        <PublishToggle id={id} published={published} action={onTogglePublish} />
        {published && (
          <Link
            href={liveHref}
            target="_blank"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 border border-slate-200 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-colors"
            aria-label={`View ${label} on website`}
            title="View on website"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        )}
        <Link
          href={editHref}
          className="inline-flex items-center gap-1.5 h-10 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
        >
          <Pencil className="w-3.5 h-3.5" />
          Edit
        </Link>
        <DeleteButton id={id} action={onDelete} label={label} />
      </div>
    </div>
  );
}
