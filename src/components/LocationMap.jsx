import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { CAFE_INFO } from '../data/cafeData';

export default function LocationMap({ onOpenReservation }) {
  return (
    <section id="location" className="py-24 bg-[#FAF7F2] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B6B67]/10 text-[#2B6B67] text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            <span>Visit Us in Nashik</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-heading text-slate-900 tracking-tight leading-tight">
            Find Us at <span className="text-[#2B6B67]">Manik Nagar, Nashik</span>
          </h2>

          <p className="mt-3 text-slate-600 font-subheading text-base sm:text-lg">
            Located in the heart of Manik Nagar, Nashik — easily accessible with ample parking and a welcoming vibe.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#2B6B67] text-white shadow-md shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif-heading text-slate-900">
                    Sea~Sons Cafe N Restro
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Manik Nagar, Near Gangapur Rd / College Rd Area, Nashik, Maharashtra 422005
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-[#2B6B67] hover:underline"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
                <span className="text-xs text-slate-400 font-medium">Free WiFi Available</span>
              </div>
            </div>

            {/* Timings & Contact */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-[#2B6B67]" />
                    <span>Opening Hours</span>
                  </div>
                  <p className="text-sm font-bold font-serif-heading text-slate-900">
                    11:00 AM – 11:00 PM
                  </p>
                  <span className="text-[11px] text-emerald-600 font-semibold block">
                    Open All 7 Days
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <Phone className="w-4 h-4 text-[#2B6B67]" />
                    <span>Reservations</span>
                  </div>
                  <a
                    href={`tel:${CAFE_INFO.phone}`}
                    className="text-sm font-bold font-serif-heading text-[#2B6B67] hover:underline block"
                  >
                    {CAFE_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-500 block">
                    Calls & WhatsApp
                  </span>
                </div>

              </div>
            </div>

            {/* Online Order & Dineout Partners */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Also Listed On
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                  Swiggy Dineout
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                  EazyDiner
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                  Zomato
                </span>
              </div>
            </div>

          </div>

          {/* Map Embed Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 min-h-[380px] relative">
            <iframe
              title="Sea~Sons Cafe Nashik Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.887889104052!2d73.763456!3d20.003412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzEyLjMiTiA3M8KwNDUnNDguNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Quick Map Banner Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 block font-serif-heading">
                  Sea~Sons Cafe N Restro • Manik Nagar
                </span>
                <span className="text-[11px] text-slate-500">
                  Tap button to open directly in Google Maps app
                </span>
              </div>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#2B6B67] hover:bg-[#1F4D4A] text-white text-xs font-bold flex items-center gap-1 shadow"
              >
                <span>Open Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
