import React from 'react';
import { Star, MessageSquare, ExternalLink, Quote, ThumbsUp, ShieldCheck } from 'lucide-react';
import { CAFE_INFO, CUSTOMER_REVIEWS } from '../data/cafeData';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B6B67]/10 text-[#2B6B67] text-xs font-bold uppercase tracking-widest mb-4">
            <Star className="w-4 h-4 fill-[#2B6B67]" />
            <span>Google Reviews & Love</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-heading text-slate-900 tracking-tight leading-tight">
            Loved by <span className="text-[#2B6B67]">Coffee & Vibe Seekers</span>
          </h2>

          <p className="mt-3 text-slate-600 font-subheading text-base sm:text-lg">
            Read what visitors and regulars say about our arch corridors, hazelnut brews, and rooftop ambiance.
          </p>
        </div>

        {/* Overall Score Badge Card */}
        <div className="max-w-xl mx-auto glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#2B6B67] text-amber-300 font-serif-heading text-3xl font-extrabold flex items-center justify-center shadow-lg">
              4.8
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800 block">
                Verified Google Rating
              </span>
              <span className="text-xs text-slate-500">
                Based on 500+ verified customer reviews
              </span>
            </div>
          </div>

          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#2B6B67] hover:bg-[#1F4D4A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <span>Review on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-[#2B6B67]/10 transition-colors pointer-events-none" />

              <div>
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#2B6B67]/20"
                  />
                  <div>
                    <h3 className="text-base font-bold font-serif-heading text-slate-900">
                      {review.author}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="flex items-center text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#2B6B67]/10 text-[#2B6B67] text-[11px] font-bold mb-3">
                  ✨ {review.highlight}
                </div>

                {/* Review Body */}
                <p className="text-sm text-slate-600 leading-relaxed font-sans italic">
                  "{review.text}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Visitor
                </span>
                <span className="text-[11px]">Via Google Reviews</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
