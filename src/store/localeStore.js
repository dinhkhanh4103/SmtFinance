import { create } from 'zustand';
import i18n from '../i18n';

export const useLocaleStore = create(set => ({
  locale: i18n.language,

  changeLanguage: lang => {
    i18n.changeLanguage(lang);
    set({ locale: lang });
  },
}));
