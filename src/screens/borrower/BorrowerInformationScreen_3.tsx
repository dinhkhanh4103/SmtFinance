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

const BorrowerInformationScreen_3 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [occupation, setOccupation] = useState();
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('borrower_information')}/>
                <AppBlock>
                    <AppBlock style={{width:'100%', height: 8}} background='#EBEBEB' radius={99} mb={12}>
                        <AppBlock style={{width:'50%', height: '100%'}} background={light.Primary} radius={99}/>
                    </AppBlock>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>3/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('occupation_info')}</AppText>
                    <AppBlock mt={20}>
                        <AppText size={16} weight='400' regular>{t('occupation')}</AppText>
                        <AppTextInput value='Bác sĩ' editable={false}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('company_business_name')}</AppText>
                        <AppTextInput value='Bệnh viện Bạch Mai' editable={false}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('company_address')}</AppText>
                        <AppTextInput value='38 Xuân La' editable={false}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('average_monthly_income')}</AppText>
                        <AppTextInput value='20.000.000 VNĐ' editable={false}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppButton name={t('continue')} onPress={()=> navigation.navigate('BorrowerInformationScreen_4')}/>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default BorrowerInformationScreen_3