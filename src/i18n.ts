import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationIT from './locales/it/translation.json';
import translationEN from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: {
        translation: translationIT
      },
      en: {
        translation: translationEN
      }
    },
    lng: 'it', // Force Italian as default
    fallbackLng: 'it',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser
      caches: ['localStorage'] // Save user's choice to localStorage
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
