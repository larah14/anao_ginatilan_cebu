/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CornerUpLeft, Shield, Sparkles, Navigation } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';
import BarangayLogo from './BarangayLogo';

interface FooterProps {
  currentLang: Language;
  onSectionClick: (sectionId: string) => void;
}

export default function Footer({ currentLang, onSectionClick }: FooterProps) {
  const t = translations[currentLang];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#003008] text-white relative border-t border-[#dba617]/30 overflow-hidden">
      
      {/* Background elegant line details */}
      <div className="absolute inset-0 bg-white/[0.01] pointer-events-none"></div>

      {/* Tall Vertical Return-to-Top Button */}
      <div className="flex justify-center -mt-px w-full text-center relative z-10">
        <button
          onClick={handleScrollToTop}
          className="border-b border-x border-[#dba617]/30 bg-[#005c12] px-6 py-4 text-[#E5E7EB] hover:text-white hover:bg-brand-gold duration-300 transition-all font-mono font-bold text-xs tracking-[0.25em] flex flex-col items-center gap-1.5 uppercase shadow-none rounded-none group"
          aria-label={t.backToTop}
        >
          <span>{t.backToTop}</span>
          <CornerUpLeft className="w-4 h-4 text-[#E5E7EB]/50 group-hover:text-white transition-colors" />
        </button>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12 relative z-10">
        
        {/* Core elements with column layouts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-center md:text-left mb-16">
          
          {/* Logo identity section */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              {/* Official Seal of Barangay Anao */}
              <BarangayLogo size={44} className="opacity-90" />
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-mono text-[#f0c33c] font-bold tracking-[0.25em] uppercase leading-none">
                  {t.subtitle}
                </span>
                <span className="text-xl font-serif text-white font-bold tracking-tight uppercase mt-1.5 leading-none">
                  {t.title}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-white/50 leading-relaxed max-w-sm mt-2 font-sans text-center md:text-left">
              {currentLang === 'en'
                ? "Dedicated to the sustainable cultivation of cultural history and uploader agricultural prosperity in Ginatilan, Cebu, Philippines."
                : "Madasigon sa malungtarong pagpalambo sa lokal nga kabilin, kultura, ug pamaagi sa pagpuyo sa mga mag-uuma sa kabukiran sa Ginatilan, Sugbo."}
            </p>
          </div>

          {/* Footer menu columns */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#f0c33c] uppercase font-bold text-center md:text-left mb-2 pb-2 border-b border-white/10">
              QUICK SECTIONS
            </div>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-serif font-bold text-center md:text-left">
              <button onClick={() => onSectionClick('home')} className="hover:text-brand-gold text-white/70 transition-colors py-1 block text-left uppercase">
                {t.navHome}
              </button>
              <button onClick={() => onSectionClick('about')} className="hover:text-brand-gold text-white/70 transition-colors py-1 block text-left uppercase">
                {t.navAbout}
              </button>
              <button onClick={() => onSectionClick('admin')} className="hover:text-brand-gold text-white/70 transition-colors py-1 block text-left uppercase">
                {t.navAdmin}
              </button>
              <button onClick={() => onSectionClick('spots')} className="hover:text-brand-gold text-white/70 transition-colors py-1 block text-left uppercase">
                {t.navSpots}
              </button>
              <button onClick={() => onSectionClick('contact')} className="hover:text-brand-gold text-white/70 transition-colors py-1 block text-left uppercase">
                {t.navContact}
              </button>
            </div>
          </div>

          {/* Security stamp or regulatory accreditation details */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-4">
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#f0c33c] uppercase font-bold mb-2 pb-2 border-b border-white/10 w-full text-center md:text-left">
              HERITAGE STANDARD
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-none bg-[#005c12]/40 border border-[#dba617]/20 flex items-center justify-center text-[#f0c33c]">
                <Shield className="w-4 h-4" />
              </div>
              <div className="text-left text-[10px] text-white/60 leading-tight font-sans">
                <span className="font-bold text-[#f0c33c] block uppercase">DATA PROTECTION</span>
                <span>Gov Secure Certified v2.5</span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-none bg-[#005c12]/40 border border-[#dba617]/20 flex items-center justify-center text-[#f0c33c]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left text-[10px] text-white/60 leading-tight font-sans">
                <span className="font-bold text-[#f0c33c] block uppercase">CULTURAL INVENTORY</span>
                <span>Ginatilan Tourism Board</span>
              </div>
            </div>
          </div>

        </div>

        {/* Outer bottom copyright strip */}
        <div className="border-t border-white/10 pt-8 text-center text-[10px] font-mono text-white/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} {t.allRightsReserved}
          </div>
          <div className="flex gap-6">
            <a href="#about-section" className="hover:text-brand-gold duration-300">Data Privacy Policy</a>
            <a href="#contact-section" className="hover:text-brand-gold duration-300">Terms of Registry</a>
            <a href="#hero-slider" className="hover:text-[#faf7f2] duration-300">Portal Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
