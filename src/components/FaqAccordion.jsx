import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

/**
 * TypewriterText Component
 * Types out the provided string character by character with an authentic typewriter cursor.
 */
function TypewriterText({ text, speed = 15 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  // Allow instant complete if user clicks on the typing text
  const handleCompleteInstantly = () => {
    setDisplayedText(text);
    setIsTyping(false);
  };

  return (
    <div 
      onClick={handleCompleteInstantly}
      className="cursor-pointer select-text relative"
      title={isTyping ? "Click to reveal full answer instantly" : ""}
    >
      <span>{displayedText}</span>
      {isTyping && (
        <span className="inline-block w-1.5 h-4 ml-1 bg-emerald-600 animate-pulse align-middle rounded-sm" />
      )}
    </div>
  );
}

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How do I book a shortlet or service with Apartments by Royalties?",
      a: "Booking is simple and fast. Click 'Enquire on WhatsApp' on any property listing or call 08135031549. Our 24/7 concierge will immediately verify availability for your preferred dates, send booking details, and confirm your reservation."
    },
    {
      q: "Can I request a live video walkthrough or physical inspection before booking?",
      a: "Yes! For diaspora clients and local guests alike, we provide live video walkthroughs via WhatsApp video call, or arrange physical inspections with our estate host before you finalize your reservation."
    },
    {
      q: "What is the caution deposit policy and how soon is it refunded?",
      a: "A refundable caution deposit (e.g. ₦100,000 for the Oniru 4-bedroom) is collected prior to check-in to safeguard the property. Following our standard checkout inspection, caution deposits are promptly refunded within 24 hours."
    },
    {
      q: "Is 24/7 uninterrupted electricity guaranteed across all apartments?",
      a: "Yes. All managed units (including Siscilia Aqua Lekki, Oniru 4-Bed, and Ikate Duplex) operate with 24 hours guaranteed electricity, backed by heavy-duty estate generators and automated inverter systems."
    },
    {
      q: "Can international / diaspora guests settle payments in foreign currency?",
      a: "Yes. We accommodate international guests from the UK, US, Canada, Europe, and beyond. Our concierge provides international settlement instructions upon request."
    },
    {
      q: "How fast does your concierge respond to WhatsApp enquiries?",
      a: "Our WhatsApp concierge operates 24/7 with an average response time of under 10–15 minutes."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm space-y-6">
      <div className="space-y-1">
        <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-md">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>Help & Clarity</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
          Frequently Asked Questions
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-light">
          Tap any question to review details regarding reservations, inspections, caution deposits, and power supply.
        </p>
      </div>

      <div className="space-y-3 pt-2">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen ? 'border-slate-300 shadow-sm bg-slate-50/70' : 'border-slate-100 bg-slate-50/40 hover:bg-slate-50'
              }`}
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition"
              >
                <span className="font-serif font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/50">
                  <div className="py-1">
                    <TypewriterText text={faq.a} speed={14} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
