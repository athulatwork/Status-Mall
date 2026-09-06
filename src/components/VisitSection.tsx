import React, { useState } from 'react';
import { Wifi, Car, Train, Heart, MapPin, Navigation, Clock, Phone, ChevronRight } from 'lucide-react';
import { MALL_FACILITIES, MALL_FLOORS, MALL_INFO } from '../data/mallData';

interface VisitSectionProps {
  highlightedStoreName?: string;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ highlightedStoreName }) => {
  const [selectedFloorIndex, setSelectedFloorIndex] = useState(0);
  const activeFloor = MALL_FLOORS[selectedFloorIndex];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-sky-400" />;
      case 'Car':
        return <Car className="w-5 h-5 text-sky-400" />;
      case 'Train':
        return <Train className="w-5 h-5 text-sky-400" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-sky-400" />;
      default:
        return <MapPin className="w-5 h-5 text-sky-400" />;
    }
  };

  const openGoogleDirections = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Grand Boulevard Metro Central District Status Mall')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="visit" className="relative py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Navigation className="w-4 h-4 text-sky-400" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-sky-400">
              GUEST SERVICES & ACCESS
            </span>
          </div>
          <h2
            id="visit-section-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            PLAN YOUR VISIT
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-light max-w-xl">
            Everything you need for an effortless, luxurious shopping and dining excursion.
          </p>
        </div>

        <button
          id="get-directions-btn"
          onClick={openGoogleDirections}
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
        >
          <span>GET DIRECTIONS</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Four Information Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MALL_FACILITIES.map((facility, index) => (
          <div
            key={facility.title}
            id={`facility-card-${index}`}
            className="rounded-2xl bg-[#081026]/75 backdrop-blur-xl border border-white/10 hover:border-sky-400/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-black/40"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-4">
                {getIcon(facility.icon)}
              </div>
              <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider">
                {facility.title}
              </h3>
              <p className="text-xs font-semibold text-sky-300 mt-0.5">
                {facility.subtitle}
              </p>
              <p className="mt-2 text-xs text-slate-300 font-light leading-relaxed">
                {facility.detail}
              </p>
            </div>
            {facility.icon === 'Car' && (
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Live Status:</span>
                <span className="text-emerald-300 font-medium">1,420 Spots Open</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Interactive Map & Floor Directory Section */}
      <div className="mt-14 rounded-3xl bg-[#070e22]/90 border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Floor Selector & Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-sky-400">
                  INTERACTIVE MALL DIRECTORY
                </span>
                <span className="text-xs text-slate-400">Select Floor Level</span>
              </div>

              {/* Floor Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {MALL_FLOORS.map((floor, idx) => (
                  <button
                    key={floor.level}
                    id={`floor-tab-${idx}`}
                    onClick={() => setSelectedFloorIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedFloorIndex === idx
                        ? 'bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                    }`}
                  >
                    {floor.level}
                  </button>
                ))}
              </div>

              {/* Active Floor Name & Description */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeFloor.name}
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                {activeFloor.description}
              </p>

              {/* Active Floor Highlights List */}
              <div className="border-t border-white/10 pt-4">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block mb-3">
                  Floor Key Highlights & Anchors
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeFloor.highlights.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                        highlightedStoreName && item.toLowerCase().includes(highlightedStoreName.toLowerCase())
                          ? 'bg-sky-400 text-slate-950 border-sky-300 font-bold animate-pulse'
                          : 'bg-white/5 text-slate-200 border-white/10'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hours & Contact Info Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Mall Hours</span>
                  <span>Weekdays: {MALL_INFO.hours.weekdays}</span>
                  <br />
                  <span>Weekends: {MALL_INFO.hours.weekends}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Guest Concierge</span>
                  <span>{MALL_INFO.contact.phone}</span>
                  <br />
                  <span className="text-slate-400">{MALL_INFO.contact.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Level Blueprint Simulation */}
          <div className="w-full lg:w-1/2 relative h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-[#0a1533] to-[#04091a] border border-white/15 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Grid Lines Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-30 pointer-events-none" />

            {/* Glowing Atrium Graphic */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3 py-1 rounded-full bg-sky-950/70 border border-sky-400/40 text-[11px] font-bold text-sky-300 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                {activeFloor.level} Floorplan View
              </div>
              <span className="text-[11px] text-slate-400">Scale 1:500 Architectural CAD</span>
            </div>

            {/* Interactive zone schematics representation */}
            <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-sky-400/50 transition-colors text-center">
                <span className="text-[10px] text-sky-300 uppercase tracking-wider block font-semibold">
                  Zone Alpha
                </span>
                <span className="text-xs text-white font-medium mt-1 block">
                  Retail Flagships
                </span>
              </div>
              <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-400/30 text-center shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                <span className="text-[10px] text-sky-300 uppercase tracking-wider block font-semibold">
                  Central Atrium
                </span>
                <span className="text-xs text-white font-bold mt-1 block">
                  Glass Dome & Water
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-sky-400/50 transition-colors text-center">
                <span className="text-[10px] text-sky-300 uppercase tracking-wider block font-semibold">
                  Zone Beta
                </span>
                <span className="text-xs text-white font-medium mt-1 block">
                  Lounges & Cafés
                </span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{MALL_INFO.contact.address}</span>
              </div>
              <button
                onClick={openGoogleDirections}
                className="text-sky-400 hover:text-sky-300 font-bold uppercase tracking-wider text-[11px]"
              >
                Open Maps →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
