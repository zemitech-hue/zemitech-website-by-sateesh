export default function AdminDashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse" aria-busy="true" aria-label="Loading">
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <div className="h-7 w-64 max-w-full rounded-lg bg-slate-200" />
        <div className="h-3 w-80 max-w-full rounded bg-slate-200/70" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4">
            <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-xl bg-slate-200 shrink-0" />
            <div className="flex-1 space-y-2 min-w-0">
              <div className="h-4 w-3/4 rounded bg-slate-200" />
              <div className="h-3 w-1/2 rounded bg-slate-200/70" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
