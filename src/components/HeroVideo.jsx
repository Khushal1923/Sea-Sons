import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Star, Calendar, Utensils, ArrowRight, Video } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function HeroVideo({ onOpenReservation, onOpenReelModal }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

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
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      
      {/* Background HTML5 Video Loop */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#121A20]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/images/arch-corridor.jpg"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        >
          <source src={CAFE_INFO.heroVideoMp4} type="video/mp4" />
          <source src={CAFE_INFO.secondaryVideoMp4} type="video/mp4" />
          Your browser does not support HTML5 video playback.
        </video>

        {/* Enhanced Dark Overlay Mask for Mobile & Desktop Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#121A20]/90 z-10" />

        {/* Subtle Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#2B6B67]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#D4A373]/25 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Video Control Bar (Floating) */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-10 z-30 flex items-center gap-2 sm:gap-3">
        <button
          onClick={toggleMute}
          className="p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-105 active:scale-95"
          title={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse" />}
        </button>

        <button
          onClick={togglePlay}
          className="p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-105 active:scale-95"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />}
        </button>

        <button
          onClick={onOpenReelModal}
          className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-amber-600 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/30 shadow-lg hover:brightness-110 transition-all active:scale-95"
        >
          <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Reel</span>
        </button>
      </div>

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-16">
        
        {/* Rating & Pure Veg Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="flex items-center gap-1 text-amber-300 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-300" />
            4.8★ (500+ Reviews)
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40 hidden sm:inline" />
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            🌱 100% Pure Veg
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40 hidden md:inline" />
          <span className="text-white/80 hidden md:inline">Manik Nagar, Nashik</span>
        </div>

        {/* Main Title Overlay Box with Soft Backdrop */}
        <div className="p-4 sm:p-6 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 max-w-3xl mx-auto mb-6 shadow-2xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-serif-heading tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Sea~Sons <span className="italic font-normal text-amber-300 block sm:inline">Cafe & Restro</span>
          </h1>

          <p className="text-sm sm:text-xl text-slate-200 font-subheading max-w-2xl mx-auto mt-3 font-normal leading-relaxed drop-shadow">
            Experience Nashik's finest archways, illuminated neon nooks, rooftop botanical canopy, and handcrafted brews.
          </p>
        </div>

        {/* Key Features Pill Badges */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-6 sm:mb-8 text-[11px] sm:text-xs font-medium text-white/90">
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
            🏛️ Illuminated Archways
          </span>
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
            🌿 Rooftop Botanical Canopy
          </span>
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
            ☕ Hazelnut Cold Brews
          </span>
          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
            🎲 Board Games
          </span>
        </div>

        {/* Call to Actions - Mobile Optimized Layout */}
        <div className="space-y-2.5 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:gap-4 max-w-md sm:max-w-none mx-auto">
          
          {/* Primary Explore Button */}
          <a
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl sm:rounded-full bg-[#2B6B67] hover:bg-[#1F4D4A] text-white font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-[#2B6B67]/40 active:scale-98"
          >
            <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
          </a>

          {/* Secondary Buttons Row on Mobile */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenReservation}
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl sm:rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/30 transition-all shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Reserve Table</span>
            </button>

            <button
              onClick={onOpenReelModal}
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl sm:rounded-full bg-gradient-to-r from-purple-600/90 to-pink-600/90 hover:from-purple-600 hover:to-pink-600 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/30 transition-all shadow-lg active:scale-95"
            >
              <Video className="w-4 h-4" />
              <span>Reel Tour</span>
            </button>
          </div>

        </div>

        {/* Ambient Wall Quote */}
        <div className="mt-8 pt-4 border-t border-white/10 max-w-md mx-auto hidden sm:block">
          <p className="text-xs font-subheading italic text-amber-200/90 tracking-wide">
            "{CAFE_INFO.quotes[0].text}"
          </p>
        </div>

      </div>

    </section>
  );
}
