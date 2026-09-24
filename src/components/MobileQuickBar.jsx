import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';

export default function MobileQuickBar() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Apartments by Royalties, I would like to make an enquiry about your properties and services."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${COMPANY.phone}`}
          className="py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold text-center flex items-center justify-center space-x-1.5 active:bg-slate-800"
        >
          <Phone className="w-3.5 h-3.5 text-slate-300" />
          <span>Call Us</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold text-center flex items-center justify-center space-x-1.5 shadow-sm active:bg-emerald-700"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );
}
