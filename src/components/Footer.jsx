import React from 'react';
import { Coffee, MapPin, Phone, Heart, Sparkles, ArrowUp } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function Footer({ onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121A20] text-white pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2B6B67]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Banner Quote */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#2B6B67]/80 to-[#1F4D4A]/80 border border-white/15 backdrop-blur-md mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
              Architecture & Vibe
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading">
              "{CAFE_INFO.quotes[0].text}"
            </h3>
            <p className="text-xs text-white/70 mt-1 font-subheading">
              Visit our illuminated arch corridor in Manik Nagar, Nashik
            </p>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-6 py-3.5 rounded-full bg-white text-[#2B6B67] hover:bg-amber-100 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 shrink-0"
          >
            Reserve a Table
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2B6B67] text-white flex items-center justify-center shadow-md">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-serif-heading">
                Sea~Sons Cafe N Restro
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-subheading max-w-md">
              Nashik's premier archway cafe and rooftop botanical lounge. Serving 100% pure vegetarian artisanal brews, gourmet burgers, handcrafted pizzas, and sweet treats.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-pink-600 transition-colors text-white"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#2B6B67] transition-colors text-white"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="p-3 rounded-full bg-white/10 hover:bg-emerald-600 transition-colors text-white"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#ambiance" className="hover:text-white transition-colors">Arch Ambiance</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Gourmet Menu</a></li>
              <li><a href="#reel" className="hover:text-white transition-colors">Instagram Reel Tour</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Real Photos</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Google Reviews</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Cafe Info
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>📍 Manik Nagar, Nashik, Maharashtra 422005</p>
              <p>⏰ 11:00 AM – 11:00 PM (Daily)</p>
              <p>📞 {CAFE_INFO.phone}</p>
              <p>🌱 100% Pure Vegetarian</p>
              <p>📸 {CAFE_INFO.instagramHandle}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Sea~Sons Cafe & Restro, Nashik. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Nashik
            </span>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
