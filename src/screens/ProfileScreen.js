import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from '../store/authStore';
import { useLocaleStore } from '../store/localeStore';
import { useTranslation } from 'react-i18next';

const ProfileScreen = () => {
  const { user, login, logout } = useAuthStore();
  const { changeLanguage } = useLocaleStore();
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <>
          <Text>{t('hello', { name: user.name })}</Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <Button
          title="Login Dummy"
          onPress={() => login({ name: 'John Doe' }, 'token')}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="EN" onPress={() => changeLanguage('en')} />
        <Button title="VI" onPress={() => changeLanguage('vi')} />
      </View>
    </View>
  );
};

export default ProfileScreen;
