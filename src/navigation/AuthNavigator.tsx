import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import FlashScreen from '../screens/FlashScreen';
import LoginScreen from '../screens/login/LoginScreen';
import SignUpScreen from '../screens/register/SignUpScreen';
import EnterInformationScreen from '../screens/register/EnterInformationScreen';
import SignUpSuccessfullyScreen from '../screens/register/SignUpSuccess';
import ForgotPasswordScreen from '../screens/forgotPassword/ForgotPassswordScreen';
import ForgotOTPScreen from '../screens/forgotPassword/ForgotOTPScreen';
import SignUpOTPScreen from '../screens/register/SignUpOTPScreen';
import NewPasswordScreen from '../screens/forgotPassword/NewPasswordScreen';
import ChangePasswordSuccess from '../screens/forgotPassword/ChangePasswordSuccess';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (  
    <Stack.Navigator initialRouteName='FlashScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='FlashScreen' component={FlashScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='SignUpOTPScreen' component={SignUpOTPScreen} />
      <Stack.Screen name='EnterInformationScreen' component={EnterInformationScreen} />
      <Stack.Screen name='SignUpSuccessScreen' component={SignUpSuccessfullyScreen} />
      <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
      <Stack.Screen name='ForgotOTPScreen' component={ForgotOTPScreen} />
      <Stack.Screen name='NewPasswordScreen' component={NewPasswordScreen} />
      <Stack.Screen name='ChangePasswordSuccess' component={ChangePasswordSuccess} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
