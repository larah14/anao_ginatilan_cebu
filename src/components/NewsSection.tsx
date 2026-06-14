/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Tag, ChevronRight, X, Newspaper, ChevronDown } from 'lucide-react';
import { Language, NewsTopic } from '../types';
import { translations, newsTopics } from '../data';

interface NewsSectionProps {
  currentLang: Language;
}

export default function NewsSection({ currentLang }: NewsSectionProps) {
  const t = translations[currentLang];
  const [selectedNews, setSelectedNews] = useState<NewsTopic | null>(null);
  const [filterTag, setFilterTag] = useState<string>('All');

  const tags = ['All', 'Agriculture', 'Community', 'Health'];

  const filteredNews = filterTag === 'All'
    ? newsTopics
    : newsTopics.filter(n => n.tag === filterTag);

  return (
    <section className="w-full py-20 px-6 md:px-10 bg-[#edfaef]" id="latest-news">
      <div className="w-full max-w-7xl mx-auto">
        {/* Category Header */}
        <div className="w-full text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 text-brand-gold font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            <Newspaper className="w-4 h-4" />
            <span>COMMUNITY BROADCAST</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#211600] font-bold tracking-tight uppercase mt-3">
            {t.latestNews}
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mt-4"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-5 py-2 text-xs uppercase font-sans font-bold border tracking-[0.15em] transition-all duration-300 rounded-none ${
                filterTag === tag
                  ? 'bg-brand-gold text-white border-transparent'
                  : 'bg-white text-[#211600]/70 border-[#005c12]/20 hover:text-brand-gold hover:border-brand-gold hover:bg-[#edfaef]'
              }`}
            >
              {tag === 'All' ? (currentLang === 'en' ? 'All Updates' : 'Tanan') : tag}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <motion.div
              layout
              key={news.id}
              className="bg-white border border-[#005c12]/15 p-8 flex flex-col justify-between hover:border-brand-gold hover:shadow-md transition-all duration-300 relative rounded-none shadow-none"
            >
              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center text-[10px] font-mono text-[#211600]/50 mb-5 pb-3 border-b border-[#005c12]/10">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    {news.date}
                  </span>
                  <span className={`px-2.5 py-0.5 text-white font-mono font-bold tracking-widest text-[9px] uppercase ${
                    news.tag === 'Agriculture' ? 'bg-[#003008] border border-[#dba617]/25' : 'bg-brand-gold'
                  }`}>
                    {news.tag}
                  </span>
                </div>

                {/* News Title */}
                <h3 className="font-serif font-bold text-lg text-[#211600] mb-3 hover:text-brand-gold transition-colors line-clamp-2 leading-tight">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[#5c5240] font-sans leading-relaxed line-clamp-3 mb-8">
                  {news.excerpt}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedNews(news)}
                className="w-full text-center py-2.5 border border-[#005c12]/25 text-xs font-sans font-bold text-[#211600] hover:bg-brand-gold hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1 uppercase tracking-widest mt-auto bg-[#edfaef]/20"
              >
                <span>{t.readMore}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern High-Fidelity Details Overlay Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-2xl bg-[#fcf9e8] border border-[#dba617]/40 p-8 md:p-12 relative overflow-hidden rounded-none max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 p-2 text-[#211600]/50 hover:text-brand-gold bg-white transition-all rounded-none border border-[#005c12]/15"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category tag */}
              <div className="flex items-center gap-2 mb-5">
                <Tag className="w-3.5 h-3.5 text-brand-gold" />
                <span className="text-[10px] font-mono tracking-widest text-[#dba617] uppercase font-bold">
                  {selectedNews.tag}
                </span>
                <span className="text-[#211600]/10 font-mono text-[10px]">|</span>
                <span className="text-[#211600]/50 font-mono text-[10px] uppercase tracking-wider">{selectedNews.date}</span>
              </div>

              {/* Full Title */}
              <h3 className="font-serif font-bold text-2xl md:text-3.5xl text-[#211600] tracking-tight leading-tight mb-6">
                {selectedNews.title}
              </h3>

              <div className="w-16 h-[1px] bg-brand-gold mb-6"></div>

              {/* Core Content */}
              <div className="text-sm text-[#211600]/80 font-sans leading-relaxed flex flex-col gap-4">
                <p className="font-semibold italic text-[#211600]/90 border-l-2 border-brand-gold pl-4 text-xs md:text-sm">
                  {selectedNews.excerpt}
                </p>
                <p className="text-[#5c5240]">
                  {selectedNews.content}
                </p>
                <p className="text-[#5c5240]/60 text-xs text-justify">
                  {currentLang === 'en' 
                    ? "This initiative forms part of the Barangay Anao Development masterplan, aligned with Municipal environmental and community sustainability targets for general prosperity."
                    : "Kini nga tinguha kabahin sa Barangay Anao Development masterplan, nga nahiuyon sa mga target sa munisipyo alang sa kalikupan ug malungtarong kalamboan sa kabukiran."}
                </p>
              </div>

              {/* Custom Traditional footer sign-off inside modal layout */}
              <div className="mt-10 pt-6 border-t border-[#005c12]/10 flex justify-between items-center">
                <div className="font-serif text-[11px] uppercase tracking-widest text-[#211600]/50 font-bold">
                  {t.subtitle}
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-6 py-2.5 bg-[#003008] hover:bg-brand-gold text-white font-bold text-xs transition-colors tracking-widest uppercase font-sans border border-[#dba617]/20 hover:border-transparent"
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
