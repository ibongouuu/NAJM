
import React, { useState, useRef, useEffect } from 'react';
import { Language, Message } from '../types';
import { UI_TRANSLATIONS } from '../constants';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getTravelAdvice } from '../services/gemini';

interface AIAssistantProps {
  lang: Language;
  isDark: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ lang, isDark }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = UI_TRANSLATIONS[lang];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await getTravelAdvice(input, lang);
    const aiMsg: Message = { role: 'model', text: response };
    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 flex flex-col h-[550px] transition-all duration-500 relative">
      {/* Background glow for dark mode */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none"></div>

      <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 dark:from-slate-800 dark:to-slate-900 p-5 flex items-center justify-between text-white border-b border-white/5 relative z-10">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-md border border-white/20">
            <Bot size={22} />
          </div>
          <div>
            <h3 className="font-bold flex items-center gap-2">
              {t.aiTitle}
              <Sparkles size={14} className="text-orange-400" />
            </h3>
            <p className="text-[10px] text-indigo-200 uppercase tracking-widest font-bold">
              {lang === 'ar' ? 'مدعوم بالذكاء الاصطناعي' : 'AI Powered 24/7'}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50 dark:bg-slate-950/50 custom-scrollbar" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="text-center text-slate-400 dark:text-slate-600 py-12 flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-3xl flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-800">
              <Bot size={32} className="opacity-40" />
            </div>
            <p className="px-10 text-sm italic opacity-80">{t.aiPlaceholder}</p>
          </div>
        )}
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl flex items-start space-x-3 rtl:space-x-reverse transition-all duration-300 ${
              m.role === 'user' 
                ? 'bg-indigo-600 dark:bg-indigo-700 text-white rounded-br-none shadow-lg shadow-indigo-500/10' 
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm'
            }`}>
              <div className={`mt-0.5 p-1 rounded-lg ${m.role === 'user' ? 'bg-white/10' : 'bg-indigo-50 dark:bg-slate-900'}`}>
                {m.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-indigo-600 dark:text-indigo-400" />}
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{m.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-3xl rounded-bl-none flex items-center space-x-3 rtl:space-x-reverse shadow-sm">
              <div className="flex space-x-1 rtl:space-x-reverse">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                {lang === 'ar' ? 'جاري التحليل...' : 'Thinking...'}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.aiPlaceholder}
            className="w-full bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-indigo-500/30 rounded-2xl px-5 py-3.5 dark:text-white outline-none transition-all duration-300 text-sm"
          />
          <button 
            type="submit"
            disabled={loading || !input.trim()}
            className="absolute right-2 top-1.5 bottom-1.5 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:grayscale shadow-lg shadow-orange-500/20 rtl:right-auto rtl:left-2"
          >
            <Send size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
