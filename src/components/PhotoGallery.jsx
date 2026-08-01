import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, Eye, Expand } from 'lucide-react';
import { CAFE_PHOTOS } from '../data/cafeData';

export default function PhotoGallery({ isModalOpen, onCloseModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const categories = ['All', 'Architecture', 'Ambiance', 'Indoor', 'Bar & Counter', 'Exterior'];

  const filteredPhotos = activeCategory === 'All'
    ? CAFE_PHOTOS
    : CAFE_PHOTOS.filter(p => p.category === activeCategory);

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev === 0 ? CAFE_PHOTOS.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev === CAFE_PHOTOS.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#121A20] text-white relative">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2B6B67]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 border border-white/15">
            <Camera className="w-4 h-4" />
            <span>The Real Atmosphere</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-heading text-white tracking-tight leading-tight">
            Sea~Sons Cafe <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-amber-200">Photo Gallery</span>
          </h2>

          <p className="mt-3 text-slate-300 font-subheading text-base sm:text-lg">
            Explore authentic photos of our illuminated archways, rooftop hanging greenery, and sage counter lounge.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#2B6B67] text-white shadow-lg scale-105 border border-teal-400/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(CAFE_PHOTOS.findIndex(p => p.id === photo.id))}
              className="relative group rounded-3xl overflow-hidden cursor-pointer border border-white/15 shadow-xl bg-slate-900 aspect-[4/3] sm:aspect-[3/4]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag & Expand Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-white/20 uppercase tracking-widest">
                  {photo.category}
                </span>
                <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-bold font-serif-heading leading-tight group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {photo.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-in fade-in">
          
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Active Photo Content */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={CAFE_PHOTOS[selectedPhotoIndex].src}
              alt={CAFE_PHOTOS[selectedPhotoIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                {CAFE_PHOTOS[selectedPhotoIndex].category} ({selectedPhotoIndex + 1} / {CAFE_PHOTOS.length})
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">
                {CAFE_PHOTOS[selectedPhotoIndex].title}
              </h3>
              <p className="text-sm text-slate-300 mt-1 font-subheading">
                {CAFE_PHOTOS[selectedPhotoIndex].description}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
