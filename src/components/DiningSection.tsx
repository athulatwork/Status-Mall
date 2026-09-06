import React from 'react';
import { Sparkles, MapPin, ArrowRight, UtensilsCrossed, Building2 } from 'lucide-react';
import { MALL_INFO, STORES_DATA } from '../data/mallData';

export const DiningSection: React.FC = () => {
  // Confirmed dining tenant: Bell Pepper Restaurant
  const diningTenant = STORES_DATA.find((t) => t.id === 'bell-pepper-restaurant') || {
    id: 'bell-pepper-restaurant',
    name: 'Bell Pepper Restaurant',
    category: 'Dining',
    floor: 'Second Floor',
    description: 'Coming soon flagship restaurant situated in the dedicated food court.',
    status: 'Coming Soon',
    tags: ['Restaurant', 'Food Court', 'Dining'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop'
  };

  const handleScrollToDirectory = () => {
    const el = document.getElementById('shops');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dining" className="relative py-28 sm:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Subtle warm champagne ambiance */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#e2c17d]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2 text-[#e2c17d]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.32em] font-semibold">
              GASTRONOMIC DESTINATION
            </span>
          </div>
          <h2
            id="dining-section-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            DINING & FOOD COURT
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            STATUS MALL features a dedicated food court experience on the Second Floor, anchored by premier culinary venues.
          </p>
        </div>

        <button
          type="button"
          onClick={handleScrollToDirectory}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer"
        >
          <span>VIEW MALL DIRECTORY</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Flagship Dining Showcase */}
      <div className="mt-12">
        <div
          id={`dining-card-${diningTenant.id}`}
          className="group relative rounded-3xl bg-[#070e22]/90 backdrop-blur-xl border border-white/10 hover:border-[#e2c17d]/40 p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden shadow-2xl"
        >
          {/* Subtle top glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e2c17d]/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-6 relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={diningTenant.image}
                alt={diningTenant.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e22] via-black/20 to-transparent" />

              {/* Status Badge Over Image */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-sky-500/20 to-amber-500/20 border border-amber-400/50 backdrop-blur-md text-xs font-bold tracking-widest text-amber-200 uppercase shadow-[0_0_15px_rgba(251,191,36,0.25)]">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  COMING SOON
                </span>
              </div>

              {/* Floor Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#e2c17d]" />
                <span>{diningTenant.floor} • Food Court</span>
              </div>
            </div>

            {/* Editorial Information */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#e2c17d] mb-2">
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>FLAGSHIP FOOD COURT VENUE</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {diningTenant.name}
                </h3>

                <p className="mt-4 text-base text-slate-300 font-light leading-relaxed">
                  {diningTenant.description}
                </p>

                {/* Confirmed Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {diningTenant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] text-xs font-medium text-amber-200/90 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-light">
                    <Building2 className="w-4 h-4 text-[#e2c17d] flex-shrink-0" />
                    <span>
                      Situated in the dedicated Second Floor food court zone of STATUS MALL.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <a
                  id="dining-open-maps"
                  href={MALL_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#e2c17d] to-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(226,193,125,0.4)] hover:shadow-[0_0_25px_rgba(226,193,125,0.6)] transition-all cursor-pointer"
                >
                  <span>GET DIRECTIONS TO MALL</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleScrollToDirectory}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors cursor-pointer"
                >
                  <span>EXPLORE SECOND FLOOR</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
