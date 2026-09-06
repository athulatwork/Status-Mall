import React from 'react';
import { TOP_BRANDS } from '../data/mallData';

interface BrandShowcaseProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onSelectBrand }) => {
  return (
    <section
      id="brand-showcase-section"
      className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl bg-[#060c1d]/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-4 bg-sky-400 rounded-full shadow-[0_0_10px_#38bdf8]" />
            <span className="text-xs uppercase tracking-[0.32em] text-slate-300 font-semibold">
              CURATED MAISONS & FLAGSHIPS
            </span>
          </div>
          <span className="text-xs text-slate-400 font-light tracking-wide">
            Confirmed premier boutiques, anchor spaces & entertainment venues
          </span>
        </div>

        {/* Editorial Monochrome Logo Wall / Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {TOP_BRANDS.map((brand, idx) => (
            <button
              key={brand.name}
              id={`brand-btn-${idx}`}
              onClick={() => onSelectBrand?.(brand.name)}
              className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-sky-400/40 transition-all duration-300 cursor-pointer overflow-hidden text-center"
              title={`${brand.name} — ${brand.category}`}
            >
              {/* Subtle top light on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-sky-400/0 group-hover:bg-sky-400/50 blur-sm transition-all" />

              {/* Brand Typography */}
              <span className="font-serif text-base sm:text-lg font-bold text-white/90 group-hover:text-white tracking-[0.12em] uppercase transition-all duration-300 group-hover:scale-105">
                {brand.name}
              </span>

              {/* Category Subtitle */}
              <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-sky-300 font-medium mt-1.5 transition-colors">
                {brand.category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
