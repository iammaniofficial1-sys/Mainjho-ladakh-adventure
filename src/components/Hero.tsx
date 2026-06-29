import { useState } from "react";
import { Calendar, MapPin, Phone, User, Users, Bike, ArrowRight } from "lucide-react";
import { brand, hero } from "../data/siteData";
import { bikes } from "../data/siteData";
import { openWhatsApp, bikeEnquiryMessage } from "../lib/whatsapp";
import Icon from "./Icon";

const todayStr = new Date().toISOString().split("T")[0];
const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "Leh",
    pickupDate: todayStr,
    returnDate: tomorrow,
    bikeType: "Any Bike",
    groupSize: "1",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    openWhatsApp(bikeEnquiryMessage(form));
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-ladakh.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-900/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10 lg:pt-40 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Icon name="mountain" className="w-3.5 h-3.5" />
              Explore Ladakh
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              {hero.headline[0]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">
                {hero.headline[1]}
              </span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-auto lg:mr-auto lg:ml-0 mb-8">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo("#bikes")}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-teal-600 text-white font-semibold shadow-xl shadow-teal-600/25 hover:bg-teal-500 transition-all"
              >
                {hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#packages")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold hover:bg-white/20 transition-all"
              >
                {hero.ctaSecondary}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-teal-500/30 to-blue-600/30 blur-xl" />
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Find Your Perfect Ride
                  </h2>
                  <p className="text-sm text-slate-500">
                    Get pricing & availability on WhatsApp
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Bike className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        required
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all appearance-none"
                    >
                      <option>Leh Airport / City</option>
                      <option>Nubra Valley</option>
                      <option>Pangong Lake</option>
                      <option>Tso Moriri</option>
                      <option>Manali (if applicable)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Pickup Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        name="pickupDate"
                        value={form.pickupDate}
                        onChange={handleChange}
                        min={todayStr}
                        required
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Return Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        name="returnDate"
                        value={form.returnDate}
                        onChange={handleChange}
                        min={form.pickupDate}
                        required
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Bike Type
                    </label>
                    <div className="relative">
                      <Bike className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select
                        name="bikeType"
                        value={form.bikeType}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all appearance-none"
                      >
                        <option>Any Bike</option>
                        {bikes.map((b) => (
                          <option key={b.id} value={b.shortName}>
                            {b.shortName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Group Size
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select
                        name="groupSize"
                        value={form.groupSize}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, "7+"].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Rider" : "Riders"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-700 text-white font-bold shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 hover:from-teal-500 hover:to-blue-600 transition-all"
                >
                  Get Availability on WhatsApp
                </button>
                <p className="text-xs text-center text-slate-400">
                  No booking required. We reply within minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 px-4 py-3"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-teal-300">
                <Icon
                  name={
                    stat.icon === "thermometer"
                      ? "thermometer"
                      : stat.icon === "users"
                      ? "users"
                      : stat.icon === "shield"
                      ? "shield-check"
                      : "helmet"
                  }
                  className="w-5 h-5"
                />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
