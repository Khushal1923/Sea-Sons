import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, Sparkles, CheckCircle, Heart, Phone, User } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    date: new Date().toISOString().split('T')[0],
    time: '05:00 PM',
    seating: 'Rooftop Botanical Canopy',
    occasion: 'Casual Coffee & Bites',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#2B6B67] text-white p-6 flex items-center justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Table Reservation</span>
            </div>
            <h3 className="text-2xl font-bold font-serif-heading">
              Reserve Your Spot at Sea~Sons
            </h3>
            <p className="text-xs text-white/80 mt-1">
              Manik Nagar, Nashik • Pure Veg & Specialty Brews
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors relative z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-bold font-serif-heading text-slate-900">
              Table Reservation Confirmed!
            </h4>

            <p className="text-sm text-slate-600 font-subheading">
              Thank you <strong className="text-slate-800">{formData.name}</strong>! Your table at <strong className="text-[#2B6B67]">{formData.seating}</strong> has been reserved for <strong className="text-slate-800">{formData.guests}</strong> on <strong className="text-slate-800">{formData.date} at {formData.time}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 space-y-1 text-left">
              <div><strong>Booking ID:</strong> SS-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              <div><strong>Occasion:</strong> {formData.occasion}</div>
              <div><strong>Location:</strong> Manik Nagar, Gangapur Rd Area, Nashik</div>
            </div>

            <button
              onClick={resetForm}
              className="w-full py-3.5 rounded-2xl bg-[#2B6B67] text-white font-bold text-sm shadow-md hover:bg-[#1F4D4A] transition-all"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6B67]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6B67]"
                  />
                </div>
              </div>
            </div>

            {/* Guests & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Guest Count
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6B67]"
                >
                  <option>1 Person</option>
                  <option>2 Guests (Couple / Date)</option>
                  <option>3-4 Guests (Friends Group)</option>
                  <option>5-8 Guests (Family Table)</option>
                  <option>8+ Large Group Party</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6B67]"
                />
              </div>
            </div>

            {/* Time & Preferred Seating Zone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6B67]"
                >
                  <option>12:00 PM (Lunch)</option>
                  <option>02:00 PM (Afternoon Brew)</option>
                  <option>05:00 PM (Sunset Coffee)</option>
                  <option>07:30 PM (Prime Dinner)</option>
                  <option>09:30 PM (Late Night Vibe)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Seating Area Choice
                </label>
                <select
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6B67]"
                >
                  <option>Rooftop Botanical Canopy 🌿</option>
                  <option>Archway Corridor Nook 🏛️</option>
                  <option>Sunset Panoramic Window 🪟</option>
                  <option>Sage Green Counter Bar ☕</option>
                </select>
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Occasion / Special Request
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6B67]"
              >
                <option>Casual Coffee & Bites</option>
                <option>Romantic Date Night 💖</option>
                <option>Birthday / Anniversary Celebration 🎂</option>
                <option>Work & Laptop Coffee Session 💻</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                rows="2"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="High chair needed, specific cake request, board game preference..."
                className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#2B6B67]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#2B6B67] hover:bg-[#1F4D4A] text-white font-bold text-base shadow-xl transition-all active:scale-98"
            >
              Confirm Table Reservation
            </button>

          </form>
        )}

      </div>

    </div>
  );
}
