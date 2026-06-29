import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { destinations } from "../data/siteData";
import { openWhatsApp } from "../lib/whatsapp";

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest mb-2">
              Ladakh Routes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
              Top Destinations
            </h2>
            <p className="text-slate-600 mt-2 max-w-lg">
              Ride to high-altitude lakes, ancient monasteries, mountain passes, and remote valleys.
            </p>
          </div>
          <button
            onClick={() =>
              openWhatsApp(
                "Hi Jho Ladakh Adventure, please suggest the best Ladakh routes for my trip."
              )
            }
            className="group inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-600"
          >
            Explore All Routes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative h-80 lg:h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-teal-500/20 backdrop-blur-sm text-teal-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3 h-3" />
                  {dest.duration}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {dest.name}
                </h3>
                <p className="text-sm text-white/80 mb-2">{dest.subtitle}</p>
                <p className="text-xs text-white/70 line-clamp-2">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
