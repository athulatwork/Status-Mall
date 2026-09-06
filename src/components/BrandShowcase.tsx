import React from 'react';
import { TOP_BRANDS } from '../data/mallData';

interface BrandShowcaseProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onSelectBrand }) => {
  return (
    <section
      id="brand-showcase-section"
      className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl sm:rounded-3xl bg-[#060c1d]/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-4 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-slate-300 font-semibold">
              TOP BRANDS
            </h2>
          </div>
          <span className="text-[11px] text-slate-400 font-light">
            Curated flagship boutiques & international maisons
          </span>
        </div>

        {/* Elegant circular/pill brand buttons with monochrome/white treatment & subtle hover */}
        <div className="mt-6 flex items-center justify-start sm:justify-between gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-none">
          {TOP_BRANDS.map((brand, idx) => (
            <button
              key={brand.name}
              id={`brand-btn-${idx}`}
              onClick={() => onSelectBrand?.(brand.name)}
              className="group flex-shrink-0 flex flex-col items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-sky-400/40 transition-all duration-300 cursor-pointer min-w-[90px] sm:min-w-[100px] text-center"
              title={`${brand.name} — ${brand.category}`}
            >
              {/* Monochromatic circular icon badge */}
              <div className="w-12 h-12 rounded-full bg-slate-900/90 border border-white/15 group-hover:border-sky-400/60 flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:scale-105">
                <span className="font-serif font-bold text-xs sm:text-sm tracking-wider uppercase">
                  {brand.name === '+ More' ? '+' : brand.name.slice(0, 4)}
                </span>
              </div>

              {/* Brand Label */}
              <span className="text-xs font-medium text-slate-300 group-hover:text-white tracking-wide transition-colors">
                {brand.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
