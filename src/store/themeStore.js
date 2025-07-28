import { create } from 'zustand';
import { Appearance } from 'react-native';

export const useThemeStore = create(set => {
  const update = ({ colorScheme }) => {
    set({ isDark: colorScheme === 'dark' });
  };

  Appearance.addChangeListener(update);

  return {
    isDark: Appearance.getColorScheme() === 'dark',

    toggleTheme: () => set(state => ({ isDark: !state.isDark })),
    setDark: () => set({ isDark: true }),
    setLight: () => set({ isDark: false }),
  };
});
