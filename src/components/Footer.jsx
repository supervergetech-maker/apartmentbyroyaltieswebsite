import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const generalWhatsApp = generateWhatsAppLink(
    "Hello Apartments by Royalties, I would like to get more information about your properties and services."
  );

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo/logo-white.png"
                alt="Apartments by Royalties"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {COMPANY.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-slate-400 hover:text-white transition">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-100 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {COMPANY.services.map((srv) => (
                <li key={srv.id}>
                  <Link to="/properties" className="text-slate-400 hover:text-white transition">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-100 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href={`tel:${COMPANY.phone}`} 
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${COMPANY.email}`} 
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={generalWhatsApp} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition flex items-center space-x-2 font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
              <li>
                <a 
                  href={COMPANY.socials.tiktok} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2"
                >
                  <span>TikTok Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Apartments by Royalties. All rights reserved.</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
