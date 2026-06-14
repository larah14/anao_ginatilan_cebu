/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Award, Users, FileText, Landmark, User, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations, officials } from '../data';

import pbPortrait from '../assets/images/punong_barangay_portrait_1781399281641.jpg';

interface AdminSectionProps {
  currentLang: Language;
}

export default function AdminSection({ currentLang }: AdminSectionProps) {
  const t = translations[currentLang];

  // Separate Maria Cabañog as Chairman / Punong Barangay
  const mainLeader = officials[0];

  // kagawads are index 1 to 7
  const kagawads = officials.slice(1, 8);

  // SK Chairman is index 8
  const skChairman = officials[8];

  // support staff indices 9 and 10 (Secretary & Treasurer)
  const secretariat = officials.slice(9, 11);

  return (    <section className="w-full py-20 px-6 md:px-10 bg-[#f9f7f2] border-b border-black/10" id="admin-section">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="w-full text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-brand-gold font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            <Shield className="w-4 h-4" />
            <span>EXECUTIVE STRUCTURE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] font-bold tracking-tight mt-3 uppercase">
            {t.adminTitle}
          </h2>
          <p className="text-xs text-[#1a1a1a]/60 font-sans max-w-xl mx-auto mt-3.5 leading-relaxed">
            {t.adminSubtitle}
          </p>
          <div className="w-16 h-[1px] bg-brand-gold mt-4"></div>
        </div>

        {/* Lead official showcase (Punong Barangay) */}
        <div className="flex justify-center mb-20" id="chief-leader-card">
          <div className="w-full max-w-2xl bg-white border border-black/10 p-8 md:p-12 relative overflow-hidden shadow-none rounded-none flex flex-col md:flex-row gap-8 items-center">
            
            {/* Portrait placeholder */}
            <div className="w-32 h-32 rounded-none border border-black/10 shrink-0 bg-[#f9f7f2] flex items-center justify-center p-1 relative">
              <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-white overflow-hidden">
                <img
                  src={pbPortrait}
                  alt={mainLeader.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Officer Details */}
            <div className="text-center md:text-left space-y-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-[0.35em] text-brand-gold uppercase">
                  {mainLeader.position}
                </span>
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] tracking-tight">
                  {mainLeader.name}
                </span>
              </div>
              
              <div className="w-12 h-[1px] bg-brand-gold mx-auto md:mx-0"></div>
              
              <p className="text-xs text-[#1a1a1a]/85 leading-relaxed font-sans mt-2">
                {mainLeader.roleDescription}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 border border-black/5 text-[#1a1a1a] font-mono text-[9px] tracking-widest uppercase font-bold">
                <Shield className="w-3 h-3 text-brand-gold" />
                <span>Highest Barangay Authority</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kagawad Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-brand-gold font-mono text-[10px] tracking-[0.4em] font-semibold uppercase">LEGISLATIVE COUNCIL</span>
            <h3 className="text-xl md:text-2xl font-serif text-[#1a1a1a] font-bold tracking-tight uppercase mt-1">Barangay Kagawads</h3>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" id="kagawad-grid">
            {kagawads.map((k, idx) => (
              <div
                key={k.name}
                className="bg-white border border-black/10 p-6 hover:border-brand-gold transition-all duration-300 flex flex-col justify-between rounded-none shadow-none"
              >
                <div>
                  <div className="w-9 h-9 bg-black/5 flex items-center justify-center text-brand-gold mb-4 rounded-none">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-[9px] font-mono tracking-widest text-[#1a1a1a]/50 uppercase font-bold">
                    {k.position}
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#1a1a1a] mt-1.5 leading-tight">
                    {k.name}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#1a1a1a]/70 font-sans mt-3">
                    {k.roleDescription}
                  </p>
                </div>
                <div className="border-t border-black/5 pt-3 mt-5 text-[9px] font-mono text-[#1a1a1a]/40 tracking-wider">
                  COUNCILOR {idx + 1}
                </div>
              </div>
            ))}

            {/* Youth Representation (SK Chairman) */}
            <div
              className="bg-white border border-black/10 p-6 hover:border-brand-gold transition-all duration-300 flex flex-col justify-between rounded-none shadow-none"
              id="sk-chairman-card"
            >
              <div>
                <div className="w-9 h-9 bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-4 rounded-none">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-[9px] font-mono tracking-widest text-brand-gold uppercase font-bold">
                  {skChairman.position}
                </div>
                <h4 className="font-serif font-bold text-base text-[#1a1a1a] mt-1.5 leading-tight">
                  {skChairman.name}
                </h4>
                <p className="text-xs leading-relaxed text-[#1a1a1a]/70 font-sans mt-3">
                  {skChairman.roleDescription}
                </p>
              </div>
              <div className="border-t border-black/5 pt-3 mt-5 text-[9px] font-mono text-brand-gold font-bold uppercase tracking-widest">
                Youth Sector Rep
              </div>
            </div>
          </div>
        </div>

        {/* Secretariat Supporting Officers (Secretary & Treasurer) */}
        <div className="border-t border-black/10 pt-16">
          <div className="text-center mb-10">
            <span className="text-brand-gold font-mono text-[10px] tracking-[0.4em] font-semibold uppercase">ADMINISTRATIVE OFFICE</span>
            <h3 className="text-xl md:text-2xl font-serif text-[#1a1a1a] font-bold tracking-tight uppercase mt-1">Secretariat & Finances</h3>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" id="secretariat-grid">
            {secretariat.map((s, idx) => (
              <div
                key={s.name}
                className="bg-white border border-black/10 p-6 relative overflow-hidden rounded-none flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-none border border-black/5 flex items-center justify-center bg-[#f9f7f2] text-brand-gold shrink-0">
                  {idx === 0 ? <FileText className="w-5 h-5" /> : <Landmark className="w-5 h-5" />}
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono tracking-[0.25em] text-brand-gold font-bold uppercase">
                    {s.position}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1a1a1a]">
                    {s.name}
                  </h4>
                  <p className="text-xs text-[#1a1a1a]/70 font-sans leading-relaxed">
                    {s.roleDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
