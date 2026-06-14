/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Smartphone, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface ContactSectionProps {
  currentLang: Language;
}

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const t = translations[currentLang];
  
  // States of inquiry form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // States of map explorer
  const [selectedPin, setSelectedPin] = useState<'hall' | 'spring' | 'terraces' | 'scenic'>('hall');

  const pins = {
    hall: {
      title: currentLang === 'en' ? "Barangay Hall Administration" : "Barangay Hall",
      sitio: "Sitio Bag-ong Lungsod",
      coordinates: "Center Plain Sector",
      note: currentLang === 'en' 
        ? "The central office where clearance requests, public consultations, and community disputes are settled." 
        : "Ang nag-unang opisina alang sa seryosong tuyo sama sa barangay clearance ug panagtabo sa katilingban."
    },
    spring: {
      title: currentLang === 'en' ? "Anao Natural springs" : "Tuburan sa Anao",
      sitio: "Sitio Sang Ulog",
      coordinates: "East Valley Sector",
      note: currentLang === 'en' 
        ? "A vital freshwater spring servicing local vegetable crops and settlements around Sitio Sang Ulog ridges." 
        : "Nindot ug bugnaw nga tuburan nga naghatag ug limpyo nga tubig sa mga mag-uuma sa Sitio Sang Ulog."
    },
    terraces: {
      title: currentLang === 'en' ? "Balani Highland Terraces" : "Katulokan sa Balani",
      sitio: "Sitio Balani",
      coordinates: "South High Ridges",
      note: currentLang === 'en' 
        ? "Magnificent organic agricultural cornfields and vegetable ridges managed by cooperative farmers." 
        : "Mabungahong umahan sa mais ug mga prutas nga gina-atiman sa atong kugihan nga mag-uuma sa Balani."
    },
    scenic: {
      title: currentLang === 'en' ? "Babao Summit Plateau" : "Ibaba sa Babao",
      sitio: "Sitio Babao",
      coordinates: "North Highland Plateaus",
      note: currentLang === 'en' 
        ? "Exquisite mountain top panoramic viewpoints with sweeping horizons facing the Cebu coast." 
        : "Nindot kaayo nga dapit sa ibabaw sa bukid diin makita ang tibuok katubigan ug baybayon sa Ginatilan."
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError(currentLang === 'en' ? 'Please fill out all fields.' : 'Palihug pun-a ang tanang dapit.');
      return;
    }
    setError('');
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
    
    // Auto reset success indicators after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section className="w-full py-20 px-6 md:px-10 bg-[#edfaef] border-b border-[#005c12]/20" id="contact-section">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="w-full text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-brand-gold font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            <Mail className="w-4 h-4" />
            <span>COMMUNICATION PATHWAYS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#211600] font-bold tracking-tight mt-3 uppercase">
            {t.contactTitle}
          </h2>
          <p className="text-xs text-[#5c5240] font-sans max-w-xl mx-auto mt-3 leading-relaxed">
            {t.contactSub}
          </p>
          <div className="w-16 h-[1px] bg-brand-gold mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Traditional Map & Access Directions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Geographical Sanctuary Map */}
            <div className="bg-white border border-[#dba617]/25 p-6 relative overflow-hidden rounded-none shadow-sm">
              <div className="absolute top-2.5 right-2.5 text-[8px] font-mono text-[#dba617] tracking-wider font-semibold">SECTOR SURVEY v1.4</div>
              <h3 className="font-serif font-bold text-[#211600] text-base border-b border-[#005c12]/10 pb-2.5 mb-4 uppercase tracking-[0.1em]">
                {currentLang === 'en' ? "Geographical Landmarks Map" : "Mapa sa Barangay ug mga Timailhan"}
              </h3>

              {/* Graphic Stage for Traditional Map */}
              <div className="w-full h-80 bg-[#fcf9e8] border border-[#005c12]/20 rounded-none relative overflow-hidden flex items-center justify-center cursor-pointer">
                
                {/* Traditional topographic style grid lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#005c12_1px,transparent_1px)] [background-size:24px_24px]"></div>
                
                {/* Simulated contour lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10 text-[#005c12]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-50,150 C100,80 300,240 500,100" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M-50,220 C150,140 350,300 550,180" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M-50,60 C50,20 250,140 450,40" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>

                {/* Drawn ridges pathways representing local roads and water rivers linking sitios */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-[#005c12]/15"></div>
                <div className="absolute left-1/3 top-0 w-[1px] h-full border-l border-dashed border-[#005c12]/15"></div>

                {/* Map Pins */}
                {/* 1. Barangay Hall - Center West */}
                <button
                  onClick={() => setSelectedPin('hall')}
                  className={`absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-none transition-all duration-300 z-10 ${
                    selectedPin === 'hall' ? 'scale-110' : 'hover:scale-105'
                  }`}
                  aria-label="Select Barangay Hall Pin"
                >
                  <div className={`w-8 h-8 rounded-none border flex items-center justify-center text-xs font-serif font-bold transition-all ${
                    selectedPin === 'hall' ? 'bg-brand-gold border-transparent text-white shadow-md' : 'bg-white border-[#005c12]/25 text-[#211600]'
                  }`}>
                    H
                  </div>
                </button>

                {/* 2. Anao Springs - East */}
                <button
                  onClick={() => setSelectedPin('spring')}
                  className={`absolute right-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 p-2 rounded-none transition-all duration-300 z-10 ${
                    selectedPin === 'spring' ? 'scale-110' : 'hover:scale-105'
                  }`}
                  aria-label="Select Anao Springs Pin"
                >
                  <div className={`w-8 h-8 rounded-none border flex items-center justify-center text-xs font-serif font-bold transition-all ${
                    selectedPin === 'spring' ? 'bg-brand-gold border-transparent text-white shadow-md' : 'bg-white border-[#005c12]/25 text-[#211600]'
                  }`}>
                    S
                  </div>
                </button>

                {/* 3. Balani Terraces - South */}
                <button
                  onClick={() => setSelectedPin('terraces')}
                  className={`absolute left-1/2 bottom-1/5 -translate-x-1/2 translate-y-1/2 p-2 rounded-none transition-all duration-300 z-10 ${
                    selectedPin === 'terraces' ? 'scale-110' : 'hover:scale-105'
                  }`}
                  aria-label="Select Balani Terraces Pin"
                >
                  <div className={`w-8 h-8 rounded-none border flex items-center justify-center text-xs font-serif font-bold transition-all ${
                    selectedPin === 'terraces' ? 'bg-brand-gold border-transparent text-white shadow-md' : 'bg-white border-[#005c12]/25 text-[#211600]'
                  }`}>
                    T
                  </div>
                </button>

                {/* 4. Babao summit - North */}
                <button
                  onClick={() => setSelectedPin('scenic')}
                  className={`absolute left-2/3 top-1/5 -translate-x-1/2 -translate-y-1/2 p-2 rounded-none transition-all duration-300 z-10 ${
                    selectedPin === 'scenic' ? 'scale-110' : 'hover:scale-105'
                  }`}
                  aria-label="Select Babao Summit Pin"
                >
                  <div className={`w-8 h-8 rounded-none border flex items-center justify-center text-xs font-serif font-bold transition-all ${
                    selectedPin === 'scenic' ? 'bg-brand-gold border-transparent text-white shadow-md' : 'bg-white border-[#005c12]/25 text-[#211600]'
                  }`}>
                    P
                  </div>
                </button>

                {/* Label indicator overlay elements */}
                <div className="absolute top-4 left-4 bg-white/95 border border-[#dba617]/40 px-3 py-2.5 text-[8px] font-mono text-[#211600]/85 uppercase flex flex-col gap-1 tracking-widest shadow-md rounded-none">
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-gold"></span> H: Barangay Hall</div>
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-brand-gold"></span> S: Anao Water Spring</div>
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-neutral-400"></span> T: Balani Farm Terraces</div>
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-neutral-600"></span> P: Babao Scenic Summit</div>
                </div>

                <div className="absolute bottom-3 right-3 text-[9px] font-mono text-[#211600] bg-[#edfaef] px-2 py-1 border border-[#005c12]/25 tracking-widest uppercase font-semibold">
                  LANDMARK REGISTRY
                </div>
              </div>

              {/* Pin detail info panels */}
              <div className="mt-4 border border-[#005c12]/15 pt-4 relative bg-[#edfaef]/35 p-5 rounded-none">
                <span className="text-[9px] font-mono text-[#dba617] uppercase tracking-[0.25em] font-bold">TIMAILHAN DETALYE</span>
                <h4 className="font-serif font-bold text-[#211600] text-base mt-1.5 uppercase tracking-wide">
                  {pins[selectedPin].title}
                </h4>
                <div className="text-[10px] text-[#5c5240]/80 font-mono mt-0.5 uppercase tracking-wider">
                  Sector: {pins[selectedPin].coordinates} • {pins[selectedPin].sitio}
                </div>
                <p className="text-xs text-[#5c5240] mt-2.5 font-sans leading-relaxed">
                  {pins[selectedPin].note}
                </p>
              </div>
            </div>

            {/* Official contact hotlines card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="phone-cards">
              <div className="border border-[#005c12]/15 p-5 bg-white flex items-start gap-4 hover:shadow-md hover:bg-neutral-50 duration-300 transition-all rounded-none shadow-sm">
                <div className="w-10 h-10 border border-[#005c12]/15 text-[#dba617] bg-[#edfaef] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#dba617] uppercase tracking-widest leading-none block font-semibold">
                    {t.phone}
                  </span>
                  <span className="text-sm font-serif font-bold text-[#211600] block">
                    (+63 32) 478-9235
                  </span>
                  <span className="text-[10px] text-[#5c5240] block leading-tight">
                    Ginatilan General Registry
                  </span>
                </div>
              </div>

              <div className="border border-[#005c12]/15 p-5 bg-white flex items-start gap-4 hover:shadow-md hover:bg-neutral-50 duration-300 transition-all rounded-none shadow-sm">
                <div className="w-10 h-10 border border-[#005c12]/15 text-[#dba617] bg-[#edfaef] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#dba617] uppercase tracking-widest leading-none block font-semibold">
                    {t.email}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#211600] block break-all">
                    municipality.ginatilan@gmail.com
                  </span>
                  <span className="text-[10px] text-[#5c5240] block leading-tight">
                    Municipal Planning Secretariat
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Traditional inquiry form */}
          <div className="lg:col-span-5 bg-white border border-[#dba617]/25 p-6 md:p-8 relative rounded-none shadow-sm">
            <h3 className="font-serif font-bold text-[#211600] text-lg border-b border-[#005c12]/10 pb-2.5 mb-6 uppercase tracking-[0.1em]">
              {t.contactForm}
            </h3>

            {success ? (
              <div className="space-y-4 p-6 bg-[#edfaef] border border-[#005c12]/30 text-center text-[#211600] rounded-none">
                <CheckCircle className="w-12 h-12 text-[#005c12] mx-auto" />
                <p className="font-serif font-bold text-base">{currentLang === 'en' ? 'Inquiry Sent' : 'Mensahe Napadala'}</p>
                <p className="text-xs">{t.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                {error && (
                  <div className="p-3 text-xs text-[#dba617] bg-red-50 border border-red-200 font-sans font-bold">
                    ✕ {error}
                  </div>
                )}

                {/* Sender Name */}
                <div className="space-y-1.5 flex flex-col">
                  <label htmlFor="form-name" className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#211600]/85">
                    {t.senderName} <span className="text-[#dba617]">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={currentLang === 'en' ? "e.g. Maria dela Cruz" : "pananglitan: Maria dela Cruz"}
                    className="w-full px-4 py-2 border border-[#005c12]/25 bg-[#fcf9e8]/30 hover:border-[#005c12]/50 focus:border-brand-gold text-sm focus:outline-none transition-all font-sans text-[#211600] rounded-none shadow-none"
                  />
                </div>

                {/* Sender Email */}
                <div className="space-y-1.5 flex flex-col">
                  <label htmlFor="form-email" className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#211600]/85">
                    {t.senderEmail} <span className="text-[#dba617]">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2 border border-[#005c12]/25 bg-[#fcf9e8]/30 hover:border-[#005c12]/50 focus:border-brand-gold text-sm focus:outline-none transition-all font-sans text-[#211600] rounded-none shadow-none"
                  />
                </div>

                {/* Sender Inquiry Message */}
                <div className="space-y-1.5 flex flex-col">
                  <label htmlFor="form-message" className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#211600]/85">
                    {t.senderInquiry} <span className="text-[#dba617]">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={currentLang === 'en' ? "Please compose your message here..." : "Isulat ang imong mensahe dinhi..."}
                    className="w-full px-4 py-2 border border-[#005c12]/25 bg-[#fcf9e8]/30 hover:border-[#005c12]/50 focus:border-brand-gold text-sm focus:outline-none transition-all font-sans text-[#211600] rounded-none shadow-none"
                  ></textarea>
                </div>

                {/* Information Security Disclaimer */}
                <div className="bg-[#edfaef]/30 border border-[#005c12]/15 p-3.5 text-[10px] text-[#5c5240]/85 font-sans leading-relaxed text-justify">
                  {currentLang === 'en'
                    ? "🔒 Private Policy: All input records submitted here undergo secure storage and legal compliance under the Philippines Data Privacy Act of 2012."
                    : "🔒 Garantiya sa Kasegurohan: Ang tanang datos nga gipasa dinhi protektado ubos sa Data Privacy Act of 2012 sa Pilipinas."}
                </div>

                {/* Form Action Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#003008] hover:bg-brand-gold text-white font-mono font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-2 rounded-none border border-transparent"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.submit}</span>
                </button>
              </form>
            )}

            {/* Address Info footer panel inside forms border */}
            <div className="border-t border-[#005c12]/10 pt-6 mt-8 text-[#5c5240] space-y-3">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs font-sans leading-relaxed">
                  <span className="font-bold text-[#211600] block leading-none">{t.address}</span>
                  <span>{t.addressVal}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
