import 'react-native-gesture-handler';
import './src/i18n';

import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigation from './src/navigation';

import { enableScreens } from 'react-native-screens';
import { Provider as PaperProvider } from 'react-native-paper';

import { useThemeStore } from './src/store/themeStore';
import { LightTheme } from './src/theme/LightTheme';
import { DarkTheme } from './src/theme/DarkTheme';
import { runMigrations } from './src/database/migrate';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
enableScreens();

const queryClient = new QueryClient();

function Main() {
  const { isDark } = useThemeStore();
  const theme = isDark ? DarkTheme : LightTheme;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="transparent" />
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
        <FlashMessage position="top" />
      </PaperProvider>
    </Provider>
  );
}

export default function App() {
  useEffect(() => {
    runMigrations();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      <StatusBar barStyle={'dark-content'} translucent />
    </QueryClientProvider>
  );
}
