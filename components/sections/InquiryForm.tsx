"use client";

import { useState } from "react";

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Infrastructure Project",
  "Interior Design — Kitchen",
  "Interior Design — Full Home",
  "Other",
];

const budgetRanges = [
  "Under ₹10 Lakh",
  "₹10 Lakh – ₹25 Lakh",
  "₹25 Lakh – ₹50 Lakh",
  "₹50 Lakh – ₹1 Crore",
  "Above ₹1 Crore",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-100/40 p-8 text-center">
        <p className="font-display text-xl font-semibold text-blue-950">
          Thanks — your enquiry is in.
        </p>
        <p className="text-sm text-ink-soft mt-2">
          Our team will get back to you within one business day. For anything urgent, WhatsApp us directly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-blue-700 hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required placeholder="Your name" />
        <Field label="Phone Number" name="phone" type="tel" required placeholder="+91 98765 43210" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Email Address" name="email" type="email" required placeholder="you@email.com" />
        <Field label="Location / Area" name="location" placeholder="e.g. Kondhwa, Pune" />
      </div>
      <div className={`grid ${compact ? "" : "sm:grid-cols-2"} gap-4`}>
        <SelectField label="Project Type" name="projectType" options={projectTypes} />
        {!compact && <SelectField label="Estimated Budget" name="budget" options={budgetRanges} />}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-blue-950 mb-1.5">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Plot size, current stage, timeline — anything that helps us prepare for the call."
          className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 px-6 py-3.5 text-sm font-black tracking-wide shadow-md shadow-amber-400/30 border border-amber-300 disabled:opacity-60 transition-all cursor-pointer hover:scale-105"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong — please try again, or WhatsApp us directly.
        </p>
      )}
      <p className="text-xs text-ink-soft">
        By submitting, you agree to be contacted about your enquiry. We don&apos;t share your details with third parties.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-blue-950 mb-1.5">
        {label} {required && <span className="text-green-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-blue-950 mb-1.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none bg-white"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
