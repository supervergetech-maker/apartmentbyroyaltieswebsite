import React from 'react';
import { Clock, Users, ShieldAlert, CheckCircle2, MessageCircle, Sparkles, Waves } from 'lucide-react';
import { BOAT_FLEET } from '../data/listings';
import { generateWhatsAppLink } from '../data/company';

export default function BoatFleetSection() {
  return (
    <section className="space-y-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wide">
            <Waves className="w-3.5 h-3.5 text-blue-600" />
            <span>Waterfront Living & Charters</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-slate-950">
            Boat Rentals, Yachts & Jet Ski Charters
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
            Private motor yachts, 10 to 45-seater house boats, and high-performance jet skis for luxury cruises, private island getaways (Ilashe & Tarkwa Bay), and group celebrations.
          </p>
        </div>

        <a
          href={generateWhatsAppLink("Hello Apartments by Royalties, I would like to enquire about your available Boat & Yacht charter dates.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition shrink-0 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Check Charter Dates on WhatsApp</span>
        </a>
      </div>

      {/* IMPORTANT REFUNDABLE DAMAGE DEPOSIT POLICY NOTICE */}
      <div className="bg-amber-50 border border-amber-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xs">
        <div className="flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5 text-slate-950" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-slate-950">
              Important Charter Policy & Refundable Damage Deposit
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
              For any boat selected, an additional <strong>damage deposit fee equivalent to one hour charter rate</strong> will be charged before boarding. This deposit is <strong>100% refundable after 72 hours</strong> subject to no damages during the charter. Minimum charter duration for house boats is <strong>3 hours</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Boat Fleet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BOAT_FLEET.map((boat) => {
          const whatsappUrl = generateWhatsAppLink(boat.whatsappMsg);

          return (
            <div
              key={boat.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">

                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {boat.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                    {boat.badge}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-950">
                    {boat.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {boat.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <Users className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{boat.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{boat.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1.5 pt-1">
                  {boat.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition flex items-center justify-center space-x-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Reserve on WhatsApp</span>
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* ALL MOBILITY & AVIATION BANNER */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Mobility & Aviation Services</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            For All Your Vehicle, Boat & Aircraft Rental Services
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl">
            From luxury SUVs (Mercedes G-Wagon, Lexus LX570, Prado) and island party boats to private jet charters, Apartments by Royalties has you covered.
          </p>
        </div>

        <a
          href={generateWhatsAppLink("Hello Apartments by Royalties, I would like to enquire about your Vehicle, Boat, and Aircraft luxury mobility services.")}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide transition flex items-center space-x-2 shrink-0 shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Connect with Mobility Desk</span>
        </a>
      </div>

    </section>
  );
}