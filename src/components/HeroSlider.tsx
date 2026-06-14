/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface HeroSliderProps {
  currentLang: Language;
}

export default function HeroSlider({ currentLang }: HeroSliderProps) {
  const t = translations[currentLang];
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/src/assets/images/hero_anao_uplands_1781397585846.jpg",
      heading: t.heroHeading1,
      sub: t.heroSub1,
      tag: currentLang === 'en' ? "Serene Uplands" : "Malinawong Kabukiran"
    },
    {
      image: "/src/assets/images/hero_anahaw_leaves_1781397600337.jpg",
      heading: t.heroHeading2,
      sub: t.heroSub2,
      tag: currentLang === 'en' ? "Anahaw Flora" : "Dahon sa Anahaw"
    },
    {
      image: "/src/assets/images/hero_farming_terrace_1781397614002.jpg",
      heading: t.heroHeading3,
      sub: t.heroSub3,
      tag: currentLang === 'en' ? "Bounteous Harvest" : "Mabungahong Abot"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full relative h-[450px] md:h-[600px] border-b border-black/10 bg-[#e6e2d8] overflow-hidden" id="hero-slider">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Hero Background Image with no-referrer policy */}
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].heading}
            className="w-full h-full object-cover opacity-80 object-center mix-blend-normal"
            referrerPolicy="no-referrer"
          />
          {/* Subtle clean darkening gradient overlay */}
          <div className="absolute inset-0 bg-black/35"></div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Minimalist Content Banner Panel (aligned left, sleek asymmetrical structure) */}
      <div className="absolute inset-y-0 left-0 w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-start pointer-events-none z-10">
        <div className="w-full max-w-xl bg-white/95 p-8 md:p-12 border border-black/10 relative shadow-none pointer-events-auto rounded-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              {/* Badge */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-[0.35em] text-brand-gold font-bold uppercase">
                  {slides[currentIndex].tag}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-serif font-light text-[#1a1a1a] tracking-tight leading-tight">
                {currentIndex === 0 ? (
                  <span>The Land of <br/><span className="font-bold text-brand-gold">Anahaw Palms</span></span>
                ) : (
                  <span className="font-bold">{slides[currentIndex].heading}</span>
                )}
              </h1>
              
              {/* Divider line mimicking Clean Minimalism rule */}
              <div className="w-12 h-[1px] bg-brand-gold my-1"></div>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-[#1a1a1a]/80 font-sans leading-relaxed">
                {slides[currentIndex].sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Left/Right manual controls in flat square blocks */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        <button
          onClick={handlePrev}
          className="w-11 h-11 border border-black/15 bg-white hover:bg-brand-gold hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-300 rounded-none text-[#1a1a1a]"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-11 h-11 border border-black/15 bg-white hover:bg-brand-gold hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-300 rounded-none text-[#1a1a1a]"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators / Paginations as premium thin notches */}
      <div className="hidden md:flex flex-col gap-4 absolute right-12 top-1/2 -translate-y-1/2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="flex items-center gap-3 group text-right"
          >
            <span className={`text-[10px] font-mono tracking-[0.2em] ${currentIndex === i ? 'text-brand-gold font-bold' : 'text-white/60'} transition-all`}>
              0{i + 1}
            </span>
            <span className={`w-[1px] transition-all duration-500 ${currentIndex === i ? 'h-8 bg-brand-gold' : 'h-3 bg-white/30 group-hover:bg-white/60'}`}></span>
          </button>
        ))}
      </div>
    </div>
  );
}
