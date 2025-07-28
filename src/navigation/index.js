import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { Provider } from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Root Stack (Tab + Profile)
export default function AppNavigation() {
  const isLogin = true;
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {
          isLogin 
          ? 
            <Stack.Screen
            name="Main"
            component={MainNavigator}
            />
          :
            <Stack.Screen name="Auth" component={AuthNavigator} />
          }
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
