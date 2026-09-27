import React, { useState } from 'react';
import { Play, MessageCircle, Film, ExternalLink, X } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '../data/listings';
import { generateWhatsAppLink } from '../data/company';

export default function VideoGallerySection() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Video Tours' },
    { id: 'Apartment Tour', label: 'Apartments & Suites' },
    { id: 'Yacht & Boat Charter', label: 'Yachts & Boats' },
    { id: 'Vehicle Fleet', label: 'VIP Cars & Fleet' },
    { id: 'VIP Aviation & Mobility', label: 'Aircraft & Mobility' }
  ];

  const filteredVideos = selectedCategory === 'all'
    ? YOUTUBE_VIDEOS
    : YOUTUBE_VIDEOS.filter((v) => v.category === selectedCategory || v.tag.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="video-gallery" className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wide">
            <Film className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Video Walkthroughs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-slate-950">
            Watch Live Walkthroughs & Experiences
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
            Experience our shortlets, yacht cruises, car fleet, and luxury charters in action before you book. Click any video to play instantly.
          </p>
        </div>

        <a
          href={generateWhatsAppLink("Hello Apartments by Royalties, I would like to request more video walkthroughs for available units.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition shrink-0 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Request Custom Video on WhatsApp</span>
        </a>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
              selectedCategory === cat.id
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Video Grid with Lazy YouTube Embeds (Zero Page Lag) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => {
          const isPlaying = activeVideoId === video.id;
          const whatsappUrl = generateWhatsAppLink(`Hello Apartments by Royalties, I just watched the video tour for "${video.title}". Please share booking availability and rates.`);
          const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;

          return (
            <div
              key={video.id}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Video Player / Thumbnail Container (9:16 Aspect Ratio for Shorts) */}
              <div className="relative aspect-[9/14] bg-slate-950 overflow-hidden select-none">
                {isPlaying ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&controls=1&playsinline=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                    <button
                      onClick={() => setActiveVideoId(null)}
                      className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1.5 rounded-full backdrop-blur-md transition z-20 shadow-md"
                      title="Close Video"
                      aria-label="Close Video"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => setActiveVideoId(video.id)}
                    className="w-full h-full relative cursor-pointer group/thumb"
                  >
                    {/* YouTube High-Res Poster Thumbnail */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition duration-500 brightness-75"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                    {/* Top Tag */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        {video.tag}
                      </span>
                    </div>

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-emerald-600/90 group-hover/thumb:bg-emerald-500 text-white flex items-center justify-center shadow-2xl group-hover/thumb:scale-110 transition-transform duration-300 backdrop-blur-sm">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Bottom Label on Thumbnail */}
                    <div className="absolute bottom-3 inset-x-3 text-center">
                      <span className="text-[11px] font-medium text-white/90 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        Click to Play Video Tour
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Details & Actions */}
              <div className="p-5 space-y-3 flex flex-col justify-between flex-grow">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      {video.category}
                    </span>
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-red-600 text-xs inline-flex items-center gap-1 transition"
                      title="Watch on YouTube"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-slate-950 leading-snug line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold transition flex items-center justify-center space-x-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}