import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, MapPin, Clock, Phone, X, Sparkles } from 'lucide-react';
import { STORES_DATA } from '../data/mallData';
import { Store } from '../types';

interface ShopsSectionProps {
  onLocateStore?: (store: Store) => void;
}

export const ShopsSection: React.FC<ShopsSectionProps> = ({ onLocateStore }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [showAllLimit, setShowAllLimit] = useState(8);

  const categories = [
    'All',
    'Fashion',
    'Electronics',
    'Beauty',
    'Lifestyle',
    'Sports',
    'Luxury',
  ];

  const filteredStores = useMemo(() => {
    return STORES_DATA.filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        store.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || store.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const visibleStores = filteredStores.slice(0, showAllLimit);

  return (
    <section id="shops" className="relative py-24 sm:py-32 bg-[#040816] border-y border-white/5">
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-sky-400">
                RETAIL DIRECTORY
              </span>
            </div>
            <h2
              id="shops-section-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
            >
              DISCOVER THE STORES
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 font-light max-w-xl">
              From world-renowned luxury flagships to avant-garde streetwear and cutting-edge tech.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="store-search-input"
              type="text"
              placeholder="Search stores, brands, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-900/80 border border-white/10 focus:border-sky-400 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`store-category-tab-${cat.toLowerCase()}`}
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

        {/* Store Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleStores.map((store) => (
            <div
              key={store.id}
              id={`store-card-${store.id}`}
              className="group rounded-2xl bg-[#081026]/80 backdrop-blur-md border border-white/10 hover:border-sky-400/40 p-3 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Store Image */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081026] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/15 text-[10px] uppercase font-semibold text-sky-300 tracking-wider">
                  {store.category}
                </div>

                {/* Floor Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-sky-950/70 backdrop-blur-md border border-sky-400/30 text-[10px] uppercase font-semibold text-white tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  {store.floor}
                </div>
              </div>

              {/* Store Details */}
              <div className="mt-4 px-2 flex flex-col flex-grow">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                  {store.name}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-light">
                  {store.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {store.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* "Explore Store →" CTA */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedStore(store)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-sky-400 group-hover:text-sky-300 cursor-pointer"
                  >
                    <span>Explore Store</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-slate-400">
                    {store.hours.split(' - ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Stores CTA */}
        {showAllLimit < filteredStores.length && (
          <div className="mt-12 text-center">
            <button
              id="view-all-stores-cta"
              onClick={() => setShowAllLimit((prev) => prev + 8)}
              className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-sky-400/60 text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-white hover:text-sky-200 shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 cursor-pointer"
            >
              View All Stores ({filteredStores.length} Total)
            </button>
          </div>
        )}
      </div>

      {/* Store Detail Modal */}
      {selectedStore && (
        <div
          id="store-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedStore(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-[#081026] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStore(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close store details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                {selectedStore.category}
              </span>
              <span className="text-xs text-slate-400">{selectedStore.floor}</span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-white mt-3">
              {selectedStore.name}
            </h3>

            <div className="mt-4 rounded-xl overflow-hidden h-48 w-full">
              <img
                src={selectedStore.image}
                alt={selectedStore.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed font-light">
              {selectedStore.description}
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{selectedStore.zone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>{selectedStore.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>{selectedStore.phone}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => {
                  onLocateStore?.(selectedStore);
                  setSelectedStore(null);
                  const el = document.getElementById('visit');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              >
                Locate On Map →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
