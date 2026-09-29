// Helper functions for real photos
const getSisciliaImages = () => {
  const imgs = [];
  for (let i = 1; i <= 27; i++) {
    imgs.push(`/images/apartments/siscilia-aqua/photo-${i < 10 ? '0' + i : i}.jpg`);
  }
  return imgs;
};

const getOniruImages = () => {
  const imgs = [];
  for (let i = 1; i <= 21; i++) {
    imgs.push(`/images/apartments/oniru-4bed/photo-${i < 10 ? '0' + i : i}.jpg`);
  }
  return imgs;
};

const getIkateImages = () => {
  const imgs = [];
  for (let i = 1; i <= 4; i++) {
    imgs.push(`/images/apartments/ikate-2bed/photo-0${i}.jpg`);
  }
  return imgs;
};

// ONLY REAL VERIFIED PROPERTIES WITH AUTHENTIC PHOTOGRAPHY
export const PROPERTIES = [
  {
    id: "siscilia-aqua-lekki",
    title: "SISCILIA AQUA — Stunning 1 Bedroom Apartment",
    location: "Off Admiralty, Lekki Phase 1, Lagos",
    area: "Lekki Phase 1",
    type: "1 Bedroom Luxury Apartment",
    category: "shortlet",
    bedrooms: 1,
    bathrooms: 1,
    images: getSisciliaImages(),
    description: "SISCILIA AQUA is a stunning 1-bedroom luxury apartment located off Admiralty, Lekki Phase 1. Tastefully furnished with high-end interior, an in-wall aquarium, in-built JBL sound system, swimming pool, gym, elevator, wine bar, and 24 hours electricity.",
    features: [
      "Exquisite interior",
      "Spacious living room",
      "Swimming pool",
      "Gym",
      "Elevator",
      "Aquarium",
      "Super large living room",
      "Dining area for 3",
      "In-built JBL speaker",
      "Spacious room",
      "Super fast unlimited Wi-Fi",
      "Wine bar",
      "Serene environment",
      "24 hours electricity",
      "24 hours security",
      "Housekeeping",
      "Cooking service (in-house chef / food order)",
      "DStv",
      "Netflix",
      "En-suite room",
      "Exquisite bathroom",
      "Parking space",
      "Microwave",
      "Refrigerator",
      "24/7 reception operation",
      "Air-conditioned workspace (within the facility)"
    ],
    cautionDeposit: null,
    badge: "Lekki Phase 1"
  },
  {
    id: "oniru-4bed-premium",
    title: "Exclusive 4 Bedrooms Premium Shortlet Apartment",
    location: "Oniru (Close to FOUR POINTS HOTEL), Victoria Island, Lagos",
    area: "Victoria Island / Oniru",
    type: "4 Bedrooms Luxury Apartment",
    category: "shortlet",
    bedrooms: 4,
    bathrooms: 4,
    images: getOniruImages(),
    description: "Exclusive 4 Bedrooms Premium Shortlet Apartment in Oniru located close to FOUR POINTS HOTEL. Fully furnished and available for immediate booking in a calm, peaceful, and secured environment.",
    features: [
      "Fitted kitchen with modern amenities",
      "Swimming pool",
      "24/7 electricity",
      "Calm, peaceful & secured estate",
      "Available for immediate booking"
    ],
    cautionDeposit: "100k",
    badge: "Close to Four Points Hotel"
  },
  {
    id: "ikate-2bed-terrace-duplex",
    title: "Deluxe 2 Bedroom Terrace Duplex with Pool, Gym and PS5",
    location: "Ikate, Lekki, Lagos",
    area: "Ikate / Lekki",
    type: "2 Bedroom Terrace Duplex",
    category: "shortlet",
    bedrooms: 2,
    bathrooms: 2,
    images: getIkateImages(),
    description: "Deluxe 2 Bedroom Terrace Duplex with Pool, Gym and PS5. Tastefully furnished and nestled in a serene environment in Ikate. Features a gated and secured estate, starlights ceiling, PS5 console, swimming pool, and fully equipped kitchen.",
    features: [
      "Gated and secured estate",
      "24 hours electricity",
      "Housekeeping",
      "Starlights ceiling",
      "PlayStation 5 (PS5)",
      "Super fast Wi-Fi",
      "Swimming pool",
      "Modern gym",
      "Ample parking space",
      "Fully equipped kitchen"
    ],
    cautionDeposit: null,
    badge: "PS5 & Starlights"
  }
];

