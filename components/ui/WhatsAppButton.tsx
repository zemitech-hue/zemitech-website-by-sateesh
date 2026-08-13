import { company } from "@/lib/data/company";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Zemitech Urban, I would like to enquire about your construction & interior design services."
  );

  return (
    <a
      href={`https://wa.me/${company.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-900/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.36-.49.06-1.1.09-1.78-.11-.41-.12-.94-.3-1.62-.58-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.55-1.16-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35h.55c.18 0 .41-.02.64.49.24.55.81 1.9.88 2.04.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
      </svg>
      {/* Subtle pulsing green outer indicator ring */}
      <span className="absolute -inset-1 rounded-full bg-green-400 opacity-30 animate-ping pointer-events-none" />
    </a>
  );
}
