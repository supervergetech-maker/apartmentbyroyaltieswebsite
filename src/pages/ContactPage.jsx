import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, ExternalLink, Clock, MapPin } from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';
import FaqAccordion from '../components/FaqAccordion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Shortlet Apartments',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `*NEW ENQUIRY — APARTMENTS BY ROYALTIES*\n`;
    text += `👤 *Name:* ${formData.name}\n`;
    text += `📞 *Phone:* ${formData.phone}\n`;
    text += `🏷️ *Service:* ${formData.service}\n`;
    if (formData.message) text += `💬 *Message:* ${formData.message}\n`;
    
    const url = generateWhatsAppLink(text);
    window.open(url, '_blank');
  };

  const generalWhatsApp = generateWhatsAppLink(
    "Hello Apartments by Royalties, I would like to get in touch with your team."
  );

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. PAGE HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-950">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-light">
          Have an enquiry about our shortlets, rentals, cars, boats, or property sales? Get in touch with our 24/7 concierge.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Information Cards */}
        <div className="space-y-4">
          <a
            href={generalWhatsApp}
            target="_blank"
            rel="noreferrer"
            className="block p-6 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-emerald-300 transition group shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block">WhatsApp Concierge</span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                  {COMPANY.phone}
                </p>
                <span className="text-[11px] text-emerald-600 font-medium">⚡ Active 24/7</span>
              </div>
            </div>
          </a>

          <a
            href={`tel:${COMPANY.phone}`}
            className="block p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 transition group shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Phone Call</span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-slate-700 transition">
                  {COMPANY.phone}
                </p>
                <span className="text-[11px] text-slate-400">Direct client hotline</span>
              </div>
            </div>
          </a>

          <a
            href={`mailto:${COMPANY.email}`}
            className="block p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 transition group shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Email Address</span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-slate-700 transition truncate max-w-[200px]">
                  {COMPANY.email}
                </p>
                <span className="text-[11px] text-slate-400">Corporate & partnership inquiries</span>
              </div>
            </div>
          </a>

          <a
            href={COMPANY.socials.tiktok}
            target="_blank"
            rel="noreferrer"
            className="block p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 transition group shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                <span className="font-bold text-xs">TT</span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Official TikTok</span>
                <p className="text-sm font-bold text-slate-900 group-hover:text-slate-700 transition flex items-center space-x-1">
                  <span>@apartments_by_royalties</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </p>
                <span className="text-[11px] text-slate-400">Video tours & updates</span>
              </div>
            </div>
          </a>
        </div>

        {/* Form Column (2 Cols) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-950">
                Send an Direct Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill the details below to format an enquiry directly to our WhatsApp concierge.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 08135031549"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Service of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50"
                >
                  <option value="Shortlet Apartments">Shortlet Apartments (Lekki / Oniru / Ikate / Ikoyi)</option>
                  <option value="House Rentals">House Rentals (Weekly / Monthly / Yearly)</option>
                  <option value="Car Rentals">Executive Car Fleet (Mercedes / Land Cruiser / Prado)</option>
                  <option value="Boat Rentals">Boat & Yacht Charters (Ilashe / Tarkwa Bay)</option>
                  <option value="Property Sales">Property Sales (Houses & Prime Land)</option>
                  <option value="Joint Venture Opportunities">Joint Venture & Development Opportunities</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you are looking for (dates, preferred neighborhood, bedroom count, budget)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs transition flex items-center justify-center space-x-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Send Enquiry to WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* FAQ Accordion Section */}
      <FaqAccordion />

    </div>
  );
}
