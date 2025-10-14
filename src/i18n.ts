import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../public/locales/en/translation.json';
import ko from '../public/locales/ko/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
    lng: 'ko', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    supportedLngs: ['en', 'ko'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;