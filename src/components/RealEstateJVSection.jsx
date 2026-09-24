import React, { useState } from 'react';
import { 
  Key, 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Building2, 
  ArrowRight, 
  Sparkles,
  Users,
  Briefcase,
  Scale
} from 'lucide-react';
import { generateWhatsAppLink } from '../data/company';

export default function RealEstateJVSection() {
  const [activeTab, setActiveTab] = useState('sales'); // 'sales' | 'jv'
  const [userRole, setUserRole] = useState('buyer'); // 'buyer' | 'landowner' | 'developer'

  const salesWhatsApp = generateWhatsAppLink(
    "Hello Apartments by Royalties, I am interested in Property Sales (Houses & Land in Lagos). Please share your current verified listings and available opportunities."
  );

  const jvWhatsApp = generateWhatsAppLink(
    "Hello Apartments by Royalties, I would like to discuss a Real Estate Joint Venture (JV) opportunity in Lagos."
  );

  const getCustomRoleWhatsApp = () => {
    if (userRole === 'buyer') {
      return generateWhatsAppLink(
        "Hello Apartments by Royalties, I am looking to purchase a verified house or land plot in Lagos. My preferred location and budget are:"
      );
    } else if (userRole === 'landowner') {
      return generateWhatsAppLink(
        "Hello Apartments by Royalties, I am a landowner with prime land in Lagos and I am interested in a Joint Venture (JV) partnership with a verified developer."
      );
    } else {
      return generateWhatsAppLink(
        "Hello Apartments by Royalties, I am a real estate developer looking for verified JV land parcels in prime Lagos locations."
      );
    }
  };

  return (
    <section className="bg-slate-100 border border-slate-300/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2.5">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-slate-300 text-xs font-semibold tracking-wide text-slate-800 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Real Estate & Joint Ventures</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-950">
          Property Sales & Joint Venture Opportunities
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
          Facilitating verified property acquisitions and structuring high-yield Joint Venture partnerships between verified landowners and reputable developers across prime Lagos corridors.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-slate-300/80 max-w-md shadow-xs">
        <button
          onClick={() => setActiveTab('sales')}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center space-x-2 ${
            activeTab === 'sales'
              ? 'bg-slate-950 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          <Key className="w-4 h-4" />
          <span>Property & Land Sales</span>
        </button>

        <button
          onClick={() => setActiveTab('jv')}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center space-x-2 ${
            activeTab === 'jv'
              ? 'bg-slate-950 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-950'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Joint Venture (JV) Partnerships</span>
        </button>
      </div>

      {/* TAB CONTENT 1: PROPERTY & LAND SALES */}
      {activeTab === 'sales' && (
        <div className="space-y-6 animate-fade-in">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-950">Verified Legal Titles</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Thorough title searches (Governor's Consent, C of O, Gazette, and registered survey plans) prior to any client introduction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-950">High-Capital Growth Land</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Access to dry, fast-appreciating residential and commercial plots across the Epe corridor, Chevron, and Lekki.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-950">Residential Houses & Mansions</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Turnkey contemporary duplexes, semi-detached units, and luxury family homes in secured gated communities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <FileText className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-950">Transparent Closing</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct owner introductions, verified deed of assignment documentation, and physical site inspections.
              </p>
            </div>

          </div>

          <div className="pt-2">
            <a
              href={salesWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs transition shadow-sm"
            >
              <span>Request Available Houses and Land</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* TAB CONTENT 2: JOINT VENTURE (JV) PARTNERSHIPS */}
      {activeTab === 'jv' && (
        <div className="space-y-6 animate-fade-in">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* For Landowners */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <Users className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-950">For Landowners</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monetize your unbuilt land in prime Lagos locations without needing personal capital for construction. We partner you with vetted institutional developers who build high-end residential units while you retain premium equity or finished units.
              </p>
              <div className="text-[11px] font-medium text-slate-500 pt-1 border-t border-slate-100">
                ✓ Zero construction debt • Structured unit allocation
              </div>
            </div>

            {/* For Developers */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-950">For Property Developers</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminate huge upfront land purchase costs. We connect you directly with verified, unencumbered dry land parcels in high-demand zones (Lekki Phase 1, Ikate, Oniru, Victoria Island, Epe) with clear sharing ratios.
              </p>
              <div className="text-[11px] font-medium text-slate-500 pt-1 border-t border-slate-100">
                ✓ 100% verified titles • Zero community disputes
              </div>
            </div>

            {/* Structured Facilitation */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
                <Scale className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-950">Our Facilitation & Legal Safety</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handle thorough due diligence, architectural feasibility reviews, Joint Venture Agreement (JVA) structuring, milestone escrow safeguards, and final unit marketing upon completion.
              </p>
              <div className="text-[11px] font-medium text-slate-500 pt-1 border-t border-slate-100">
                ✓ Transparent legal contracts • Milestone protection
              </div>
            </div>

          </div>

          <div className="pt-2">
            <a
              href={jvWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs transition shadow-sm"
            >
              <span>Discuss Joint Venture Opportunities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* QUICK ROLE SELECTOR */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Direct Consultation
          </span>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => setUserRole('buyer')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                userRole === 'buyer' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🏡 Buy House or Land
            </button>
            <button
              onClick={() => setUserRole('landowner')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                userRole === 'landowner' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              📐 I Have Land for Joint Venture
            </button>
            <button
              onClick={() => setUserRole('developer')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                userRole === 'developer' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🏗️ I am a Developer Seeking JV Land
            </button>
          </div>
        </div>

        <a
          href={getCustomRoleWhatsApp()}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition flex items-center space-x-1.5 shrink-0 shadow-sm"
        >
          <span>Connect with Acquisitions Lead</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
}
