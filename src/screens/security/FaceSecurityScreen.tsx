import { View, Text, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFingerprint, faLock } from '@fortawesome/free-solid-svg-icons'
import light from '../../theme/light'
import AppText from '../../components/text/AppText'
import AppTextInput from '../../components/input/AppTextInput'
import AppButton from '../../components/button/AppButton'

const FaceSecurityScreen = ({navigation}:any) => {
    const {t}=useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <HeaderBack title={t('face_security')}/>
            <AppBlock flex>
                <AppBlock alignItems='center' mt={30}>
                    {/* <FontAwesomeIcon icon={faFingerprint} color={light.Primary} size={120}/> */}
                    <Image source={require('../../../assets/images/face_security.png')}/>
                </AppBlock>
                <AppBlock mt={30}>
                    <AppBlock alignItems='center'>
                        <AppText size={24} weight='600' semiBold>{t('enter_password')}</AppText>
                        <AppText mt={12}>{t('please_enter_password_before_face')}</AppText>
                    </AppBlock>
                    <AppBlock mt={20}>
                        <AppText size={16} weight='400' regular>{t('password')}</AppText>
                        <AppTextInput secureText placeholder={t('enter_password')} leftIcon={faLock}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock>
                <AppButton name={t('confirm')} onPress={()=>navigation.navigate('FaceSuccessScreen')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default FaceSecurityScreen