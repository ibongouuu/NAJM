
import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { Globe, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = UI_TRANSLATIONS[lang];

  return (
    <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-gray-100 dark:border-slate-800 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="bg-indigo-900 dark:bg-indigo-600 text-white p-2 rounded-xl mr-2 shadow-lg shadow-indigo-500/20">
                 <span className="text-xl font-bold">N★JM</span>
              </div>
              <div className="hidden md:block">
                <p className="text-indigo-900 dark:text-indigo-400 font-bold leading-none tracking-tight">NAJM COMPANY</p>
                <p className="text-orange-500 text-[10px] font-bold uppercase tracking-wider mt-0.5">TOURISM | للسياحة</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-indigo-900 dark:hover:text-white font-semibold transition-colors">{t.navHome}</a>
            <a href="#destinations" className="text-slate-600 dark:text-slate-300 hover:text-indigo-900 dark:hover:text-white font-semibold transition-colors">{t.navDestinations}</a>
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-indigo-900 dark:hover:text-white font-semibold transition-colors">{t.navAbout}</a>
            <a href="#community" className="text-slate-600 dark:text-slate-300 hover:text-indigo-900 dark:hover:text-white font-semibold transition-colors">{t.navCommunity}</a>
            
            <div className="flex items-center border-l dark:border-slate-800 pl-6 space-x-4 rtl:space-x-reverse rtl:border-l-0 rtl:pl-0 rtl:border-r rtl:pr-6">
              <button 
                onClick={toggleTheme}
                className="p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-300"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun size={20} className="text-orange-400" /> : <Moon size={20} className="text-indigo-600" />}
              </button>

              <button 
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-300 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-all duration-300 border border-transparent dark:border-indigo-800/30"
              >
                <Globe size={18} />
                <span className="font-bold">{lang === 'ar' ? 'English' : 'العربية'}</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
             <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="p-2 text-slate-500 dark:text-slate-400"
            >
              <Globe size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-500 dark:text-slate-400">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-900 py-6 px-4 space-y-4 shadow-2xl transition-all">
          <a href="#" className="block text-slate-600 dark:text-slate-300 font-bold py-2">{t.navHome}</a>
          <a href="#destinations" className="block text-slate-600 dark:text-slate-300 font-bold py-2">{t.navDestinations}</a>
          <a href="#about" className="block text-slate-600 dark:text-slate-300 font-bold py-2">{t.navAbout}</a>
          <a href="#community" className="block text-slate-600 dark:text-slate-300 font-bold py-2">{t.navCommunity}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
