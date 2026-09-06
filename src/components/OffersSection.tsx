import React, { useState } from 'react';
import { Tag, ArrowRight, Check, Copy, Sparkles, X } from 'lucide-react';
import { OFFERS_DATA } from '../data/mallData';
import { Offer } from '../types';

export const OffersSection: React.FC = () => {
  const [claimedOffer, setClaimedOffer] = useState<Offer | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="offers" className="relative py-24 sm:py-32 bg-[#03081a] border-y border-white/5 overflow-hidden">
      {/* Animated ambient gradient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-sky-400" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-sky-400">
                PRIVILEGES & REWARDS
              </span>
            </div>
            <h2
              id="offers-section-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
            >
              EXCLUSIVE OFFERS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 font-light max-w-xl">
              Curated seasonal privileges, boutique discounts, and VIP dining inclusions.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-sky-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updated Daily for Status Mall Guests</span>
          </div>
        </div>

        {/* Large Premium Promotional Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS_DATA.map((offer) => (
            <div
              key={offer.id}
              id={`offer-card-${offer.id}`}
              className="group relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#07112b]/85 to-[#04091a]/95 border border-white/15 hover:border-sky-400/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] overflow-hidden"
            >
              {/* Subtle animated neon border accent effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl group-hover:bg-sky-400/20 transition-all pointer-events-none" />

              <div>
                {/* Top Row: Discount Pill & Category */}
                <div className="flex items-center justify-between gap-2 pb-4">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                    {offer.discount}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    {offer.category}
                  </span>
                </div>

                {/* Offer Image */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mt-2 bg-slate-950">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Store / Venue Tag */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] text-white font-medium">
                    {offer.store}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-5">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-sky-200 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">
                    {offer.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 font-light mt-2 leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>

              {/* Bottom: Valid Date & CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">
                    Validity
                  </span>
                  <span className="text-slate-200 font-medium">{offer.validUntil}</span>
                </div>

                <button
                  onClick={() => {
                    setCopiedCode(false);
                    setClaimedOffer(offer);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-sky-500 hover:text-slate-950 border border-white/15 hover:border-sky-400 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] cursor-pointer"
                >
                  <span>Claim Offer</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Claim Voucher Modal */}
      {claimedOffer && (
        <div
          id="offer-voucher-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setClaimedOffer(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-[#09112a] border border-sky-400/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(56,189,248,0.25)] text-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setClaimedOffer(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close offer voucher"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center mx-auto text-sky-400 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              <Sparkles className="w-6 h-6" />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-sky-400">
              EXCLUSIVE PASS
            </span>

            <h3 className="font-serif text-2xl font-bold text-white mt-1">
              {claimedOffer.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 font-light">
              Present this pass or coupon code at participating Status Mall boutiques.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-black/50 border border-dashed border-sky-400/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block text-left">
                  Voucher Code
                </span>
                <span className="font-mono text-lg font-bold text-sky-300 tracking-wider">
                  {claimedOffer.code}
                </span>
              </div>
              <button
                onClick={() => handleCopyCode(claimedOffer.code)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Valid until: {claimedOffer.validUntil} • Terms apply at guest services.
            </p>

            <button
              onClick={() => setClaimedOffer(null)}
              className="mt-6 w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold border border-white/15 transition-all"
            >
              Done & Save to Passbook
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
