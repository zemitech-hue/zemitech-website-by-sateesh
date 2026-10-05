"use client";

import { useEffect, useState } from "react";
import { company } from "@/lib/data/company";

export type DynamicSettings = {
  phone: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  address: string;
};

const defaultSettings: DynamicSettings = {
  phone: company.phonePrimary,
  phoneHref: company.phonePrimaryHref,
  whatsappNumber: company.whatsappNumber,
  whatsappLink: company.whatsappLink,
  email: company.emailPrimary,
  address: `${company.address.line1}, ${company.address.line2}, ${company.address.state}`,
};

export function useCompanySettings(): DynamicSettings {
  const [settings, setSettings] = useState<DynamicSettings>(defaultSettings);

  useEffect(() => {
    let isMounted = true;

    async function loadSettings() {
      try {
        const res = await fetch("/api/company-settings", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (!isMounted || !data) return;

        const phone = data.phone || company.phonePrimary;
        const cleanPhone = phone.replace(/[^0-9]/g, "");
        const email = data.email || company.emailPrimary;
        const address = data.office_address || `${company.address.line1}, ${company.address.line2}, ${company.address.state}`;

        setSettings({
          phone,
          phoneHref: `tel:${cleanPhone.startsWith("91") ? "+" + cleanPhone : cleanPhone}`,
          whatsappNumber: cleanPhone,
          whatsappLink: `https://wa.me/${cleanPhone}?text=Hello%20Zemara%20Spaces%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20and%20consultation%20for%20my%20project.`,
          email,
          address,
        });
      } catch {
        // Fallback gracefully to defaultSettings
      }
    }

    loadSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  return settings;
}
