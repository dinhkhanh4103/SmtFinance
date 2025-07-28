import { MD3LightTheme } from 'react-native-paper';

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1E88E5',     // brand blue
    secondary: '#FFC107',   // brand yellow
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#000000',
  },
};