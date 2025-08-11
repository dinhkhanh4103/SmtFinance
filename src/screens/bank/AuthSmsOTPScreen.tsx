import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import AppBlock from '../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faLocation, faLock, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import AppScreenWrapper from '../../components/view/AppScreenWrapper'
import light from '../../theme/light'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import AppTextInput from '../../components/input/AppTextInput'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import AppButton from '../../components/button/AppButton'
import OTPInput from '../../components/input/OTPInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppConstant from '../../config/AppConstant'

const { width, height } = Dimensions.get('window');
const AuthSmsOTPScreen = ({navigation}:any) => {
    const { t } = useTranslation();
    const [showError, setShowError] = useState(false);
    const reason = 'assssss';
    function handleEnterOTP() {
        // setShowError(true)
        navigation.navigate('AddBankSuccessScreen')
    }
  return (
    <AppBlock style={{flex:1, backgroundColor:'white'}} pt={AppConstant.TOP} pb={AppConstant.BOTTOM}>

        <AppBlock flex background='white' alignItems='center' justifyContent='center'>
                <AppScreenWrapper>
                    <AppBlock flex alignItems='center' justifyContent='space-between'>
                        <AppBlock row alignItems='center' style={{width: '100%'}}>
                            <AppBlock>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <FontAwesomeIcon icon={faArrowLeft} size={20}/>
                                </TouchableOpacity>
                            </AppBlock>
                           <AppBlock>
                            <AppText ml={16} size={20} weight='600' semiBold>{t('enter_otp')}</AppText>
                           </AppBlock>
                        </AppBlock>
                        
                        <AppBlock>
                            <AppBlock alignItems='center'>
                                <AppText size={24} weight='700' semiBold color='#554C46' mt={20} mb={10}>{t('enter_otp')}</AppText>
                                <AppText size={14} weight='400' color='#554C46'>{t('enter_otp_description')}</AppText>
                            </AppBlock>
                            <AppBlock mt={20}>
                                <OTPInput/>
                                <AppBlock justifyContent='flex-end' row alignItems='center'>
                                    <TouchableOpacity>
                                        <AppText color='#554C46' size={14} weight='700' regular mt={20}>{t('resend_otp')}</AppText>
                                    </TouchableOpacity>
                                </AppBlock>
                            </AppBlock>
                        </AppBlock>

                        <AppBlock style={{width:'100%'}} alignItems='center' justifyContent='center' mt={20}>
                            <AppButton name={t('confirm')} textStyle={{fontWeight: '600', fontSize: 16}} onPress={handleEnterOTP} />
                        </AppBlock>
                        
                    </AppBlock>
                </AppScreenWrapper>
            <Modal 
                visible={showError}
                transparent
                animationType="fade"
                onRequestClose={() => setShowError(false)}
            >
                <AppBlock flex alignItems='center' justifyContent='center' background="rgba(0, 0, 0, 0.3)">
                    <AppBlock background='white' style={{width:'90%'}} padding={12} radius={24}>
                        <AppBlock alignItems='flex-end' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pb={12}>
                            <TouchableOpacity onPress={()=>setShowError(false)}>
                                <FontAwesomeIcon icon={faXmark} size={20}/>
                            </TouchableOpacity>
                        </AppBlock>
                        <AppBlock> 
                            <AppText size={16} weight='400' center>{t('authentication_failed_due_to', {reason:reason})}</AppText>
                            <AppText size={16} weight='400' center>{t('support_consultation')}: <AppText color={light.Primary}>{t('hotline_number')}</AppText></AppText>
                            
                        </AppBlock>
                        <AppBlock mt={36}>
                            <AppButton name={t('go_home')} onPress={()=>navigation.navigate('MainTabs')}/>
                        </AppBlock>
                        <AppBlock mt={8}>
                            <AppButton name={t('choose_different_bank')} backgroundColor='white' textColor={light.Primary} onPress={()=>{}}/>
                        </AppBlock>
                    </AppBlock>
                </AppBlock>
            </Modal>
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
export default AuthSmsOTPScreen