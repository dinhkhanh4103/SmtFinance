import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import AppTextInput from '../../components/input/AppTextInput'
import DatePickerInput from '../../components/input/DatePickerInput'
import AppButton from '../../components/button/AppButton'
import DropDown from '../../components/input/DropDown'

const BorrowerInformationScreen_2 = ({navigation}: any) => {
    const {t} = useTranslation();

  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('borrower_information')}/>
                <AppBlock>
                    <AppBlock style={{width:'100%', height: 8}} background='#EBEBEB' radius={99} mb={12}>
                        <AppBlock style={{width:'33%', height: '100%'}} background={light.Primary} radius={99}/>
                    </AppBlock>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>2/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('residence_info')}</AppText>
                    <AppBlock mt={20}>
                        <AppText size={16} weight='400' regular>{t('permanent_address')}</AppText>
                        <AppTextInput value='Hà Nội' editable={false}/>
                        <AppTextInput value='Tây Hồ' editable={false}/>
                        <AppTextInput value='Tây Hồ' editable={false}/>
                        <AppTextInput value='38 Xuân La' editable={false}/>
                    </AppBlock>
                    
                </AppBlock>
            </AppBlock>
            <AppButton name={t('continue')} onPress={()=> navigation.navigate('BorrowerInformationScreen_3')} />
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default BorrowerInformationScreen_2