import React from 'react';
import { Sparkles, Heart, Compass, Coffee, ShieldCheck, Smile } from 'lucide-react';
import { CAFE_INFO, CAFE_PHOTOS } from '../data/cafeData';

export default function AboutAmbiance({ onOpenGallery }) {
  const highlights = [
    {
      title: "Signature Arch Corridors",
      description: "Step through illuminated warm cream arches framed by linear LED lights and inspiring quotes.",
      quote: "Be With Someone Who Knows Your Coffee Order.",
      image: CAFE_PHOTOS[0].src,
      tag: "Architectural Marvel"
    },
    {
      title: "Rooftop Botanical Canopy",
      description: "Dine under a ceiling of hand-woven rattan baskets and lush hanging tropical vines paired with teal seating.",
      quote: "Good Coffee, Better Vibes, Seasonal Comfort.",
      image: CAFE_PHOTOS[2].src,
      tag: "Outdoor Vibe"
    },
    {
      title: "Panoramic Arch Windows",
      description: "Expansive arched glass windows offering natural sunlight, warm olive ceiling accents, and cozy table games.",
      quote: "You Are Exactly Where You Need To Be.",
      image: CAFE_PHOTOS[3].src,
      tag: "Sunset View"
    },
    {
      title: "Sage Green Bar & Counter",
      description: "Custom sage counter front with glowing semicircular light motifs, wooden bar stools, and fresh brews.",
      quote: "I Speak French Fries 🍟",
      image: CAFE_PHOTOS[4].src,
      tag: "Espresso & Mocktails"
    }
  ];

  return (
    <section id="ambiance" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Background Subtle Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2B6B67]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A373]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B6B67]/10 text-[#2B6B67] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The Sea~Sons Aesthetic</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-heading text-slate-900 tracking-tight leading-tight">
            Crafted for <span className="text-[#2B6B67]">Coffee Lovers</span> & Instagram Moments
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-subheading leading-relaxed">
            Every corner of Sea~Sons Cafe N Restro is thoughtfully designed — from our signature glowing archways and botanical ceilings to our pure vegetarian gourmet menu.
          </p>
        </div>

        {/* Feature Grid with Arch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-xs font-bold text-[#2B6B67] shadow">
                  {item.tag}
                </div>

                {/* Wall Quote Highlight overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-subheading italic text-amber-200 border-l-2 border-amber-300 pl-3">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-serif-heading text-slate-900 mb-2 group-hover:text-[#2B6B67] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2B6B67] flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-[#2B6B67]" />
                    Pure Veg Cafe & Restro
                  </span>
                  <button
                    onClick={onOpenGallery}
                    className="text-xs font-bold text-slate-700 hover:text-[#2B6B67] transition-colors flex items-center gap-1"
                  >
                    <span>View Photos</span>
                    <span className="text-lg leading-none">→</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Ambiance Stats & Quote Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#2B6B67] to-[#1F4D4A] rounded-3xl text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            
            <div className="p-4 border-b md:border-b-0 md:border-r border-white/20">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-amber-300 mb-1">
                4.8★ Rating
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                500+ Google Reviews
              </div>
              <p className="text-xs text-white/70 mt-2">
                Consistently rated Nashik's best aesthetic cafe spot
              </p>
            </div>

            <div className="p-4 border-b md:border-b-0 md:border-r border-white/20">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-amber-300 mb-1">
                100% Pure Veg
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                Gourmet Food & Beverages
              </div>
              <p className="text-xs text-white/70 mt-2">
                Artisanal coffees, pizzas, burgers, and decadent shakes
              </p>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-amber-300 mb-1">
                Table Games
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                Jenga, Uno & Cozy Vibes
              </div>
              <p className="text-xs text-white/70 mt-2">
                Unwind with friends and family over board games & coffee
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
