
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    setStatus('loading');
    
    const botToken = '8512086272:AAF1r29mr97Pje2YNmw7qmVaCuNDdaGV0zw';
    const yourPersonalChatId = '438762836'; 

    const text = `🚀 Новая заявка DONTASK!\n\n👤 Имя: ${formData.name}\n📞 Контакт: ${formData.contact}\n🌐 Язык: ${lang.toUpperCase()}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          chat_id: yourPersonalChatId, 
          text: text 
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus('success');
        setFormData({ name: '', contact: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error('Ошибка Telegram API:', data.description || data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      console.error('Ошибка сети:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-40 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/2 reveal">
              <h2 className={`font-black tracking-tighter uppercase mb-12 leading-[0.85] ${lang === 'uz' ? 'text-5xl md:text-[7rem]' : 'text-7xl md:text-[9rem]'}`}>
                {t.contact_h_1} <br /> <span className="text-indigo-600">{t.contact_h_2}</span>
              </h2>
              <p className="text-zinc-400 text-xl font-light max-w-sm leading-relaxed mb-16">
                {t.contact_p}
              </p>
              
              <div className="space-y-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 mb-4">Email</span>
                  <a href="mailto:donskikhas@gmail.com" className="text-2xl font-bold hover:text-indigo-400 transition-colors underline decoration-white/10 underline-offset-8">donskikhas@gmail.com</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 mb-4">Social</span>
                  <a href="https://t.me/asdonskikh" target="_blank" className="text-2xl font-bold hover:text-indigo-400 transition-colors">@asdonskikh</a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full reveal">
              <form className="space-y-24 mt-12 lg:mt-0" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="flex flex-col gap-6">
                    <div className="min-h-[3rem] flex items-end">
                      <label className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600 leading-tight">
                        {t.contact_name}
                      </label>
                    </div>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 pb-6 outline-none focus:border-white transition-colors text-xl font-bold uppercase"
                    />
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="min-h-[3rem] flex items-end">
                      <label className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600 leading-tight">
                        {t.contact_phone}
                      </label>
                    </div>
                    <input 
                      required
                      type="text" 
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 pb-6 outline-none focus:border-white transition-colors text-xl font-bold uppercase"
                    />
                  </div>
                </div>

                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className={`group relative w-full py-8 text-[11px] uppercase font-black tracking-[0.6em] transition-all mt-12 ${
                    status === 'success' ? 'bg-green-600 text-white shadow-[0_0_40px_rgba(34,197,94,0.4)]' : 
                    status === 'error' ? 'bg-red-600 text-white shadow-[0_0_40px_rgba(220,38,38,0.4)]' : 
                    'bg-white text-black hover:bg-indigo-600 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">
                    {status === 'loading' ? 'SENDING...' : 
                     status === 'success' ? 'SUCCESSFULLY SENT' : 
                     status === 'error' ? 'SENDING ERROR' : 
                     t.contact_btn}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