export const PRIME_LOCATIONS = [
  {
    name: "Lekki Phase 1",
    tagline: "Vibrant Lifestyle & Fine Dining",
    description: "Flagship shortlets off Admiralty Way with rapid access to Lekki's top restaurants and corporate offices."
  },
  {
    name: "Oniru & Victoria Island",
    tagline: "Coastal Prestige & Commercial Hub",
    description: "Prime residences close to Four Points by Sheraton, Landmark Beach, and Lagos central business corridors."
  },
  {
    name: "Ikate & Elegushi",
    tagline: "Serene Gated Estates",
    description: "Peaceful residential enclaves featuring contemporary terrace duplexes with swimming pool and gym facilities."
  },
  {
    name: "Ikoyi",
    tagline: "Diplomatic & Executive Luxury",
    description: "Quiet, elite neighborhoods ideal for executive stays, corporate delegations, and serene long-term leases."
  },
  {
    name: "Banana Island",
    tagline: "Ultra-Exclusive Waterfront",
    description: "High-security island enclave offering ultra-luxury villas and waterfront investment opportunities."
  },
  {
    name: "Epe Growth Corridor",
    tagline: "Strategic Real Estate & JVs",
    description: "High-yield investment land parcels and commercial joint venture developments with fast appreciation."
  }
];

// AUTHENTIC EXECUTIVE & LUXURY CAR FLEET (WITH REAL PHOTOGRAPHY)
export const CAR_FLEET = [
  {
    id: "lamborghini-urus-2024",
    title: "2024 Lamborghini Urus",
    category: "Exotic Super SUV",
    image: "/images/cars/lamborghini-urus-2024.png",
    rate: "Daily Rental / Events",
    features: ["Vibrant Green Exterior", "Twin-Turbo V8", "Executive Chauffeur", "VIP Airport Pickup", "Photo Shoots & Video Sets"],
    description: "2024 Lamborghini Urus available for rental in Lagos. Perfect for daily rental, high-profile arrivals, music videos, and luxury experiences.",
    badge: "2024 Super SUV",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the 2024 Lamborghini Urus for rental in Lagos."
  },
  {
    id: "rolls-royce-cullinan-2024",
    title: "2024 Rolls-Royce Cullinan",
    category: "Ultra-Luxury SUV",
    image: "/images/cars/rolls-royce-cullinan-2024.png",
    rate: "Daily Rental / VIP Escort",
    features: ["Bespoke Metallic Finish", "Starlight Headliner", "Executive Armored Options", "Chauffeur Driven", "Red Carpet Protocol"],
    description: "2024 Rolls-Royce Cullinan available in Lagos for supreme luxury transport, executive delegations, and high-end events.",
    badge: "2024 Ultra Luxury",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the 2024 Rolls-Royce Cullinan in Lagos."
  },
  {
    id: "range-rover-2025",
    title: "2025 Range Rover Autobiography",
    category: "Executive Luxury SUV",
    image: "/images/cars/range-rover-2025.png",
    rate: "Daily Rental / Airport Pickup",
    features: ["Latest 2025 Model", "Black Executive Spec", "Airport Pickup & Dropoff", "Photo Shoots & Daily Hire", "Pristine Leather Comfort"],
    description: "2025 Range Rover available for rental in Lagos. Ideal for airport pickups, photo shoots, corporate logistics, and daily rental.",
    badge: "2025 Flagship",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the 2025 Range Rover in Lagos."
  },
  {
    id: "rolls-royce-ghost-2017",
    title: "2017 Rolls-Royce Ghost",
    category: "Ultra-Luxury Sedan",
    image: "/images/cars/rolls-royce-ghost-2017.png",
    rate: "Daily Hire / Weddings / VIP",
    features: ["Pristine Pearl White", "Spirit of Ecstasy", "Luxury Wedding Hire", "VIP Chauffeur Included", "Executive Protocol"],
    description: "2017 Rolls-Royce Ghost available for rental in Lagos. Premier choice for luxury weddings, executive transport, and memorable arrivals.",
    badge: "Rolls-Royce Ghost",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the 2017 Rolls-Royce Ghost in Lagos."
  },
  {
    id: "lexus-gx-460",
    title: "Lexus GX 460 Luxury SUV",
    category: "Executive SUV",
    image: "/images/cars/lexus-gx460.png",
    rate: "Daily / Weekly Rental",
    features: ["All-Terrain Luxury", "Executive Tint", "Reliable V8 Power", "Vetted Chauffeur", "Lagos City & Interstate Mobility"],
    description: "GX 460 Lexus available for rental in Lagos. Rugged, refined, and dependable for executive transit and secure daily city travel.",
    badge: "Executive SUV",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the Lexus GX 460 in Lagos."
  },
  {
    id: "toyota-hilux-adventure",
    title: "Toyota Hilux Adventure SRS",
    category: "Utility & Security Escort",
    image: "/images/cars/hilux-adventure.png",
    rate: "Contact for rates",
    features: ["Adventure Package", "Hard Bed Cover", "Security Escort Ready", "12-Hour Daily Shift", "All-Terrain Capability"],
    description: "Toyota Hilux Adventure available for rental. Perfect for luggage support, security escorts, and project site mobility.",
    badge: "Toyota Hilux",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the Toyota Hilux Adventure."
  },
  {
    id: "benz-viano-vip-bus",
    title: "Mercedes-Benz Viano VIP Bus",
    category: "VIP Executive Van",
    image: "/images/cars/benz-viano-bus.png",
    rate: "Group / Delegation Hire",
    features: ["Conference Seating", "Ample Luggage Capacity", "Executive Air Conditioning", "Chauffeur Driven", "Family & Delegation Travel"],
    description: "Mercedes-Benz Viano VIP Bus available for rental in Lagos. Optimal comfort for corporate teams, VIP delegations, and family airport transfers.",
    badge: "VIP Bus",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the Mercedes-Benz Viano VIP Bus in Lagos."
  },
  {
    id: "mercedes-benz-c300",
    title: "Mercedes-Benz C300 4MATIC",
    category: "Executive Luxury Sedan",
    image: "/images/cars/benz-c300.png",
    rate: "Daily Rental / City Chauffeur",
    features: ["Crisp White Exterior", "4MATIC All-Wheel Drive", "Panoramic Sunroof", "Sport Styling", "City Mobility"],
    description: "Mercedes-Benz C300 available for rental in Lagos. Stylish, agile, and comfortable for personal executive transit and evening outings.",
    badge: "Mercedes C300",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the Mercedes-Benz C300 in Lagos."
  }
];

