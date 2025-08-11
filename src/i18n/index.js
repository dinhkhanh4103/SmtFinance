import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const en = require('./locales/en.js');
const vi = require('./locales/vi.js');


i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    lng: RNLocalize.getLocales()[0].languageCode.startsWith('vi') ? 'vi' : 'vi',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
