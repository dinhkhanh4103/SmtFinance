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
import HeaderBack from '../../components/header/HeaderBack';

const { width, height } = Dimensions.get('window');
const BiometricScreen = ({navigation}:any) => {
    const { t } = useTranslation();
    const [checked, setChecked] = useState(false);

    function handleLogin() {
        // Handle login logic here

    }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>

      <AppBlock flex background='white' alignItems='center' justifyContent='center'>
          <ImageBackground
              source={require('../../../assets/images/background.png')}
              resizeMode='contain'
              style={styles.background}
          >
            <AppScreenWrapper>

              <AppBlock flex alignItems='center'  justifyContent='space-between'>
                <AppBlock mt={100} style={{width: '100%'}}>
                  <HeaderBack title={t('biometric_authentication')}/>
                </AppBlock>
                <AppBlock alignItems='center'>
                    <Image source={require('../../../assets/images/biometric.png')} style={{width:76, height:164}}/>
                    <AppText size={16} weight='500' style={{textAlign:'center'}}>{t('biometric_auth_benefit')}</AppText>
                    <AppText size={12} weight='400' color='#4C4C4C' style={{textAlign:'center'}}>{t('biometric_data_privacy')}</AppText>
                </AppBlock>
                <AppBlock style={{width:'100%'}}>
                    <AppButton name={t('fingerprint_authentication')}/>
                    <AppBlock mv={12}>
                        <AppButton name={t('face_authentication')}/>    
                    </AppBlock>
                    <AppButton name={t('do_it_later')} backgroundColor='#fff' textColor={light.Primary}/>
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
export default BiometricScreen;
