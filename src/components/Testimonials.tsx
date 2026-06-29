import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/siteData";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-teal-400 font-bold text-sm uppercase tracking-widest mb-2">
            Rider Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            What travellers say about us
          </h2>
          <p className="text-slate-300">
            Real experiences from riders who explored Ladakh with our bikes and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-6"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-teal-500/20" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-200 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/30"
                />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
