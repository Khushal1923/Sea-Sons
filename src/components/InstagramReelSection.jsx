import React from 'react';
import { Play, ExternalLink, Sparkles, Film, Heart } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function InstagramReelSection({ onOpenReelModal }) {
  return (
    <section id="reel" className="py-20 bg-[#121A20] text-white relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#2B6B67]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-widest">
              <InstagramIcon className="w-4 h-4" />
              <span>Official Video Reel Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif-heading tracking-tight leading-tight">
              Experience the Magic of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-teal-200">Sea~Sons Cafe</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-subheading leading-relaxed max-w-2xl">
              Watch our featured viral Reel highlighting the cafe's glowing archways, rooftop greenery, handcrafted hazelnut cold coffee, and pure vegetarian feast.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-2xl font-bold text-amber-300 font-serif-heading block">50K+</span>
                <span className="text-xs text-slate-400">Reel Views</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-2xl font-bold text-pink-400 font-serif-heading block">4.8★</span>
                <span className="text-xs text-slate-400">Google Rating</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1">
                <span className="text-2xl font-bold text-emerald-400 font-serif-heading block">100%</span>
                <span className="text-xs text-slate-400">Pure Veg Vibe</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenReelModal}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Play Reel Video</span>
              </button>

              <a
                href={CAFE_INFO.heroVideoReelUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Watch on Instagram</span>
              </a>
            </div>

          </div>

          {/* Right Column: Reel Preview Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={onOpenReelModal}
              className="relative w-full max-w-sm aspect-[9/15] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer bg-slate-900"
            >
              {/* Cover Poster */}
              <img
                src="/images/arch-corridor.jpg"
                alt="Sea~Sons Cafe Reel Poster"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />

              {/* Gradient tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              {/* Floating Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-pink-500 transition-all border-2 border-white/40">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
              </div>

              {/* Bottom Reel Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-pink-300 uppercase tracking-widest">
                  <Film className="w-4 h-4" />
                  <span>Instagram Reel • @sea_sons_cafe_n_restro</span>
                </div>
                <h4 className="text-lg font-bold font-serif-heading leading-tight">
                  "Be with someone who knows your coffee order..."
                </h4>
                <p className="text-xs text-slate-300">
                  Tap anywhere to launch full reel player
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
