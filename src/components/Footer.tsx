import React from 'react';
import { MapPin, Clock, Phone, Car, ArrowRight, ArrowUpRight } from 'lucide-react';
import { MALL_INFO } from '../data/mallData';

export const Footer: React.FC = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#02050f] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden"
    >
      {/* Ambient subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-[#e2c17d]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Compact Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#e2c17d]/40 bg-slate-900/60 flex items-center justify-center shadow-[0_0_12px_rgba(226,193,125,0.25)]">
                <span className="font-serif font-bold text-base text-[#e2c17d]">S</span>
              </div>
              <span className="font-serif tracking-[0.24em] text-lg font-bold text-white uppercase">
                {MALL_INFO.name}
              </span>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed space-y-0.5">
              <p>Melattur Road,</p>
              <p>Kottappalla, Alanallur-III,</p>
              <p>Edathanattukara,</p>
              <p>Palakkad District, Kerala — 678601, India.</p>
            </div>

            <div className="mt-5">
              <a
                id="footer-get-directions-btn"
                href={MALL_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e2c17d] hover:bg-[#f0d499] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(226,193,125,0.3)] transition-all cursor-pointer"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Operating Hours & Parking Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#e2c17d] mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>OPEN DAILY</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                {MALL_INFO.operatingHours.display}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {MALL_INFO.operatingHours.days}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400 mb-1.5">
                <Car className="w-3.5 h-3.5" />
                <span>PARKING AVAILABLE</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Dedicated on-site vehicle parking for shoppers.
              </p>
            </div>
          </div>

          {/* Primary Contacts & Navigation Column */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#e2c17d] mb-2">
                <Phone className="w-3.5 h-3.5" />
                <span>CONTACT</span>
              </div>
              <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium">
                {MALL_INFO.contactLinks.map((contact, idx) => (
                  <a
                    key={contact.tel}
                    id={`footer-tel-${idx + 1}`}
                    href={contact.tel}
                    className="text-slate-200 hover:text-[#e2c17d] transition-colors inline-flex items-center gap-2"
                  >
                    <span>{contact.display}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 hover:text-[#e2c17d]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400 block mb-2">
                EXPLORE SECTIONS
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-300">
                <button
                  type="button"
                  onClick={() => handleScroll('#home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll('#shops')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shops
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll('#dining')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dining
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll('#events')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Events
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll('#visit')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Visit Us
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 STATUS MALL. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#e2c17d]" />
            <span className="text-slate-400">{MALL_INFO.address.cityDistrict}, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
