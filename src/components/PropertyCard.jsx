import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { generateWhatsAppLink } from '../data/company';

export default function PropertyCard({ property }) {
  if (!property) return null;

  const {
    id,
    title,
    location,
    type,
    images = [],
    cautionDeposit,
    badge
  } = property;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Real photos list
  const photoList = images && images.length > 0 ? images : ['/images/apartments/siscilia-aqua/photo-01.jpg'];

  // Auto-advance photos every 2.8 seconds when mouse is hovering
  useEffect(() => {
    if (isHovered && photoList.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % photoList.length);
      }, 2800);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, photoList.length]);

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % photoList.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + photoList.length) % photoList.length);
  };

  const inquiryMsg = `Hello Apartments by Royalties, I am interested in "${title}" located in ${location}. Please provide availability and booking details.`;
  const whatsappUrl = generateWhatsAppLink(inquiryMsg);

  return (
    <div 
      className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 select-none">
        <img
          src={photoList[currentIdx]}
          alt={`${title} view ${currentIdx + 1}`}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {badge && (
            <span className="bg-slate-950/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
              {badge}
            </span>
          )}
          <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-mono px-2 py-0.5 rounded-md">
            {currentIdx + 1} / {photoList.length} Photos
          </span>
        </div>

        {/* Interactive Mini Arrows (visible on hover) */}
        {photoList.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Bottom Caution deposit & Indicator dots */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center space-x-1 max-w-[120px] overflow-hidden">
            {photoList.slice(0, 7).map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIdx === dotIdx ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
            {photoList.length > 7 && (
              <span className="text-[9px] text-white/80 font-bold ml-1">+</span>
            )}
          </div>

          {cautionDeposit && (
            <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-2 py-0.5 rounded">
              Caution: {cautionDeposit}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center text-xs text-slate-500 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 mr-1 shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          <h3 className="font-serif font-bold text-slate-900 text-lg leading-snug group-hover:text-slate-700 transition">
            <Link to={`/properties/${id}`}>
              {title}
            </Link>
          </h3>

          <p className="text-xs text-slate-500 mt-2 font-medium">
            {type}
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
          <Link
            to={`/properties/${id}`}
            className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold text-center transition flex items-center justify-center space-x-1"
          >
            <span>View All Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold text-center transition flex items-center justify-center space-x-1 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
