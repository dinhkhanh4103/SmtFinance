import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppBlock from '../../../components/view/AppBlock'
import AppText from '../../../components/text/AppText'
import LinearGradient from 'react-native-linear-gradient';
import { useAuthStore } from '../../../store/authStore';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import AppConstant from '../../../config/AppConstant';
import { faBell, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { TextInput } from 'react-native-gesture-handler';
const HeaderWallet = () => {
    const navigation = useNavigation();
    const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 44
    const user = useAuthStore(state => state.user)
    const { t } = useTranslation();
    const walletInfo = {
        accountNumber: '0406 2146 201',
        balance: 12975251210, // 12.975.251.210 VNĐ
    };
    const [showBalance, setShowBalance] = useState(false);
  return(
    <LinearGradient colors={["#DFAE66","#FFFFFF"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{ width:'100%', height: 210, borderBottomRightRadius:16, borderBottomLeftRadius: 16,}}>
        <AppBlock mt={AppConstant.TOP} alignItems='center'>
            <AppBlock row alignItems='center' justifyContent='space-between' style={{width:'95%'}} radius={16} border={1} borderColor='#C6C6C6' background='#FFFFFF66' ph={12} pv={8} height={60}>
                <TouchableOpacity>
                    <AppBlock row style={{}}>
                        <AppBlock style={{}}>
                            <Image source={require('../../../../assets/images/avatar.jpg')} resizeMode='cover' style={{width:48, height: 48, borderRadius: 24}}/>
                        </AppBlock>
                        <AppBlock justifyContent='center' ml={8}>
                            <AppText size={16} weight='600' semiBold>{user.name}</AppText>
                            <AppText size={12} weight='400'>{t('welcome_smtFinance')}</AppText>
                        </AppBlock>
                    </AppBlock>
                </TouchableOpacity>
                <AppBlock justifyContent='center' alignItems='center'row>
                    <TouchableOpacity onPress={()=> navigation.navigate('SearchScreen')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={20}/>   
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('NotificationScreen')}>
                        <AppBlock ml={12}>
                            <FontAwesomeIcon icon={faBell} size={20}/>   
                        </AppBlock>
                    </TouchableOpacity>
                </AppBlock>
            </AppBlock>
            <AppBlock style={{width:'95%'}} mt={8}>
                <AppText size={19} weight='600' semiBold>{walletInfo.accountNumber}</AppText>
                <AppBlock row alignItems='center'>
                    <TouchableOpacity onPress={()=>setShowBalance(prev =>!prev)}>
                        <FontAwesomeIcon icon={showBalance ? faEyeSlash: faEye} size={24}/>
                    </TouchableOpacity>
                    <AppText size={24} weight='600' semiBold ml={8}>{showBalance ? walletInfo.balance.toLocaleString('vi-VN') : '******'} VNĐ</AppText>
                </AppBlock>
            </AppBlock>
        </AppBlock>
    </LinearGradient>
  )
}

export default HeaderWallet