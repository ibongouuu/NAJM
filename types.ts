
export type Language = 'en' | 'ar';

export interface Destination {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  details: Record<Language, string[]>;
  imageUrl: string;
  tags: Record<Language, string[]>;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface User {
  name: string;
  email: string;
}

export interface TourPhoto {
  id: string;
  imageUrl: string;
  userName: string;
  caption: string;
  location: string;
  timestamp: number;
}

export interface UIContent {
  navHome: string;
  navDestinations: string;
  navAbout: string;
  navCommunity: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  aiTitle: string;
  aiPlaceholder: string;
  featuredDestinations: string;
  bookNow: string;
  aboutTitle: string;
  aboutMission: string;
  aboutMissionDesc: string;
  aboutValues: string;
  aboutHistory: string;
  aboutHistoryDesc: string;
}
