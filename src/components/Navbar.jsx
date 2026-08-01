import React, { useState, useEffect } from 'react';
import { Coffee, Calendar, Phone, Menu as MenuIcon, X, ShoppingBag, Sparkles, MapPin } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function Navbar({ onOpenReservation, trayCount, onOpenTray }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
              scrolled ? 'bg-[#2B6B67] text-white shadow-md' : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
            }`}>
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <span className={`text-xl sm:text-2xl font-bold tracking-tight font-serif-heading block leading-none ${
                scrolled ? 'text-[#1E293B]' : 'text-white'
              }`}>
                Sea~Sons
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold block mt-1 ${
                scrolled ? 'text-[#2B6B67]' : 'text-amber-300'
              }`}>
                Cafe N Restro • Nashik
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

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Tray / Order Button */}
            {trayCount > 0 && (
              <button
                onClick={onOpenTray}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#84A98C] text-white hover:bg-[#6b9274] transition-all shadow-sm active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Tray ({trayCount})</span>
              </button>
            )}

            {/* Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2B6B67] text-white hover:bg-[#1F4D4A] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </button>

            {/* Call button */}
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

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#2B6B67] text-white"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-slate-200/50 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#2B6B67]/10 hover:text-[#2B6B67] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-[#2B6B67] text-white shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              <MapPin className="w-4 h-4 text-[#2B6B67]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
