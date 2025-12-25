
import React from 'react';
import { CASES, ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';

const CodeOverlay = ({ title }: { title: string }) => (
  <div className="absolute inset-0 p-6 font-mono text-[8px] opacity-[0.2] select-none overflow-hidden group-hover:opacity-[0.4] transition-opacity duration-1000 pointer-events-none z-20">
    <div className="text-white mb-1">// SYSTEM_BUILD: {title.toUpperCase()}</div>
    <div className="text-white/40 whitespace-pre">
{`const module = {
  render: true,
  optimized: 100
};`}
    </div>
  </div>
);

const Cases: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="cases" className="py-40 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-10">
          <div className="max-w-4xl reveal">
            <span className="text-xs font-black uppercase tracking-[0.6em] text-indigo-500 block mb-6">{t.cases_sub}</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8 text-white">
              {t.cases_h1} <br /> 
              {t.cases_h_outline && <span className="text-outline">{t.cases_h_outline}</span>}
              {t.cases_h_outline && <br />}
              <span className="text-indigo-600">{t.cases_h_indigo}</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((project, index) => (
            <a 
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0D0C0C] border border-white/5 aspect-[4/5] overflow-hidden transition-all duration-700 reveal hover:border-indigo-500/50"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              {/* Code Overlay Layer */}
              <CodeOverlay title={project.title} />

              {/* Content Layer */}
              <div className="relative z-30 h-full flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-2">
                      0{index + 1} // 2024
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">{project.category}</span>
                  </div>

                  <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center group-hover:border-indigo-500 transition-all duration-500">
                     <ICONS.External className="w-3 h-3 text-white/30 group-hover:text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4 transition-transform duration-500 group-hover:translate-x-2 leading-none">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-0 h-[1px] bg-indigo-500 group-hover:w-8 transition-all duration-500"></div>
                    <span className="text-[8px] font-mono text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {t.cases_live}: {project.url.replace('https://', '').replace('www.', '').split('/')[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
