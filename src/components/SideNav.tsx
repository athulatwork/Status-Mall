import React from 'react';

interface SideNavProps {
  activeSection: string;
}

export const SideNav: React.FC<SideNavProps> = ({ activeSection }) => {
  const sections = [
    { id: 'home', label: 'Top' },
    { id: 'shops', label: 'Shops' },
    { id: 'dining', label: 'Dining' },
    { id: 'offers', label: 'Offers' },
    { id: 'events', label: 'Events' },
    { id: 'visit', label: 'Visit' },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      id="hero-side-navigation"
      aria-label="Section Navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-end gap-5 py-4 px-3 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10"
    >
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            id={`side-nav-dot-${sec.id}`}
            onClick={() => handleScroll(sec.id)}
            className="group flex items-center gap-3.5 focus:outline-none cursor-pointer"
            aria-label={`Scroll to ${sec.label}`}
          >
            {/* Tooltip on hover / active */}
            <span
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                isActive
                  ? 'text-sky-300 opacity-100 font-semibold translate-x-0'
                  : 'text-slate-400 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
              }`}
            >
              {sec.label}
            </span>

            {/* Indicator Dot with soft glow */}
            <div
              className={`relative flex items-center justify-center transition-all duration-300 ${
                isActive ? 'w-4 h-4' : 'w-2.5 h-2.5'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-sky-400/40 animate-ping" />
              )}
              <div
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-sky-400 shadow-[0_0_12px_#38bdf8]'
                    : 'w-1.5 h-1.5 bg-white/40 group-hover:bg-white group-hover:scale-125'
                }`}
              />
            </div>
          </button>
        );
      })}
    </aside>
  );
};
