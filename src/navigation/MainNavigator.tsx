import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import SearchSupportScreen from '../screens/support/SearchSupportScreen';
import RequestSupport from '../screens/home/components/RequestSupport';
import RequestDetailScreen from '../screens/support/RequestDetailScreen';
import SearchCategoriesSupportScreen from '../screens/support/SearchCategoriesSupportScreen';
import CheckInformationLoanScreen from '../screens/loan/CheckInformationLoanScreen';
import CheckInformationLoanScreen_2 from '../screens/loan/CheckInformationLoanScreen_2';
import CheckInformationLoanScreen_3 from '../screens/loan/CheckInformationLoanScreen_3';
import CheckInformationLoanScreen_4 from '../screens/loan/CheckInformationLoanScreen_4';
import CheckInformationLoanScreen_5 from '../screens/loan/CheckInformationLoanScreen_5';
import CheckInformationLoanScreen_6 from '../screens/loan/CheckInformationLoanScreen_6';
import LoanSuccessScreen from '../screens/loan/LoanSuccessScreen';
import SearchScreen from '../screens/home/SearchScreen';
import PeriodicPayment from '../screens/payment/PeriodicPayment';
import PeriodicPaymentSuccess from '../screens/payment/PeriodicPaymentSuccess';
import ChatRoom from '../screens/chat/ChatRoom';
import BiometricScreen from '../screens/biometric/BiometricScreen';
import TransactionPointScreen from '../screens/transaction/TransactionPointScreen';
import CheckCallCapitalScreen_1 from '../screens/callCapital/CheckCallCapitalSrceen_1';
import CheckCallCapitalScreen_2 from '../screens/callCapital/CheckCallCapitalScreen_2';
import CheckCallCapitalScreen_3 from '../screens/callCapital/CheckCallCapitalScreen_3';
import CheckCallCapitalScreen_4 from '../screens/callCapital/CheckCallCapitalScreen_4';
import CheckCallCapitalScreen_5 from '../screens/callCapital/CheckCallCapitalScreen_5';
import CheckCallCapitalScreen_6 from '../screens/callCapital/CheckCallCapitalScreen_6';
import CreateCallCapitalSucces from '../screens/callCapital/CreateCallCapitalSucces';
import HistoriesTradeScreen from '../screens/trade/HistoriesTradeScreen';
import InvestFundraisingScreen from '../screens/invest/InvestFundraisingScreen';
import CheckInvestScreen_1 from '../screens/invest/CheckInvestScreen_1';
import CheckInvestScreen_2 from '../screens/invest/CheckInvestScreen_2';
import CheckInvestScreen_3 from '../screens/invest/CheckInvestScreen_3';
import CheckInvestScreen_4 from '../screens/invest/CheckInvestScreen_4';
import CheckInvestScreen_5 from '../screens/invest/CheckInvestScreen_5';
import CheckInvestScreen_6 from '../screens/invest/CheckInvestScreen_6';
import InvestSuccessScreen from '../screens/invest/InvestSuccessScreen';
import BorrowerInformationScreen_1 from '../screens/borrower/BorrowerInformationScreen_1';
import BorrowerInformationScreen_2 from '../screens/borrower/BorrowerInformationScreen_2';
import BorrowerInformationScreen_3 from '../screens/borrower/BorrowerInformationScreen_3';
import BorrowerInformationScreen_4 from '../screens/borrower/BorrowerInformationScreen_4';
import BorrowerInformationScreen_5 from '../screens/borrower/BorrowerInformationScreen_5';
import BorrowerInformationScreen_6 from '../screens/borrower/BorrowerInformationScreen_6';
import LoanListScreen from '../screens/loan/LoanListScreen';
import LoanDetailScreen from '../screens/loan/LoanDetailScreen';
import HistoriesLoanScreen from '../screens/loan/HistoriesLoanScreen';
import LoanProposalScreen from '../screens/loan/LoanOnlineProposalScreen';
import LoanOnlineProposalScreen from '../screens/loan/LoanOnlineProposalScreen';
import LoanQuickProposalScreen from '../screens/loan/LoanQuickProposalScreen';
import CheckQuickLoanScreen_1 from '../screens/loan/CheckQuickLoanScreen_1';
import CheckQuickLoanScreen_2 from '../screens/loan/CheckQuickLoanScreen_2';
import CustomCameraScreen from '../screens/loan/components/CustomCameraScreen';

import InformationScreen from '../screens/account/InformationScreen';
import VerificationInformationScreen_1 from '../screens/account/VerificationInformationScreen_1';
import VerificationInformationScreen_2 from '../screens/account/VerificationInformationScreen_2';
import CheckQuickLoanScreen_3 from '../screens/loan/CheckQuickLoanScreen_3';
import LanguageScreen from '../screens/language/LanguageScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import HistoriesScoreScreen from '../screens/score/HistoriesScoreScreen';
import TipScoreScreen from '../screens/score/TipScoreScreen';
import InformationScoreScreen from '../screens/score/InformationScoreScreen';



const Stack = createStackNavigator();


