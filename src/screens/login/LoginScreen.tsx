import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../components/view/AppBlock'
import AppText from '../../components/text/AppText';
import light from '../../theme/light';
import { useTranslation } from 'react-i18next';
import App from '../../../App';
import AppTextInput from '../../components/input/AppTextInput';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import AppCheckBox from '../../components/input/AppCheckBox';
import AppButton from '../../components/button/AppButton';
import AppScreenWrapper from '../../components/view/AppScreenWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../hooks/useAuth';
import { useAuthStore } from '../../store/authStore';
import AppConstant from '../../config/AppConstant';

const { width, height } = Dimensions.get('window');
const LoginScreen = ({navigation}:any) => {
    const { t } = useTranslation();
    const [checked, setChecked] = useState(false);
    const user = {
      'name' : 'Dinh Duc Khanh',
      "dateOfBirth": "31/12/1998",
      "email": "duckhanh@gmail.com",
      "password": "12345678",
      "gender": "Nam",
      "contact": {
        "permanentAddress": "Đội 15 An Chiểu II, Liên Phương, Tp Hưng Yên, Hưng Yên",
        "currentAddress": "Khu tập thể quân đội binh đoàn số 11, 105 Láng Hạ, Đống Đa, Hà Nội",
        "email": "anhkhiemhy90@gmail.com",
        "phone": "0339160077",
        "secondaryPhone": "0339161627"
      },
      "idCard": {
        "type": "Căn cước công dân gắn chip",
        "number": "000098000071",
        "issueDate": "28/06/2021"
      }
    };
    const {login} = useAuthStore();
    function handleLogin() {
        // Handle login logic here
        login(user);
    }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>

      <AppBlock flex background='white' alignItems='center' justifyContent='center' pb={AppConstant.BOTTOM} pt={AppConstant.TOP}>
          <ImageBackground
              source={require('../../../assets/images/background.png')}
              resizeMode='contain'
              style={styles.background}
          >
            <AppScreenWrapper>

              <AppBlock flex alignItems='center'  justifyContent='space-between'>
                  <AppBlock row alignItems='center' justifyContent='center' mt={150}>
                      <Image source={require('../../../assets/images/logo.png')} style={{width: 74}}/>
                      <AppText color={light.Primary} size={32} weight='800' ml={4} semiBold>{t('name_app')}</AppText>
                  </AppBlock>
                  <AppBlock alignItems='center' style={{width:'100%'}} justifyContent='center'>
                    <AppBlock alignItems='center'>
                        <AppBlock>
                            <AppText size={24} weight='700' semiBold color='#122457'>{t('login')}</AppText>
                        </AppBlock>
                        <AppBlock row alignItems='center' justifyContent='space-between' mt={20} mb={20}>
                            <TouchableOpacity style={styles.btn_media}>
                                <Image source={require('../../../assets/icons/google_login.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_media}>
                                <Image source={require('../../../assets/icons/apple_login.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_media}>
                                <Image source={require('../../../assets/icons/fb_login.png')}/>
                            </TouchableOpacity>
                        </AppBlock>
                    </AppBlock>

                    <AppBlock style={{width:'100%'}} row alignItems='center' mb={20} justifyContent='space-between'>
                        <AppBlock background={light.Primary} height={1} style={{width:'42%'}}></AppBlock>
                        <AppText mh={8} size={14} weight='500'>{t('or')}</AppText>
                        <AppBlock background={light.Primary} height={1} style={{width:'42%'}}></AppBlock>
                    </AppBlock>

                    <AppBlock style={{width:'100%'}}>
                        <AppBlock>
                          <AppText color='#122457' size={16} weight='400' regular>{t('account')}</AppText>
                          <AppTextInput placeholder={t('enter_account')} leftIcon={faUser} value={user.email}/>
                        </AppBlock>
                        <AppBlock>
                          <AppText color='#122457' size={16} weight='400' regular>{t('password')}</AppText>
                          <AppTextInput secureText placeholder={t('enter_password')} leftIcon={faLock} value={user.password}/>
                        </AppBlock>
                        <AppBlock row justifyContent='space-between' alignItems='center'>
                            <AppCheckBox label={t('remember_me')} onValueChange={(value) => setChecked(value)} />
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                                <AppText color={'#284BAC'} size={12} weight='400' regular>{t('forgot_password')}?</AppText>
                            </TouchableOpacity>
                        </AppBlock>
                    </AppBlock>
                  </AppBlock>

                  <AppBlock alignItems='center'>
                      <AppBlock row mb={8}>
                          <AppText color='#8C8C8C' size={14} weight='400' regular mr={4}>{t('not_account')}</AppText>
                          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                              <AppText color={'#284BAC'} size={14} weight='500' semiBold>{t('register')}</AppText>
                          </TouchableOpacity>
                      </AppBlock>
                      <AppBlock mb={0} style={{width:'100%'}} row justifyContent='space-between' alignItems='center'>
                        <AppBlock style={{width:'82%'}}>
                          <AppButton name={t('login')} onPress={handleLogin} radius={12} textColor='white' textStyle={{fontSize: 16, fontWeight: '500'}}/>
                        </AppBlock>
                        <TouchableOpacity style={{width: '15%'}}>
                          <AppBlock background={light.Primary} style={{width: '100%'}} height={44} justifyContent='center' alignItems='center' radius={12}>
                            <Image source={require('../../../assets/images/fingerprint.png')} style={{width: 20, height: 20}} />
                          </AppBlock>
                        </TouchableOpacity>
                      </AppBlock>
                  </AppBlock>
              </AppBlock>
            </AppScreenWrapper>
          </ImageBackground>
      </AppBlock>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100, // Adjust to fit the header
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  btn_media:{
    backgroundColor: 'white',
    borderColor:'#7C9AEA',
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 8,
    margin: 8,
    borderRadius: 8
  }
});
export default LoginScreen;
