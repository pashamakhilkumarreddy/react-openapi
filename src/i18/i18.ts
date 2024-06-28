import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'i18/en-US/translations.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: { translations: { ...en } },
  },
  fallbackLng: 'en-US',
  keySeparator: false,
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: { escapeValue: false },
  react: { useSuspense: true },
});

export default i18n;
