import { Mountain, Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { brand, footer } from "../data/siteData";
import { openWhatsApp } from "../lib/whatsapp";

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-700 flex items-center justify-center text-white">
                <Mountain className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">
                  {brand.name}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500">
                  Bike Rentals & Trips
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-sm">
              {footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hi ${brand.name}, I found your website and would like to know more.`
                  )
                }
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4">Top Routes</h4>
            <ul className="space-y-2.5">
              {footer.topRoutes.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${brand.phoneRaw}`}
                  className="flex items-start gap-3 text-sm hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-teal-500" />
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-start gap-3 text-sm hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-teal-500" />
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-500 shrink-0" />
                {brand.address}
              </li>
              <li>
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hi ${brand.name}, I'd like to enquire about a Ladakh bike rental / package.`
                    )
                  }
                  className="inline-flex items-center gap-2 mt-1 px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500 transition-colors"
                >
                  WhatsApp Enquiry
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footer.company.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
