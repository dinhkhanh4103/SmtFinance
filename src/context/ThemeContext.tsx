import React, {createContext, useEffect, useState} from 'react';
import {darkTheme, lightTheme, DarkTheme, LightTheme} from '../theme/AppColor';

export type Theme = LightTheme | DarkTheme;

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setThemeLocal: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  toggleTheme: () => {},
  setThemeLocal: () => {},
});

export const ThemeProvider: React.FC = (children) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const setThemeLocal = (_theme: Theme) => {
    setTheme(_theme);
  };
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme, setThemeLocal}}>{children}</ThemeContext.Provider>
  );
};
