"use client";

import { useState, useEffect } from "react";
import InquiryModal from "@/components/ui/InquiryModal";

export default function EntryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Triggers the 2-service lead inquiry popup every single time the website loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500); // 2.5s delay after page load

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return <InquiryModal isOpen={isOpen} onClose={closePopup} />;
}
