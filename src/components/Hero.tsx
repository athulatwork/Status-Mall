import React, { useRef, useState } from 'react';
import { Play, ArrowRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { MALL_INFO } from '../data/mallData';

interface HeroProps {
  onExploreClick: () => void;
  onWatchTourClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onWatchTourClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen h-[100dvh] flex items-center justify-between overflow-hidden"
    >
      {/* 1. CINEMATIC HERO BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#030712]">
        <video
          ref={videoRef}
          id="hero-background-video"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/status_mall_hero.mp4" type="video/mp4" />
          <source
            src="https://cdn-cf-east.streamable.com/video/mp4/0955w6.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        {/* 
          SUBTLE DARK BLUE GRADIENT OVERLAY ONLY WHERE NECESSARY:
          Keeps the video luminous, clear, and visible while ensuring editorial typography is 100% readable.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/85 via-[#030712]/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50 pointer-events-none" />
        
        {/* Subtle top right ambient luxury glow */}
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT SIDE: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col text-left pl-6 sm:pl-10 md:pl-12 lg:pl-10">
            {/* Small uppercase text: WELCOME TO */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 backdrop-blur-md w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-sky-300">
                WELCOME TO
              </span>
            </div>

            {/* Large editorial heading: STATUS MALL */}
            <h1
              id="hero-main-title"
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            >
              STATUS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-sky-100 to-sky-300 font-extrabold">
                MALL
              </span>
            </h1>

            {/* Under it: SHOP • DINE • EXPLORE • EXPERIENCE */}
            <div className="mt-4 sm:mt-5 text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.35em] text-sky-300/90 uppercase">
              SHOP • DINE • EXPLORE • EXPERIENCE
            </div>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed drop-shadow-md">
              Where shopping meets lifestyle. Discover top brands, exceptional dining and
              unforgettable experiences — all under one roof.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary CTA: Explore Mall → */}
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>Explore Mall</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: Watch Tour */}
              <button
                id="hero-watch-tour-btn"
                onClick={onWatchTourClick}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-slate-900/60 hover:bg-slate-800/80 border border-white/20 hover:border-sky-400/50 text-white hover:text-sky-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-sky-300 text-sky-300 ml-0.5" />
                </div>
                <span>Watch Tour</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Floating translucent information card */}
          <div className="lg:col-span-5 xl:col-span-4 hidden sm:flex justify-end pr-4 sm:pr-8 md:pr-12 lg:pr-6">
            <div
              id="hero-info-card"
              className="w-full max-w-xs rounded-2xl bg-[#0a1124]/65 backdrop-blur-xl border border-white/15 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Subtle blue accent corner light */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header: Weather & Date */}
              <div className="border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-sky-400">
                    TODAY
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                    <span className="text-amber-300 text-xs font-semibold">☀ {MALL_INFO.temperature}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-200 mt-2 font-medium">
                  {MALL_INFO.weatherCondition} • Perfect day for shopping!
                </p>
              </div>

              {/* Mall Vital Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-serif text-2xl font-bold text-white tracking-tight">
                    {MALL_INFO.stats.storesCount}
                  </div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Stores
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-serif text-2xl font-bold text-white tracking-tight">
                    {MALL_INFO.stats.foodOutletsCount}
                  </div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Food Outlets
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-serif text-2xl font-bold text-white tracking-tight">
                    {MALL_INFO.stats.multiplexScreens}
                  </div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Screen Multiplex
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-serif text-2xl font-bold text-sky-300 tracking-tight">
                    1
                  </div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Great Experience
                  </div>
                </div>
              </div>

              {/* Footer status row */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open Now until 11 PM
                </span>
                <span className="text-sky-400 hover:text-sky-300 cursor-pointer font-medium" onClick={onExploreClick}>
                  Floor Map →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Audio Control at bottom-right corner of hero */}
      <button
        id="hero-mute-toggle"
        onClick={toggleSound}
        className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-800/90 border border-white/15 hover:border-sky-400/50 flex items-center justify-center text-white backdrop-blur-md shadow-lg transition-all duration-300"
        title={isMuted ? 'Unmute Video Audio' : 'Mute Video Audio'}
        aria-label="Toggle Sound"
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
      </button>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-white/30 flex justify-center pt-1">
          <div className="w-1 h-1.5 bg-sky-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
