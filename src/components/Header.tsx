import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Mountain } from "lucide-react";
import { brand, navLinks } from "../data/siteData";
import { openWhatsApp } from "../lib/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-700 flex items-center justify-center text-white shadow-lg group-hover:shadow-teal-500/30 transition-shadow">
              <Mountain className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <span
                className={`block font-display font-bold text-lg tracking-tight ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                {brand.name}
              </span>
              <span
                className={`block text-[10px] uppercase tracking-widest ${
                  scrolled ? "text-slate-500" : "text-white/80"
                }`}
              >
                Bike Rentals & Trips
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${brand.phoneRaw}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                scrolled
                  ? "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <Phone className="w-4 h-4" />
              {brand.phone}
            </a>
            <button
              onClick={() =>
                openWhatsApp(
                  `Hi ${brand.name}, I'm interested in booking a bike in Ladakh. Please share details.`
                )
              }
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`tel:${brand.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call {brand.phone}
              </a>
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hi ${brand.name}, I'm interested in booking a bike in Ladakh. Please share details.`
                  )
                }
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-600 text-white font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
