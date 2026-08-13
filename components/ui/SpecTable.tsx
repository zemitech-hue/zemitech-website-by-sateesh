export type SpecRow = { label: string; values: string[] };

export default function SpecTable({
  title,
  note,
  columns,
  rows,
}: {
  title?: string;
  note?: string;
  columns: string[];
  rows: SpecRow[];
}) {
  return (
    <div className="rounded-2xl border border-line bg-white overflow-hidden">
      {title && (
        <div className="px-6 pt-6">
          <p className="font-mono-label text-xs uppercase tracking-wide text-green-700">{title}</p>
        </div>
      )}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm min-w-[560px]">
          <thead>
            <tr className="bg-bg-tint text-left">
              <th className="px-6 py-3 font-mono-label text-xs uppercase tracking-wide text-ink-soft whitespace-nowrap">
                Spec
              </th>
              {columns.map((c) => (
                <th key={c} className="px-6 py-3 font-mono-label text-xs uppercase tracking-wide text-ink-soft whitespace-nowrap">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="px-6 py-3.5 font-medium text-blue-950 whitespace-nowrap">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className="px-6 py-3.5 text-ink-soft">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="text-xs text-ink-soft px-6 py-4 border-t border-line bg-bg-tint">{note}</p>}
    </div>
  );
}
