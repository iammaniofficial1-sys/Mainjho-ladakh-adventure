import { MessageCircle } from "lucide-react";
import { brand } from "../data/siteData";
import { openWhatsApp } from "../lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <button
      onClick={() =>
        openWhatsApp(
          `Hi ${brand.name}, I'm interested in a bike rental / Ladakh package. Please share details.`
        )
      }
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 pl-4 pr-2 py-2.5 rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-sm font-bold hidden sm:inline">WhatsApp Us</span>
      <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
        <MessageCircle className="w-5 h-5 fill-current" />
      </span>
    </button>
  );
}
