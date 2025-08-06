import { View, Text, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck, faFingerprint, faLock } from '@fortawesome/free-solid-svg-icons'
import light from '../../theme/light'
import AppText from '../../components/text/AppText'
import AppTextInput from '../../components/input/AppTextInput'
import AppButton from '../../components/button/AppButton'

const FingerprintSuccessScreen = ({navigation}:any) => {
    const {t}=useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <HeaderBack title={t('fingerprint_security')}/>
            <AppBlock flex>
                <AppBlock alignItems='center' mt={30}>
                    <AppBlock>
                        <Image source={require('../../../assets/images/fingerprint_security.png')}/>
                        <AppBlock style={{position:'absolute', top:12, right:12}}>
                            <FontAwesomeIcon icon={faCheck} color={light.green500} size={24}/>
                        </AppBlock>
                    </AppBlock>
                    {/* <FontAwesomeIcon icon={faFingerprint} color={light.Primary} size={120}/> */}
                </AppBlock>
                <AppBlock mt={30}>
                    <AppBlock alignItems='center'>
                        <AppText size={24} weight='600' semiBold>{t('fingerprint_added')}</AppText>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock>
                <AppButton name={t('complete')} onPress={()=>navigation.navigate('MainTabs', {screen:'Account'})}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default FingerprintSuccessScreen