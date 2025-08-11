import 'react-native-gesture-handler';
import './src/i18n';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigation from './src/navigation';

import { enableScreens } from 'react-native-screens';
import { Provider as PaperProvider } from 'react-native-paper';

import { useThemeStore } from './src/store/themeStore';
import { LightTheme } from './src/theme/LightTheme';
import { DarkTheme } from './src/theme/DarkTheme';
import { runMigrations } from './src/database/migrate';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
enableScreens();

const queryClient = new QueryClient();

function Main() {
  const { isDark } = useThemeStore();
  const theme = isDark ? DarkTheme : LightTheme;

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="transparent" />
      <AppNavigation />
    </PaperProvider>
  );
}

export default function App() {
  useEffect(() => {
    runMigrations();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <Main />
          <StatusBar barStyle="dark-content" translucent />
        </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
