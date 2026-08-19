"use client";

import { useState } from "react";
import { updateCompanySettings } from "@/lib/supabase/actions";
import { type CompanySettings } from "@/lib/supabase/queries";
import { MapPin, Mail, Phone, Save, CheckCircle2, AlertCircle } from "lucide-react";

export default function CompanySettingsForm({ initialSettings }: { initialSettings: CompanySettings }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const res = await updateCompanySettings(formData);

    setLoading(false);
    if (res?.error) {
      setError(res.error);
    } else {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
      {success && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Company profile &amp; contact details updated successfully in Supabase!</span>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-bold flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Field 1: Office Address */}
      <div>
        <label className="block text-xs font-mono-label font-bold uppercase text-slate-700 tracking-wider mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-700" />
          <span>1. Office Address</span>
        </label>
        <textarea
          name="office_address"
          rows={3}
          required
          defaultValue={initialSettings.office_address}
          placeholder="e.g. Office No. 15/1, Samarth Sankul, Narhe, Pune – 411041"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
        />
        <p className="text-xs text-slate-500 mt-1">Full physical office address displayed on contact page and footer.</p>
      </div>

      {/* Field 2: Official Contact Email */}
      <div>
        <label className="block text-xs font-mono-label font-bold uppercase text-slate-700 tracking-wider mb-2 flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-700" />
          <span>2. Contact Email Address</span>
        </label>
        <input
          type="email"
          name="email"
          required
          defaultValue={initialSettings.email}
          placeholder="e.g. zemitechurban@gmail.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
        />
        <p className="text-xs text-slate-500 mt-1">Official inquiry email address.</p>
      </div>

      {/* Field 3: Official Contact Phone Number */}
      <div>
        <label className="block text-xs font-mono-label font-bold uppercase text-slate-700 tracking-wider mb-2 flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-700" />
          <span>3. Phone / WhatsApp Number</span>
        </label>
        <input
          type="text"
          name="phone"
          required
          defaultValue={initialSettings.phone}
          placeholder="e.g. +91 99990 67709"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none"
        />
        <p className="text-xs text-slate-500 mt-1">Primary phone number for client calls and WhatsApp inquiries.</p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-extrabold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{loading ? "Saving to Supabase..." : "Save Company Profile"}</span>
        </button>
      </div>
    </form>
  );
}
