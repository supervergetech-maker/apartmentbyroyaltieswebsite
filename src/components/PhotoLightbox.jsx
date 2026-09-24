import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../data/company';

export default function PhotoLightbox({ 
  images = [], 
  currentIdx = 0, 
  isOpen = false, 
  onClose, 
  onNext, 
  onPrev, 
  onSelectIdx,
  propertyTitle = '',
  propertyLocation = ''
}) {
  if (!isOpen || images.length === 0) return null;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const inquiryMsg = `Hello Apartments by Royalties, I am viewing "${propertyTitle}" in ${propertyLocation} on your gallery. Please confirm availability and booking details.`;
  const whatsappUrl = generateWhatsAppLink(inquiryMsg);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in select-none">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white pb-3 border-b border-white/10 z-10">
        <div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-white truncate max-w-xs sm:max-w-md">
            {propertyTitle}
          </h3>
          <p className="text-xs text-slate-400">
            Photo {currentIdx + 1} of {images.length}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Book on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close Fullscreen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Fullscreen Photo View */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <img
          src={images[currentIdx]}
          alt={`${propertyTitle} fullscreen photo ${currentIdx + 1}`}
          className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl transition-all duration-300"
        />

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            aria-label="Next photo"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="flex items-center space-x-2 overflow-x-auto py-2 max-w-4xl mx-auto w-full justify-start sm:justify-center">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onSelectIdx(idx)}
            className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition ${
              currentIdx === idx ? 'border-emerald-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

    </div>
  );
}