// AUTHENTIC BOAT & YACHT CHARTER FLEET
export const BOAT_FLEET = [
  {
    id: "luxury-yacht-15",
    title: "15-Seater Luxury Motor Yacht",
    category: "Luxury Yacht Charter",
    capacity: "15 Guests",
    duration: "Cruises & Island Day Trips",
    features: ["Teak Sun Deck", "Air-Conditioned Cabin", "Premium Sound System", "VIP Captain & Crew"],
    description: "Luxury yacht available for rental in Lagos for elite coastal cruises, private beach parties, and VIP sunset hosting.",
    badge: "VIP Yacht",
    depositNote: "Damage deposit (1-hour charter equivalent) refundable after 72 hours subject to no damages.",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the 15-Seater Luxury Yacht for a cruise/island trip."
  },
  {
    id: "house-boat-20",
    title: "20-Seater Executive House Boat",
    category: "House Boat Charter",
    capacity: "20 Guests",
    duration: "Hourly Charter (Min. 3 Hours)",
    features: ["Spacious Lounge Deck", "Onboard Restroom", "Surround Sound", "Shaded Seating Area"],
    description: "20-seater house boat available per hour (minimum 3 hours). Perfect for private group cruises and Ilashe beach trips.",
    badge: "20 Seater",
    depositNote: "Damage deposit (1-hour charter equivalent) refundable after 72 hours subject to no damages.",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the 20-Seater House Boat (Minimum 3 hours charter)."
  },
  {
    id: "house-boat-15",
    title: "15-Seater Premium House Boat",
    category: "House Boat Charter",
    capacity: "15 Guests",
    duration: "Hourly Charter (Min. 3 Hours)",
    features: ["Panoramic Lagoon Views", "Comfortable Seating", "Bluetooth Audio", "Safety Life Jackets"],
    description: "15-seater house boat available per hour (minimum 3 hours). Ideal for intimate celebrations, family trips, and coastal cruising.",
    badge: "15 Seater",
    depositNote: "Damage deposit (1-hour charter equivalent) refundable after 72 hours subject to no damages.",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the 15-Seater House Boat (Minimum 3 hours charter)."
  },
  {
    id: "house-boat-10",
    title: "10-Seater Private Cruise House Boat",
    category: "House Boat & Island Trips",
    capacity: "10 Guests",
    duration: "Hourly Charter (Min. 3 Hours)",
    features: ["Cozy Seating", "Lagoon Tours", "Island Beach Trips", "Professional Captain"],
    description: "10-seater boat available for rental in Lagos for cruises, beach excursions, and private island trips.",
    badge: "10 Seater",
    depositNote: "Damage deposit (1-hour charter equivalent) refundable after 72 hours subject to no damages.",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book the 10-Seater Boat for a cruise / island trip."
  },
  {
    id: "party-boat-45",
    title: "40–45 Seater Mega Party & Event Boat",
    category: "Group & Event Charter",
    capacity: "40–45 Guests",
    duration: "Group Charter / Event Hire",
    features: ["Multi-Level Party Deck", "High-Capacity Sound System", "Bar Station", "Restroom Facilities"],
    description: "40–45 seater boat available for rental. Actively taking bookings for corporate events, large celebrations, and group island trips.",
    badge: "Actively Taking Bookings",
    depositNote: "Damage deposit (1-hour charter equivalent) refundable after 72 hours subject to no damages.",
    whatsappMsg: "Hello Apartments by Royalties, I would like to enquire about booking the 40–45 Seater Mega Party Boat."
  },
  {
    id: "jet-ski-rental",
    title: "High-Performance Jet Ski",
    category: "Water Sports & Thrill Rides",
    capacity: "1–2 Persons",
    duration: "Per Session / Hour",
    features: ["High-Speed Engine", "Life Vests Included", "Lagoon & Beach Waters", "Safety Instructor On-Deck"],
    description: "Jet ski available for rental in Lagos for cruises, thrill rides, and beach day trips.",
    badge: "Water Sports",
    depositNote: "Standard safety briefing and deposit apply prior to ride.",
    whatsappMsg: "Hello Apartments by Royalties, I would like to book a Jet Ski rental in Lagos."
  }
];

