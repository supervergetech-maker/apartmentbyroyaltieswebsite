import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Home as HomeIcon, 
  Car, 
  Ship, 
  Key, 
  Compass, 
  MessageCircle, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Crown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';
import { PRIME_LOCATIONS } from '../data/listings';
import PropertyMatcher from '../components/PropertyMatcher';
import RealEstateJVSection from '../components/RealEstateJVSection';

export default function HomePage() {
  const heroWhatsApp = generateWhatsAppLink(
    "Hello Apartments by Royalties, I would like to enquire about your available properties and lifestyle services."
  );

  // 4 Around-the-House Hero Slides (Living Room, Kitchen/Island, Bedroom, Dining/Lounge)
  const heroSlides = [
    {
      image: "/images/hero/home-parlour-clean.jpg",
      tag: "Living Room",
      caption: "Cozy Parlours & Relaxing Living Spaces"
    },
    {
      image: "/images/hero/home-kitchen-clean.jpg",
      tag: "Kitchen & Dining",
      caption: "Modern Open-Plan Kitchens & Breakfast Bars"
    },
    {
      image: "/images/hero/home-bedroom-clean.jpg",
      tag: "Bedrooms",
      caption: "Serene & Comfortable Master Suites"
    },
    {
      image: "/images/hero/home-dining-clean.jpg",
      tag: "Dining & Lounge",
      caption: "Charming Dining Nooks & Reading Corners"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance strictly every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION — FIT 100% ABOVE THE FOLD ON ALL LAPTOPS & DESKTOPS */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[480px] max-h-[680px] flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden px-4 sm:px-6 lg:px-8 select-none">
        
        {/* Slideshow Background Layers with Smooth Cross-Fade */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === idx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '700ms' }}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover object-center brightness-50"
            />
          </div>
        ))}

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90 z-0" />

        {/* Manual Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition opacity-80 hover:opacity-100 shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition opacity-80 hover:opacity-100 shadow-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Hero Content (Compact Vertical Spacing for Instant Full-View on Laptops) */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 px-2 -mt-2 sm:-mt-4">
          
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium tracking-wide">
            <Crown className="w-3.5 h-3.5 text-amber-300 inline" />
            <span>Apartments by Royalties • Lagos, Nigeria</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-serif font-black tracking-tight leading-tight text-white">
            Premium Living. Exceptional Experiences.
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-xl mx-auto font-light leading-relaxed">
            Discover premium yet affordable apartments, property opportunities and lifestyle experiences with Apartments by Royalties.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 sm:pt-2">
            <Link
              to="/properties"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition shadow-lg"
            >
              Explore Available Properties
            </Link>

            <a
              href={heroWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Slide Indicators & Tags */}
        <div className="absolute bottom-3 sm:bottom-4 inset-x-0 z-20 flex flex-col items-center space-y-1.5">
          <div className="text-[10px] sm:text-[11px] font-medium text-slate-300 bg-black/60 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/10">
            {heroSlides[currentSlide].tag} • {heroSlides[currentSlide].caption}
          </div>
          <div className="flex items-center space-x-1.5">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-6 sm:w-7 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

      </section>

      {/* 2. OUR 6 CORE SERVICE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Comprehensive Real Estate & Lifestyle
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950">
            Our 6 Service Pillars
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light">
            Everything you need for exceptional living, executive mobility, and prime property ventures across Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-2">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">
              Shortlet Apartments
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Curated, fully-serviced luxury apartments in prime locations (Lekki Phase 1, Oniru, Ikate) featuring 24/7 power, swimming pools, fitness centers, super-fast Wi-Fi, and dedicated concierge care.
            </p>
            <Link
              to="/properties"
              className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-slate-600 space-x-1 pt-2"
            >
              <span>View Available Units</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-2">
              <HomeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">
              House Rentals
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Flexible residential leasing solutions including weekly, monthly, and yearly executive tenancies in secure, gated estates across the Lagos Island corridor.
            </p>
            <a
              href={generateWhatsAppLink("Hello Apartments by Royalties, I would like to enquire about House Rentals (Weekly/Monthly/Yearly).")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-slate-600 space-x-1 pt-2"
            >
              <span>Enquire on Rentals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-2">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">
              Car Rentals
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Executive mobility with our pristine fleet of luxury SUVs, sedans, and bulletproof options (Mercedes-Benz, Land Cruiser Prado, Lexus), complete with vetted professional chauffeurs.
            </p>
            <a
              href={generateWhatsAppLink("Hello Apartments by Royalties, I would like to enquire about Executive Car Rentals.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-slate-600 space-x-1 pt-2"
            >
              <span>Request Fleet Options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-2">
              <Ship className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">
              Boat Rentals & Charters
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Private luxury yachts and speedboats for coastal cruises, private beach parties (Ilashe, Tarkwa Bay), corporate entertaining, and unforgettable waterfront experiences.
            </p>
            <a
              href={generateWhatsAppLink("Hello Apartments by Royalties, I would like to enquire about Boat & Yacht Charters.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-slate-600 space-x-1 pt-2"
            >
              <span>Book Yacht Charter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 5 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-2">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">
              Property Sales
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Direct access to vetted luxury homes, off-plan residential developments, and high-capital appreciation land parcels in Lekki, Ikoyi, Victoria Island, and Epe.
            </p>
            <a
              href={generateWhatsAppLink("Hello Apartments by Royalties, I would like to enquire about Property & Land Sales.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-slate-600 space-x-1 pt-2"
            >
              <span>Explore Properties for Sale</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 6 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-2">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">
              Joint Venture Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Strategic partnerships for property developers, land owners, and institutional investors looking to co-develop high-yield residential and commercial projects.
            </p>
            <a
              href={generateWhatsAppLink("Hello Apartments by Royalties, I would like to discuss Joint Venture (JV) Opportunities.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-slate-600 space-x-1 pt-2"
            >
              <span>Discuss JV Partnerships</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. DEDICATED REAL ESTATE PROPERTY SALES & JOINT VENTURE (JV) INVESTMENT HUB (DEEPER ASH THEME) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealEstateJVSection />
      </section>

      {/* 4. PRIME LAGOS COVERAGE HUBS (3 ON TOP ROW, 3 ON BOTTOM ROW) */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Strategic Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950">
              Prime Lagos Coverage
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              We operate across Lagos' most prestigious and accessible residential hubs.
            </p>
          </div>

          {/* 3 Cards per Row on Desktop (2 rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRIME_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3 hover:border-slate-300 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                    {loc.tagline || 'Prime Hub'}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-lg text-slate-950">{loc.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS - SEAMLESS GUEST & CLIENT JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Effortless Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            From initial search to check-in, our concierge makes every step smooth and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-100 space-y-3 relative">
            <span className="text-3xl font-serif font-bold text-slate-200">01</span>
            <h4 className="font-serif font-bold text-base text-slate-950">Explore or Specify</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Browse our verified property snippets or send your custom location, dates, and budget directly to our concierge.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 space-y-3 relative">
            <span className="text-3xl font-serif font-bold text-slate-200">02</span>
            <h4 className="font-serif font-bold text-base text-slate-950">Direct WhatsApp Chat</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connect in seconds with our dedicated team to confirm live availability, exact rates, and tailored requests.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 space-y-3 relative">
            <span className="text-3xl font-serif font-bold text-slate-200">03</span>
            <h4 className="font-serif font-bold text-base text-slate-950">Inspection & Confirmation</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Request a live video walkthrough or physical visit. Confirm dates with secure payment and caution deposit details.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 space-y-3 relative">
            <span className="text-3xl font-serif font-bold text-slate-200">04</span>
            <h4 className="font-serif font-bold text-base text-slate-950">VIP Arrival & Stay</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enjoy 24/7 power, dedicated estate hosts, fast Wi-Fi, and seamless checkout with rapid caution deposit refund.
            </p>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE PROPERTY MATCHER FINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PropertyMatcher />
      </section>

      {/* 7. WHY CHOOSE ROYALTIES PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-950">
            The Royal Standard
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-light">
            Core commitments ensuring peace of mind for every resident, traveler, and property investor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <Zap className="w-5 h-5 text-emerald-600 mb-1" />
            <h4 className="font-serif font-bold text-sm text-slate-900">24/7 Power Guarantee</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Zero interruptions. All properties feature robust primary power plus automatic heavy-duty generators and inverters.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1" />
            <h4 className="font-serif font-bold text-sm text-slate-900">100% Verified Properties</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every listing is physically inspected and authenticated. What you see in our real galleries is exactly what you get.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <MessageCircle className="w-5 h-5 text-emerald-600 mb-1" />
            <h4 className="font-serif font-bold text-sm text-slate-900">Instant WhatsApp Concierge</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              No endless automated phone menus. Chat directly with a human concierge at 08135031549 for rapid assistance.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              Looking for your next apartment or property opportunity?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Connect with Apartments by Royalties today. Tell us your requirements or preferred location and let us arrange the perfect space or service for you.
            </p>
            <div className="pt-2">
              <a
                href={heroWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Enquire Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
