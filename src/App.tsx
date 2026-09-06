/**
 * STATUS MALL — Luxury Shopping & Lifestyle Destination
 * @license Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SideNav } from './components/SideNav';
import { SocialBar } from './components/SocialBar';
import { BrandShowcase } from './components/BrandShowcase';
import { MoreThanShopping } from './components/MoreThanShopping';
import { ShopsSection } from './components/ShopsSection';
import { DiningSection } from './components/DiningSection';
import { OffersSection } from './components/OffersSection';
import { EventsSection } from './components/EventsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { VisitSection } from './components/VisitSection';
import { StatusAIAssistant } from './components/StatusAIAssistant';
import { VirtualTourModal } from './components/VirtualTourModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { Store } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightedStoreName, setHighlightedStoreName] = useState<string | undefined>(undefined);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K) for global search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Active section observer based on scroll position
  useEffect(() => {
    const sectionIds = ['home', 'shops', 'dining', 'offers', 'events', 'visit'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandSelect = (brandName: string) => {
    setHighlightedStoreName(brandName);
    scrollToSection('shops');
  };

  const handleLocateStore = (store: Store) => {
    setHighlightedStoreName(store.name);
    scrollToSection('visit');
  };

  const handleSearchResultSelect = (
    type: 'store' | 'dining' | 'offer' | 'event',
    id: string
  ) => {
    if (type === 'store') {
      scrollToSection('shops');
    } else if (type === 'dining') {
      scrollToSection('dining');
    } else if (type === 'offer') {
      scrollToSection('offers');
    } else if (type === 'event') {
      scrollToSection('events');
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-sky-500/30 selection:text-white relative">
      {/* 1. FLOATING NAVIGATION BAR */}
      <Navbar
        activeSection={activeSection}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 3. HERO SIDE NAVIGATION (DESKTOP) */}
      <SideNav activeSection={activeSection} />

      {/* 4. SOCIAL FLOATING BAR (DESKTOP) */}
      <SocialBar />

      <main>
        {/* 2. HERO SECTION WITH CINEMATIC BACKGROUND VIDEO */}
        <Hero
          onExploreClick={() => scrollToSection('shops')}
          onWatchTourClick={() => setIsVirtualTourOpen(true)}
        />

        {/* 5. BRAND SHOWCASE */}
        <BrandShowcase onSelectBrand={handleBrandSelect} />

        {/* 6. MORE THAN JUST SHOPPING */}
        <MoreThanShopping onNavigateSection={scrollToSection} />

        {/* 7. DISCOVER THE STORES (SHOPS SECTION) */}
        <ShopsSection onLocateStore={handleLocateStore} />

        {/* 8. TASTE THE EXPERIENCE (DINING SECTION) */}
        <DiningSection />

        {/* 9. EXCLUSIVE OFFERS */}
        <OffersSection />

        {/* 10. WHAT'S HAPPENING (EVENTS SECTION) */}
        <EventsSection />

        {/* 11. CINEMATIC EXPERIENCE SECTION */}
        <ExperienceSection onOpenVirtualTour={() => setIsVirtualTourOpen(true)} />

        {/* 12. PLAN YOUR VISIT */}
        <VisitSection highlightedStoreName={highlightedStoreName} />
      </main>

      {/* 13. STATUS AI ASSISTANT (FLOATING BOTTOM RIGHT) */}
      <StatusAIAssistant />

      {/* 14. FOOTER */}
      <Footer />

      {/* MODALS */}
      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchResultSelect}
      />
    </div>
  );
}
