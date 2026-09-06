import React, { useState } from 'react';
import { Star, Clock, ArrowRight, Utensils, X, MapPin, CheckCircle } from 'lucide-react';
import { RESTAURANTS_DATA } from '../data/mallData';
import { Restaurant } from '../types';

export const DiningSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const categories = [
    'All',
    'Fine Dining',
    'Cafés',
    'Fast Casual',
    'Desserts',
    'Family Dining',
  ];

  const filteredRestaurants = RESTAURANTS_DATA.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  return (
    <section id="dining" className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-4 h-4 text-amber-400" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-amber-300">
              GASTRONOMIC DESTINATION
            </span>
          </div>
          <h2
            id="dining-section-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            TASTE THE EXPERIENCE
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-light max-w-xl">
            Savor world-class culinary creations, artisanal roasteries, and panoramic skyline dining terraces.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`dining-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Restaurant Cards: Grid on desktop, horizontal scroll on mobile */}
      <div className="mt-10 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 scrollbar-none snap-x snap-mandatory">
        {filteredRestaurants.map((resto) => (
          <div
            key={resto.id}
            id={`restaurant-card-${resto.id}`}
            className="group flex-shrink-0 w-[85vw] sm:w-[360px] md:w-auto snap-center rounded-2xl bg-[#070e20]/80 backdrop-blur-xl border border-white/10 hover:border-amber-400/40 p-3.5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Large Food Image */}
            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-900">
              <img
                src={resto.image}
                alt={resto.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e20] via-transparent to-transparent opacity-80" />

              {/* Price Range & Rating */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-bold text-amber-300 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{resto.rating}</span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-slate-300">
                  {resto.priceRange}
                </div>
              </div>

              {/* Opening Status */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-medium text-emerald-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{resto.status}</span>
              </div>
            </div>

            {/* Content info */}
            <div className="mt-4 px-2 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-amber-400">
                    {resto.category}
                  </span>
                  <span className="text-[11px] text-slate-400">{resto.floor}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-200 transition-colors mt-1">
                  {resto.name}
                </h3>
                <p className="text-xs text-slate-300 font-light mt-1">
                  {resto.cuisine}
                </p>

                <div className="mt-3 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-slate-300">
                  <span className="text-amber-300 font-medium">Signature: </span>
                  {resto.signatureDish}
                </div>
              </div>

              {/* "Explore →" CTA */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => {
                    setReservationSuccess(false);
                    setSelectedRestaurant(resto);
                  }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-amber-400 group-hover:text-amber-300 cursor-pointer"
                >
                  <span>Explore & Reserve</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[10px] text-slate-400">
                  {resto.reviewCount} Reviews
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Restaurant Reservation Modal */}
      {selectedRestaurant && (
        <div
          id="dining-reserve-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedRestaurant(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#080f22] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedRestaurant(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close restaurant reservation"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <span>{selectedRestaurant.category}</span>
              <span>•</span>
              <span className="text-slate-300">{selectedRestaurant.floor}</span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-white mt-2">
              {selectedRestaurant.name}
            </h3>

            <div className="mt-4 rounded-xl overflow-hidden h-44 w-full">
              <img
                src={selectedRestaurant.image}
                alt={selectedRestaurant.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {selectedRestaurant.description}
            </p>

            <div className="mt-4 p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-200">
              <span className="font-bold">Chef's Signature:</span> {selectedRestaurant.signatureDish}
            </div>

            {reservationSuccess ? (
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-400/30 flex items-center gap-3 text-emerald-200 text-xs">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="font-bold">VIP Priority Reservation Requested</p>
                  <p className="text-slate-300 mt-0.5 font-light">
                    Our concierge desk will prepare your table at {selectedRestaurant.name}.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setReservationSuccess(true)}
                  className="w-full sm:flex-1 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                >
                  Request Table Reservation
                </button>
                <button
                  onClick={() => setSelectedRestaurant(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs uppercase tracking-wider border border-white/10"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
