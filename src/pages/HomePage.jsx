import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  ArrowRight, 
  Crown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { generateWhatsAppLink } from '../data/company';
import { PRIME_LOCATIONS, PROPERTIES } from '../data/listings';
import PropertyMatcher from '../components/PropertyMatcher';
import PropertyCard from '../components/PropertyCard';
import RealEstateJVSection from '../components/RealEstateJVSection';
import BoatFleetSection from '../components/BoatFleetSection';
import VideoGallerySection from '../components/VideoGallerySection';
import ExecutiveCarFleetSection from '../components/ExecutiveCarFleetSection';

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

  const servicePillars = [
    {
      title: 'Shortlet Apartments',
      image: '/images/apartments/siscilia-aqua/photo-01.jpg',
      description: 'Fully serviced stays in Lekki, Oniru and Ikate with 24/7 power, fast Wi-Fi and concierge care.',
      label: 'View available units',
      to: '/properties'
    },
    {
      title: 'House Rentals',
      image: '/images/apartments/oniru-4bed/photo-10.jpg',
      description: 'Flexible weekly, monthly and yearly homes in secure gated estates across Lagos Island.',
      label: 'Enquire on rentals',
      href: generateWhatsAppLink('Hello Apartments by Royalties, I would like to enquire about House Rentals (Weekly/Monthly/Yearly).')
    },
    {
      title: 'Car Rentals',
      image: '/images/cars/range-rover-2025.png',
      description: 'Executive SUVs, Rolls-Royce, Lamborghinis and VIP vans with vetted chauffeurs for seamless Lagos mobility.',
      label: 'View luxury car fleet',
      href: '#car-fleet'
    },
    {
      title: 'Boat Rentals & Charters',
      image: '/images/apartments/siscilia-aqua/photo-23.jpg',
      description: 'Private yacht and speedboat experiences for coastal cruises, celebrations and corporate hosting.',
      label: 'Book a charter',
      href: generateWhatsAppLink('Hello Apartments by Royalties, I would like to enquire about Boat & Yacht Charters.')
    },
    {
      title: 'Property Sales',
      image: '/images/about/about-exterior.jpg',
      description: 'Vetted homes, off-plan developments and investment land in prime Lagos locations.',
      label: 'Explore properties for sale',
      href: generateWhatsAppLink('Hello Apartments by Royalties, I would like to enquire about Property & Land Sales.')
    },
    {
      title: 'Joint Venture Opportunities',
      image: '/images/about/real-estate-jv.jpg',
      description: 'Structured partnerships connecting landowners with reputable property developers and investors.',
      label: 'Discuss a partnership',
      href: generateWhatsAppLink('Hello Apartments by Royalties, I would like to discuss Joint Venture (JV) Opportunities.')
    }
  ];

  const locationImages = [
    '/images/apartments/siscilia-aqua/photo-05.jpg',
    '/images/apartments/oniru-4bed/photo-01.jpg',
    '/images/apartments/ikate-2bed/photo-01.jpg',
    '/images/apartments/oniru-4bed/photo-18.jpg',
    '/images/apartments/siscilia-aqua/photo-15.jpg',
    '/images/about/real-estate-jv.jpg'
  ];

  const royalStandards = [
    {
      image: '/images/apartments/siscilia-aqua/photo-03.jpg',
      title: '24/7 Power Guarantee',
      description: 'Reliable primary power backed by generators and inverters for an uninterrupted stay.'
    },
    {
      image: '/images/apartments/oniru-4bed/photo-10.jpg',
      title: '100% Verified Properties',
      description: 'Every listing is physically inspected, so the real gallery matches what welcomes you.'
    },
    {
      image: '/images/apartments/ikate-2bed/photo-02.jpg',
      title: 'Personal Concierge',
      description: 'Speak directly with our team on WhatsApp for fast, human assistance from enquiry to checkout.'
    }
  ];

  const journeySteps = [
    {
      number: '01',
      image: '/images/apartments/siscilia-aqua/photo-01.jpg',
      title: 'Explore or Specify',
      description: 'Browse verified stays or tell our concierge your location, dates and budget.'
    },
    {
      number: '02',
      image: '/images/apartments/oniru-4bed/photo-18.jpg',
      title: 'Chat Directly',
      description: 'Confirm live availability, rates and special requests with our team on WhatsApp.'
    },
    {
      number: '03',
      image: '/images/apartments/ikate-2bed/photo-03.jpg',
      title: 'Inspect & Confirm',
      description: 'Request a live walkthrough or visit, then secure your preferred dates.'
    },
    {
      number: '04',
      image: '/images/apartments/oniru-4bed/photo-01.jpg',
      title: 'Arrive & Enjoy',
      description: 'Check in smoothly and enjoy dependable power, Wi-Fi and attentive hosting.'
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

      {/* 2. FEATURED VERIFIED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Real homes. Real photographs.
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-950">
              Featured stays in Lagos
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Step inside our verified apartments before you book. Every image below comes from the property gallery.
            </p>
          </div>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-emerald-700 transition"
          >
            <span>See every property</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 3. PHOTO-LED SERVICE PILLARS */}
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
          {servicePillars.map((service) => {
            const content = (
              <>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} by Apartments by Royalties`}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 right-5 text-xl font-serif font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {service.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </>
            );

            return service.to ? (
              <Link key={service.title} to={service.to} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition">
                {content}
              </Link>
            ) : (
              <a key={service.title} href={service.href} target="_blank" rel="noreferrer" className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      {/* 4. EXECUTIVE & LUXURY CAR FLEET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExecutiveCarFleetSection />
      </section>

      {/* 5. WATERFRONT BOAT FLEET, LUXURY YACHTS & JET SKIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BoatFleetSection />
      </section>

      {/* 6. VERIFIED YOUTUBE LIVE VIDEO WALKTHROUGHS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoGallerySection />
      </section>

      {/* 7. DEDICATED REAL ESTATE PROPERTY SALES & JOINT VENTURE (JV) INVESTMENT HUB (DEEPER ASH THEME) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealEstateJVSection />
      </section>

      {/* 8. PRIME LAGOS COVERAGE HUBS (3 ON TOP ROW, 3 ON BOTTOM ROW) */}
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
                className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={locationImages[idx]}
                    alt={`Luxury property in ${loc.name}`}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute left-4 bottom-4 text-[10px] font-semibold text-white uppercase tracking-wider bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                    {loc.tagline || 'Prime Hub'}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="font-serif font-bold text-lg text-slate-950">{loc.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{loc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS - SEAMLESS GUEST & CLIENT JOURNEY */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeySteps.map((step) => (
            <div key={step.number} className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative h-40 overflow-hidden">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <span className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-slate-950 font-serif font-bold flex items-center justify-center shadow-sm">
                  {step.number}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-serif font-bold text-base text-slate-950">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. INTERACTIVE PROPERTY MATCHER FINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PropertyMatcher />
      </section>

      {/* 10. WHY CHOOSE ROYALTIES PILLARS */}
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
          {royalStandards.map((standard) => (
            <div key={standard.title} className="group rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden">
              <img
                src={standard.image}
                alt={standard.title}
                className="w-full h-44 object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-5 space-y-2">
                <h4 className="font-serif font-bold text-base text-slate-900">{standard.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{standard.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FINAL CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <img
            src="/images/apartments/oniru-4bed/photo-10.jpg"
            alt="Luxury Lagos apartment interior"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
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
