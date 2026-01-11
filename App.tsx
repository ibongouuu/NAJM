
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import AIAssistant from './components/AIAssistant';
import About from './components/About';
import CommunityFeed from './components/CommunityFeed';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar lang={lang} setLang={setLang} isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero lang={lang} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 transition-all duration-300">
              <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-300 mb-8">
                {lang === 'ar' ? 'لماذا تختار نجم للسياحة؟' : 'Why Choose Najm Tourism?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 group hover:border-orange-400 transition-colors">
                  <h4 className="font-bold text-indigo-900 dark:text-orange-400 mb-2 text-lg">{lang === 'ar' ? 'خبرة محلية' : 'Local Expertise'}</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{lang === 'ar' ? 'فريقنا يعرف كل ركن في قيرغيزستان ليقدم لك أفضل تجربة.' : 'Our team knows every corner of Kyrgyzstan to offer you the best experience.'}</p>
                </div>
                <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 group hover:border-indigo-400 transition-colors">
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2 text-lg">{lang === 'ar' ? 'خدمات حلال' : 'Halal Services'}</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{lang === 'ar' ? 'نحن نحترم قيمك ونوفر طعاماً حلالاً ومرافق للصلاة.' : 'We respect your values and provide halal food and prayer facilities.'}</p>
                </div>
                <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 group hover:border-indigo-400 transition-colors">
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2 text-lg">{lang === 'ar' ? 'تحدث العربية' : 'Arabic Speaking'}</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{lang === 'ar' ? 'أدلة سياحيون يجيدون العربية لمرافقتكم طوال الرحلة.' : 'Arabic-fluent guides to accompany you throughout the journey.'}</p>
                </div>
                <div className="p-5 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 group hover:border-orange-400 transition-colors">
                  <h4 className="font-bold text-indigo-900 dark:text-orange-400 mb-2 text-lg">{lang === 'ar' ? 'رحلات عائلية' : 'Family Journeys'}</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{lang === 'ar' ? 'برامج مصممة خصيصاً لتناسب جميع أفراد العائلة بخصوصية تامة.' : 'Programs designed to suit all family members with full privacy.'}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 sticky top-24">
              <AIAssistant lang={lang} isDark={isDark} />
            </div>
          </div>
        </div>

        <Destinations lang={lang} />
        
        <About lang={lang} />

        <CommunityFeed lang={lang} />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-900 to-indigo-950 dark:from-slate-900 dark:to-indigo-950 text-white text-center transition-colors relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-400 via-transparent to-transparent"></div>
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {lang === 'ar' ? 'جاهز للمغامرة؟' : 'Ready for Adventure?'}
            </h2>
            <p className="text-xl text-indigo-200 mb-10 opacity-90">
              {lang === 'ar' 
                ? 'اتصل بنا اليوم للحصول على عرض سعر مخصص لرحلتك القادمة.' 
                : 'Contact us today to get a custom quote for your next journey.'}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transform hover:-translate-y-1">
              {lang === 'ar' ? 'احجز الآن عبر الواتساب' : 'Book Now via WhatsApp'}
            </button>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
