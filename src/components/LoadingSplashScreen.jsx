import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';

export default function LoadingSplashScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress bar animation over ~2.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Trigger smooth fade out at 2.7s
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2700);

    // Completely unmount splash at 3.2s
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-700 select-none ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Brand Centerpiece */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-5 px-6 max-w-sm">
        
        {/* Logo Container with Subtle Float & Shimmer */}
        <div className="relative p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
          <img
            src="/images/logo/logo-white.png"
            alt="Apartments by Royalties"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-fade-in"
          />
        </div>

        {/* Brand Name & Tagline */}
        <div className="space-y-1.5 animate-fade-in">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider text-amber-300 uppercase">
            <Crown className="w-3.5 h-3.5" />
            <span>Apartments by Royalties</span>
          </div>
          <p className="text-xs text-slate-400 font-light tracking-wide">
            Premium Living • Exceptional Experiences
          </p>
        </div>

        {/* Minimalist Gold Progress Bar */}
        <div className="w-48 sm:w-56 space-y-2 pt-2">
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-100 ease-out rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-500 font-mono text-center tracking-widest">
            {progress}%
          </p>
        </div>

      </div>

      {/* Bottom Subtle Location Tag */}
      <div className="absolute bottom-8 text-[11px] text-slate-600 font-medium tracking-widest uppercase">
        Lagos, Nigeria
      </div>
    </div>
  );
}
