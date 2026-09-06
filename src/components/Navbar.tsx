import React, { useState, useEffect } from 'react';
import { Search, MapPin, Play, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenVirtualTour: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenVirtualTour,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Shops', href: '#shops', id: 'shops' },
    { label: 'Dining', href: '#dining', id: 'dining' },
    { label: 'Offers', href: '#offers', id: 'offers' },
    { label: 'Events', href: '#events', id: 'events' },
    { label: 'Visit', href: '#visit', id: 'visit' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Elegant "S" monogram + STATUS MALL */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-sky-400/40 bg-sky-950/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:border-sky-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] transition-all duration-300">
              <span className="font-serif font-bold text-lg text-sky-200 tracking-wider group-hover:scale-105 transition-transform">
                S
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.22em] text-lg font-bold text-white uppercase group-hover:text-sky-200 transition-colors">
                STATUS MALL
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-medium -mt-0.5">
                Luxury Lifestyle
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-white bg-sky-500/20 border border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Search icon, Location icon, Virtual Tour button, Circular play icon */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search Icon */}
            <button
              id="nav-search-button"
              onClick={onOpenSearch}
              title="Search Stores, Dining & Events"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/40 flex items-center justify-center text-slate-300 hover:text-sky-300 transition-all duration-200 backdrop-blur-sm"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Location Icon */}
            <a
              id="nav-location-button"
              href="#visit"
              onClick={(e) => handleScrollTo(e, '#visit')}
              title="Directions & Mall Location"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/40 flex items-center justify-center text-slate-300 hover:text-sky-300 transition-all duration-200 backdrop-blur-sm"
              aria-label="Location"
            >
              <MapPin className="w-4 h-4" />
            </a>

            {/* Virtual Tour Button */}
            <button
              id="nav-virtual-tour-button"
              onClick={onOpenVirtualTour}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-600/20 hover:from-sky-500/30 hover:to-blue-600/30 border border-sky-400/40 hover:border-sky-400 text-xs font-semibold uppercase tracking-[0.14em] text-sky-100 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              <Compass className="w-3.5 h-3.5 text-sky-300" />
              <span>Virtual Tour</span>
            </button>

            {/* Circular Play Icon */}
            <button
              id="nav-play-tour-button"
              onClick={onOpenVirtualTour}
              title="Watch Cinematic Mall Experience"
              className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-slate-950 hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300 cursor-pointer"
              aria-label="Play Video Tour"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Search + Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-search-button"
              onClick={onOpenSearch}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN GLASS NAVIGATION PANEL */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-panel"
          className="fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden animate-in fade-in duration-300"
        >
          <div className="flex flex-col gap-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-sky-400 font-semibold">
                Explore Destination
              </span>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-2xl font-serif tracking-wider transition-colors py-1 flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-sky-300 font-semibold pl-2 border-l-2 border-sky-400'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-sans">
                    0{navLinks.indexOf(link) + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              id="mobile-virtual-tour-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVirtualTour();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-slate-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              Watch Cinematic Virtual Tour
            </button>
            <div className="flex items-center justify-between text-xs text-slate-400 font-light">
              <span>Today: 10:00 AM – 11:00 PM</span>
              <span className="text-sky-400">☀ 28°C Metro Central</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
