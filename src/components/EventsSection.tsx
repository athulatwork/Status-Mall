import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';
import { EVENTS_DATA } from '../data/mallData';

export const EventsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [rsvpedEvents, setRsvpedEvents] = useState<Record<string, boolean>>({});

  const categories = [
    'All',
    'Live Music',
    'Fashion Shows',
    'Kids Activities',
    'Food Festivals',
    'Seasonal Events',
  ];

  const handleRSVP = (id: string) => {
    setRsvpedEvents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredEvents = EVENTS_DATA.filter((ev) =>
    selectedCategory === 'All' ? true : ev.category === selectedCategory
  );

  return (
    <section id="events" className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-sky-400" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-sky-400">
              CULTURE & ENTERTAINMENT
            </span>
          </div>
          <h2
            id="events-section-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            WHAT'S HAPPENING
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-light max-w-xl">
            Live orchestral performances, couture runways, international culinary summits, and seasonal light spectacles.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`event-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((ev) => {
          const isRSVPed = !!rsvpedEvents[ev.id];
          return (
            <div
              key={ev.id}
              id={`event-card-${ev.id}`}
              className="group rounded-3xl bg-[#081026]/75 backdrop-blur-xl border border-white/10 hover:border-sky-400/40 p-4 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Event Image & Date Badge */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081026] via-transparent to-transparent opacity-80" />

                {/* Date Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-center">
                  <span className="block text-xs font-bold text-sky-300 uppercase tracking-wider">
                    {ev.date}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 text-[10px] uppercase font-semibold text-slate-300 tracking-wider">
                  {ev.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="mt-4 px-2 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      {ev.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      {ev.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light mt-2 leading-relaxed">
                    {ev.description}
                  </p>
                </div>

                {/* RSVP / Add to Calendar CTA */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => handleRSVP(ev.id)}
                    className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                      isRSVPed
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-[0_0_10px_rgba(52,211,153,0.3)]'
                        : 'bg-white/10 hover:bg-sky-500 hover:text-slate-950 text-white border border-white/15 hover:border-sky-400 shadow-sm'
                    }`}
                  >
                    {isRSVPed ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Pass Confirmed</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Complimentary RSVP</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-slate-400 font-medium">
                    Free Entry
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
