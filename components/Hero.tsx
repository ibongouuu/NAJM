
import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];

  return (
    <div className="relative h-[650px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549413243-6c8a77a4190b?auto=format&fit=crop&q=80&w=1920" 
          alt="Kyrgyzstan Mountains"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-950/40 to-transparent dark:from-slate-950 dark:via-slate-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent h-1/2 mt-auto"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-full mb-6">
            <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">
              {lang === 'ar' ? 'أهلاً بكم في قيرغيزستان' : 'Welcome to Kyrgyzstan'}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-sm">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 dark:text-slate-300 leading-relaxed font-medium">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95">
              {t.bookNow}
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-bold text-lg border border-white/20 transition-all duration-300">
              {lang === 'ar' ? 'تعرف علينا' : 'Learn More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
