import { View, Text, Image, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'

const AboutScreen = () => {
    const {t} = useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%'}}>
            <HeaderBack title={t('about_app')}/>
            <AppBlock>
                <Image source={require('../../../assets/images/slider_image_home.jpg')} style={{width:'100%', height:180, borderRadius:12}} resizeMode='cover'/>
                <AppBlock mt={12}>
                    <AppText size={16} weight='600' semiBold>{t('referral_link')}</AppText>
                    <AppBlock row border={1} radius={12} borderColor={light.Primary} pv={4} ph={8} mt={8} alignItems='center' justifyContent='space-between'>
                        <TextInput value='https://smt-finance/homepage' editable={false}/>
                        <TouchableOpacity>
                            <AppBlock alignItems='center' justifyContent='center' padding={8} style={{borderLeftWidth: 1, borderLeftColor: light.Primary}}>
                                <AppText size={14} weight='600' color={light.Primary}>{t('copy')}</AppText>
                            </AppBlock>
                        </TouchableOpacity>
                    </AppBlock>
                </AppBlock>
                <AppBlock row justifyContent='space-between' mt={12}>
                    <AppBlock>
                        <AppBlock>
                            <AppText size={16} weight='600' semiBold>{t('share')}</AppText>
                            <AppBlock row alignItems='center' justifyContent='space-between' mt={8}>
                                <TouchableOpacity style={styles.btn_media}>
                                    <Image source={require('../../../assets/icons/google_login.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn_media}>
                                    <Image source={require('../../../assets/icons/fb_login.png')}/>
                                </TouchableOpacity>
                            </AppBlock>
                        </AppBlock>
                        <AppBlock mt={12}>
                            <AppText size={16} weight='600' semiBold>{t('referral_code')}</AppText>
                            <AppBlock border={1} radius={8} borderColor={light.Primary} pv={8} ph={8} mt={8} alignItems='center'>
                                <AppText size={20} weight='500'>05256684</AppText>
                            </AppBlock>
                        </AppBlock>
                    </AppBlock>
                    <AppBlock alignItems='center'>
                        <AppText size={16} weight='600' semiBold mb={8}>{t('scan_qr_code')}</AppText>
                        <Image source={require('../../../assets/images/QR_share_app.png')} style={{width:114, height:114}}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}
const styles = StyleSheet.create({
    btn_media:{
    backgroundColor: 'white',
    borderColor:'#7C9AEA',
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight:12
  }
})
export default AboutScreen