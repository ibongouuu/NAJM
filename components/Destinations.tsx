
import React, { useState } from 'react';
import { Language, Destination } from '../types';
import { DESTINATIONS, UI_TRANSLATIONS } from '../constants';
import { MapPin, X, ChevronRight, CheckCircle2 } from 'lucide-react';

interface DestinationsProps {
  lang: Language;
}

const Destinations: React.FC<DestinationsProps> = ({ lang }) => {
  const t = UI_TRANSLATIONS[lang];
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedDestination = DESTINATIONS.find(d => d.id === selectedId);

  return (
    <section id="destinations" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 dark:text-white mb-2">
              {t.featuredDestinations}
            </h2>
            <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg">
            {lang === 'ar' 
              ? 'مجموعة مختارة من أفضل الأماكن التي نوصي بها لضيوفنا للاستمتاع بالطبيعة الخلابة والهدوء.'
              : 'Handpicked locations we recommend for our guests to experience breathtaking nature and tranquility.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-slate-950 transition-all duration-300 transform hover:-translate-y-2 border border-transparent dark:border-slate-700 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.imageUrl} 
                  alt={dest.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-1 rtl:flex-row-reverse">
                  {dest.tags[lang].map((tag, i) => (
                    <span key={i} className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-indigo-900 dark:text-indigo-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-orange-500 mb-2 space-x-1 rtl:space-x-reverse">
                  <MapPin size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Kyrgyzstan</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 dark:text-white mb-3 group-hover:text-orange-600 transition">
                  {dest.title[lang]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                  {dest.description[lang]}
                </p>
                <button 
                  onClick={() => setSelectedId(dest.id)}
                  className="w-full py-3 flex items-center justify-center space-x-2 rtl:space-x-reverse text-indigo-900 dark:text-indigo-300 font-bold border-2 border-indigo-50 dark:border-slate-700 rounded-xl hover:bg-indigo-900 dark:hover:bg-indigo-700 hover:text-white transition-all group/btn"
                >
                  <span>{lang === 'ar' ? 'تعرف أكثر' : 'Learn More'}</span>
                  <ChevronRight size={18} className={`transition-transform group-hover/btn:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-10">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedId(null)}
          ></div>
          <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row max-h-[90vh]">
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 z-20 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={selectedDestination.imageUrl} 
                alt={selectedDestination.title[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-slate-900 to-transparent"></div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center text-orange-500 mb-4 space-x-1 rtl:space-x-reverse">
                <MapPin size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Premium Destination</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 dark:text-white mb-6">
                {selectedDestination.title[lang]}
              </h3>
              <p className="text-lg text-gray-600 dark:text-slate-300 mb-8 leading-relaxed">
                {selectedDestination.description[lang]}
              </p>

              <div className="space-y-6">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider text-sm border-b border-indigo-50 dark:border-slate-800 pb-2">
                  {lang === 'ar' ? 'أبرز المميزات' : 'Key Highlights'}
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {selectedDestination.details[lang].map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-3 rtl:space-x-reverse group/item">
                      <CheckCircle2 size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-200 font-medium">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition shadow-xl shadow-orange-500/20 active:scale-95">
                  {lang === 'ar' ? 'إحجز هذه الرحلة' : 'Book This Trip'}
                </button>
                <button 
                  onClick={() => setSelectedId(null)}
                  className="flex-1 border-2 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  {lang === 'ar' ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destinations;
