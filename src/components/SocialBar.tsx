import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export const SocialBar: React.FC = () => {
  const socials = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <Instagram className="w-4 h-4 text-slate-200 group-hover:text-white transition-colors" />
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <Facebook className="w-4 h-4 text-slate-200 group-hover:text-white transition-colors" />
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <Youtube className="w-4 h-4 text-slate-200 group-hover:text-white transition-colors" />
      ),
    },
    {
      name: 'X',
      href: 'https://x.com',
      icon: (
        <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
          𝕏
        </span>
      ),
    },
  ];

  return (
    <div
      id="hero-floating-social-bar"
      aria-label="Follow Status Mall"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3 p-2 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10"
    >
      <div className="w-0.5 h-6 bg-gradient-to-b from-transparent to-white/30 rounded-full" />
      {socials.map((s) => (
        <a
          key={s.name}
          id={`social-link-${s.name.toLowerCase()}`}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Follow Status Mall on ${s.name}`}
          aria-label={`Status Mall on ${s.name}`}
          className="group w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-sky-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-[0_0_12px_rgba(56,189,248,0.3)]"
        >
          {s.icon}
        </a>
      ))}
      <div className="w-0.5 h-6 bg-gradient-to-t from-transparent to-white/30 rounded-full" />
    </div>
  );
};
