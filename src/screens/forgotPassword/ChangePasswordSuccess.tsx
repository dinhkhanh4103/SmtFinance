import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faLocation, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import AppScreenWrapper from '../../components/view/AppScreenWrapper'
import light from '../../theme/light'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import AppTextInput from '../../components/input/AppTextInput'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import AppButton from '../../components/button/AppButton'
import OTPInput from '../../components/input/OTPInput'
import ImageSlider from '../../components/view/ImageSlider'
import App from '../../../App'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppConstant from '../../config/AppConstant'

const { width, height } = Dimensions.get('window');
const ChangePasswordSuccess = ({navigation}:any) => {
    const { t } = useTranslation();

    function handleEnterOTP() {
        navigation.navigate('EnterInformationScreen');
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
                    <AppBlock flex alignItems='center' justifyContent='space-between' mt={100} style={{width: '100%'}}>
                        <AppBlock/>
                        <AppBlock alignItems='center' justifyContent='center' style={{width: '100%'}}>
                            <AppText size={24} weight='700' semiBold color='#122457' mt={20} mb={20}>{t('change_password_success')}</AppText>
                            <AppBlock style={{height: 250}} mv={20} alignItems='center' justifyContent='center'>
                                <ImageSlider
                                    images={[
                                        require('../../../assets/images/success1.png'),
                                        require('../../../assets/images/success2.png'),
                                    ]}
                                    interval={3000} // Auto-scroll every 3 seconds
                                />
                            </AppBlock>
                            <AppText size={14} weight='600' color='#554C46' mt={20}>{t('change_password_success_description')}</AppText>
                        </AppBlock>
                        
                        <AppBlock style={{width:'100%'}} alignItems='center' justifyContent='center' mt={20}>
                            <AppButton name={t('go_home')} textStyle={{fontWeight: '600', fontSize: 16}} onPress={() => navigation.navigate('LoginScreen')} />
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
export default ChangePasswordSuccess