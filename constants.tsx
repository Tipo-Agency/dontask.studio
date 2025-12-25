
import React from 'react';
import { NavigationLink, Case } from './types';

export const NAV_LINKS: NavigationLink[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Подход', href: '#philosophy' },
  { label: 'Контакты', href: '#contact' },
];

export const CASES: Case[] = [
  { 
    id: 'urban210', 
    title: 'Urban210', 
    url: 'https://urban210.ru/', 
    category: 'Real Estate Platform',
    image: 'https://i.ibb.co/VYp00fth/26.png'
  },
  { 
    id: 'turin', 
    title: 'Turin Accelerator', 
    url: 'https://turinstartup.uz/', 
    category: 'Startup Ecosystem',
    image: 'https://i.ibb.co/5WyNw9K9/30.png'
  },
  { 
    id: 'ecomobile', 
    title: 'Ecomobile', 
    url: 'https://www.ecomobile.world/', 
    category: 'Global Telecom',
    image: 'https://i.ibb.co/Swfb2rFJ/35.png'
  },
  { 
    id: 'papakha', 
    title: 'Papakha Coffee', 
    url: 'https://papakhacoffee.uz/', 
    category: 'Premium E-commerce',
    image: 'https://i.ibb.co/LD5wJDss/27.png'
  },
  { 
    id: 'farmalech', 
    title: 'Farmalech', 
    url: 'https://farmalech.uz/', 
    category: 'Corporate Pharma',
    image: 'https://i.ibb.co/5WyFP45W/28.png'
  },
  { 
    id: 'taska', 
    title: 'Taska Uz', 
    url: 'https://taska.uz/', 
    category: 'Business Automation',
    image: 'https://i.ibb.co/rNXFW5c/29.png'
  },
  { 
    id: 'yaxshilink', 
    title: 'Yaxshilink', 
    url: 'https://www.yaxshi.link/', 
    category: 'Digital Services',
    image: 'https://i.ibb.co/DH8c0fhp/34.png'
  }
];

export const ICONS = {
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  Menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  Close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  External: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
};
