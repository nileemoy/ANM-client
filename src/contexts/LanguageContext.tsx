import React, { createContext, useContext, useEffect, useState } from "react";
import { getTranslation, Language, TranslationKeys } from "../translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string, section?: keyof TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language");
    return (savedLang as Language) || "en";
  });

  const translate = (key: string, section?: keyof TranslationKeys): string => {
    return getTranslation(language, key, section) || getTranslation("en", key, section) || key;
  };

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
