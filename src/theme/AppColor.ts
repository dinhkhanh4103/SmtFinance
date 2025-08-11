export const lightTheme = {
  isDark: false,
  containerBackgroundColor: 'white',
  tabbarColor: '#fff',
  textColor: 'black',
  textColorButton: '#fff',
  switchButtonBackgroundColor: '#ccc',
  iconTabColor: 'black',
  buttonPrimary: '#1F2837',
};

export const darkTheme = {
  isDark: true,
  containerBackgroundColor: '#1F2837',
  tabbarColor: '#0E141F',
  textColor: 'white',
  textColorButton: '#000',
  switchButtonBackgroundColor: '#ccc',
  iconTabColor: 'white',
  buttonPrimary: '#ccc',
};
export type LightTheme = typeof lightTheme;
export type DarkTheme = typeof darkTheme;
export const animationDuration = 500;
