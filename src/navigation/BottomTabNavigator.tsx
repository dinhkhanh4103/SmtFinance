import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import TradeScreen from '../screens/trade/TradeScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import AccountScreen from '../screens/account/AccountScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faHome,
  faUser,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import light from '../theme/light';
import TabIcon from '../components/view/TabIcon';
import { useTranslation } from 'react-i18next';
import MainNotificationScreen from '../screens/notification/MainNotificationScreen';
import WalletScreen from '../screens/wallet/WalletScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ( {navigation} : any ) => {
  const hasNewNotification = true; // Giả lập badge
    const { t } = useTranslation();
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarStyle:{
        height: 70,
    }}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: 'Trang chủ',
        headerShown: false,
        tabBarIcon: ({ focused, color, }) => (
          <TabIcon focused={focused} color={color} icon={faHome} label={t('home')}/>
        )
      }}/>
      <Tab.Screen name="EWallet" component={WalletScreen} options={{
        title: 'Ví điện tử',
        headerShown: false,
        tabBarIcon: ({ focused, color, }) => (
          <TabIcon focused={focused} color={color} icon={faWallet} label={t('trade')}/>
        )
      }}/>
      <Tab.Screen name="Notification" component={MainNotificationScreen} options={{
        title: 'Thông báo',
        headerShown: false,
        tabBarIcon: ({ focused, color, }) => (
          <TabIcon focused={focused} color={color} icon={faBell} label={t('notification')}/>
        )
      }}/>
      <Tab.Screen name="Account" component={AccountScreen} options={{
        title: 'Tài khoản',
        headerShown: false,
        tabBarIcon: ({ focused, color, }) => (
          <TabIcon focused={focused} color={color} icon={faUser} label={t('account')}/>
        )
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  focusedLabel: {
    color: light.Primary,
    fontSize: 12,
    marginLeft: 6,
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
});
