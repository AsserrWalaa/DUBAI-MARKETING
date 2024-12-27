import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importing translation files
import en from "../src/locales/en.json";
import ar from "../src/locales/ar.json";

// i18next configuration
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en, // English translations
      },
      ar: {
        translation: ar, // Arabic translations
      },
    },

    fallbackLng: "en", // Fallback language if translation not found
    detection: {
      order: [
        "htmlTag", // Language from the HTML tag
        "cookie", // Language from cookies
        "localStorage", // Language from localStorage
        "sessionStorage", // Language from sessionStorage
        "navigator", // Language from the browser's navigator object
        "path", // Language from the URL path
        "subdomain", // Language from subdomain (if applicable)
      ],
      caches: ["cookie"], // Cache the selected language in a cookie
    },
  });

export default i18n;
