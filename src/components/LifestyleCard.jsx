import React from 'react';
import { MessageCircle, Check, Users, ShieldCheck } from 'lucide-react';
import { generateWhatsAppLink } from '../data/company';

export default function LifestyleCard({ item, type }) {
  if (!item) return null;

  const isCar = type === 'car';
  const name = item.name || '';
  const price = item.priceFormatted || 'Inquire via WhatsApp';

  const inquiryMsg = isCar
    ? `Hello Apartments by Royalties, I would like to inquire about "${name}". Please let me know vehicle availability and driver options.`
    : `Hello Apartments by Royalties, I am interested in booking "${name}" for a boat cruise/experience. Please let me know available slots and boarding details.`;

  const whatsappUrl = generateWhatsAppLink(inquiryMsg);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={item.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="bg-royal-950/80 backdrop-blur-md text-gold-300 text-xs font-semibold px-2.5 py-1 rounded-lg border border-gold-400/30">
            {item.badge || item.category}
          </span>
          <span className="bg-emerald-600/90 text-white text-[11px] font-semibold px-2 py-0.5 rounded flex items-center">
            <ShieldCheck className="w-3 h-3 mr-1" /> Available
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
          <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md font-medium">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-slate-900 text-lg leading-snug mb-1">
            {name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 mb-3">
            {item.description}
          </p>

          {/* Quick Specs */}
          {item.specs && Array.isArray(item.specs) && (
            <div className="space-y-1.5 py-3 border-y border-slate-100 my-2">
              {item.specs.slice(0, 3).map((spec, i) => (
                <div key={i} className="flex items-center text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-gold-600 mr-2 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
              {item.capacity && (
                <div className="flex items-center text-xs text-royal-700 font-medium">
                  <Users className="w-3.5 h-3.5 mr-2 text-royal-600" />
                  <span>{item.capacity}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pricing & Booking */}
        <div className="mt-4 pt-2">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Service</span>
            <span className="text-sm font-bold text-royal-950 font-serif">
              {price}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold text-center transition flex items-center justify-center space-x-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
