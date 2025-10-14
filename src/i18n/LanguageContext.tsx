import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, defaultLanguage } from './languages';
import { translations, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    if (stored && ['en', 'de', 'es', 'pt', 'fr', 'it'].includes(stored)) {
      return stored as Language;
    }
    
    // Auto-detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'de', 'es', 'pt', 'fr', 'it'].includes(browserLang)) {
      return browserLang as Language;
    }
    
    return defaultLanguage;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
