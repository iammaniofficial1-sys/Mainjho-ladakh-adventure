import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { brand } from "../data/siteData";
import { openWhatsApp } from "../lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-teal-700 via-blue-800 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Have a custom plan in mind?
        </h2>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-8">
          Our adventure experts will help you plan the perfect ride across Ladakh — whether it's a solo expedition or a group road trip.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() =>
              openWhatsApp(
                `Hi ${brand.name}, I want to plan a custom Ladakh trip. Can we discuss the itinerary?`
              )
            }
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-teal-800 font-bold shadow-xl hover:bg-slate-50 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Talk to an Expert
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={`tel:${brand.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call {brand.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
