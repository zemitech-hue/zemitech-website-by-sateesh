import SecurityDiagnosticRunner from "@/components/admin/SecurityDiagnosticRunner";
import { ShieldCheck, Lock } from "lucide-react";

export default function SecurityPortalPage() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-blue-700" />
          <h1 className="text-2xl font-extrabold text-blue-950">Security &amp; Credentials Portal</h1>
        </div>
        <p className="text-xs font-mono-label text-slate-500 mt-1">
          Verify database credentials, test API latency, and audit security policies in real-time.
        </p>
      </div>

      {/* Security Privacy Notice */}
      <div className="bg-blue-50/60 rounded-2xl p-4 border border-blue-200/80 flex items-center gap-3 text-xs font-medium text-blue-950">
        <Lock className="w-4 h-4 text-blue-700 shrink-0" />
        <span>
          <strong>Security Notice:</strong> All API credentials are masked for security. This diagnostic portal is strictly accessible inside authenticated admin sessions and is never exposed to public website visitors.
        </span>
      </div>

      {/* Diagnostic Runner */}
      <SecurityDiagnosticRunner />

    </div>
  );
}
