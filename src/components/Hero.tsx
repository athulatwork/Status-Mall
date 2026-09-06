import React, { useRef, useState, useEffect } from 'react';
import { Play, ArrowRight, Volume2, VolumeX, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
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

  // Guarantee video playback starts reliably across all browsers & devices
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback until user interaction; muted video generally succeeds
      });
    }
  }, []);

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
          className="w-full h-full object-cover object-center scale-[1.01] transform transition-transform duration-1000"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/assets/status_mall_hero.mp4" type="video/mp4" />
          <source
            src="https://cdn-cf-east.streamable.com/video/mp4/0955w6.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        {/* 
          SUBTLE DARK BLUE & GRADIENT OVERLAY:
          Guarantees editorial typography readability while leaving the cinematic mall interior visible & luminous.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60 pointer-events-none" />
        
        {/* Soft atmospheric blue & champagne glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 rounded-full bg-[#e2c17d]/5 blur-[100px] pointer-events-none" />
      </div>

      {/* 2. CHOREOGRAPHED HERO CONTENT TIMELINE */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Choreographed Hero Typography & CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col text-left">
            
            {/* 0.3s: "WELCOME TO" fades upward */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md w-fit mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] uppercase tracking-[0.32em] font-semibold text-sky-300">
                WELCOME TO
              </span>
            </motion.div>

            {/* 0.6s & 0.9s: Monumental Editorial Heading */}
            <div className="overflow-hidden">
              {/* 0.6s: STATUS */}
              <motion.h1
                id="hero-main-title"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold tracking-tight text-white leading-[0.9] drop-shadow-[0_8px_35px_rgba(0,0,0,0.85)]"
              >
                STATUS
              </motion.h1>

              {/* 0.9s: MALL with letter spacing elegance */}
              <motion.div
                initial={{ opacity: 0, y: 25, letterSpacing: '0.05em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.02em' }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-extrabold leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-sky-100 to-sky-300 drop-shadow-[0_8px_35px_rgba(0,0,0,0.85)]"
              >
                MALL
              </motion.div>
            </div>

            {/* 1.2s: Tagline appears: SHOP • DINE • EXPLORE • EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.38em] text-sky-300/90 uppercase flex items-center gap-2"
            >
              <span>SHOP</span>
              <span className="text-white/30">•</span>
              <span>DINE</span>
              <span className="text-white/30">•</span>
              <span>EXPLORE</span>
              <span className="text-white/30">•</span>
              <span>EXPERIENCE</span>
            </motion.div>

            {/* 1.5s: Editorial description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed drop-shadow-md"
            >
              Where shopping meets lifestyle. Discover top international brands, exceptional dining,
              and cinematic experiences — curated under one architectural glass dome.
            </motion.p>

            {/* 1.8s: CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary: EXPLORE THE MALL */}
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-[0_0_30px_rgba(56,189,248,0.45)] hover:shadow-[0_0_40px_rgba(56,189,248,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>EXPLORE THE MALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Secondary: WATCH VIRTUAL TOUR */}
              <button
                id="hero-watch-tour-btn"
                onClick={onWatchTourClick}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-slate-950/60 hover:bg-slate-900/80 border border-white/20 hover:border-sky-400/50 text-white hover:text-sky-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center group-hover:bg-sky-400/30 transition-colors">
                  <Play className="w-3 h-3 fill-sky-300 text-sky-300 ml-0.5" />
                </div>
                <span>WATCH VIRTUAL TOUR</span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 2.1s Floating Glass Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 hidden sm:flex justify-end"
          >
            <div
              id="hero-info-card"
              className="w-full max-w-xs rounded-3xl bg-[#060c1d]/75 backdrop-blur-2xl border border-white/15 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.75)] relative overflow-hidden"
            >
              {/* Ambient radial accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Header: Location & Operating Status */}
              <div className="border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#e2c17d]">
                    DESTINATION
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e2c17d]/10 border border-[#e2c17d]/30">
                    <span className="text-[#e2c17d] text-[11px] font-semibold tracking-wider">
                      {MALL_INFO.shortLocation}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  {MALL_INFO.address.line1} • {MALL_INFO.address.line2}
                </p>
              </div>

              {/* 4 Core Vital Mall Metrics */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="font-serif text-2xl font-bold text-white tracking-tight">
                    10
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Tenants
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="font-serif text-2xl font-bold text-white tracking-tight">
                    Food Court
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Bell Pepper
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="font-serif text-2xl font-bold text-white tracking-tight">
                    Playzone
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Kids Amusement
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="font-serif text-2xl font-bold text-[#e2c17d] tracking-tight">
                    On-Site
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Shopper Parking
                  </div>
                </div>
              </div>

              {/* Footer status row */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-200">{MALL_INFO.operatingHours.display}</span>
                </span>
                <button
                  onClick={onExploreClick}
                  className="text-[#e2c17d] hover:text-white font-semibold cursor-pointer transition-colors"
                >
                  Directory →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Audio Control at bottom-right corner of hero */}
      <button
        id="hero-mute-toggle"
        onClick={toggleSound}
        className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-slate-900/90 border border-white/15 hover:border-sky-400/50 flex items-center justify-center text-white backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer"
        title={isMuted ? 'Unmute Video Audio' : 'Mute Video Audio'}
        aria-label="Toggle Sound"
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
      </button>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.35em] text-slate-400 font-medium">SCROLL</span>
        <div className="w-4 h-7 rounded-full border border-white/25 flex justify-center pt-1">
          <div className="w-1 h-1.5 bg-sky-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
