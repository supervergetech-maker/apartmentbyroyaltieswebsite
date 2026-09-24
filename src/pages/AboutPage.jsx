import React from 'react';
import { ArrowRight, MessageCircle, Building2, Home as HomeIcon, Car, Ship, Key, Compass, Check, ShieldCheck, Zap, Globe, HeartHandshake, UserCheck, Star, Sparkles } from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';

export default function AboutPage() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Apartments by Royalties, I would like to enquire about your services and explore booking or partnership opportunities."
  );

  const serviceIcons = {
    shortlets: Building2,
    rentals: HomeIcon,
    cars: Car,
    boats: Ship,
    sales: Key,
    jv: Compass,
  };

  return (
    <div className="space-y-20 sm:space-y-28 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. HERO / PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>The Royalty Standard</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-slate-950">
          About Apartments by Royalties
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          {COMPANY.description}
        </p>
      </section>

      {/* 2. REALISTIC LUXURY PARLOUR & RESIDENTIAL IMAGERY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 shadow-md relative group">
          <img
            src="/images/about/about-parlour-1.jpg"
            alt="Apartments by Royalties Living Spaces"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Curated Interiors</p>
            <p className="text-sm font-serif font-bold text-white">Modern Living & Natural Ambiance</p>
          </div>
        </div>

        <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 shadow-md relative group">
          <img
            src="/images/about/about-parlour-2.jpg"
            alt="Bespoke Penthouse Parlour & Dining"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Executive Hospitality</p>
            <p className="text-sm font-serif font-bold text-white">Comfort, Privacy & Serenity</p>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & PHILOSOPHY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Our Story & Vision
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
            Elevating Living Standards & Lifestyle Experiences in Lagos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            Founded with a vision to redefine urban stays and property solutions in Nigeria, <strong>Apartments by Royalties</strong> bridges the gap between high-end luxury hospitality, executive mobility, and authentic real estate opportunities.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            We understand the challenges guests and investors often face—unreliable power supply, unverified property listings, and bureaucratic booking processes. We solve this by operating with strict quality control, verified documentation, guaranteed 24/7 power, and direct WhatsApp concierge communication.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 space-y-6">
          <h3 className="font-serif font-bold text-xl text-slate-950">
            The Pillars of Our Standard
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-start space-x-3">
              <Zap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Uninterrupted Power Guarantee:</strong>
                <span>All managed properties feature industrial power backups and automated inverters to ensure 24 hours light.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Vetted Security & Gated Access:</strong>
                <span>Located in guarded estates with biometric access and 24-hour physical security patrol.</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <UserCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Dedicated 24/7 Concierge:</strong>
                <span>Direct, personalized attention on WhatsApp to handle check-in logistics, airport transfers, and bespoke requests.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Our Client Base
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
            Tailored for Discerning Individuals & Organizations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <Globe className="w-8 h-8 text-slate-900" />
            <h4 className="font-serif font-bold text-base text-slate-950">Diaspora & Travelers</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              International returnees seeking safe, comfortable, and reliable accommodation that feels like home.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <Building2 className="w-8 h-8 text-slate-900" />
            <h4 className="font-serif font-bold text-base text-slate-950">Corporate Executives</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Business travelers requiring fast fiber internet, peaceful work spaces, and executive chauffeur mobility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <Ship className="w-8 h-8 text-slate-900" />
            <h4 className="font-serif font-bold text-base text-slate-950">Lifestyle & Leisure</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Guests looking for private yacht cruises, holiday duplexes with pools, and celebratory getaways.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <Compass className="w-8 h-8 text-slate-900" />
            <h4 className="font-serif font-bold text-base text-slate-950">Property Partners</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Landowners and developers seeking verified Joint Venture opportunities and professional management.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE OFFER */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
            Our Business Portfolio
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Six interconnected services designed to satisfy your living, mobility, and investment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY.services.map((service) => {
            const Icon = serviceIcons[service.id] || Building2;
            return (
              <div
                key={service.id}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-900 mb-3 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-slate-950">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. PARTNER WITH US (FOR LANDLORDS & PROPERTY DEVELOPERS) */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Partnerships & Property Management
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Do You Own a Prime Property or Land in Lagos?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            Apartments by Royalties partners with property owners for professional shortlet management, long-term leasing, and Joint Venture developments in Lekki Phase 1, Ikoyi, Victoria Island, Oniru, and Epe. We ensure premium maintenance, verified guest vetting, and optimal returns.
          </p>
        </div>

        <div className="pt-2">
          <a
            href={generateWhatsAppLink("Hello Apartments by Royalties, I am a property owner/developer and would like to discuss a property management or Joint Venture partnership.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold text-xs transition shadow-lg hover:bg-slate-100"
          >
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
            <span>Discuss Partnership on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-xl sm:text-3xl font-serif font-bold text-white">
          Let's Help You Find What You Need
        </h3>
        <p className="text-slate-300 text-sm max-w-lg mx-auto font-light">
          Chat directly with our team on WhatsApp for availability, property inspections, and bookings.
        </p>
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp ({COMPANY.phone})</span>
          </a>
        </div>
      </section>

    </div>
  );
}
