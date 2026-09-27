import React, { useState, useMemo } from 'react';
import { MessageCircle, Send, Sparkles, ShieldCheck, Zap, Video, Filter } from 'lucide-react';
import { PROPERTIES } from '../data/listings';
import { generateWhatsAppLink } from '../data/company';
import PropertyCard from '../components/PropertyCard';
import PropertyMatcher from '../components/PropertyMatcher';
import FaqAccordion from '../components/FaqAccordion';

export default function PropertiesPage() {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const customLocationWhatsApp = generateWhatsAppLink(
    "Hello Apartments by Royalties, I would like to inquire about available properties in Lagos. My preferred location is: "
  );

  const locationPills = [
    { id: 'all', label: 'All Units' },
    { id: 'Lekki Phase 1', label: 'Lekki Phase 1' },
    { id: 'Victoria Island / Oniru', label: 'Oniru / Victoria Island' },
    { id: 'Ikate / Lekki', label: 'Ikate' }
  ];

  const filteredProperties = useMemo(() => {
    if (selectedLocation === 'all') return PROPERTIES;
    return PROPERTIES.filter((p) => p.area === selectedLocation);
  }, [selectedLocation]);

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-slate-950">
          Find Your Next Property
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
          Explore our available shortlet apartments and residences in prime Lagos neighborhoods.
        </p>
      </div>

      {/* 2. NOTICE: A SNIPPET OF OUR AVAILABLE INVENTORY */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Extensive Inventory Available</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950">
            These properties are just a snippet of what we offer
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            We have a much wider portfolio of verified shortlet apartments, weekly/monthly rentals, and residential properties across <strong>Lekki Phase 1, Oniru, Victoria Island, Ikate, Ikoyi, and Banana Island</strong>. If you don't see your exact specification below, simply send us a direct message with your location and dates—we have spaces to suit every taste.
          </p>
        </div>

        <a
          href={customLocationWhatsApp}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition flex items-center space-x-2 shrink-0 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Request More Properties on WhatsApp</span>
        </a>
      </div>

      {/* 3. LOCATION FILTER PILLS */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center">
          <Filter className="w-3.5 h-3.5 mr-1" /> Filter Location:
        </span>
        {locationPills.map((pill) => (
          <button
            key={pill.id}
            onClick={() => setSelectedLocation(pill.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
              selectedLocation === pill.id
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* 4. REAL PROPERTY CARDS WITH INTERACTIVE HOVER SLIDESHOW */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-slate-950">
              Featured Available Units
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Hover your cursor over any card to preview the interior photos.</p>
          </div>
          <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
            Showing {filteredProperties.length} Unit{filteredProperties.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* 5. INSPECTION & BOOKING ASSURANCE TRUST BADGES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 mb-3">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-base text-slate-950">24/7 Power Redundancy</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Guaranteed uninterrupted electricity across all managed units with automated generator and inverter switchover.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-base text-slate-950">Caution Deposit Guarantee</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            100% prompt refund of your caution deposit within 24 hours of post-checkout inspection.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 mb-3">
            <Video className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-base text-slate-950">Live Video Inspections</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Inspect any unit in person or request an instant live video walkthrough on WhatsApp before reserving.
          </p>
        </div>
      </div>

      {/* 6. INTERACTIVE PROPERTY MATCHER */}
      <PropertyMatcher />

      {/* 7. FAQ ACCORDION */}
      <FaqAccordion />

      {/* 8. CUSTOM LOCATION INQUIRY BANNER */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold text-white">
            Looking for an Apartment in a Specific Location?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            Tell us your preferred neighborhood (Lekki, Ikoyi, VI, Chevron, Ikeja GRA, etc.), your required bedrooms, and stay dates. Our concierge will share off-market units matching your exact taste directly on WhatsApp.
          </p>
        </div>

        <a
          href={customLocationWhatsApp}
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide transition flex items-center space-x-2 shrink-0 shadow-lg"
        >
          <Send className="w-4 h-4" />
          <span>Send Location & Budget to WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
