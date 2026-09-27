import React, { useState } from 'react';
import { CAR_FLEET } from '../data/listings';

export default function ExecutiveCarFleetSection({ showTitle = true, limit = null }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCars = CAR_FLEET.filter((car) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'exotic') return car.category.includes('Exotic') || car.category.includes('Ultra-Luxury');
    if (activeFilter === 'suv') return car.category.includes('SUV') || car.category.includes('Sedan');
    if (activeFilter === 'utility') return car.category.includes('Utility') || car.category.includes('VIP Executive Van');
    return true;
  });

  const displayFleet = limit ? filteredCars.slice(0, limit) : filteredCars;

  return (
    <section id="car-fleet" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              Verified Executive Mobility
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Luxury & Executive Car Fleet
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg">
              Chauffeur-driven supercars, ultra-luxury sedans, rugged SUVs, and executive group vans available in Lagos for daily rental, airport transfers, VIP escorts, and photo/video shoots.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: 'all', label: 'All Fleet' },
                { id: 'exotic', label: 'Rolls-Royce & Super SUVs' },
                { id: 'suv', label: 'Executive SUVs & Sedans' },
                { id: 'utility', label: 'VIP Vans & Escort Utility' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeFilter === tab.id
                      ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayFleet.map((car) => {
            const whatsappUrl = `https://wa.me/2348135031549?text=${encodeURIComponent(car.whatsappMsg)}`;

            return (
              <div
                key={car.id}
                className="group bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1"
              >
                <div>
                  {/* Vehicle Image Container */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden flex items-center justify-center p-3">
                    <img
                      src={car.image}
                      alt={car.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                      {car.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-1">
                      {car.category}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {car.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-400 mt-1 mb-3">
                      Rate: {car.rate}
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      {car.description}
                    </p>

                    {/* Features Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {car.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-700/60 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-600/50"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-medium py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.53 1.83.81 2.791.81h.002c3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.77-5.766zm9.969 5.828c0 5.518-4.482 10-10 10-1.782 0-3.447-.47-4.887-1.288l-5.113 1.338 1.365-4.993c-.908-1.485-1.428-3.233-1.428-5.057 0-5.518 4.482-10 10-10 5.518 0 10 4.482 10 10z" />
                    </svg>
                    Book / Check Availability
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Airport & Security Mobility Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-850 p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold">
                Airport Protocol, VIP Escorts & Bespoke Logistics
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Need an armored escort, airport VIP terminal reception at MMA Lagos, multiple convoy units, or private jet charter coordination? Our mobility desk handles every protocol detail seamlessly.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/2348135031549?text=Hello%20Apartments%20by%20Royalties%2C%20I%20would%20like%20to%20request%20VIP%20Mobility%20%2F%20Airport%20Transfer%20%2F%20Convoy%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20"
          >
            Custom Mobility Request
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}