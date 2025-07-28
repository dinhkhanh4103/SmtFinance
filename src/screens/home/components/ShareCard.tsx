import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import AppText from '../../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import AppButton from '../../../components/button/AppButton'

const ShareCard = () => {
    const {t} = useTranslation();
  return (
    <AppBlock alignItems='center'>

        <AppBlock flex height={96} mt={12} justifyContent='center' style={{
            width:'95%',
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 16,

            // iOS: bóng đều
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 8,

            // Android: elevation để tạo bóng
            elevation: 5,
        }}>
            <AppBlock style={{zIndex:1}} >
                <AppText color='#554C46' size={16} weight='500'>{t('share_with_everyone')}</AppText>
                <AppBlock mt={6}>
                    <AppButton name={t('share')} heigth={36} width={91} textStyle={{fontSize: 16, fontWeight: 500}}/>    
                </AppBlock>
            </AppBlock>
            <AppBlock style={{position: 'absolute', right: 24, zIndex:0}}>
                <Image source={require('../../../../assets/images/share_card_home.png')}/>
            </AppBlock>
        </AppBlock>
    </AppBlock>
  )
}

export default ShareCard