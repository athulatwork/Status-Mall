import React from 'react';
import { ShoppingBag, UtensilsCrossed, Sparkles } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenVirtualTour: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenVirtualTour,
}) => {
  const pillars = [
    {
      id: 'shop',
      title: 'SHOP',
      description: 'Discover global brands',
      detail:
        'A meticulously curated tapestry of world-famous fashion houses, bespoke jewelers, and tech pioneers across four illuminated levels.',
      icon: <ShoppingBag className="w-5 h-5 text-sky-300" />,
      tag: '120+ Boutiques',
    },
    {
      id: 'dine',
      title: 'DINE',
      description: 'Taste something unforgettable',
      detail:
        'From high-altitude rooftop grills with city skylines to secret Japanese omakase counters and botanical greenhouse tea salons.',
      icon: <UtensilsCrossed className="w-5 h-5 text-amber-300" />,
      tag: '25+ Fine Outlets',
    },
    {
      id: 'experience',
      title: 'EXPERIENCE',
      description: 'Create memorable moments',
      detail:
        'State-of-the-art IMAX laser projection, responsive kinetic art installations, VIP styling lounges, and sunset terraces.',
      icon: <Sparkles className="w-5 h-5 text-purple-300" />,
      tag: 'Limitless Wonder',
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-28 sm:py-36 bg-[#02050f] overflow-hidden border-t border-white/5"
    >
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2000&auto=format&fit=crop"
          alt="Status Mall Architectural Atrium"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050f] via-[#02050f]/80 to-[#02050f]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#02050f]/60 to-[#02050f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-sky-400">
            THE ARCHITECTURE OF LUXURY
          </span>
          <h2
            id="experience-section-title"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mt-3"
          >
            EXPERIENCE STATUS
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent mx-auto mt-6" />
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Where futuristic architectural grandeur harmonizes with tailored hospitality.
            Every corridor is designed as an immersive journey of light, form, and indulgence.
          </p>
        </div>

        {/* Three Floating Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.id}
              id={`experience-pillar-${p.id}`}
              className="group relative rounded-3xl bg-[#09132c]/65 backdrop-blur-2xl border border-white/15 hover:border-sky-400/50 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(56,189,248,0.2)]"
            >
              {/* Top Accent Icon & Tag */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-sky-400/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    {p.icon}
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-bold tracking-wider text-white group-hover:text-sky-200 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm font-medium text-sky-300 mt-1">
                  {p.description}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {p.detail}
                </p>
              </div>

              {/* Card Footer Micro-Action */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase tracking-widest text-[10px] font-semibold text-sky-400">
                  Curated Concept
                </span>
                <span className="text-white/60 group-hover:text-white transition-colors">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour Banner Callout */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-sky-950/60 via-slate-900/60 to-blue-950/60 border border-sky-400/20 backdrop-blur-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl font-bold text-white">
              Immerse Yourself in the 360° Experience
            </h4>
            <p className="text-sm text-slate-300 font-light mt-1">
              Glide through our illuminated atriums, kinetic kinetic light installations, and sky gardens.
            </p>
          </div>
          <button
            onClick={onOpenVirtualTour}
            className="flex-shrink-0 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
          >
            Launch Interactive Tour
          </button>
        </div>
      </div>
    </section>
  );
};
