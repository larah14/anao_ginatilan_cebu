/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Official {
  name: string;
  position: string;
  roleDescription: string;
}

export interface Sitio {
  name: string;
  description: string;
  livelihood: string;
}

export interface TouristSpot {
  name: string;
  image: string;
  description: string;
  highlight: string;
}

export interface NewsTopic {
  id: string;
  date: string;
  tag: 'Announcement' | 'Agriculture' | 'Community' | 'Health';
  title: string;
  excerpt: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type Language = 'en' | 'ceb';
