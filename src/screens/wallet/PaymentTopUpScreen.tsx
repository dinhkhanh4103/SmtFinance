import { View, Text } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import AppText from '../../components/text/AppText'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { library } from '@fortawesome/fontawesome-svg-core'
import light from '../../theme/light'
import AppButton from '../../components/button/AppButton'

const PaymentTopUpScreen = ({navigation, route}:any) => {
    const {amount, selectedBank} = route.params
    const {t} = useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('pay')}/>
                <AppBlock padding={12} radius={12} border={1} borderColor='#DCDCDC'>
                    <AppBlock row justifyContent='space-between' >
                        <AppText size={14} weight='400'>{t('service')}</AppText>
                        <AppText size={16} weight='600' semiBold>{t('top_up_bankcs_wallet')}</AppText>
                    </AppBlock>
                    <AppBlock row justifyContent='space-between' mt={8}>
                        <AppText size={14} weight='400'>{t('source_of_fund')}</AppText>
                        <AppText size={16} weight='600' semiBold>{selectedBank}</AppText>
                    </AppBlock>
                    <AppBlock row justifyContent='space-between' mt={8}>
                        <AppText size={14} weight='400'>{t('amount')}</AppText>
                        <AppText size={16} weight='600' semiBold>{amount.toLocaleString('vi-VN')} VNĐ</AppText>
                    </AppBlock>
                </AppBlock>
                <AppBlock padding={12} radius={12} border={1} borderColor='#DCDCDC' mt={12}>
                    <AppBlock row justifyContent='space-between' >
                        <AppText size={14} weight='400'>{t('transaction_fee')}</AppText>
                        <AppText size={16} weight='600' semiBold color={light.green500}>{t('free_of_charge')}</AppText>
                    </AppBlock>
                    <AppBlock row justifyContent='space-between' mt={8}>
                        <AppText size={14} weight='400'>{t('source_of_fund')}</AppText>
                        <AppText size={20} weight='600' semiBold color={light.Primary}>{amount.toLocaleString('vi-VN')} VNĐ</AppText>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock>
                <AppButton name={t('confirm')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default PaymentTopUpScreen