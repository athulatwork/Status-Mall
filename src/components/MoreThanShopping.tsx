import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MoreThanShoppingProps {
  onNavigateSection: (sectionId: string) => void;
}

export const MoreThanShopping: React.FC<MoreThanShoppingProps> = ({
  onNavigateSection,
}) => {
  const cards = [
    {
      id: 'fashion',
      title: 'FASHION',
      subtitle: 'Haute couture & trending apparel',
      cta: 'Shop Now',
      sectionId: 'shops',
      image:
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'dining',
      title: 'DINING',
      subtitle: 'Skyline terraces & artisan cuisine',
      cta: 'Explore',
      sectionId: 'dining',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'movies',
      title: 'MOVIES',
      subtitle: '8-Screen CineStatus IMAX Multiplex',
      cta: 'Book Now',
      sectionId: 'offers',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'events',
      title: 'EVENTS',
      subtitle: 'Runways, jazz nights & exhibitions',
      cta: 'See Events',
      sectionId: 'events',
      image:
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section
      id="lifestyle-editorial-section"
      className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Large editorial heading, small accent line, description */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-sky-400 mb-3">
            THE LIFESTYLE MATRIX
          </span>

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

          {/* Small accent line */}
          <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full shadow-[0_0_8px_#38bdf8]" />

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            A complete lifestyle destination with fashion, food, entertainment and
            endless experiences. From runway previews to private tasting rooms, Status
            Mall redefines modern luxury living.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
            <div>
              <span className="block font-serif text-3xl font-bold text-white">4</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 block">
                Architectural Levels
              </span>
            </div>
            <div>
              <span className="block font-serif text-3xl font-bold text-sky-300">24/7</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 block">
                VIP Concierge Desk
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Four premium cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`lifestyle-card-${card.id}`}
              onClick={() => onNavigateSection(card.sectionId)}
              className="group relative rounded-2xl bg-[#080f22]/70 backdrop-blur-xl border border-white/10 hover:border-sky-400/40 p-3 pb-5 flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(56,189,248,0.15)] cursor-pointer overflow-hidden"
            >
              {/* Image on top with subtle zoom */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f22] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-widest text-sky-300 font-semibold">
                  STATUS
                </div>
              </div>

              {/* Content */}
              <div className="mt-4 px-2 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wider text-white group-hover:text-sky-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light mt-1">
                    {card.subtitle}
                  </p>
                </div>

                {/* CTA with arrow animation */}
                <div className="mt-5 flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-xs uppercase tracking-[0.16em] font-semibold text-sky-400 group-hover:text-sky-300 transition-colors">
                    {card.cta}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-sky-500/20 border border-white/10 group-hover:border-sky-400/50 flex items-center justify-center text-sky-400 group-hover:translate-x-1 transition-all duration-300">
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
