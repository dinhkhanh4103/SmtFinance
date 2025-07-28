import { View, Text, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import QRCodeGenerator from './components/QRCodeGenerator'
import AppText from '../../components/text/AppText'
import AppButton from '../../components/button/AppButton'
import light from '../../theme/light'


const PeriodicPayment = ({navigation}:any) => {
    const {t} = useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            
            <AppBlock alignItems='center'>
                <HeaderBack title={t('periodic_payment')}/>
                <AppText mt={30}>{t('scan_to_transfer')}</AppText>
                <AppBlock row alignItems='center' mv={12}>
                    <Image source={require('../../../assets/icons/agribank.png')} style={{width:40, height:40}}/>
                    <AppText size={20} weight='600' semiBold>Agribank</AppText>
                </AppBlock>
                <AppText size={24} weight='600' semiBold>DINH DUC KHANH</AppText>
                <AppText size={16} weight='600' semiBold>0123456789</AppText>
                <Image source={require('../../../assets/images/QR_payment.png')} style={{width:256, height:256}}/>
                <Image source={require('../../../assets/images/vietqr_logo.png')} style={{width:130, height:24}}/>
                <AppText size={16} weight='500' style={{width:'85%'}} mv={12}>{t('send_transfer_image_message')}</AppText>
                <AppButton name={t('send_message')} backgroundColor='white' textColor={light.Primary} width={120} heigth={40} onPress={()=> navigation.navigate('ChatRoomScreen')}></AppButton>
            </AppBlock>
            <AppButton name={t('confirm')} onPress={()=>navigation.navigate('PeriodicPaymentSuccessScreen')}/>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default PeriodicPayment