export const COMPANY = {
  name: "Apartments by Royalties",
  tagline: "Premium Living. Exceptional Experiences.",
  description: "Apartments by Royalties provides premium yet affordable living, property and lifestyle services, ranging from shortlet apartments and residential rentals to property sales, car rentals, boat experiences and real-estate joint ventures.",
  phone: "08135031549",
  whatsappNumber: "2348135031549",
  email: "apartmentsbyroyalties@gmail.com",
  socials: {
    tiktok: "https://tiktok.com/@apartmentsbyroyalties",
    whatsapp: "https://wa.me/2348135031549",
  },
  services: [
    {
      id: "shortlets",
      title: "Shortlet Apartments",
      description: "Luxury and budget-friendly serviced apartments for short and medium stays in prime locations."
    },
    {
      id: "rentals",
      title: "House Rentals",
      description: "Flexible residential leases available on weekly, monthly, and yearly terms."
    },
    {
      id: "cars",
      title: "Car Rentals",
      description: "Executive and luxury vehicle hire for personal, corporate, and event mobility."
    },
    {
      id: "boats",
      title: "Boat Rentals",
      description: "Private boat charters and yacht cruises for lagoon tours and beach experiences."
    },
    {
      id: "sales",
      title: "Property Sales",
      description: "Verified residential and commercial houses and land for outright acquisition."
    },
    {
      id: "jv",
      title: "Joint Venture Opportunities",
      description: "Real estate development partnerships connecting verified landowners with capable developers."
    }
  ]
};

export const generateWhatsAppLink = (message) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encoded}`;
};
