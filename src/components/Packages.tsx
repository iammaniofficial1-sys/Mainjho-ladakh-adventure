import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { packages } from "../data/siteData";
import { openWhatsApp, packageEnquiryMessage } from "../lib/whatsapp";

export default function Packages() {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest mb-2">
              Curated Adventures
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
              Popular Packages
            </h2>
            <p className="text-slate-600 mt-2 max-w-lg">
              All-inclusive road trip packages with bike rental, route planning, stay support & backup.
            </p>
          </div>
          <button
            onClick={() =>
              openWhatsApp(
                "Hi Jho Ladakh Adventure, please share all available packages and custom trip options."
              )
            }
            className="group inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-600"
          >
            View All Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-3xl overflow-hidden shadow-lg ${
                pkg.popular
                  ? "ring-2 ring-teal-500 md:-translate-y-4 bg-slate-900"
                  : "bg-white border border-slate-100"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}
              <div className="relative h-48">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    pkg.popular
                      ? "bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"
                      : "bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"
                  }`}
                />
                <div className="absolute bottom-4 left-5 right-5">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      pkg.popular ? "text-teal-300" : "text-teal-600"
                    }`}
                  >
                    {pkg.duration}
                  </p>
                  <h3
                    className={`font-display text-xl font-bold ${
                      pkg.popular ? "text-white" : "text-white"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                </div>
              </div>

              <div className={`flex-1 p-6 ${pkg.popular ? "text-slate-200" : "text-slate-700"}`}>
                <p className="text-sm mb-4 opacity-80">{pkg.route}</p>
                <ul className="space-y-2.5 mb-6">
                  {pkg.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          pkg.popular ? "text-teal-400" : "text-teal-600"
                        }`}
                      />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span
                      className={`text-3xl font-bold ${
                        pkg.popular ? "text-white" : "text-slate-900"
                      }`}
                    >
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm opacity-70"> / {pkg.per}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() =>
                    openWhatsApp(packageEnquiryMessage(pkg.name, pkg.duration))
                  }
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    pkg.popular
                      ? "bg-teal-600 text-white hover:bg-teal-500 shadow-lg shadow-teal-600/20"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Book This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
