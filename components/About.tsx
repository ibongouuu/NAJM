
import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { Target, History, Heart, Users, Star } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];

  const values = [
    {
      icon: <Heart className="text-orange-500" size={32} />,
      title: lang === 'ar' ? 'كرم الضيافة' : 'Hospitality',
      desc: lang === 'ar' ? 'نؤمن بتقديم أفضل مستويات الخدمة لضيوفنا.' : 'We believe in providing the highest level of service to our guests.'
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: lang === 'ar' ? 'فريق خبير' : 'Expert Team',
      desc: lang === 'ar' ? 'مرشدون محليون يتحدثون العربية بطلاقة.' : 'Local guides who speak fluent Arabic.'
    },
    {
      icon: <Star className="text-orange-500" size={32} />,
      title: lang === 'ar' ? 'التركيز على العميل' : 'Customer Focus',
      desc: lang === 'ar' ? 'رحلات مخصصة تناسب احتياجاتك الخاصة.' : 'Tailored journeys that suit your specific needs.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/10 dark:bg-orange-500/5 rounded-[3rem] blur-3xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
            <div className="relative aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1549413243-6c8a77a4190b?auto=format&fit=crop&q=80&w=1200" 
                alt="Kyrgyzstan Nature" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-indigo-900 dark:bg-slate-800 text-white p-8 rounded-[2rem] shadow-2xl border border-white/10 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
              <p className="text-5xl font-bold mb-1 tracking-tighter text-orange-400">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">{lang === 'ar' ? 'سنوات من الخبرة' : 'Years of Excellence'}</p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse mb-4 text-orange-500 font-bold uppercase tracking-widest text-xs">
              <Star size={14} fill="currentColor" />
              <span>Najm Company</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t.aboutTitle}
            </h2>
            <div className="h-1.5 w-24 bg-orange-500 rounded-full mb-12"></div>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start rtl:flex-row-reverse group">
                <div className="p-4 bg-orange-50 dark:bg-slate-900 rounded-2xl text-orange-600 dark:text-orange-400 shadow-sm border border-orange-100 dark:border-slate-800 group-hover:border-orange-400 transition-colors">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-indigo-300 mb-3">{t.aboutMission}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium opacity-90">
                    {t.aboutMissionDesc}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start rtl:flex-row-reverse group">
                <div className="p-4 bg-indigo-50 dark:bg-slate-900 rounded-2xl text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-slate-800 group-hover:border-indigo-400 transition-colors">
                  <History size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-indigo-300 mb-3">{t.aboutHistory}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium opacity-90">
                    {t.aboutHistoryDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="group p-10 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-transparent dark:border-slate-800 hover:border-orange-500/20 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2">
              <div className="flex justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500">
                <div className="p-5 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700">
                  {v.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{v.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
