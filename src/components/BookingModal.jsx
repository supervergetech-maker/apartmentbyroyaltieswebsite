import React, { useState } from 'react';
import { X, Calendar, Users, Shield, MessageCircle } from 'lucide-react';
import { COMPANY, generateWhatsAppLink } from '../data/company';

export default function BookingModal({ property, isOpen, onClose }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [fullName, setFullName] = useState('');
  const [note, setNote] = useState('');

  if (!isOpen || !property) return null;

  const handleProceedWhatsApp = (e) => {
    e.preventDefault();

    let details = `*NEW BOOKING / AVAILABILITY INQUIRY*\n`;
    details += `---------------------------------\n`;
    details += `👑 *Property:* ${property.title}\n`;
    details += `📍 *Location:* ${property.location}\n`;
    if (property.cautionFee) details += `🛡️ *Caution Deposit:* ${property.cautionFee}\n`;
    if (fullName) details += `👤 *Client Name:* ${fullName}\n`;
    if (checkInDate) details += `📅 *Check-in Date:* ${checkInDate}\n`;
    if (checkOutDate) details += `📅 *Check-out Date:* ${checkOutDate}\n`;
    details += `👥 *Number of Guests:* ${guestCount}\n`;
    if (note) details += `📝 *Notes / Special Requests:* ${note}\n`;
    details += `---------------------------------\n`;
    details += `Kindly confirm current rates, availability, and booking instructions. Thank you!`;

    const url = generateWhatsAppLink(details);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-royal-950 text-white p-5 flex items-center justify-between border-b border-royal-800">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/30 flex items-center justify-center font-bold">
              👑
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white">Book / Inquire via WhatsApp</h3>
              <p className="text-xs text-slate-300 truncate max-w-[260px]">{property.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-royal-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleProceedWhatsApp} className="p-6 overflow-y-auto space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-gold-600" /> Check-in Date
              </label>
              <input
                type="date"
                required
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-gold-600" /> Check-out Date
              </label>
              <input
                type="date"
                required
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center">
              <Users className="w-3.5 h-3.5 mr-1 text-gold-600" /> Number of Guests
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Special Requests / Inquiries (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. In-house chef service, airport pick-up, late check-in..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
            />
          </div>

          {/* Location & Guarantee Summary */}
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-500 block">Location:</span>
              <span className="font-semibold text-royal-950">{property.location}</span>
            </div>
            <div className="text-right">
              <span className="text-emerald-700 font-medium flex items-center justify-end">
                <Shield className="w-3.5 h-3.5 mr-1" /> 24 Hours Electricity
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-emerald-700/20 transition text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Inquiry to WhatsApp ({COMPANY.phone})</span>
          </button>

          <p className="text-[11px] text-center text-slate-400">
            Clicking will format your inquiry and open WhatsApp to {COMPANY.phone}
          </p>
        </form>
      </div>
    </div>
  );
}
