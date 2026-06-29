import { motion } from "framer-motion";
import { features } from "../data/siteData";
import Icon from "./Icon";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest mb-2">
            Why Riders Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Built for the mountains. Trusted by riders.
          </h2>
          <p className="text-slate-600">
            From well-maintained bikes to local route support, we handle the details so you can focus on the ride.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform">
                <Icon
                  name={feature.icon as Parameters<typeof Icon>[0]["name"]}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
