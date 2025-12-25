
import React from 'react';
import Logo from './Logo';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-48 pb-20 flex flex-col justify-center items-center overflow-hidden bg-black text-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-600 rounded-full blur-[180px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900 rounded-full blur-[160px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="relative mb-12 flex flex-col items-center w-full max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-[700px] mx-auto transition-all duration-700">
          <div className="w-full filter drop-shadow-[0_0_50px_rgba(99,102,241,0.15)] reveal animate-float">
            <Logo className="text-white" />
          </div>
          
          <div className="absolute -right-16 top-1/2 -rotate-90 hidden xl:block opacity-20 select-none pointer-events-none">
             <span className="text-[10px] font-black uppercase tracking-[1.5em] text-white whitespace-nowrap">ESTD 2024</span>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-base md:text-xl lg:text-2xl text-zinc-400 mb-12 font-light leading-relaxed reveal">
            {t.hero_p}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center reveal">
            <a href="#cases" className="group relative bg-white text-black px-12 py-5 text-[10px] uppercase font-black tracking-[0.4em] overflow-hidden transition-all duration-500 hover:bg-indigo-600 hover:text-white shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]">
              <span className="relative z-10">{t.hero_btn_cases}</span>
            </a>
            <a href="#contact" className="group border border-white/20 px-12 py-5 text-[10px] uppercase font-black tracking-[0.4em] hover:border-indigo-500 transition-all duration-500">
              {t.hero_btn_contact}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>

      {/* Marquee Row */}
      <div className="absolute bottom-0 w-full py-6 border-t border-white/5 overflow-hidden bg-black/50 backdrop-blur-sm z-20">
        <div className="animate-marquee whitespace-nowrap">
           {[...Array(12)].map((_, i) => (
             <span key={i} className="text-[8px] font-black uppercase tracking-[1.2em] text-zinc-800 mx-10">
               Logic • Strategy • Results • Digital Branding • Custom Stack • 
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
