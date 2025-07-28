import {useContext} from 'react';
import {ThemeContext, ThemeContextValue} from '../../context/ThemeContext';

const useTheme = (): ThemeContextValue => {
  const themeContext = useContext<ThemeContextValue>(ThemeContext);
  return themeContext;
};

export default useTheme;
