"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

export default function DeleteButton({
  id,
  action,
  label,
}: {
  id: string;
  action: (id: string) => Promise<void>;
  label: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        if (confirm(`Delete this ${label}? This can't be undone.`)) {
          startTransition(() => action(id));
        }
      }}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors shrink-0 disabled:opacity-50"
      aria-label={`Delete ${label}`}
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
