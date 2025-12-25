
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { label: t.nav_services, href: '#services' },
    { label: t.nav_cases, href: '#cases' },
    { label: t.nav_approach, href: '#philosophy' },
    { label: t.nav_contact, href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' 
            : 'bg-transparent py-10'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <a href="#" className="w-16 md:w-24 transition-all hover:scale-105 flex items-center group">
            <Logo className="text-white transition-colors duration-500" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 items-center">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex items-center gap-4 px-6 border-l border-white/10 ml-4 font-mono text-[10px]">
              {(['ru', 'uz', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`uppercase tracking-widest transition-colors ${
                    lang === l ? 'text-indigo-500 font-bold' : 'text-zinc-600 hover:text-zinc-300'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold tracking-widest text-white border border-white/20 hover:border-indigo-500 transition-all duration-300"
            >
              <div className="absolute inset-0 w-0 bg-indigo-600 transition-all duration-500 group-hover:w-full"></div>
              <span className="relative text-[9px] uppercase z-10">{t.nav_discuss}</span>
            </a>
          </nav>

          {/* Mobile Toggle - High Z-index to stay above menu */}
          <button 
            className="lg:hidden text-white p-3 relative z-[300] border border-white/10 rounded-lg bg-black/40 backdrop-blur-md" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <ICONS.Close className="w-6 h-6" /> : <ICONS.Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[150] flex flex-col items-center justify-center gap-12 transition-all duration-700 lg:hidden ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
          <div className="w-32 mb-6">
             <Logo className="text-white" />
          </div>
          <div className="flex flex-col items-center gap-8 px-6 text-center">
            {navLinks.map(link => (
              <button 
                key={link.href} 
                onClick={() => handleLinkClick(link.href)}
                className="text-4xl font-black uppercase tracking-tighter text-white hover:text-indigo-500 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="flex gap-10 font-mono text-base mt-8 border-t border-white/10 pt-10">
            {(['ru', 'uz', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setIsMenuOpen(false); }}
                className={`uppercase tracking-[0.3em] font-bold ${
                  lang === l ? 'text-indigo-500' : 'text-zinc-600 hover:text-zinc-300'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
      </div>
    </>
  );
};

export default Header;
