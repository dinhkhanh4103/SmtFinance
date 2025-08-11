import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppBlock from '../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faLocation, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import AppScreenWrapper from '../../components/view/AppScreenWrapper'
import light from '../../theme/light'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import AppTextInput from '../../components/input/AppTextInput'
import { faCheckCircle, faUser } from '@fortawesome/free-regular-svg-icons'
import AppButton from '../../components/button/AppButton'
import OTPInput from '../../components/input/OTPInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppConstant from '../../config/AppConstant'

const { width, height } = Dimensions.get('window');
const NewPasswordScreen = ({navigation}:any) => {
    const { t } = useTranslation();

    function handleChangePassword() {
        navigation.navigate('ChangePasswordSuccess');
    }
  return (
    <AppBlock style={{flex:1, backgroundColor:'white'}} pt={AppConstant.TOP} pb={AppConstant.BOTTOM}>

        <AppBlock flex background='white' alignItems='center' justifyContent='center'>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                resizeMode='contain'
                style={styles.background}
            >
                <AppScreenWrapper>
                    <AppBlock flex alignItems='center' justifyContent='space-between'>
                        <AppBlock style={{width: '100%'}}>
                            <AppBlock row alignItems='center' justifyContent='space-between' mt={100} style={{width: '100%'}}>
                                <AppBlock>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <FontAwesomeIcon icon={faArrowLeft} size={20}/>
                                    </TouchableOpacity>
                                </AppBlock>
                            </AppBlock>

                            <AppBlock row alignItems='center' justifyContent='center' mt={40}>
                                <Image source={require('../../../assets/images/logo.png')} style={{width: 74}}/>
                                <AppText color={light.Primary} size={32} weight='800' ml={4} semiBold>{t('name_app')}</AppText>
                            </AppBlock>

                            <AppBlock mt={50}>
                                <AppBlock alignItems='center'>
                                    <AppText size={24} weight='700' semiBold color='#122457' mt={20} mb={10}>{t('new_password')}</AppText>
                                    <AppText size={14} weight='400' color='#554C46'>{t('new_password_description')}</AppText>
                                </AppBlock>
                                <AppBlock mt={20}>
                                    <AppText color='#554C46' size={16} weight='500' regular>{t('new_password')}</AppText>
                                    <AppTextInput secureText placeholder={t('enter_password')} leftIcon={faLock}/>
                                </AppBlock>
                                <AppBlock>
                                    <AppBlock row alignItems='center'>
                                        <FontAwesomeIcon icon={faCheckCircle}/>
                                        <AppText color='#554C46' size={14} weight='400' regular ml={6}>{t('check_password_6_characters')}</AppText>
                                    </AppBlock>
                                    <AppBlock row alignItems='center'>
                                        <FontAwesomeIcon icon={faCheckCircle}/>
                                        <AppText color='#554C46' size={14} weight='400' regular ml={6}>{t('check_password_1_uppercase')}</AppText>
                                    </AppBlock>
                                    <AppBlock row alignItems='center'>
                                        <FontAwesomeIcon icon={faCheckCircle}/>
                                        <AppText color='#554C46' size={14} weight='400' regular ml={6}>{t('check_password_1_number')}</AppText>
                                    </AppBlock>
                                </AppBlock>
                                <AppBlock mt={20}>
                                    <AppText color='#554C46' size={16} weight='500' regular>{t('confirm_password')}</AppText>
                                    <AppTextInput secureText placeholder={t('enter_confirm_password')} leftIcon={faLock}/>
                                </AppBlock>
                                
                            </AppBlock>
                        </AppBlock>


                        <AppBlock style={{width:'100%'}} alignItems='center' justifyContent='center' mt={20}>
                            <AppButton name={t('confirm')} textStyle={{fontWeight: '600', fontSize: 16}} onPress={handleChangePassword} />
                        </AppBlock>
                        
                    </AppBlock>
                </AppScreenWrapper>
            </ImageBackground>
        </AppBlock>
    </AppBlock>
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
})
export default NewPasswordScreen