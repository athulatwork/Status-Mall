import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { MALL_INFO } from '../data/mallData';

export const SocialBar: React.FC = () => {
  const quickActions = [
    {
      name: 'Call Primary Line 1',
      href: `tel:${MALL_INFO.contacts[0].replace(/[^+\d]/g, '')}`,
      icon: <Phone className="w-4 h-4 text-[#e2c17d]" />,
      tooltip: MALL_INFO.contacts[0],
      external: false,
    },
    {
      name: 'Call Primary Line 2',
      href: `tel:${MALL_INFO.contacts[1].replace(/[^+\d]/g, '')}`,
      icon: <Phone className="w-4 h-4 text-[#e2c17d]" />,
      tooltip: MALL_INFO.contacts[1],
      external: false,
    },
    {
      name: 'Open in Google Maps',
      href: MALL_INFO.location.googleMapsUrl,
      icon: <MapPin className="w-4 h-4 text-sky-400" />,
      tooltip: 'Google Maps Directions',
      external: true,
    },
    {
      name: 'Operating Hours',
      href: '#visit',
      icon: <Clock className="w-4 h-4 text-emerald-400" />,
      tooltip: MALL_INFO.operatingHours.badge,
      external: false,
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean) => {
    if (!external && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside
      id="hero-floating-contact-bar"
      aria-label="Official Status Mall Contacts & Directions"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3 p-2 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-xl"
    >
      <div className="w-0.5 h-6 bg-gradient-to-b from-transparent to-[#e2c17d]/40 rounded-full" />
      {quickActions.map((item, idx) => (
        <a
          key={idx}
          id={`quick-contact-btn-${idx + 1}`}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          onClick={(e) => handleClick(e, item.href, item.external)}
          title={`${item.name}: ${item.tooltip}`}
          aria-label={`${item.name}: ${item.tooltip}`}
          className="group relative w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#e2c17d]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[0_0_12px_rgba(226,193,125,0.3)] cursor-pointer"
        >
          {item.icon}
        </a>
      ))}
      <div className="w-0.5 h-6 bg-gradient-to-t from-transparent to-[#e2c17d]/40 rounded-full" />
    </aside>
  );
};
