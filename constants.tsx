
import { Language, Destination, UIContent } from './types';

export const THEME = {
  primary: '#1E1B4B', // Dark Blue from logo
  secondary: '#F97316', // Orange from logo
  accent: '#FFFFFF',
};

export const UI_TRANSLATIONS: Record<Language, UIContent> = {
  en: {
    navHome: "Home",
    navDestinations: "Destinations",
    navAbout: "About Us",
    navCommunity: "Feed",
    navContact: "Contact",
    heroTitle: "Discover the Magic of Kyrgyzstan",
    heroSubtitle: "Your premium gateway to Central Asia's hidden paradise, tailored for our valued Arabic guests.",
    aiTitle: "Najm AI Assistant",
    aiPlaceholder: "Ask about halal food, prayer times, or family tours...",
    featuredDestinations: "Explore Kyrgyzstan",
    bookNow: "Plan Your Journey",
    aboutTitle: "Our Story",
    aboutMission: "Our Mission",
    aboutMissionDesc: "To provide an unparalleled, culturally sensitive tourism experience that bridges the heart of Central Asia with the hospitality of the Arab world.",
    aboutValues: "Our Values",
    aboutHistory: "Our History",
    aboutHistoryDesc: "Founded in Bishkek, Najm Tourism began as a small vision to showcase the hidden gems of the Silk Road to the Middle East. Today, we are proud to be the leading agency for Arabic-speaking travelers.",
  },
  ar: {
    navHome: "الرئيسية",
    navDestinations: "الوجهات",
    navAbout: "من نحن",
    navCommunity: "رحلاتنا",
    navContact: "اتصل بنا",
    heroTitle: "اكتشف سحر قيرغيزستان",
    heroSubtitle: "بوابتك المتميزة إلى الجنة الخفية في آسيا الوسطى، مصممة خصيصاً لضيوفنا العرب الكرام.",
    aiTitle: "مساعد نجم الذكي",
    aiPlaceholder: "اسأل عن الأكل الحلال، أوقات الصلاة، أو الرحلات العائلية...",
    featuredDestinations: "استكشف قيرغيزستان",
    bookNow: "خطط لرحلتك",
    aboutTitle: "قصتنا",
    aboutMission: "مهمتنا",
    aboutMissionDesc: "تقديم تجربة سياحية لا تضاهى، تراعي الخصوصية الثقافية وتجسر المسافات بين قلب آسيا الوسطى وكرم الضيافة العربي.",
    aboutValues: "قيمنا",
    aboutHistory: "تاريخنا",
    aboutHistoryDesc: "تأسست شركة نجم في بيشكيك، وبدأت كرؤية صغيرة لتسليط الضوء على كنوز طريق الحرير للعالم العربي. اليوم، نحن فخورون بأن نكون الوكالة الرائدة للمسافرين العرب.",
  }
};

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: { en: 'Issyk-Kul Lake', ar: 'بحيرة إيسيك كول' },
    description: { 
      en: 'The pearl of Kyrgyzstan, a massive alpine lake surrounded by snow-capped mountains.', 
      ar: 'لؤلؤة قيرغيزستان، بحيرة جبلية ضخمة تحيط بها الجبال المغطاة بالثلوج.' 
    },
    details: {
      en: ['Luxury resorts on the northern shore', 'Healing thermal springs', 'Boat tours at sunset', 'Halal-friendly beach clubs'],
      ar: ['منتجعات فاخرة على الشاطئ الشمالي', 'ينابيع حرارية علاجية', 'جولات بالقوارب عند غروب الشمس', 'نوادي شاطئية حلال']
    },
    imageUrl: 'https://images.unsplash.com/photo-1570737197764-39fa78efae22?auto=format&fit=crop&q=80&w=800',
    tags: { en: ['Nature', 'Water'], ar: ['طبيعة', 'مياه'] }
  },
  {
    id: '2',
    title: { en: 'Ala Archa Canyon', ar: 'وادي علا أرتشا' },
    description: { 
      en: 'Stunning alpine National Park perfect for family picnics and light hiking.', 
      ar: 'منتزه وطني جبلي مذهل مثالي للنزهات العائلية والمشي لمسافات طويلة.' 
    },
    details: {
      en: ['Accessible paved trails for families', 'Riverside picnic spots', 'Majestic mountain peaks', 'Clean, fresh mountain air'],
      ar: ['مسارات معبدة وسهلة للعائلات', 'أماكن للنزهات بجانب النهر', 'قمم جبلية مهيبة', 'هواء جبلي نقي ومنعش']
    },
    imageUrl: 'https://images.unsplash.com/photo-1549413243-6c8a77a4190b?auto=format&fit=crop&q=80&w=800',
    tags: { en: ['Mountains', 'Adventure'], ar: ['جبال', 'مغامرة'] }
  },
  {
    id: '3',
    title: { en: 'Bishkek City', ar: 'مدينة بيشكيك' },
    description: { 
      en: 'The vibrant capital city blending Soviet history with modern Central Asian culture.', 
      ar: 'العاصمة النابضة بالحياة التي تمزج بين التاريخ السوفيتي وثقافة آسيا الوسطى الحديثة.' 
    },
    details: {
      en: ['Modern shopping malls', 'Traditional Osh Bazaar', 'Beautiful city parks', 'Premium steak houses and cafes'],
      ar: ['مراكز تسوق حديثة', 'سوق أوش التقليدي', 'منتزهات المدينة الجميلة', 'مطاعم فاخرة ومقاهي']
    },
    imageUrl: 'https://images.unsplash.com/photo-1569502741933-40a233306540?auto=format&fit=crop&q=80&w=800',
    tags: { en: ['City', 'Culture'], ar: ['مدينة', 'ثقافة'] }
  },
  {
    id: '4',
    title: { en: 'Son-Kul Lake', ar: 'بحيرة سون كول' },
    description: { 
      en: 'Experience the authentic nomadic lifestyle in traditional yurts.', 
      ar: 'جرب نمط الحياة البدوي الأصيل في الخيام التقليدية.' 
    },
    details: {
      en: ['Luxury yurt stays', 'Traditional horse games', 'Stargazing in clear skies', 'Organic local dairy products'],
      ar: ['إقامة فاخرة في الخيام', 'ألعاب الخيل التقليدية', 'مراقبة النجوم في سماء صافية', 'منتجات ألبان محلية عضوية']
    },
    imageUrl: 'https://images.unsplash.com/photo-1528659522105-081491147055?auto=format&fit=crop&q=80&w=800',
    tags: { en: ['Nomadic', 'Peaceful'], ar: ['بدوي', 'هدوء'] }
  }
];
