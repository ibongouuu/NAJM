
import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = (lang: Language) => `
You are the AI assistant for "Najm Company", a premium tourism agency in Kyrgyzstan.
Your primary goal is to assist guests from Arabic countries (GCC region mostly).
Kyrgyzstan is very friendly to Muslims, so emphasize:
1. Halal food availability (it's everywhere).
2. Prayer facilities (Masjids and prayer rooms).
3. Family-oriented activities (privacy, spacious nature).
4. Cooler weather compared to the Middle East.

Always respond in ${lang === 'ar' ? 'Arabic' : 'English'}.
Be polite, welcoming, and professional.
Focus on Kyrgyzstan destinations like Issyk-Kul, Bishkek, Ala-Archa, and Karakol.
`;

export const getTravelAdvice = async (prompt: string, lang: Language) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION(lang),
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'ar' 
      ? "عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً." 
      : "Sorry, something went error. Please try again later.";
  }
};
