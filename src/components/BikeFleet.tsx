import { motion } from "framer-motion";
import { Gauge, Fuel, ArrowRight } from "lucide-react";
import { bikes } from "../data/siteData";
import { openWhatsApp, bikeCardEnquiryMessage } from "../lib/whatsapp";

export default function BikeFleet() {
  return (
    <section id="bikes" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest mb-2">
              Royal Enfield Fleet
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
              Popular Bikes
            </h2>
            <p className="text-slate-600 mt-2 max-w-lg">
              Choose from our professionally maintained fleet built for Ladakh's high passes and rugged terrain.
            </p>
          </div>
          <button
            onClick={() =>
              openWhatsApp(
                "Hi Jho Ladakh Adventure, please send me the full bike fleet and availability."
              )
            }
            className="group inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-600"
          >
            View All Bikes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bikes.map((bike, idx) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative h-52 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center overflow-hidden">
                {bike.tags.map((tag) => (
                  <span
                    key={tag}
                    className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-teal-700 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="h-44 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                  {bike.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{bike.description}</p>
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                    <Gauge className="w-4 h-4 text-slate-400" />
                    {bike.cc}cc
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                    <Fuel className="w-4 h-4 text-slate-400" />
                    {bike.kmpl} kmpl
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-slate-900">
                      ₹{bike.pricePerDay.toLocaleString("en-IN")}
                    </span>
                    <span className="text-slate-500 text-sm"> / day</span>
                  </div>
                  <button
                    onClick={() =>
                      openWhatsApp(bikeCardEnquiryMessage(bike.name))
                    }
                    className="px-5 py-2 rounded-full border-2 border-teal-600 text-teal-700 font-semibold text-sm hover:bg-teal-600 hover:text-white transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
