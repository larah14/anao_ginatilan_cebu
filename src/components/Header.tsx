/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Landmark, Globe, Search } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';
import BarangayLogo from './BarangayLogo';

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Header({
  currentLang,
  onLangChange,
  activeSection,
  onSectionClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[currentLang];

  const menuItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'admin', label: t.navAdmin },
    { id: 'spots', label: t.navSpots },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <header className="w-full bg-[#003008]/95 backdrop-blur-sm border-b border-[#dba617]/30 z-50 sticky top-0">
      {/* Top utility bar */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-2.5 flex justify-between items-center text-[11px] uppercase tracking-widest text-[#E5E7EB]/70 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Landmark className="w-3.5 h-3.5 text-brand-gold" />
          <span className="font-sans font-medium tracking-[0.15em] text-[#E5E7EB]">{t.association}</span>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Language toggle styled like high-end curated minimal page */}
          <div className="flex items-center gap-3 font-mono text-[11px] font-bold" id="language-toggle">
            <button
              onClick={() => onLangChange('en')}
              className={`transition-all duration-300 ${
                currentLang === 'en'
                  ? 'text-brand-gold font-bold underline underline-offset-4 decoration-2'
                  : 'text-[#E5E7EB]/40 hover:text-[#E5E7EB]'
              }`}
            >
              EN
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => onLangChange('ceb')}
              className={`transition-all duration-300 ${
                currentLang === 'ceb'
                  ? 'text-brand-gold font-bold underline underline-offset-4 decoration-2'
                  : 'text-[#E5E7EB]/40 hover:text-[#E5E7EB]'
              }`}
            >
              CEB
            </button>
          </div>
        </div>
      </div>

      {/* Main branding row */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center bg-transparent">
        {/* Left Brand Identity */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onSectionClick('home')} id="brand-logo">
          {/* Official Seal of Barangay Anao */}
          <BarangayLogo size={48} className="transition-transform duration-500 hover:scale-[1.05]" />
          
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#E5E7EB]/50 leading-none">
              {t.subtitle}
            </span>
            <span className="text-xl font-serif text-[#E5E7EB] font-bold tracking-tight uppercase leading-none mt-1.55">
              {t.title}
            </span>
          </div>
        </div>

        {/* Right side search bar option & contact indicator (desktop only) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <div className="flex items-center gap-2 border border-[#005c12]/40 px-4 py-2 text-xs bg-[#005c12]/20 hover:bg-[#005c12]/40 duration-300 rounded-sm">
              <input
                type="text"
                placeholder={currentLang === 'en' ? 'Search records...' : 'Pangitaa...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent focus:outline-none w-36 focus:w-48 transition-all duration-300 font-sans text-[#E5E7EB] placeholder-[#E5E7EB]/40"
              />
              <Search className="w-3.5 h-3.5 text-[#E5E7EB]/40 cursor-pointer hover:text-brand-gold" />
            </div>
          </div>
          
          <div className="text-right font-mono text-[10px] border-l border-white/10 pl-8">
            <div className="text-[#E5E7EB]/40 uppercase tracking-[0.2em] mb-1">Office Hours</div>
            <div className="text-[#E5E7EB] font-bold">08:00 AM - 05:00 PM</div>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#E5E7EB] hover:text-brand-gold"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation menu - Simple custom spacing layout with single line bottom border */}
      <nav className="w-full border-t border-[#005c12]/30 bg-white/[0.02] z-30">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Menu links in a beautiful, classic centered strip */}
          <div className="hidden md:flex justify-center items-center gap-12 py-3.5 relative">
            {menuItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`relative py-1 text-xs uppercase tracking-[0.25em] font-sans font-semibold transition-all duration-300 hover:text-brand-gold ${
                    active ? 'text-brand-gold border-b-2 border-brand-gold' : 'text-[#E5E7EB]/70 hover:border-b-2 hover:border-white/20'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          
        </div>
      </nav>

      {/* Mobile responsive sidebar/drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#003008]/95 backdrop-blur-md border-b border-[#dba617]/25 z-50 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fade-in text-[#E5E7EB]">
          {menuItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSectionClick(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-3 px-4 border-b border-white/5 text-left text-xs uppercase tracking-widest font-sans font-bold transition-all ${
                  active ? 'text-brand-gold bg-white/5' : 'text-[#E5E7EB]/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          
          {/* Mobile search bar */}
          <div className="mt-4 flex items-center gap-2 border border-white/10 px-3 py-2 bg-[#005c12]/40">
            <input
              type="text"
              placeholder={currentLang === 'en' ? 'Search records...' : 'Pangitaa...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent focus:outline-none w-full font-sans text-xs text-white"
            />
            <Search className="w-4 h-4 text-[#E5E7EB]/40" />
          </div>
        </div>
      )}
    </header>
  );
}
