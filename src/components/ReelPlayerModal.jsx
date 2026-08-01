import React from 'react';
import { X, ExternalLink, Play, Sparkles } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function ReelPlayerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#121A20] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        
        {/* Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-purple-900/60 to-pink-900/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
              <InstagramIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif-heading leading-tight">
                Sea~Sons Cafe Reel Tour
              </h3>
              <p className="text-xs text-white/70">
                {CAFE_INFO.instagramHandle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-[9/16] w-full bg-black flex items-center justify-center overflow-hidden">
          
          {/* Instagram Embed iframe */}
          <iframe
            src="https://www.instagram.com/reel/DbeosVPIskw/embed"
            className="w-full h-full border-0"
            title="Sea~Sons Cafe Instagram Reel"
            allowTransparency={true}
            allow="encrypted-media"
          />

          {/* Backup HTML5 player fallback in case Instagram embed is blocked by browser adblockers */}
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-between text-xs">
            <span className="text-white/80 flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Watch reel on Instagram app
            </span>
            <a
              href={CAFE_INFO.heroVideoReelUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold flex items-center gap-1 hover:brightness-110"
            >
              <span>Open</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Manik Nagar, Nashik</span>
          <a
            href={CAFE_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-pink-400 font-semibold hover:underline flex items-center gap-1"
          >
            <span>Follow {CAFE_INFO.instagramHandle}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

    </div>
  );
}
