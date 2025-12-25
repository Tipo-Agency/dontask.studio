
import React from 'react';
import { ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Philosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-40 bg-[#0D0C0C] text-white relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900 rounded-full blur-[150px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-indigo-500 block mb-8">{t.phil_sub}</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
              {t.phil_h1} <br /> <span className="text-indigo-600">{t.phil_h2}</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 font-medium max-w-lg leading-relaxed">
              {t.phil_p}
            </p>
            
            <div className="space-y-8">
              {(t.phil_points as string[]).map((point, idx) => (
                <div key={idx} className="flex items-center gap-8 group">
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-full group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                    <ICONS.Check className="w-6 h-6 text-indigo-500 group-hover:text-white" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-gray-300 group-hover:text-white transition-colors">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal">
            <div className="aspect-[4/5] bg-indigo-600 flex items-center justify-center p-4 transform rotate-2 hover:rotate-0 transition-transform duration-1000">
               <div className="border border-white/20 w-full h-full flex flex-col items-center justify-center gap-10">
                  <span className="text-[20rem] font-black text-white/10 select-none tracking-tighter absolute">?</span>
                  <div className="relative z-10 text-center px-10">
                    <p className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">DONT <br /> ASK</p>
                    <div className="w-12 h-1 bg-white mx-auto"></div>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-12 -right-6 bg-white p-10 max-w-xs shadow-2xl reveal">
              <p className="text-[11px] font-black text-black uppercase tracking-widest leading-loose">
                {t.phil_badge}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
