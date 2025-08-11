import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { useLocaleStore } from '../../store/localeStore'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'

const LanguageScreen = () => {
    const {t}= useTranslation();
    const { changeLanguage } = useLocaleStore();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('language')}/>
            <TouchableOpacity onPress={()=>changeLanguage('vi')}>
                <AppBlock row alignItems='center' justifyContent='center' background={light.Primary} pv={12} radius={12}>
                    <Image source={require('../../../assets/icons/icon_VN.png')}/>
                    <AppText ml={12} size={16} weight='500' color='white'>{t('vietnamese')}</AppText>
                </AppBlock>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:12, borderWidth:2, borderColor:light.Primary, marginTop:12 }} onPress={()=>changeLanguage('en')}>
                <AppBlock row alignItems='center' justifyContent='center' pv={12}>
                    <Image source={require('../../../assets/icons/icon_EN.png')}/>
                    <AppText ml={12} size={16} weight='500' color={light.Primary}>{t('english')}</AppText>
                </AppBlock>
            </TouchableOpacity>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default LanguageScreen