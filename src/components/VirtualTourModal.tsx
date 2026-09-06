import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Compass } from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isOpen) return null;

  const chapters = [
    { title: 'The Grand Rotunda', time: '0:00', seconds: 0, desc: '40-meter kinetic illuminated glass atrium' },
    { title: 'Luxury Boulevard', time: '0:30', seconds: 30, desc: 'Gucci, Rolex, Apple Flagship Pavilion' },
    { title: 'Culinary Sky Terraces', time: '1:00', seconds: 60, desc: 'Lumina Sky Lounge & Botanical Gardens' },
    { title: 'CineStatus 8-Screen Multiplex', time: '1:30', seconds: 90, desc: 'IMAX Laser Projection & VIP Lounges' },
  ];

  const handleSelectChapter = (index: number, seconds: number) => {
    setActiveChapter(index);
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      if (!isPlaying) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      id="virtual-tour-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-[#050b1d] border border-sky-400/30 overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.25)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-white tracking-wider flex items-center gap-2">
                STATUS MALL — VIRTUAL TOUR
                <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-[10px] text-sky-300 font-sans font-semibold">
                  4K CINEMATIC
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 font-light">
                Explore the futuristic luxury retail architecture
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
          >
            <source src="/assets/status_mall_hero.mp4" type="video/mp4" />
            <source
              src="https://cdn-cf-east.streamable.com/video/mp4/0955w6.mp4"
              type="video/mp4"
            />
          </video>

          {/* Controls Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-slate-950" />
                ) : (
                  <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-xs text-slate-300 font-medium hidden sm:inline-block">
                Status Mall Architectural Experience
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-sky-400 font-medium px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
                Continuous Stream
              </span>
            </div>
          </div>
        </div>

        {/* Tour Chapters Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {chapters.map((ch, idx) => (
            <button
              key={ch.title}
              onClick={() => handleSelectChapter(idx, ch.seconds)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeChapter === idx
                  ? 'bg-sky-500/15 border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] uppercase font-bold text-sky-400">
                <span>0{idx + 1}</span>
                <span>{ch.time}</span>
              </div>
              <div className="text-xs font-serif font-bold text-white mt-1">
                {ch.title}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                {ch.desc}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
