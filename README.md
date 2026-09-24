# Apartments by Royalties — Luxury Real Estate & Lifestyle Web Platform

A production-grade, mobile-optimized multi-page web application built with **React**, **Vite**, and **Tailwind CSS** for **Apartments by Royalties**. 

Designed strictly to company standards with high-conversion real estate inquiries in Lagos, Nigeria, connecting interested clients directly to the company's WhatsApp concierge (**08135031549**) with pre-formatted booking, property acquisition, and Joint Venture details.

---

## 👑 Brand & Visual Identity
- **Logo Integration:** Features the official minimalist luxury **Apartments by Royalties** crest emblem in the sticky header, footer, hero badges, OpenGraph preview, and favicon.
- **Color Palette:**
  - **Royal Slate & Midnight Navy:** `#060B18`, `#0B132B`, `#1C2541`
  - **Regal Warm Gold:** `#C99E25`, `#DBB542`, `#EEDDA4`
  - **Pearl & Clean White:** `#FFFFFF`, `#F8FAFC`, `#EEF2F6`
  - **Conversion Emerald Green:** `#25D366`, `#16A34A`
- **Typography:** *Playfair Display* / *Cinzel* for luxury royal headings, *Plus Jakarta Sans* for clean, modern readability.

---

## 🧭 Page Architecture & Content Blueprint

### 1. Home Page (`/`)
- **Hero Section:** "Premium Living. Exceptional Experiences." with rotating clean, cute around-the-house imagery (living room, open kitchen with breakfast island, serene master suite, and cozy dining nook) cross-fading strictly every 5 seconds.
- **6 Core Service Pillars:**
  1. *Shortlet Apartments* (Lekki Phase 1, Oniru, Ikate, Ikoyi)
  2. *House Rentals* (Weekly, monthly, and yearly executive leases)
  3. *Executive Car Fleet* (Mercedes-Benz, Land Cruiser Prado, Lexus SUVs)
  4. *Boat & Yacht Charters* (Private cruises to Ilashe & Tarkwa Bay)
  5. *Property Sales* (Houses & verified high-yield land plots)
  6. *Joint Venture (JV) Opportunities* (Prime development land partnerships)
- **Strategic Real Estate & Joint Venture (JV) Investment Hub:**
  - Interactive tab switcher between **Property & Land Sales** and **Joint Venture (JV) Partnerships**.
  - Landowner & Developer dual value propositions.
  - Interactive 3-role selector (*Buyer*, *Landowner*, *Developer*) routing directly to the acquisitions lead on WhatsApp.
- **Prime Lagos Coverage Hubs:** Lekki Phase 1, Victoria Island & Oniru, Ikate Elegushi, Ikoyi, Banana Island, and Epe Growth Corridor.
- **How It Works:** 4-step guest & client journey.
- **The Royal Standard Guarantees:** 24/7 Power, 100% Verified Properties, Direct WhatsApp Concierge.

### 2. Properties Catalog (`/properties`)
- **Authentic Listing Showcase:** Displays real units with authentic photos and verified specs.
- **Location Filter Pills:** Dynamic filtering by `All Units`, `Lekki Phase 1`, `Oniru / Victoria Island`, and `Ikate`.
- **Photo Cycling Hover Animation:** Auto-slides through property photos every 2.8s on desktop hover, complete with dot indicators and manual arrows.
- **Snippet Notice:** Explains that displayed units are snippets of an extensive portfolio, encouraging guests to DM their custom location/bedroom needs.
- **Interactive Property Matcher:** Instant 3-step dropdown finder generating pre-formatted WhatsApp messages.
- **Booking Assurance Badges:** 24/7 Power Redundancy, Caution Deposit Guarantee, and Live Video Walkthroughs.
- **Typewriter FAQ Accordion:** Character-by-character typing answers to caution deposits, reservations, electricity, and diaspora payments.

### 3. Property Detail View (`/properties/:id`)
- **Fullscreen Interactive Lightbox (`PhotoLightbox`):** View all 27 / 21 / 4 photos in ultra-high resolution with keyboard navigation (`Esc`, `←`, `→`), thumbnail drawer, and counter.
- **Verified Amenities Grid:** Swimming pool, 24/7 electricity, elevator, JBL sound, PS5, etc.
- **VIP Lifestyle Add-ons:** One-click checkboxes for Airport VIP SUV Pickup, Ilashe Yacht Charter, and In-House Gourmet Chef that append to the prefilled WhatsApp enquiry.
- **Live Video Walkthrough CTA:** Direct WhatsApp link requesting a virtual tour or video inspection.

### 4. About Us (`/about`)
- **Distinct Brand Philosophy:** Royal standard hospitality, transparent caution deposit management, and strict property vetting.
- **Landlord & Property Owner Concierge:** Full-stack shortlet property management, revenue optimization, and maintenance care.
- **High-End Architectural Visuals:** Dedicated luxury interior parlour and lounge photography.

### 5. Contact Hub (`/contact`)
- **Direct Contacts:** WhatsApp Concierge (`08135031549`), Phone Call (`08135031549`), Email (`apartmentsbyroyalties@gmail.com`), and TikTok (`@apartments_by_royalties`).
- **Interactive WhatsApp Inquiry Form:** Collects Name, Phone, Service, and Requirements, routing directly to WhatsApp.
- **Typewriter FAQ Accordion:** Immediate answers to the top guest and client questions.

---

## 📱 Mobile Experience
- **Persistent Bottom Mobile Quick Bar:** Sticky bottom bar on mobile screens with instant "Call" and "WhatsApp" triggers.
- **Floating WhatsApp Pulse Button:** Persistent floating widget across desktop and mobile.
- **Responsive Touch Navigation:** Smooth mobile drawer with direct links and action button.

---

## 🚀 How to Run & Build

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```
Optimized static build output is saved to the `dist/` folder with relative assets (`base: './'`), ready for deployment to **Netlify**, **Vercel**, or standard web servers.
