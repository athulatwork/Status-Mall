import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, ArrowRight, Check, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#02050f] text-slate-400 border-t border-white/10 pt-20 pb-12 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top VIP Privileges Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#07102b] via-[#09153a] to-[#07102b] border border-white/15 p-8 sm:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 text-sky-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                STATUS PRIVILÈGE CLUB
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Receive Private Invitations & First Access
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-light">
              Complimentary valet passes, secret seasonal sales, and priority reservations at Lumina Sky Lounge.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
            {isSubscribed ? (
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
                <Check className="w-4 h-4" />
                <span>You are on the VIP Privilège list</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-5 py-3 rounded-full bg-black/40 border border-white/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 w-full sm:w-72 backdrop-blur-md"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs uppercase tracking-wider font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Join Club</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Logo & Manifesto Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-sky-400/40 bg-sky-950/40 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                <span className="font-serif font-bold text-lg text-sky-200">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.22em] text-lg font-bold text-white uppercase">
                  STATUS MALL
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-medium">
                  Destination Luxury
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              An architectural triumph redefining retail and leisure. Experience over 120 global flagships, haute cuisine terraces, and cutting-edge cinema.
            </p>

            <div className="mt-6 text-xs text-slate-300">
              <span className="block font-medium text-white">Metro Central District</span>
              <span>8800 Grand Boulevard</span>
              <span className="block text-sky-400 mt-1">Open Today: 10:00 AM – 11:00 PM</span>
            </div>
          </div>

          {/* EXPLORE Column */}
          <div className="lg:col-span-3 sm:pl-4">
            <h4 className="text-xs uppercase tracking-[0.22em] font-bold text-white mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleScroll('#home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#shops')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shops & Boutiques
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#dining')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dining & Sky Lounge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#offers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Exclusive Offers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#events')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Events & Entertainment
                </button>
              </li>
            </ul>
          </div>

          {/* VISIT Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-bold text-white mb-4">
              VISIT
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleScroll('#visit')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Getting Here & Metro
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#visit')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Smart Parking & Valet
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#visit')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Accessibility & Strollers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#visit')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Guest Services & Concierge
                </button>
              </li>
              <li>
                <a
                  href="tel:+18007828876"
                  className="hover:text-white transition-colors"
                >
                  Contact Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* FOLLOW Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.22em] font-bold text-white mb-4">
              FOLLOW
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-sky-400" />
                <span>Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4 text-sky-400" />
                <span>Facebook</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4 text-sky-400" />
                <span>YouTube</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="font-bold text-sky-400">𝕏</span>
                <span>X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Status Mall. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Guest Service
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Security & Safety
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
