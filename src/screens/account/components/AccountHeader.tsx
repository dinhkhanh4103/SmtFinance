import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import AppText from '../../../components/text/AppText'
import LinearGradient from 'react-native-linear-gradient';
import { useAuthStore } from '../../../store/authStore';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faCircleChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import AppConstant from '../../../config/AppConstant';
import AppButton from '../../../components/button/AppButton';
const AccountHeader = () => {
    const navigation = useNavigation();
    const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 44
    const user = useAuthStore(state => state.user)
    const { t } = useTranslation();
    const auth = false;
  return(
    <LinearGradient colors={["#DFAE66","#FFFFFF"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{ width:'100%', height: 134, borderBottomRightRadius:16, borderBottomLeftRadius: 16,}}>
        <AppBlock mt={AppConstant.TOP} alignItems='center'>
            <AppBlock row justifyContent='space-between' style={{width:'95%'}} radius={16} border={1} borderColor='#C6C6C6' background='#FFFFFF66' ph={12} pv={8} height={60}>
                <TouchableOpacity onPress={()=>{
                    auth ? navigation.navigate('InformationScreen') : navigation.navigate('VerificationInformationScreen_1')
                }}>
                    <AppBlock row justifyContent='space-between' style={{width:'100%'}}>
                        <AppBlock row>
                            <AppBlock style={{}}>
                                <Image source={require('../../../../assets/images/avatar.jpg')} resizeMode='cover' style={{width:48, height: 48, borderRadius: 24}}/>
                            </AppBlock>
                            <AppBlock justifyContent='center' ml={8}>
                                <AppText size={16} weight='600' semiBold>{user.name}</AppText>
                                <AppBlock mt={4}>
                                    {auth
                                    ?
                                        <AppButton name='Đã xác thực' width={96} heigth={27} textStyle={{fontSize:12}}/>
                                    :
                                        <AppButton name='Chưa xác thực' width={96} heigth={27} textStyle={{fontSize:12}}/>
                                    }
                                </AppBlock>
                            </AppBlock>
                        </AppBlock>
                        <AppBlock alignItems='center' justifyContent='center'>
                            <FontAwesomeIcon icon={faChevronRight} size={24}/>
                        </AppBlock>
                    </AppBlock>
                </TouchableOpacity>
            </AppBlock>
        </AppBlock>
    </LinearGradient>
  )
}

export default AccountHeader