import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = "Hello Apartments by Royalties, I am browsing your website and would like to speak with a booking consultant.";
  const whatsappUrl = generateWhatsAppLink(defaultMsg);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative mb-3 bg-white text-royal-950 px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-200 text-xs sm:text-sm font-medium flex items-center space-x-2 max-w-xs animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need help booking or inspecting? <strong>Chat with us</strong></span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-700 ml-1 p-0.5"
            aria-label="Close bubble"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-200 transform rotate-45" />
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp with Apartments by Royalties"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-emerald-500/50"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </div>
  );
}
