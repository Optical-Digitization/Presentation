import { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "ar";
  });

  const direction = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    i18n.changeLanguage(lang);
    
    // لا تقم بتغيير document.documentElement هنا
    // لأنه يتم التعامل معه في App.jsx الرئيسي
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ lang, direction, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);