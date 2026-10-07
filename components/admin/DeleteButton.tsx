"use client";

import { useTransition } from "react";
import { Loader2, Trash2 } from "lucide-react";

export default function DeleteButton({
  id,
  action,
  label,
}: {
  id: string;
  action: (id: string) => Promise<{ error: string } | void>;
  label: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        if (!confirm(`Delete this ${label}? This can't be undone.`)) return;
        startTransition(async () => {
          const result = await action(id);
          if (result?.error) alert(`Couldn't delete: ${result.error}`);
        });
      }}
      className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 border border-slate-200 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
      aria-label={`Delete ${label}`}
      title={`Delete ${label}`}
    >
      {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
    </button>
  );
}
