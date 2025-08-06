import { View, Text, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import light from '../../theme/light'
import AppButton from '../../components/button/AppButton'

const PaymentSuccessScreen = ({navigation}:any) => {
    const {t}= useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <AppBlock alignItems='center' mt={100}>
                <Image source={require('../../../assets/images/payment_success.png')} style={{width:304, height:354}}/>
                <AppText mt={20} size={24} weight='600' semiBold color={light.Primary}>{t('payment_successful')}</AppText>
            </AppBlock>
            <AppBlock>
                <AppButton name={t('go_home')} onPress={()=>navigation.navigate('MainTabs')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default PaymentSuccessScreen