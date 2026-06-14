/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Award, Landmark, HelpCircle, MapPin, Compass, ChevronDown, ChevronUp, History } from 'lucide-react';
import { Language } from '../types';
import { translations, sitios, faqItems } from '../data';

interface AboutSectionProps {
  currentLang: Language;
}

export default function AboutSection({ currentLang }: AboutSectionProps) {
  const t = translations[currentLang];
  const [activeSitio, setActiveSitio] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const stats = [
    { label: t.area, value: t.areaVal, icon: Compass },
    { label: t.population, value: t.populationVal, icon: Landmark },
    { label: t.livelihood, value: t.livelihoodVal, icon: Award },
    { label: "Sitios", value: "4 (Balani, Babao, Sang Ulog, Bag-ong Lungsod)", icon: MapPin },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-10 bg-white border-b border-black/10" id="about-section">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Statistics highlights bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#f9f7f2]/50 border border-black/10 p-6 rounded-none shadow-none hover:bg-[#f9f7f2] duration-300 transition-all text-center flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 rounded-sm bg-brand-gold/10 flex items-center justify-center mb-3 text-brand-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono tracking-[0.25em] text-[#1a1a1a]/50 uppercase" id={`stat-label-${idx}`}>{s.label}</div>
                <div className="text-sm font-serif font-bold text-[#1a1a1a] mt-1.5" id={`stat-value-${idx}`}>{s.value}</div>
              </div>
            );
          })}
        </div>

        {/* History and Name-origin side-by-side section split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24" id="history-block">
          
          {/* Vertical/Large section header columns */}
          <div className="md:col-span-4 flex flex-col">
            <span className="text-brand-gold font-mono text-[10px] tracking-[0.4em] font-bold uppercase mb-2">
              HERITAGE LANDSCAPE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] font-bold tracking-tight uppercase leading-none mb-4">
              {t.title}
            </h2>
            <div className="w-16 h-[1px] bg-brand-gold mb-6"></div>
            
            {/* Artistic image with clean thin gray borders */}
            <div className="border border-black/10 p-2.5 bg-[#f9f7f2] rounded-none">
              <img
                src="/src/assets/images/hero_anahaw_leaves_1781397600337.jpg"
                alt="Native Anahaw Leaves"
                className="w-full h-48 object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <p className="text-[10px] font-mono text-center text-[#1a1a1a]/45 mt-2.5 tracking-[0.2em] uppercase">
                Anahaw Leaves (Saribus rotundifolius)
              </p>
            </div>
          </div>

          {/* History core readings */}
          <div className="md:col-span-8 flex flex-col gap-6 font-sans text-[#1a1a1a]/80 leading-relaxed bg-[#f9f7f2]/20 p-8 md:p-12 border border-black/10 rounded-none relative">
            <div className="absolute top-6 right-6 text-brand-gold/15">
              <History className="w-16 h-16 stroke-1" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-serif text-[#1a1a1a] font-bold tracking-tight flex items-center gap-2">
              <span className="w-4 h-[1px] bg-brand-gold"></span>
              {t.history}
            </h3>

            <p className="text-xs md:text-sm text-[#1a1a1a]/80 font-sans leading-relaxed">
              {t.historyText1}
            </p>

            <p className="text-xs md:text-sm text-[#1a1a1a]/80 font-sans leading-relaxed">
              {t.historyText2}
            </p>

            {/* Custom subtle geometric separator */}
            <div className="w-12 h-[1px] bg-black/10 my-2 mx-auto"></div>

            {/* Vision and Mission Cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="border border-black/10 p-6 bg-white hover:bg-[#f9f7f2]/30 duration-300 rounded-none">
                <h4 className="font-serif font-bold text-[#1a1a1a] flex items-center gap-2 text-sm md:text-base border-b border-black/5 pb-2.5 mb-3 uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-brand-gold" />
                  {t.vision}
                </h4>
                <p className="text-xs md:text-sm leading-relaxed text-[#1a1a1a]/70">
                  {t.visionText}
                </p>
              </div>

              <div className="border border-black/10 p-6 bg-white hover:bg-[#f9f7f2]/30 duration-300 rounded-none">
                <h4 className="font-serif font-bold text-[#1a1a1a] flex items-center gap-2 text-sm md:text-base border-b border-black/5 pb-2.5 mb-3 uppercase tracking-wider">
                  <Award className="w-4 h-4 text-brand-gold" />
                  {t.mission}
                </h4>
                <p className="text-xs md:text-sm leading-relaxed text-[#1a1a1a]/70">
                  {t.missionText}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Sitio Explorer element: Dynamic dark contrast console */}
        <div className="w-full bg-[#1a1a1a] border border-black/10 p-8 md:p-12 mb-24 relative text-[#faf7f2] rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Title / Description */}
            <div className="md:col-span-5 flex flex-col select-none">
              <span className="text-brand-gold font-mono text-[10px] tracking-[0.35em] font-semibold uppercase mb-1.5">
                DEMOGRAPHIC SECTIONS
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-white font-bold tracking-tight uppercase">
                {t.sitiosTitle}
              </h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                {t.sitiosSubtitle}
              </p>

              {/* List buttons layout */}
              <div className="flex flex-col gap-2 mt-6">
                {sitios.map((s, idx) => (
                  <button
                    key={s.name}
                    onClick={() => setActiveSitio(idx)}
                    className={`py-3 px-4 border text-left font-serif text-xs tracking-[0.2em] font-bold transition-all uppercase rounded-none relative ${
                      activeSitio === idx
                        ? 'bg-brand-gold text-white border-transparent translate-x-1'
                        : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span>{s.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive map view - aligned style */}
            <div className="md:col-span-7 border border-white/10 p-6 md:p-8 bg-black/30 relative min-h-[300px] flex flex-col justify-between">
              
              {/* Grid graphic detail overlay */}
              <div className="absolute inset-0 bg-[#e6e2d8]/5 opacity-5 pointer-events-none"></div>

              {/* Dynamic details section with animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSitio}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4 relative z-10"
                >
                  <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                    <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-white uppercase">
                      {sitios[activeSitio].name}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm leading-relaxed text-white/80 font-sans">
                    {sitios[activeSitio].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/5 border border-white/10 p-4">
                      <div className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold">Main Produce</div>
                      <div className="text-xs font-semibold text-white mt-1 uppercase tracking-wider font-sans">
                        {sitios[activeSitio].livelihood}
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4">
                      <div className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold">Geographical Sector</div>
                      <div className="text-xs font-semibold text-white mt-1 uppercase tracking-wider font-sans">
                        {activeSitio === 0 ? "South High Ridge" : activeSitio === 1 ? "North Highland Plateau" : activeSitio === 2 ? "East Forest Valley" : "Central Plain Hub"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Spatial survey label */}
              <div className="mt-8 border-t border-white/10 pt-4 flex justify-between items-center text-[10px] font-mono text-white/30 tracking-widest">
                <span>ANAO SPATIAL SURVEY</span>
                <span>SECTOR: 0{activeSitio + 1}</span>
              </div>
            </div>

          </div>
        </div>

        {/* FAQs list accordion block */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-brand-gold font-mono text-[10px] tracking-[0.4em] font-bold uppercase mb-2 block">ABOUT DETAILED RECORDS</span>
            <h4 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] font-bold tracking-tight uppercase">Frequently Asked Questions</h4>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-3"></div>
          </div>

          <div className="flex flex-col gap-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-black/10 hover:border-brand-gold transition-all duration-300 rounded-none"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4.5 flex justify-between items-center text-left"
                  >
                    <span className="font-serif font-bold text-sm md:text-base text-[#1a1a1a] flex items-center gap-3.5">
                      <HelpCircle className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-gold" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#1a1a1a]/60" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1.5 font-sans text-xs md:text-sm text-[#1a1a1a]/80 border-t border-black/5 leading-relaxed bg-[#f9f7f2]/30">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
