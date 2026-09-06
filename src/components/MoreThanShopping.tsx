import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface MoreThanShoppingProps {
  onNavigateSection: (sectionId: string) => void;
}

export const MoreThanShopping: React.FC<MoreThanShoppingProps> = ({
  onNavigateSection,
}) => {
  const cards = [
    {
      id: 'fashion',
      title: 'HAUTE COUTURE & FASHION',
      subtitle: 'Runway collections & luxury tailoring',
      category: 'RETAIL',
      cta: 'Explore Flagships',
      sectionId: 'shops',
      image:
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'dining',
      title: 'SKYLINE GASTRONOMY',
      subtitle: 'Michelin-level dining & terrace lounges',
      category: 'CULINARY',
      cta: 'Reserve a Table',
      sectionId: 'dining',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'movies',
      title: 'CINEMATIC MULTIPLEX',
      subtitle: '8-Screen CineStatus IMAX Laser & VIP Recliners',
      category: 'ENTERTAINMENT',
      cta: 'View Screenings',
      sectionId: 'offers',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'events',
      title: 'CURATED EXPERIENCES',
      subtitle: 'Twilight jazz symphonies & kinetic art gardens',
      category: 'CULTURE',
      cta: 'View Calendar',
      sectionId: 'events',
      image:
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section
      id="lifestyle-editorial-section"
      className="relative py-28 sm:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Editorial Monumental Typography */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
          <div className="flex items-center gap-2 mb-3 text-sky-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.32em] font-semibold">
              THE STATUS EXPERIENCE
            </span>
          </div>

          <h2
            id="more-than-shopping-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
          >
            More
            <br />
            Than Just
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-300 to-blue-400">
              Shopping
            </span>
          </h2>

          <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full shadow-[0_0_10px_#38bdf8]" />

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            An architectural masterpiece where world-renowned maisons converge with Michelin-inspired
            gastronomy, sensory entertainment, and intuitive personal service.
          </p>

          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
            <div>
              <span className="block font-serif text-3xl sm:text-4xl font-bold text-white">4</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 block">
                Illuminated Levels
              </span>
            </div>
            <div>
              <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#e2c17d]">24/7</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 block">
                VIP Concierge Desk
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Four Luxury Editorial Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`lifestyle-card-${card.id}`}
              onClick={() => onNavigateSection(card.sectionId)}
              className="group relative rounded-3xl bg-[#070e22]/75 backdrop-blur-xl border border-white/10 hover:border-sky-400/40 p-4 pb-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)] cursor-pointer overflow-hidden"
            >
              {/* Image Container with Smooth Zoom */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e22] via-transparent to-transparent opacity-80" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-widest text-sky-300 font-semibold">
                  {card.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-5 px-2 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-sky-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                {/* Card Footer CTA */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs uppercase tracking-[0.16em] font-semibold text-sky-400 group-hover:text-sky-300 transition-colors">
                    {card.cta}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-sky-500/20 border border-white/10 group-hover:border-sky-400/50 flex items-center justify-center text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