const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='MainTabs' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainTabs' component={BottomTabNavigator} />
      <Stack.Screen name='BiometricScreen' component={BiometricScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />

      <Stack.Screen name='SearchScreen' component={SearchScreen}/>

      <Stack.Screen name='SearchSupportScreen' component={SearchSupportScreen}/>

      <Stack.Screen name='RequestDetailScreen' component={RequestDetailScreen}/>
      <Stack.Screen name='SearchCategoriesSupportScreen'  component={SearchCategoriesSupportScreen}/>

      <Stack.Screen name='CheckInformationLoanScreen' component={CheckInformationLoanScreen}/>
      <Stack.Screen name='CheckInformationLoanScreen_2' component={CheckInformationLoanScreen_2}/>
      <Stack.Screen name='CheckInformationLoanScreen_3' component={CheckInformationLoanScreen_3}/>
      <Stack.Screen name='CheckInformationLoanScreen_4' component={CheckInformationLoanScreen_4}/>
      <Stack.Screen name='CheckInformationLoanScreen_5' component={CheckInformationLoanScreen_5}/>
      <Stack.Screen name='CheckInformationLoanScreen_6' component={CheckInformationLoanScreen_6}/>
      <Stack.Screen name='LoanSuccessScreen' component={LoanSuccessScreen}/>

      <Stack.Screen name="PeriodicPaymentScreen" component={PeriodicPayment}/>
      <Stack.Screen name='PeriodicPaymentSuccessScreen' component={PeriodicPaymentSuccess}/>

      <Stack.Screen name='ChatRoomScreen' component={ChatRoom}/>

      <Stack.Screen name='TransactionPointScreen' component={TransactionPointScreen}/>

      <Stack.Screen name='CheckCallCapitalScreen_1' component={CheckCallCapitalScreen_1}/>
      <Stack.Screen name='CheckCallCapitalScreen_2' component={CheckCallCapitalScreen_2}/>
      <Stack.Screen name='CheckCallCapitalScreen_3' component={CheckCallCapitalScreen_3}/>
      <Stack.Screen name='CheckCallCapitalScreen_4' component={CheckCallCapitalScreen_4}/>
      <Stack.Screen name='CheckCallCapitalScreen_5' component={CheckCallCapitalScreen_5}/>
      <Stack.Screen name='CheckCallCapitalScreen_6' component={CheckCallCapitalScreen_6}/>
      <Stack.Screen name='CreateCallCapitalSucces' component={CreateCallCapitalSucces}/>
      <Stack.Screen name='HistoriesTradeScreen' component={HistoriesTradeScreen}/>

      <Stack.Screen name='InvestFundraisingScreen' component={InvestFundraisingScreen}/>
      <Stack.Screen name='CheckInvestScreen_1' component={CheckInvestScreen_1}/>
      <Stack.Screen name='CheckInvestScreen_2' component={CheckInvestScreen_2}/>
      <Stack.Screen name='CheckInvestScreen_3' component={CheckInvestScreen_3}/>
      <Stack.Screen name='CheckInvestScreen_4' component={CheckInvestScreen_4}/>
      <Stack.Screen name='CheckInvestScreen_5' component={CheckInvestScreen_5}/>
      <Stack.Screen name='CheckInvestScreen_6' component={CheckInvestScreen_6}/>
      <Stack.Screen name='InvestSuccessScreen' component={InvestSuccessScreen}/>

      <Stack.Screen name='BorrowerInformationScreen_1' component={BorrowerInformationScreen_1}/>
      <Stack.Screen name='BorrowerInformationScreen_2' component={BorrowerInformationScreen_2}/>
      <Stack.Screen name='BorrowerInformationScreen_3' component={BorrowerInformationScreen_3}/>
      <Stack.Screen name='BorrowerInformationScreen_4' component={BorrowerInformationScreen_4}/>
      <Stack.Screen name='BorrowerInformationScreen_5' component={BorrowerInformationScreen_5}/>
      <Stack.Screen name='BorrowerInformationScreen_6' component={BorrowerInformationScreen_6}/>

      <Stack.Screen name='LoanListScreen' component={LoanListScreen}/>
      <Stack.Screen name='LoanDetailScreen' component={LoanDetailScreen}/>
      <Stack.Screen name='HistoriesLoanScreen' component={HistoriesLoanScreen}/>
      <Stack.Screen name='LoanOnlineProposalScreen' component={LoanOnlineProposalScreen}/>

      <Stack.Screen name='LoanQuickProposalScreen' component={LoanQuickProposalScreen}/>
      <Stack.Screen name='CheckQuickLoanScreen_1' component={CheckQuickLoanScreen_1}/>
      <Stack.Screen name='CheckQuickLoanScreen_2' component={CheckQuickLoanScreen_2}/>
      <Stack.Screen name='CheckQuickLoanScreen_3' component={CheckQuickLoanScreen_3}/>
      <Stack.Screen name='CustomCameraScreen' component={CustomCameraScreen}/>

      <Stack.Screen name='InformationScreen' component={InformationScreen}/>

      <Stack.Screen name='VerificationInformationScreen_1' component={VerificationInformationScreen_1}/>
      <Stack.Screen name='VerificationInformationScreen_2' component={VerificationInformationScreen_2}/>

      <Stack.Screen name='LanguageScreen' component={LanguageScreen}/>

      <Stack.Screen name='NotificationScreen' component={NotificationScreen}/>

      <Stack.Screen name='HistoriesScoreScreen' component={HistoriesScoreScreen}/>
      <Stack.Screen name='TipScoreScreen' component={TipScoreScreen}/>
      <Stack.Screen name='InformationScoreScreen' component={InformationScoreScreen}/>

      {/* <Stack.Screen name='RequestSupport' component={RequestSupport}/> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
