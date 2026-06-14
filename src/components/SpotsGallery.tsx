/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Flower, MapPin, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations, touristSpots } from '../data';

interface SpotsGalleryProps {
  currentLang: Language;
}

export default function SpotsGallery({ currentLang }: SpotsGalleryProps) {
  const t = translations[currentLang];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + touristSpots.length) % touristSpots.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % touristSpots.length);
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-10 bg-white border-b border-black/10" id="tourist-spots">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="w-full text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-brand-gold font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            <Compass className="w-4 h-4" />
            <span>HERITAGE SIGHTS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] font-bold tracking-tight uppercase mt-3">
            {t.spotsHeader}
          </h2>
          <p className="text-xs text-[#1a1a1a]/60 font-sans max-w-xl mx-auto mt-3 leading-relaxed">
            {t.spotsSub}
          </p>
          <div className="w-16 h-[1px] bg-brand-gold mt-4"></div>
        </div>

        {/* Scenic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="spots-grid">
          {touristSpots.map((spot, idx) => (
            <div
              key={spot.name}
              className="bg-white border border-black/10 hover:border-brand-gold transition-all duration-300 relative group rounded-none"
            >
              {/* Picture Frame */}
              <div className="relative overflow-hidden aspect-[4/3] border-b border-black/10">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-all filter brightness-[0.93] group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent duration-300 transition-all"></div>
                
                {/* Click Zoom overlay widget */}
                <button
                  onClick={() => setLightboxIndex(idx)}
                  className="absolute bottom-3 right-3 p-2 bg-white text-brand-gold hover:bg-brand-gold hover:text-white rounded-none border border-black/10 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-none z-10"
                  aria-label={`View larger image of ${spot.name}`}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Metadata */}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-[9px] font-mono tracking-[0.2em] font-bold text-[#1a1a1a]/50 uppercase">
                    {spot.highlight}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-[#1a1a1a] line-clamp-1 group-hover:text-brand-gold transition-colors uppercase tracking-wide">
                  {spot.name}
                </h3>

                <p className="text-xs text-[#1a1a1a]/70 font-sans leading-relaxed line-clamp-3">
                  {spot.description}
                </p>
              </div>

              {/* Bottom tag bar */}
              <div className="border-t border-black/5 px-5 py-3.5 flex justify-between items-center bg-[#f9f7f2]/20">
                <span className="text-[9px] font-mono text-[#1a1a1a]/40 font-semibold tracking-wider">SPOT_0{idx + 1}</span>
                <button
                  onClick={() => setLightboxIndex(idx)}
                  className="text-[10px] font-mono font-bold text-brand-gold hover:text-[#1a1a1a] transition-colors uppercase tracking-[0.25em] flex items-center gap-1"
                >
                  <span>SUHIRA</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Slideshow */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 bg-opacity-95"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close buttons */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-none border border-white/10 transition-all duration-300"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider container */}
            <div className="relative max-w-5xl w-full flex items-center justify-center">
              {/* Previous arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:-left-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-none transition-all duration-300 pointer-events-auto z-10"
                aria-label="Previous Spotlight"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image in lightbox */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-3 md:p-4 border border-white/10 pointer-events-auto rounded-none shadow-none relative w-full h-[350px] md:h-[600px]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={touristSpots[lightboxIndex].image}
                  alt={touristSpots[lightboxIndex].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Traditional overlay detail card inside slider lightbox */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-sm p-5 md:p-6 border border-black/10 rounded-none max-w-md shadow-none">
                  <div className="text-[10px] font-mono text-brand-gold font-bold tracking-[0.25em] uppercase mb-1.5">
                    {touristSpots[lightboxIndex].highlight}
                  </div>
                  <h4 className="font-serif font-bold text-lg md:text-xl text-[#1a1a1a] uppercase leading-none mb-2">
                    {touristSpots[lightboxIndex].name}
                  </h4>
                  <p className="text-xs text-[#1a1a1a]/70 font-sans leading-relaxed">
                    {touristSpots[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Next arrows */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:-right-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-none transition-all duration-300 pointer-events-auto z-10"
                aria-label="Next Spotlight"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail markers at the bottom */}
            <div className="flex gap-2 mt-6 pointer-events-auto">
              {touristSpots.map((spot, i) => (
                <button
                  key={spot.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`w-14 h-10 border overflow-hidden transition-all duration-250 rounded-none ${
                    lightboxIndex === i ? 'border-white scale-105 opacity-100' : 'border-white/10 opacity-40 hover:opacity-75'
                  }`}
                >
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
