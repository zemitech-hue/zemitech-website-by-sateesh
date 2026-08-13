import { ProcessStep } from "@/lib/data/services";

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span className="font-mono-label text-sm text-green-600 shrink-0 pt-0.5">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="font-semibold text-blue-950">{step.title}</p>
            <p className="text-sm text-ink-soft mt-1 leading-relaxed">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
