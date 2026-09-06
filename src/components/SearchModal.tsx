import React, { useState, useMemo } from 'react';
import { Search, X, MapPin, ArrowRight, Utensils, Tag, Calendar, ShoppingBag } from 'lucide-react';
import { STORES_DATA, RESTAURANTS_DATA, OFFERS_DATA, EVENTS_DATA } from '../data/mallData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: 'store' | 'dining' | 'offer' | 'event', id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = useMemo(() => {
    if (!query.trim()) return { stores: [], dining: [], offers: [], events: [] };
    const q = query.toLowerCase();

    const stores = STORES_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 4);

    const dining = RESTAURANTS_DATA.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    ).slice(0, 3);

    const offers = OFFERS_DATA.filter(
      (o) =>
        o.title.toLowerCase().includes(q) ||
        o.store.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q)
    ).slice(0, 2);

    const events = EVENTS_DATA.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q)
    ).slice(0, 2);

    return { stores, dining, offers, events };
  }, [query]);

  const hasAnyResults =
    results.stores.length > 0 ||
    results.dining.length > 0 ||
    results.offers.length > 0 ||
    results.events.length > 0;

  return (
    <div
      id="global-search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#081026] border border-white/15 p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-white/10 pb-4">
          <Search className="w-5 h-5 text-sky-400 mr-3" />
          <input
            autoFocus
            type="text"
            placeholder="Search stores, brands, dining, events, offers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white text-base sm:text-lg placeholder-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-white mr-3 px-2 py-1 bg-white/5 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-5 pr-1">
          {!query.trim() && (
            <div className="py-8 text-center text-slate-400">
              <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold block mb-2">
                Popular Searches
              </span>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['ZARA', 'Apple', 'Rolex', 'Fine Dining', 'IMAX Cinema', 'Weekend Sale', 'Jazz Symphony'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-sky-500/20 text-xs text-slate-300 hover:text-sky-200 border border-white/10 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {query.trim() && !hasAnyResults && (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">No results found for "{query}".</p>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Try searching for 'Zara', 'Gucci', 'Steak', 'Sale', or ask Status AI Concierge.
              </p>
            </div>
          )}

          {/* Stores */}
          {results.stores.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-sky-400 font-semibold mb-2">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Stores & Boutiques</span>
              </div>
              <div className="space-y-1.5">
                {results.stores.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      onSelectResult('store', s.id);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-sky-500/10 border border-white/5 hover:border-sky-400/30 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white block">{s.name}</span>
                      <span className="text-xs text-slate-400">{s.category} • {s.floor}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dining */}
          {results.dining.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                <Utensils className="w-3.5 h-3.5" />
                <span>Dining & Cafés</span>
              </div>
              <div className="space-y-1.5">
                {results.dining.map((d) => (
                  <div
                    key={d.id}
                    onClick={() => {
                      onSelectResult('dining', d.id);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-amber-500/10 border border-white/5 hover:border-amber-400/30 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white block">{d.name}</span>
                      <span className="text-xs text-slate-400">{d.cuisine} • {d.floor}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Offers */}
          {results.offers.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2">
                <Tag className="w-3.5 h-3.5" />
                <span>Exclusive Offers</span>
              </div>
              <div className="space-y-1.5">
                {results.offers.map((o) => (
                  <div
                    key={o.id}
                    onClick={() => {
                      onSelectResult('offer', o.id);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-purple-500/10 border border-white/5 hover:border-purple-400/30 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white block">{o.title}</span>
                      <span className="text-xs text-purple-300 font-medium">{o.discount} • {o.store}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events */}
          {results.events.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Happening Now</span>
              </div>
              <div className="space-y-1.5">
                {results.events.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => {
                      onSelectResult('event', e.id);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-400/30 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white block">{e.title}</span>
                      <span className="text-xs text-slate-400">{e.date} • {e.location}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
