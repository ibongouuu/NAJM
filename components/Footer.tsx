
import React from 'react';
import { Language } from '../types';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-indigo-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-white text-indigo-950 p-2 rounded-lg mr-2">
                 <span className="text-xl font-bold">N★JM</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-none">NAJM COMPANY</p>
                <p className="text-orange-400 text-xs font-semibold">TOURISM | للسياحة</p>
              </div>
            </div>
            <p className="text-indigo-200 mb-8 max-w-md">
              {lang === 'ar' 
                ? 'شركة رائدة في مجال السياحة في قيرغيزستان، متخصصة في تقديم تجارب فريدة وفاخرة لضيوفنا من العالم العربي.'
                : 'A leading tourism company in Kyrgyzstan, specializing in unique and luxury experiences for our guests from the Arab world.'}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="p-2 bg-indigo-900 rounded-full hover:bg-orange-500 transition"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-indigo-900 rounded-full hover:bg-orange-500 transition"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-indigo-900 pb-2">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h4>
            <ul className="space-y-4 text-indigo-200">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={18} className="text-orange-400" />
                <span>+996 555 XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail size={18} className="text-orange-400" />
                <span>info@najmcompany.kg</span>
              </li>
              <li className="text-sm">Bishkek, Kyrgyzstan</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6 border-b border-indigo-900 pb-2">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
             <ul className="space-y-2 text-indigo-200">
                <li><a href="#" className="hover:text-white transition">{lang === 'ar' ? 'الرئيسية' : 'Home'}</a></li>
                <li><a href="#destinations" className="hover:text-white transition">{lang === 'ar' ? 'الوجهات' : 'Destinations'}</a></li>
                <li><a href="#" className="hover:text-white transition">{lang === 'ar' ? 'من نحن' : 'About Us'}</a></li>
                <li><a href="#" className="hover:text-white transition">{lang === 'ar' ? 'الخدمات' : 'Services'}</a></li>
             </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-indigo-900 text-center text-indigo-400 text-sm">
          &copy; {new Date().getFullYear()} Najm Tourism Kyrgyzstan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
