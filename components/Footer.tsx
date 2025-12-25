
import React from 'react';
import Logo from './Logo';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <footer className="py-32 bg-[#050505] text-white border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32 items-start">
          <div className="lg:col-span-7">
            <div className="w-48 md:w-64 mb-16 filter drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <Logo className="text-white" />
            </div>
            <h4 className={`font-black tracking-tighter uppercase leading-[0.85] mb-4 ${lang === 'uz' ? 'text-5xl md:text-[6rem]' : 'text-6xl md:text-[8rem]'}`}>
              {t.footer_ready} <br /> <span className="text-indigo-600">{t.footer_upgrade}</span>
            </h4>
          </div>
          
          <div className="lg:col-span-2">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 block mb-12">{t.footer_nav}</span>
             <nav className="flex flex-col gap-8">
                {[
                  { label: t.nav_services, href: '#services' },
                  { label: t.nav_cases, href: '#cases' },
                  { label: t.nav_approach, href: '#philosophy' },
                  { label: t.nav_contact, href: '#contact' },
                ].map(item => (
                  <a key={item.label} href={item.href} className="text-xl font-bold uppercase tracking-tight text-zinc-400 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
             </nav>
          </div>

          <div className="lg:col-span-3">
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 block mb-12">{t.footer_social}</span>
             <nav className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <a href="https://t.me/asdonskikh" target="_blank" className="text-lg font-bold uppercase tracking-tight text-zinc-400 hover:text-white transition-colors">
                    Telegram
                  </a>
                  <a href="https://instagram.com/dontask.studio" target="_blank" className="text-lg font-bold uppercase tracking-tight text-zinc-400 hover:text-white transition-colors">
                    Instagram
                  </a>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <a href="mailto:donskikhas@gmail.com" className="text-lg font-bold uppercase tracking-tight text-zinc-400 hover:text-white transition-colors block break-all">
                    donskikhas@gmail.com
                  </a>
                </div>
             </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-10">
          <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
             <span>{t.footer_location}</span>
             <span>© 2024 DONTASK. STUDIO</span>
          </div>
          <div className="flex items-center gap-6">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">{t.footer_crafted}</span>
             <div className="w-12 h-[1px] bg-white/10"></div>
             <div className="w-8 h-8 group relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-8 h-8 bg-indigo-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
