import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Check, 
  MessageCircle, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  Video, 
  Car, 
  Ship, 
  UtensilsCrossed,
  ShieldCheck,
  Zap,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { PROPERTIES } from '../data/listings';
import { COMPANY, generateWhatsAppLink } from '../data/company';
import PhotoLightbox from '../components/PhotoLightbox';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // VIP Add-on states
  const [airportPickup, setAirportPickup] = useState(false);
  const [yachtTrip, setYachtTrip] = useState(false);
  const [inHouseChef, setInHouseChef] = useState(false);

  const property = PROPERTIES.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-slate-950">Property Not Found</h2>
        <p className="text-sm text-slate-500">The requested property could not be located.</p>
        <Link to="/properties" className="inline-block px-6 py-2.5 bg-slate-950 text-white rounded-full text-xs font-semibold">
          Return to All Properties
        </Link>
      </div>
    );
  }

  // Construct dynamic WhatsApp booking enquiry with optional VIP add-ons
  const buildEnquiryMsg = () => {
    let msg = `Hello Apartments by Royalties, I would like to enquire about booking "${property.title}" in ${property.location}.\n`;
    if (airportPickup || yachtTrip || inHouseChef) {
      msg += `\n*Requested VIP Add-ons:*`;
      if (airportPickup) msg += `\n- Airport VIP Chauffeur Transfer (Executive SUV)`;
      if (yachtTrip) msg += `\n- Private Ilashe Yacht Day Trip Charter`;
      if (inHouseChef) msg += `\n- In-House Private Chef on Demand`;
    }
    msg += `\nPlease confirm availability, rates, and reservation instructions.`;
    return msg;
  };

  const directWhatsAppUrl = generateWhatsAppLink(buildEnquiryMsg());

  // Video walkthrough message
  const videoWalkthroughMsg = `Hello Apartments by Royalties, I am interested in "${property.title}" located in ${property.location}. Could you please share a live video walkthrough / virtual tour on WhatsApp?`;
  const videoWalkthroughUrl = generateWhatsAppLink(videoWalkthroughMsg);

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Properties</span>
        </button>

        <span className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded-full font-medium">
          {property.badge || 'Verified Unit'}
        </span>
      </div>

      {/* Main Title & Location */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-serif font-black text-slate-950">
          {property.title}
        </h1>
        <div className="flex items-center text-xs sm:text-sm text-slate-500">
          <MapPin className="w-4 h-4 text-slate-400 mr-1" />
          <span>{property.location}</span>
        </div>
      </div>

      {/* Image Gallery with Click-to-Fullscreen */}
      <div className="space-y-3">
        <div 
          className="aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-900 relative group select-none shadow-md cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={property.images[activeImageIdx]}
            alt={`${property.title} photo ${activeImageIdx + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Navigation Arrows */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-xl flex items-center space-x-1.5">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Click for Fullscreen ({activeImageIdx + 1}/{property.images.length})</span>
          </div>
        </div>

        {/* Thumbnails */}
        {property.images.length > 1 && (
          <div className="flex items-center space-x-3 overflow-x-auto pb-2">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`relative w-20 h-14 sm:w-28 sm:h-18 rounded-xl overflow-hidden shrink-0 border-2 transition ${
                  activeImageIdx === idx
                    ? 'border-slate-950 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-1 bg-black/60 text-[10px] text-white px-1 rounded">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        
        {/* Left Column (2 Cols) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-slate-950">About This Property</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Features / Amenities */}
          {property.features && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-slate-950">Features & Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIP Lifestyle Add-ons */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h3 className="text-base font-serif font-bold text-slate-950">
                Optional VIP Lifestyle Add-ons
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Select any additional service to include directly in your WhatsApp reservation enquiry:
            </p>

            <div className="space-y-3 pt-1">
              <label className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 cursor-pointer hover:border-slate-400 transition">
                <input
                  type="checkbox"
                  checked={airportPickup}
                  onChange={(e) => setAirportPickup(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <Car className="w-4 h-4 text-slate-700 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block">Airport VIP Chauffeur Transfer</span>
                  <span className="text-slate-500">Executive SUV pickup from MMIA directly to the apartment</span>
                </div>
              </label>

              <label className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 cursor-pointer hover:border-slate-400 transition">
                <input
                  type="checkbox"
                  checked={yachtTrip}
                  onChange={(e) => setYachtTrip(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <Ship className="w-4 h-4 text-slate-700 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block">Private Ilashe Beach Yacht Day Trip</span>
                  <span className="text-slate-500">Custom boat cruise / private yacht charter during your stay</span>
                </div>
              </label>

              <label className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 cursor-pointer hover:border-slate-400 transition">
                <input
                  type="checkbox"
                  checked={inHouseChef}
                  onChange={(e) => setInHouseChef(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <UtensilsCrossed className="w-4 h-4 text-slate-700 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block">In-House Gourmet Chef on Demand</span>
                  <span className="text-slate-500">Private dining and breakfast/dinner culinary service</span>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* Right Sticky Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-6">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Property Enquiry</span>
              <h4 className="text-lg font-serif font-bold text-slate-950 mt-1">
                {property.title}
              </h4>
              {property.cautionDeposit && (
                <p className="text-xs text-slate-600 mt-2 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  Caution Deposit: <strong className="text-slate-900">{property.cautionDeposit}</strong>
                </p>
              )}
            </div>

            <div className="space-y-3">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition flex items-center justify-center space-x-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire & Book via WhatsApp</span>
              </a>

              {/* Live Video Walkthrough Button */}
              <a
                href={videoWalkthroughUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold text-center transition flex items-center justify-center space-x-2"
              >
                <Video className="w-4 h-4 text-amber-300" />
                <span>Request Video Walkthrough</span>
              </a>

              <a
                href={`tel:${COMPANY.phone}`}
                className="w-full py-2.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold text-center transition flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
              <div className="flex items-center space-x-1.5 text-emerald-700 font-medium">
                <Zap className="w-3.5 h-3.5" />
                <span>24/7 Power Guaranteed</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Secured Gated Compound Access</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <PhotoLightbox
        images={property.images}
        currentIdx={activeImageIdx}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        onSelectIdx={(idx) => setActiveImageIdx(idx)}
        propertyTitle={property.title}
        propertyLocation={property.location}
      />

    </div>
  );
}
