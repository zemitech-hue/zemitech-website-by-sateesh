"use client";

import { useState, useEffect, useRef } from "react";
import InquiryModal from "@/components/ui/InquiryModal";

export default function EntryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    // Opens on the visitor's first real engagement (scroll, pointer move, key
    // press, or touch) rather than a blind timer. A blind timer was measured
    // to make this popup's card image the page's Largest Contentful Paint
    // element — LCP tracking stops at the first user input, so gating the
    // popup behind one guarantees it can never be an LCP candidate. A long
    // backstop timer still covers the rare visitor who never interacts at all.
    const events: (keyof WindowEventMap)[] = ["scroll", "pointermove", "keydown", "touchstart"];

    const show = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      setIsOpen(true);
      cleanup();
    };

    events.forEach((e) => window.addEventListener(e, show, { passive: true }));
    const timer = setTimeout(show, 45000);

    function cleanup() {
      events.forEach((e) => window.removeEventListener(e, show));
      clearTimeout(timer);
    }

    return cleanup;
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return <InquiryModal isOpen={isOpen} onClose={closePopup} />;
}
