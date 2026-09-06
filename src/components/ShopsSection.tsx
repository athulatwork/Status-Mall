import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  MapPin,
  Sparkles,
  X,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { STORES_DATA, MALL_INFO } from '../data/mallData';
import { Store, TenantStatus } from '../types';

interface ShopsSectionProps {
  onLocateStore?: (store: Store) => void;
}

type FilterOption =
  | 'ALL'
  | 'GROUND FLOOR'
  | 'SECOND FLOOR'
  | 'ENTERTAINMENT'
  | 'DINING'
  | 'JEWELLERY'
  | 'FASHION'
  | 'BEAUTY'
  | 'EVENTS & COMMERCIAL'
  | 'COMING SOON';

export const ShopsSection: React.FC<ShopsSectionProps> = ({ onLocateStore }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFloorFilter, setActiveFloorFilter] = useState<'ALL' | 'GROUND FLOOR' | 'SECOND FLOOR'>('ALL');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<FilterOption>('ALL');
  const [selectedTenant, setSelectedTenant] = useState<Store | null>(null);

  const filterOptions: FilterOption[] = [
    'ALL',
    'GROUND FLOOR',
    'SECOND FLOOR',
    'ENTERTAINMENT',
    'DINING',
    'JEWELLERY',
    'FASHION',
    'BEAUTY',
    'EVENTS & COMMERCIAL',
    'COMING SOON'
  ];

  // Handle floor card selection from digital directory floor navigator
  const handleSelectFloor = (floor: 'ALL' | 'GROUND FLOOR' | 'SECOND FLOOR') => {
    setActiveFloorFilter(floor);
    if (floor === 'ALL') {
      setActiveCategoryFilter('ALL');
    } else {
      setActiveCategoryFilter(floor);
    }
  };

  // Handle category/status pill selection
  const handleSelectFilterPill = (filter: FilterOption) => {
    setActiveCategoryFilter(filter);
    if (filter === 'GROUND FLOOR' || filter === 'SECOND FLOOR' || filter === 'ALL') {
      setActiveFloorFilter(filter);
    }
  };

  const filteredTenants = useMemo(() => {
    return STORES_DATA.filter((tenant) => {
      // 1. Text Search matching name, category, description, floor, and tags
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tenant.name.toLowerCase().includes(q) ||
        tenant.category.toLowerCase().includes(q) ||
        tenant.description.toLowerCase().includes(q) ||
        tenant.floor.toLowerCase().includes(q) ||
        tenant.tags.some((tag) => tag.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      // 2. Active filter matching
      if (activeCategoryFilter === 'ALL') {
        if (activeFloorFilter === 'ALL') return true;
        return tenant.floor.toUpperCase() === activeFloorFilter;
      }

      if (activeCategoryFilter === 'GROUND FLOOR') {
        return tenant.floor === 'Ground Floor';
      }

      if (activeCategoryFilter === 'SECOND FLOOR') {
        return tenant.floor === 'Second Floor';
      }

      if (activeCategoryFilter === 'ENTERTAINMENT') {
        return (
          tenant.category.toLowerCase().includes('entertainment') ||
          tenant.tags.some((t) => t.toLowerCase().includes('entertainment') || t.toLowerCase().includes('playzone'))
        );
      }

      if (activeCategoryFilter === 'DINING') {
        return (
          tenant.category.toLowerCase().includes('dining') ||
          tenant.tags.some((t) => t.toLowerCase().includes('dining') || t.toLowerCase().includes('restaurant'))
        );
      }

      if (activeCategoryFilter === 'JEWELLERY') {
        return (
          tenant.category.toLowerCase().includes('jewellery') ||
          tenant.tags.some(
            (t) =>
              t.toLowerCase().includes('jewellery') ||
              t.toLowerCase().includes('gold') ||
              t.toLowerCase().includes('diamonds')
          )
        );
      }

      if (activeCategoryFilter === 'FASHION') {
        return (
          tenant.category.toLowerCase().includes('fashion') ||
          tenant.tags.some((t) => t.toLowerCase().includes('fashion'))
        );
      }

      if (activeCategoryFilter === 'BEAUTY') {
        return (
          tenant.category.toLowerCase().includes('beauty') ||
          tenant.tags.some(
            (t) =>
              t.toLowerCase().includes('beauty') ||
              t.toLowerCase().includes('skincare') ||
              t.toLowerCase().includes('cosmetics')
          )
        );
      }

      if (activeCategoryFilter === 'EVENTS & COMMERCIAL') {
        return (
          tenant.category.toLowerCase().includes('events') ||
          tenant.category.toLowerCase().includes('commercial') ||
          tenant.status === 'Available'
        );
      }

      if (activeCategoryFilter === 'COMING SOON') {
        return tenant.status === 'Coming Soon';
      }

      return true;
    });
  }, [searchQuery, activeCategoryFilter, activeFloorFilter]);

  const renderStatusBadge = (status: TenantStatus, displayType?: string) => {
    if (status === 'Coming Soon') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/15 via-sky-500/15 to-amber-500/15 border border-amber-400/40 text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-200 uppercase shadow-[0_0_12px_rgba(251,191,36,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          COMING SOON
        </span>
      );
    }

    if (status === 'Available') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/40 text-[10px] sm:text-[11px] font-bold tracking-wider text-sky-200 uppercase shadow-[0_0_12px_rgba(56,189,248,0.15)]">
          <Building2 className="w-3 h-3 text-sky-400" />
          EVENTS & COMMERCIAL SPACE
        </span>
      );
    }

    // Default 'Open' Status
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-[10px] sm:text-[11px] font-semibold tracking-wider text-emerald-300 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {displayType ? displayType : 'OPEN'}
      </span>
    );
  };

  return (
    <section id="shops" className="relative py-28 sm:py-36 bg-[#040816] border-y border-white/5">
      {/* Subtle Atmospheric Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            DIRECTORY HEADER (Required: STATUS MALL • MALL DIRECTORY)
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sky-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.32em] font-semibold">
                STATUS MALL
              </span>
            </div>
            <h2
              id="mall-directory-title"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.05]"
            >
              MALL DIRECTORY
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
              Discover the stores, dining and experiences at STATUS MALL.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="directory-search-input"
              type="text"
              placeholder="Search by name, category, tags (e.g. bridal, kids)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-14 py-3.5 rounded-full bg-white/[0.04] border border-white/15 focus:border-sky-400 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-semibold px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            PREMIUM DIGITAL FLOOR DIRECTORY EXPERIENCE
            01 GROUND FLOOR & 02 SECOND FLOOR
           ======================================================== */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ALL FLOORS CARD */}
          <button
            type="button"
            onClick={() => handleSelectFloor('ALL')}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeFloorFilter === 'ALL'
                ? 'bg-sky-950/40 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
                ALL DESTINATIONS
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                {STORES_DATA.length} Tenants
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                Full Mall Directory
              </h3>
              <p className="mt-1 text-xs text-slate-300 font-light">
                Explore all verified boutiques, flagships, and entertainment venues.
              </p>
            </div>
          </button>

          {/* 01 GROUND FLOOR CARD */}
          <button
            type="button"
            onClick={() => handleSelectFloor('GROUND FLOOR')}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeFloorFilter === 'GROUND FLOOR'
                ? 'bg-sky-950/40 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
                01
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                7 Locations
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                GROUND FLOOR
              </h3>
              <p className="mt-1 text-xs text-slate-300 font-light">
                Fashion • Jewellery • Beauty • Lifestyle
              </p>
            </div>
          </button>

          {/* 02 SECOND FLOOR CARD */}
          <button
            type="button"
            onClick={() => handleSelectFloor('SECOND FLOOR')}
            className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeFloorFilter === 'SECOND FLOOR'
                ? 'bg-sky-950/40 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
                02
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                3 Locations
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                SECOND FLOOR
              </h3>
              <p className="mt-1 text-xs text-slate-300 font-light">
                Dining • Entertainment • Events
              </p>
            </div>
          </button>
        </div>

        {/* ========================================================
            CATEGORY & FILTER PILLS (Actual Data Filtering)
           ======================================================== */}
        <div className="mt-8 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 scrollbar-none">
          {filterOptions.map((filter) => {
            const isSelected = activeCategoryFilter === filter;
            return (
              <button
                key={filter}
                id={`filter-pill-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => handleSelectFilterPill(filter)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* ACTIVE FILTER SUMMARY BAR */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span>Showing:</span>
            <span className="text-sky-300 font-semibold uppercase">{activeCategoryFilter}</span>
            {searchQuery && (
              <span className="text-slate-300">
                matching <span className="text-white">"{searchQuery}"</span>
              </span>
            )}
          </div>
          <span className="font-mono text-slate-300">
            {filteredTenants.length} {filteredTenants.length === 1 ? 'Listing' : 'Listings'} Found
          </span>
        </div>

        {/* ========================================================
            EDITORIAL TENANT DIRECTORY GRID
            With motion layout transitions
           ======================================================== */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTenants.map((tenant) => (
              <motion.div
                key={tenant.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                id={`tenant-card-${tenant.id}`}
                onClick={() => setSelectedTenant(tenant)}
                className="group relative rounded-3xl bg-[#070e22]/90 backdrop-blur-xl border border-white/10 hover:border-sky-400/50 p-6 flex flex-col justify-between transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] cursor-pointer overflow-hidden"
              >
                {/* Subtle top indicator glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400/0 group-hover:via-sky-400/60 to-transparent transition-all duration-500" />

                {/* Top Row: Category & Floor */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-sky-400">
                      {tenant.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{tenant.floor}</span>
                    </div>
                  </div>

                  {/* Tenant Name */}
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-sky-200 transition-colors tracking-wide">
                    {tenant.name}
                  </h3>

                  {/* Tenant Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {tenant.description}
                  </p>

                  {/* Tags */}
                  {tenant.tags && tenant.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {tenant.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-[10px] text-slate-300 font-medium border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row: Status Badge & View Details */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>{renderStatusBadge(tenant.status, tenant.displayType)}</div>

                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-sky-400 group-hover:text-sky-300 transition-colors">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTenants.length === 0 && (
          <div className="mt-12 text-center py-16 px-4 rounded-3xl bg-white/[0.02] border border-white/10">
            <p className="text-base text-slate-300 font-light">
              No confirmed directory listings match your selection.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryFilter('ALL');
                setActiveFloorFilter('ALL');
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-sky-500 text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-sky-400 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* ========================================================
          MODAL: CONFIRMED TENANT DETAILS
          Strictly NO fake phone numbers, websites, or reviews
         ======================================================== */}
      {selectedTenant && (
        <div
          id="tenant-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setSelectedTenant(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#070e22] border border-white/15 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedTenant(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close tenant details"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Category & Status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-sky-400">
                {selectedTenant.category}
              </span>
              <span className="text-slate-500">•</span>
              <div className="flex items-center gap-1 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{selectedTenant.floor}</span>
              </div>
            </div>

            {/* Tenant Name */}
            <h3 className="font-serif text-3xl font-bold text-white mt-2.5">
              {selectedTenant.name}
            </h3>

            {/* Status Indicator */}
            <div className="mt-3">
              {renderStatusBadge(selectedTenant.status, selectedTenant.displayType)}
            </div>

            {/* Description */}
            <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                About Venue
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                {selectedTenant.description}
              </p>
            </div>

            {/* Tags (Only genuine confirmed tags) */}
            {selectedTenant.tags && selectedTenant.tags.length > 0 && (
              <div className="mt-5">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block mb-2">
                  Specialties & Tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedTenant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-sky-200 border border-white/10 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar: Open Mall Google Maps Location */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                STATUS MALL • {selectedTenant.floor}
              </span>

              <a
                id="tenant-modal-maps-link"
                href={MALL_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
