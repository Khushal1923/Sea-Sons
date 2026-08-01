import React, { useState, useEffect } from 'react';
import { Coffee, Calendar, Phone, Menu as MenuIcon, X, ShoppingBag, MapPin } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ onOpenReservation, trayCount, onOpenTray }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Ambiance', href: '#ambiance' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reel Tour', href: '#reel' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-hidden transition-all duration-300 ${
      scrolled ? 'glass-nav py-2 shadow-md' : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-3 text-white'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          
          {/* Brand Logo - Aligned cleanly on mobile & desktop */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0 ${
              scrolled ? 'bg-[#2B6B67] text-white shadow-md' : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
            }`}>
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`text-base sm:text-2xl font-bold tracking-tight font-serif-heading block leading-none ${
                scrolled ? 'text-[#1E293B]' : 'text-white'
              }`}>
                Sea~Sons
              </span>
              <span className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold block mt-0.5 ${
                scrolled ? 'text-[#2B6B67]' : 'text-amber-300'
              }`}>
                Cafe N Restro
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#2B6B67] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2B6B67] after:transition-all hover:after:w-full ${
                  scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {trayCount > 0 && (
              <button
                onClick={onOpenTray}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#84A98C] text-white hover:bg-[#6b9274] transition-all shadow-sm active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Tray ({trayCount})</span>
              </button>
            )}

            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2B6B67] text-white hover:bg-[#1F4D4A] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </button>

            <a
              href={`tel:${CAFE_INFO.phone}`}
              className={`p-2.5 rounded-full transition-colors ${
                scrolled ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
              }`}
              title="Call Cafe"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Action Controls - Aligned & Padded */}
          <div className="flex items-center gap-1.5 lg:hidden shrink-0">
            {trayCount > 0 && (
              <button
                onClick={onOpenTray}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-bold bg-[#84A98C] text-white shadow"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>({trayCount})</span>
              </button>
            )}

            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#2B6B67] text-white shadow active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-xl transition-colors ${
                scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-slate-200/50 px-4 pt-3 pb-5 mt-2 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-[#2B6B67]/10 hover:text-[#2B6B67] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-[#2B6B67] text-white shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              <MapPin className="w-3.5 h-3.5 text-[#2B6B67]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
