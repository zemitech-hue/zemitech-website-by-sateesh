"use client";

import { useOptimistic, useTransition } from "react";

export default function PublishToggle({
  id,
  published,
  action,
}: {
  id: string;
  published: boolean;
  action: (id: string, published: boolean) => Promise<{ error: string } | void>;
}) {
  const [optimistic, setOptimistic] = useOptimistic(published);
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={optimistic}
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          setOptimistic(!optimistic);
          const result = await action(id, !optimistic);
          if (result?.error) alert(`Couldn't update: ${result.error}`);
        })
      }
      title={optimistic ? "Live on website — click to hide" : "Hidden draft — click to publish"}
      className={`inline-flex items-center gap-2 h-10 px-3 rounded-xl border text-xs font-bold transition-colors cursor-pointer disabled:opacity-70 ${
        optimistic
          ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
          : "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
      }`}
    >
      <span className={`relative w-7 h-4 rounded-full transition-colors ${optimistic ? "bg-emerald-500" : "bg-slate-300"}`}>
        <span
          className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-all ${optimistic ? "left-3.5" : "left-0.5"}`}
        />
      </span>
      {optimistic ? "Live" : "Draft"}
    </button>
  );
}
