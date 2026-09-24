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
