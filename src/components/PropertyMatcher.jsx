import React, { useState } from 'react';
import { Search, MapPin, Building2, Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';

export default function PropertyMatcher() {
  const [serviceType, setServiceType] = useState('Luxury Shortlet');
  const [location, setLocation] = useState('Lekki Phase 1');
  const [spec, setSpec] = useState('1 Bedroom Suite');

  const handleSearchWhatsApp = (e) => {
    e.preventDefault();
    let text = `*CUSTOM PROPERTY & STAY MATCH REQUEST*\n`;
    text += `-----------------------------------------\n`;
    text += `👑 *Service Needed:* ${serviceType}\n`;
    text += `📍 *Preferred Location:* ${location}\n`;
    text += `🛏️ *Size / Requirement:* ${spec}\n`;
    text += `-----------------------------------------\n`;
    text += `Kindly share available matching options, photos, and rates with me. Thank you!`;

    const url = generateWhatsAppLink(text);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-800/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Matcher</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Find Your Ideal Property or Stay
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Select your preferences and get tailored options sent directly to your WhatsApp.
          </p>
        </div>
      </div>

      <form onSubmit={handleSearchWhatsApp} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Service Type */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center">
            <Building2 className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
            <span>Service</span>
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-3.5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="Luxury Shortlet">Luxury Shortlet</option>
            <option value="House Rental (Weekly/Monthly/Yearly)">House Rental (Weekly/Monthly/Yearly)</option>
            <option value="VIP Car Rental">VIP Car Rental</option>
            <option value="Private Boat / Yacht Cruise">Boat / Yacht Cruise</option>
            <option value="House / Land Purchase">Property Purchase (House/Land)</option>
            <option value="Joint Venture Partnership">Joint Venture Opportunity</option>
          </select>
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
            <span>Location</span>
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3.5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="Lekki Phase 1">Lekki Phase 1</option>
            <option value="Oniru / Victoria Island">Oniru / Victoria Island</option>
            <option value="Ikate / Elegushi">Ikate / Elegushi</option>
            <option value="Ikoyi / Banana Island">Ikoyi / Banana Island</option>
            <option value="Epe Corridor">Epe Corridor</option>
            <option value="Any Prime Lagos Location">Any Prime Lagos Location</option>
          </select>
        </div>

        {/* Bedrooms / Duration */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
            <span>Specification</span>
          </label>
          <select
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
            className="w-full px-3.5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="1 Bedroom Suite">1 Bedroom Suite</option>
            <option value="2 Bedrooms Duplex">2 Bedrooms Duplex</option>
            <option value="3–4 Bedrooms Residence">3–4 Bedrooms Residence</option>
            <option value="Short Stay (1–7 Days)">Short Stay (1–7 Days)</option>
            <option value="Extended Stay (1+ Month)">Extended Stay (1+ Month)</option>
            <option value="Outright Purchase / Investment">Outright Purchase / Investment</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-3 lg:col-span-1 flex items-end">
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/50"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Find Options on WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
}
