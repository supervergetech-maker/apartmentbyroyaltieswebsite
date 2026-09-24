import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Properties', path: '/properties' },
    { name: 'Contact', path: '/contact' },
  ];

  const quickWhatsAppUrl = generateWhatsAppLink(
    "Hello Apartments by Royalties, I would like to make an enquiry about your properties and services."
  );

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo/logo.png"
              alt="Apartments by Royalties Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Prominent WhatsApp CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition shadow-sm flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-emerald-600 text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive ? 'bg-slate-50 text-slate-950 font-semibold' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-slate-950 text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
