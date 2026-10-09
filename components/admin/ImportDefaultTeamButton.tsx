"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { DatabaseZap, Loader2 } from "lucide-react";
import { importDefaultTeamMembers } from "@/lib/supabase/actions";

export default function ImportDefaultTeamButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-start gap-1.5">
      <button
        type="button"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            setError(null);
            const res = await importDefaultTeamMembers();
            if (res?.error) setError(res.error);
            else router.refresh();
          })
        }
        className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-md transition-colors disabled:opacity-60 cursor-pointer"
      >
        {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <DatabaseZap className="w-4 h-4" />}
        <span>{isPending ? "Importing…" : "Import these into the database"}</span>
      </button>
      {error && <p className="text-xs font-bold text-rose-700">{error}</p>}
    </div>
  );
}
