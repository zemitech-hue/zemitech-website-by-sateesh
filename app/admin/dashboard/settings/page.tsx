"use client";

import { useState } from "react";
import { company } from "@/lib/data/company";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    phone: company.phonePrimary,
    email: company.emailPrimary,
    address: `${company.address.line1}, ${company.address.line2}`,
    instagram: company.social.instagram,
    youtube: company.social.youtube,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div>
      <p className="font-mono-label text-xs uppercase tracking-wide text-green-700">Settings</p>
      <h1 className="text-2xl font-semibold text-blue-950 mt-1">Site settings</h1>
      <p className="text-ink-soft text-sm mt-1">These details appear in the header, footer and contact page.</p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-xl rounded-2xl bg-white border border-line p-6 space-y-4">
        <Field label="Phone Number" value={form.phone} onChange={(v) => setForm((f) => ({ ...f, phone: v }))} />
        <Field label="Email Address" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} />
        <Field label="Office Address" value={form.address} onChange={(v) => setForm((f) => ({ ...f, address: v }))} />
        <Field label="Instagram URL" value={form.instagram} onChange={(v) => setForm((f) => ({ ...f, instagram: v }))} />
        <Field label="YouTube URL" value={form.youtube} onChange={(v) => setForm((f) => ({ ...f, youtube: v }))} />

        <button type="submit" className="rounded-full bg-blue-700 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-800 transition-colors">
          Save Changes
        </button>
        {saved && <p className="text-sm text-green-700">Saved to this session. Connect Supabase to persist permanently.</p>}
      </form>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-blue-950 mb-1.5">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-line px-4 py-2.5 text-sm outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
      />
    </div>
  );
}
