import React, { useState } from 'react';
import { Search, Sparkles, Star, Plus, Minus, ShoppingBag, Clock, Heart, CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/cafeData';

export default function InteractiveMenu({ tray, onAddToTray, onRemoveFromTray, onOpenTray }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  // Filter menu items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = !vegOnly || item.isVeg;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const getItemQuantityInTray = (itemId) => {
    const found = tray.find((t) => t.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-24 bg-[#FAF7F2] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B6B67]/10 text-[#2B6B67] text-xs font-bold uppercase tracking-widest mb-4">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Pure Veg Gourmet Restro</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-heading text-slate-900 tracking-tight leading-tight">
            Artisanal Menu & <span className="text-[#2B6B67]">Specialty Brews</span>
          </h2>

          <p className="mt-3 text-slate-600 font-subheading text-base sm:text-lg">
            From our signature Hazelnut Cold Coffee to thin crust Quattro Formaggi pizza and Belgian waffles.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="glass-panel p-4 rounded-3xl border border-slate-200 shadow-md mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cold coffee, burgers, pizza..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6B67] text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Veg Filter Toggle & Tray Quick Button */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <button
                onClick={() => setVegOnly(!vegOnly)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all ${
                  vegOnly ? 'bg-emerald-800 text-white border-emerald-800 shadow' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span>100% Pure Veg</span>
              </button>

              {tray.length > 0 && (
                <button
                  onClick={onOpenTray}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider bg-[#2B6B67] text-white shadow-md hover:bg-[#1F4D4A] transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Tray ({tray.reduce((acc, curr) => acc + curr.quantity, 0)})</span>
                </button>
              )}
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2B6B67] text-white shadow-md scale-105'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#2B6B67] border border-slate-200/60'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <UtensilsCrossed className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 font-serif-heading">No menu items found</h3>
            <p className="text-sm text-slate-500 mt-1">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setVegOnly(false); }}
              className="mt-4 px-4 py-2 text-xs font-bold bg-[#2B6B67] text-white rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const qty = getItemQuantityInTray(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  
                  {/* Image & Badges */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Veg Icon Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold text-emerald-700 flex items-center gap-1 shadow">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      Pure Veg
                    </div>

                    {/* Bestseller / Chef Special Badge */}
                    {item.isBestseller && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                        ★ Bestseller
                      </div>
                    )}
                    {item.isChefSpecial && !item.isBestseller && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#2B6B67] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                        Chef Special
                      </div>
                    )}

                    {/* Rating & Prep Time */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1 font-bold bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {item.rating}
                      </span>
                      <span className="flex items-center gap-1 text-slate-200 text-[11px] bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        <Clock className="w-3 h-3" />
                        {item.prepTime}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold font-serif-heading text-slate-900 leading-snug group-hover:text-[#2B6B67] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer: Price & Add button */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">Price</span>
                        <span className="text-xl font-extrabold text-[#2B6B67] font-serif-heading">
                          ₹{item.price}
                        </span>
                      </div>

                      {qty === 0 ? (
                        <button
                          onClick={() => onAddToTray(item)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-[#2B6B67]/10 hover:bg-[#2B6B67] text-[#2B6B67] hover:text-white font-bold text-xs transition-all active:scale-95"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add to Tray</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-3 bg-[#2B6B67] text-white px-3 py-1.5 rounded-2xl shadow-sm">
                          <button
                            onClick={() => onRemoveFromTray(item.id)}
                            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold min-w-[14px] text-center">{qty}</span>
                          <button
                            onClick={() => onAddToTray(item)}
                            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
