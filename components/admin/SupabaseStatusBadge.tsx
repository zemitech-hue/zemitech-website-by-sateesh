"use client";

import { useEffect, useState } from "react";
import { Wifi, WifiOff, RefreshCw } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function SupabaseStatusBadge({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"checking" | "connected" | "disconnected">("checking");

  useEffect(() => {
    async function checkConnection() {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!url || !key) {
        setStatus("disconnected");
        return;
      }

      try {
        const supabase = createClient();
        const { error } = await supabase.from("projects").select("id").limit(1);
        if (error && error.message.includes("fetch failed")) {
          setStatus("disconnected");
        } else {
          setStatus("connected");
        }
      } catch {
        setStatus("disconnected");
      }
    }

    checkConnection();
  }, []);

  if (status === "checking") {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono-label font-bold">
        <RefreshCw className="w-3.5 h-3.5 animate-spin text-slate-500" />
        <span>Checking Database...</span>
      </div>
    );
  }

  if (status === "connected") {
    return (
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-mono-label font-bold shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <Wifi className="w-3.5 h-3.5 text-emerald-600" />
        <span>{compact ? "Connected" : "Supabase Connected"}</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-700 text-xs font-mono-label font-bold shadow-xs">
      <span className="h-2 w-2 rounded-full bg-rose-500" />
      <WifiOff className="w-3.5 h-3.5 text-rose-600" />
      <span>{compact ? "Offline" : "Database Offline (Check .env.local)"}</span>
    </div>
  );
}
