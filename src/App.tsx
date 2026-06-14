/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { translations } from './data';
import { Language } from './types';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import AdminSection from './components/AdminSection';
import SpotsGallery from './components/SpotsGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  // Navigates directly and smoothly to appropriate structured sections
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    
    let targetEl: HTMLElement | null = null;
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    } else if (sectionId === 'about') {
      targetEl = document.getElementById('about-section');
    } else if (sectionId === 'admin') {
      targetEl = document.getElementById('admin-section');
    } else if (sectionId === 'spots') {
      targetEl = document.getElementById('tourist-spots');
    } else if (sectionId === 'contact') {
      targetEl = document.getElementById('contact-section');
    }

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Real-time intersection observer to update active navigation tabs dynamically during scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header density

      const homeEl = document.getElementById('hero-slider');
      const aboutEl = document.getElementById('about-section');
      const adminEl = document.getElementById('admin-section');
      const spotsEl = document.getElementById('tourist-spots');
      const contactEl = document.getElementById('contact-section');

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (spotsEl && scrollPosition >= spotsEl.offsetTop) {
        setActiveSection('spots');
      } else if (adminEl && scrollPosition >= adminEl.offsetTop) {
        setActiveSection('admin');
      } else if (aboutEl && scrollPosition >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-brand-gold/20 selection:text-black">
      
      {/* 1. Header Navigation block with custom logo & dropdown lang switcher */}
      <Header
        currentLang={currentLang}
        onLangChange={handleLangChange}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Main Sections */}
      <main className="flex-grow w-full">
        
        {/* 2. Hero Panoramic Slideshow Carousel  */}
        <HeroSlider currentLang={currentLang} />

        {/* 3. News Updates Section representing Jinja Board  */}
        <NewsSection currentLang={currentLang} />

        {/* 4. About Anao, Geography of Sitios & FAQ accordions */}
        <AboutSection currentLang={currentLang} />

        {/* 5. Barangay Council Administration Section */}
        <AdminSection currentLang={currentLang} />

        {/* 6. Spotlight Tourist Spots Gallery with Lightbox slides */}
        <SpotsGallery currentLang={currentLang} />

        {/* 7. Contact Details, Coordinate Pins & Mail Form */}
        <ContactSection currentLang={currentLang} />

      </main>

      {/* 8. Traditional Footer block & Scroll Back to top */}
      <Footer
        currentLang={currentLang}
        onSectionClick={handleSectionClick}
      />

    </div>
  );
}
