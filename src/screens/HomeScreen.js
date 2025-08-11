import React from 'react';
import { View, Text } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { useThemeStore } from '../store/themeStore';
import { Image } from 'react-native';
import Assest from '../utils/Assets'
import { useTranslation } from 'react-i18next';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { toggleTheme } = useThemeStore();
    const { t } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ color: colors.primary }}>🏠 Home Screen</Text>

      <Image source={Assest.Icons.wolf}
          style={{ width: 60, height: 60 }}/>

      <Image source={Assest.Images.background}
          style={{ width: 60, height: 160 }}/>

      <Button mode="contained" onPress={() => navigation.navigate('Profile')}>
        {t('button_profile')}
      </Button>

      <Button style={{ marginTop: 20 }} mode="outlined" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
  );
};

export default HomeScreen;
