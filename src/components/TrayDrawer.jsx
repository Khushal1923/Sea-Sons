import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Sparkles, Utensils } from 'lucide-react';

export default function TrayDrawer({ isOpen, onClose, tray, onAddToTray, onRemoveFromTray, onClearTray }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = tray.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const total = subtotal + gst;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onClearTray();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-slate-200">
        
        {/* Drawer Header */}
        <div className="p-6 bg-[#2B6B67] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif-heading">Your Order Tray</h3>
              <p className="text-xs text-white/80">Sea~Sons Cafe N Restro</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tray Items List */}
        {orderPlaced ? (
          <div className="p-8 text-center my-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold font-serif-heading text-slate-900">
              Order Sent to Bar & Kitchen!
            </h4>
            <p className="text-xs text-slate-600 font-subheading">
              Our barista & chefs are preparing your items. Sit back and enjoy the archway vibes!
            </p>
            <button
              onClick={() => { setOrderPlaced(false); onClose(); }}
              className="px-6 py-2.5 rounded-full bg-[#2B6B67] text-white font-bold text-xs"
            >
              Back to Menu
            </button>
          </div>
        ) : tray.length === 0 ? (
          <div className="p-8 text-center my-auto text-slate-400 space-y-3">
            <Utensils className="w-12 h-12 mx-auto text-slate-300" />
            <p className="text-sm font-bold text-slate-600 font-serif-heading">Your tray is currently empty</p>
            <p className="text-xs text-slate-400">Add cold coffee, pizza, or desserts from the menu!</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {tray.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h4 className="text-sm font-bold font-serif-heading text-slate-800 leading-snug">
                    {item.name}
                  </h4>
                  <span className="text-xs font-extrabold text-[#2B6B67]">
                    ₹{item.price * item.quantity}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 px-2.5 py-1 rounded-xl">
                  <button
                    onClick={() => onRemoveFromTray(item.id)}
                    className="p-1 hover:text-red-500"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                  <button
                    onClick={() => onAddToTray(item)}
                    className="p-1 hover:text-[#2B6B67]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tray Footer Summary */}
        {!orderPlaced && tray.length > 0 && (
          <div className="p-6 bg-white border-t border-slate-200 space-y-4">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span>₹{gst}</span>
              </div>
              <div className="flex justify-between font-extrabold text-slate-900 text-sm pt-2 border-t border-slate-100">
                <span>Total Amount</span>
                <span className="text-[#2B6B67] font-serif-heading text-lg">₹{total}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-4 rounded-2xl bg-[#2B6B67] hover:bg-[#1F4D4A] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <span>Place Demo Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
