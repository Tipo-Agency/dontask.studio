
import React from 'react';
import { ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-40 bg-[#0D0C0C] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl reveal">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-indigo-500 block mb-8">{t.services_sub}</span>
            <h2 className="text-5xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8]">
              {t.services_h1} <br /> <span className="text-indigo-600">{t.services_h2}</span>
            </h2>
          </div>
          <p className="text-gray-500 uppercase text-[11px] font-black tracking-[0.3em] leading-loose max-w-[300px] reveal">
            {t.services_p}
          </p>
        </div>

        <div className="space-y-4">
          {(t.services_items as any[]).map((service, index) => (
            <div 
              key={service.id} 
              className="group relative border-t border-gray-800 py-12 md:py-20 px-4 hover:bg-gray-900/50 transition-all duration-700 reveal"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
                <div className="lg:col-span-1 hidden lg:block">
                   <span className="text-2xl font-black text-gray-800 group-hover:text-indigo-600 transition-colors">0{index + 1}</span>
                </div>
                <div className="lg:col-span-5">
                   <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter lg:group-hover:translate-x-4 transition-transform duration-500 leading-[0.9]">
                      {service.title}
                   </h3>
                </div>
                <div className="lg:col-span-4">
                   <p className="text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed text-sm md:text-base">
                      {service.desc}
                   </p>
                </div>
                <div className="lg:col-span-2 flex justify-end">
                   <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-gray-800 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-500">
                      <ICONS.ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white transform -rotate-45" />
                   </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3 md:gap-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-x-12 lg:group-hover:translate-x-24">
                {service.tags.map((tag: string) => (
                  <span key={tag} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 border border-indigo-900/50 text-indigo-400 bg-indigo-900/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