// VERIFIED YOUTUBE VIDEO WALKTHROUGHS & SHOWCASE (EMBEDDED WITH NO LAG)
export const YOUTUBE_VIDEOS = [
  {
    id: "9TrEEXahsE0",
    title: "Luxury Shortlet Walkthrough & Living Experience",
    category: "Apartment Tour",
    tag: "Verified Walkthrough",
    description: "Take a virtual tour inside our fully furnished luxury suites in Lagos."
  },
  {
    id: "6SZTyBH85J4",
    title: "Luxury Yacht Cruise & Private Beach Experience",
    category: "Yacht & Boat Charter",
    tag: "Yacht Charter",
    description: "Experience coastal cruising to Ilashe and Tarkwa Bay on our luxury private yacht."
  },
  {
    id: "Hv--AfAYE48",
    title: "Executive House Boat Lagos Island Tour",
    category: "House Boat Charter",
    tag: "House Boat",
    description: "See our spacious 15 & 20 seater house boats in action on the Lagos lagoon."
  },
  {
    id: "lW-mRsLLvX0",
    title: "VIP Chauffeur & Luxury Executive Car Fleet",
    category: "Vehicle Fleet",
    tag: "Executive Fleet",
    description: "Pristine Mercedes-Benz, Lexus LX570, and Land Cruiser SUVs for executive travel."
  },
  {
    id: "fkis8obY8b0",
    title: "Exclusive Interior Ambiance & Smart Suite Tour",
    category: "Apartment Tour",
    tag: "Interior Highlights",
    description: "Explore the modern finishes, starlight ceiling lounges, and 24/7 power setup."
  },
  {
    id: "TJjEkK9g7SY",
    title: "Stunning Living Room & Master Suite Showcase",
    category: "Apartment Tour",
    tag: "Master Suite",
    description: "Close look at our spacious living rooms, fitted kitchens, and plush master bedrooms."
  },
  {
    id: "jlQjW99hRHg",
    title: "Waterfront Island Cruising & Day Trip Highlights",
    category: "Water Charter",
    tag: "Island Trips",
    description: "Cruise the Lagos waterways in comfort with our dedicated captains and crew."
  },
  {
    id: "lZ0OPvxXWqE",
    title: "Aircraft & Executive Luxury Travel Concierge",
    category: "VIP Aviation & Mobility",
    tag: "VIP Aircraft & Mobility",
    description: "For all your vehicle, boat, and aircraft rental services, Apartments by Royalties has you covered."
  }
];
