import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles, Star, Calendar, Utensils, ArrowRight, Video } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
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

        {/* Gradient Overlay for Readable Text & Aesthetic Warm Tint */}
        <div className="absolute inset-0 hero-overlay z-10 pointer-events-none" />

        {/* Floating Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2B6B67]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#D4A373]/25 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Video Control Bar (Bottom Right floating) */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-30 flex items-center gap-3">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 transition-all hover:scale-105 active:scale-95"
          title={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-300 animate-pulse" />}
        </button>

        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 transition-all hover:scale-105 active:scale-95"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        <button
          onClick={onOpenReelModal}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-amber-600 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/30 shadow-lg hover:brightness-110 transition-all hover:scale-105 active:scale-95"
        >
          <InstagramIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Watch Reel</span>
        </button>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        
        {/* Rating & Pure Veg Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium mb-6 animate-float">
          <span className="flex items-center gap-1 text-amber-300 font-bold">
            <Star className="w-4 h-4 fill-amber-300" />
            4.8 (500+ Reviews)
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="text-emerald-300 font-semibold flex items-center gap-1">
            🌱 100% Pure Veg
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 hidden sm:inline" />
          <span className="text-white/90 hidden sm:inline">Manik Nagar, Nashik</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-serif-heading tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
          Sea~Sons <span className="italic font-light text-amber-200">Cafe & Restro</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-slate-200 font-subheading max-w-3xl mx-auto mb-8 font-normal leading-relaxed drop-shadow">
          Experience Nashik's finest archways, illuminated neon nooks, rooftop botanical canopy, and handcrafted specialty brews.
        </p>

        {/* Key Features Pill Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 text-xs sm:text-sm font-medium text-white/90">
          <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            🏛️ Illuminated Arch Corridors
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            🌿 Rooftop Garden Canopy
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            ☕ Hazelnut Cold Brews
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            🎲 Board Games & Lounge
          </span>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          
          <a
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2B6B67] hover:bg-[#1F4D4A] text-white font-bold text-base transition-all shadow-xl hover:shadow-[#2B6B67]/40 hover:-translate-y-1 active:translate-y-0"
          >
            <Utensils className="w-5 h-5" />
            <span>Explore Menu</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-base border border-white/40 transition-all shadow-lg hover:-translate-y-1 active:translate-y-0"
          >
            <Calendar className="w-5 h-5 text-amber-300" />
            <span>Reserve Table</span>
          </button>

          <button
            onClick={onOpenReelModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 backdrop-blur-md text-white font-semibold text-sm border border-white/30 transition-all shadow-lg hover:-translate-y-1"
          >
            <Video className="w-4 h-4" />
            <span>Watch Cafe Reel Tour</span>
          </button>
        </div>

        {/* Ambient Wall Quote Preview */}
        <div className="mt-14 pt-8 border-t border-white/15 max-w-lg mx-auto">
          <p className="text-sm font-subheading italic text-amber-200/90 tracking-wide">
            "{CAFE_INFO.quotes[0].text}"
          </p>
        </div>

      </div>

    </section>
  );
}
