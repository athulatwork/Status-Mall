import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Car,
  Phone,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Layers,
  Sparkles,
  Heart,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';
import { MALL_FACILITIES, MALL_FLOORS, MALL_INFO } from '../data/mallData';

interface VisitSectionProps {
  highlightedStoreName?: string;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ highlightedStoreName }) => {
  const [selectedFloorIndex, setSelectedFloorIndex] = useState(0);
  const activeFloor = MALL_FLOORS[selectedFloorIndex];
  const googleMapsUrl = MALL_INFO.location.googleMapsUrl;

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-5 h-5 text-[#e2c17d]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-sky-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#e2c17d]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-pink-400" />;
      default:
        return <Compass className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section
      id="visit"
      className="relative py-28 sm:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#e2c17d]/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="pb-12 border-b border-white/10">
        <div className="flex items-center gap-2 mb-2 text-[#e2c17d]">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.32em] font-semibold">
            VISIT STATUS MALL
          </span>
        </div>
        <h2
          id="visit-section-title"
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.08]"
        >
          Everything you need for your visit.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
          Situated on Melattur Road at Kottappalla, Alanallur-III, Edathanattukara.
          Explore confirmed boutique showrooms, entertainment, dedicated on-site parking,
          and culinary venues.
        </p>
      </div>

      {/* 4 CORE VISITOR PILLARS GRID */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        
        {/* ========================================================
            CARD 1: LOCATION & GOOGLE MAPS
           ======================================================== */}
        <motion.div
          id="visitor-card-location"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 rounded-3xl bg-[#070e22]/90 backdrop-blur-xl border border-white/10 hover:border-[#e2c17d]/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            {/* Card Tag */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="w-9 h-9 rounded-xl bg-[#e2c17d]/10 border border-[#e2c17d]/30 flex items-center justify-center text-[#e2c17d]"
                >
                  <MapPin className="w-4 h-4" />
                </motion.div>
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#e2c17d]">
                  LOCATION
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                {MALL_INFO.address.postalCode}
              </span>
            </div>

            {/* Exact Un-abbreviated Address */}
            <div className="mt-6 space-y-1 text-slate-200 font-light text-base sm:text-lg leading-relaxed">
              <p className="font-serif font-bold text-white text-xl sm:text-2xl tracking-tight">
                {MALL_INFO.name}
              </p>
              <p className="text-slate-300">Melattur Road</p>
              <p className="text-slate-300">Kottappalla, Alanallur-III</p>
              <p className="text-slate-300">Edathanattukara</p>
              <p className="text-slate-300">Palakkad District, Kerala — 678601</p>
              <p className="text-slate-400 text-sm font-medium">India</p>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
            <motion.a
              id="visit-open-google-maps-btn"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#e2c17d] to-[#d4af37] hover:from-[#f0d499] hover:to-[#e2c17d] text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] shadow-[0_0_20px_rgba(226,193,125,0.35)] hover:shadow-[0_0_28px_rgba(226,193,125,0.5)] transition-all cursor-pointer group"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* ========================================================
            RIGHT COLUMN: HOURS, CONTACTS & PARKING
           ======================================================== */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* CARD 2: OPERATING HOURS */}
          <motion.div
            id="visitor-card-hours"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-[#070e22]/90 backdrop-blur-xl border border-white/10 hover:border-sky-400/30 p-6 sm:p-7 shadow-xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-sky-300">
                  OPERATING HOURS
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-[11px] font-semibold text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                OPEN DAILY
              </span>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-medium block">
                  DAILY SCHEDULE
                </span>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                  {MALL_INFO.operatingHours.display}
                </p>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit">
                <span className="text-xs font-semibold tracking-wider text-sky-300 uppercase">
                  {MALL_INFO.operatingHours.scheduleBadge}
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-400 font-light">
              Doors open 7 days a week for seamless shopping, dining, and family entertainment.
            </p>
          </motion.div>

          {/* CARD 3: PRIMARY CONTACTS */}
          <motion.div
            id="visitor-card-contacts"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-[#070e22]/90 backdrop-blur-xl border border-white/10 hover:border-[#e2c17d]/30 p-6 sm:p-7 shadow-xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#e2c17d]/10 border border-[#e2c17d]/30 flex items-center justify-center text-[#e2c17d]">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#e2c17d]">
                  CONTACT
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Official Primary Lines</span>
            </div>

            <p className="mt-4 text-xs text-slate-300 font-light">
              Reach the official mall administration and visitor concierge directly:
            </p>

            {/* Clickable Phone Number Buttons */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MALL_INFO.contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.tel}
                  id={`contact-phone-link-${index + 1}`}
                  href={contact.tel}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-[#e2c17d]/10 border border-white/10 hover:border-[#e2c17d]/40 text-white transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#e2c17d] group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">
                      {contact.display}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#e2c17d] group-hover:translate-x-0.5 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CARD 4: PARKING */}
          <motion.div
            id="visitor-card-parking"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-[#070e22]/90 backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 p-6 sm:p-7 shadow-xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                  <Car className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-emerald-300">
                  PARKING
                </span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 tracking-wider">
                ON-SITE PARKING
              </span>
            </div>

            <p className="mt-4 text-sm font-medium text-white leading-relaxed">
              {MALL_INFO.parking.summary}
            </p>

            <p className="mt-2 text-xs text-slate-400 font-light leading-relaxed">
              {MALL_INFO.parking.visitorWording}
            </p>
          </motion.div>

        </div>
      </div>

      {/* ========================================================
          VISITOR AMENITIES SUMMARY CARDS
         ======================================================== */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-sky-400">
            VISITOR AMENITIES & CONVENIENCES
          </span>
          <span className="text-xs text-slate-400 font-light">
            Crafted for an effortless visit
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MALL_FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.title}
              id={`facility-card-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-[#081026]/75 backdrop-blur-xl border border-white/10 hover:border-white/25 p-6 flex flex-col justify-between transition-all duration-300 shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                  {getFacilityIcon(facility.icon)}
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================
          INTERACTIVE LEVEL DIRECTORY PREVIEW
         ======================================================== */}
      <div className="mt-16 rounded-3xl bg-[#070e22]/90 border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Floor Selector & Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#e2c17d]">
                  INTERACTIVE LEVEL DIRECTORY
                </span>
                <span className="text-xs text-slate-400">Select Floor Level</span>
              </div>

              {/* Floor Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {MALL_FLOORS.map((floor, idx) => (
                  <button
                    key={floor.level}
                    id={`floor-tab-${idx}`}
                    type="button"
                    onClick={() => setSelectedFloorIndex(idx)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedFloorIndex === idx
                        ? 'bg-[#e2c17d] text-slate-950 shadow-[0_0_15px_rgba(226,193,125,0.4)] scale-105'
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
                          ? 'bg-[#e2c17d] text-slate-950 border-[#d4af37] font-bold animate-pulse'
                          : 'bg-white/5 text-slate-200 border-white/10'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Confirmed Hours & Contact Info Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#e2c17d] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Operating Hours</span>
                  <span>{MALL_INFO.operatingHours.badge}</span>
                  <br />
                  <span className="text-slate-400">{MALL_INFO.operatingHours.days}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#e2c17d] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Primary Contacts</span>
                  <a href={`tel:${MALL_INFO.contacts[0].replace(/[^+\d]/g, '')}`} className="hover:text-white block">
                    {MALL_INFO.contacts[0]}
                  </a>
                  <a href={`tel:${MALL_INFO.contacts[1].replace(/[^+\d]/g, '')}`} className="hover:text-white block">
                    {MALL_INFO.contacts[1]}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Destination Schematic */}
          <div className="w-full lg:w-1/2 relative min-h-[320px] rounded-2xl bg-gradient-to-br from-[#0a1533] to-[#04091a] border border-white/15 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Grid Lines Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-30 pointer-events-none" />

            {/* Glowing Atrium Graphic */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-[#e2c17d]/40 text-[11px] font-bold text-[#e2c17d] uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{activeFloor.level} Verified Layout</span>
              </div>
              <span className="text-[11px] text-slate-400">Edathanattukara</span>
            </div>

            {/* Highlights overview cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-[10px] text-[#e2c17d] uppercase tracking-wider block font-semibold">
                  MALL ENTRANCE & ACCESS
                </span>
                <span className="text-xs text-white font-medium mt-1 block">
                  Melattur Road Frontage
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Direct on-site parking access
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-[10px] text-sky-400 uppercase tracking-wider block font-semibold">
                  ACTIVE FLOOR TENANTS
                </span>
                <span className="text-xs text-white font-medium mt-1 block">
                  {selectedFloorIndex === 0 ? '7 Ground Floor Outlets' : '3 Second Floor Venues'}
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  {selectedFloorIndex === 0 ? 'Retail, Fashion & Jewellery' : 'Food Court, Amusement & Events'}
                </span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e2c17d] flex-shrink-0" />
                <span className="truncate">{MALL_INFO.address.line2}, {MALL_INFO.address.line3}</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e2c17d] hover:text-white font-bold uppercase tracking-wider text-[11px] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
