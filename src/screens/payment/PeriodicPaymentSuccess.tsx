import { View, Text, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import AppButton from '../../components/button/AppButton'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import HeaderBack from '../../components/header/HeaderBack'


const PeriodicPaymentSuccess = ({navigation}: any) => {
    const {t} = useTranslation()
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: '100%'}} alignItems='center' justifyContent='space-between'>
            <HeaderBack title={t('periodic_payment')}/>
            <AppBlock alignItems='center'  style={{width:'100%'}}>
                <Image style={{width: 304, height:339}} source={require('../../../assets/images/loan_success.png')}/>
                <AppText size={24} weight='600' semiBold color={light.Primary}  mt={20}>{t('payment_completed')}</AppText>
                <AppText style={{width:'85%'}} size={14} weight='400' regular mt={12}>{t('payment_check_notification')}</AppText>
            </AppBlock>
            <AppBlock style={{width:'100%'}} alignItems='center' justifyContent='center' mt={20}>
                <AppButton name={t('go_home')} textStyle={{fontWeight: '600', fontSize: 16}} onPress={() => navigation.navigate('MainTabs')} />
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default PeriodicPaymentSuccess