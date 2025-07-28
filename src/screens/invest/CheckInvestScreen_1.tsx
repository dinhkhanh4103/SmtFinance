import { View, Text } from 'react-native'
import React from 'react'
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

const CheckInvestScreen_1 = ({navigation}: any) => {
    const {t} = useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('online_loan')}/>
                <AppBlock>
                    <AppText size={24} weight='600' semiBold>{t('check_investment_conditions')}</AppText>
                    <AppText size={14} weight='400' regular mt={4}>{t('complete_info_steps')}</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>1/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('personal_info')}</AppText>
                    <AppBlock mt={20}>
                        <AppText size={16} weight='400' regular>{t('full_name')}</AppText>
                        <AppTextInput placeholder={t('enter_full_name')}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('id_passport')}</AppText>
                        <AppTextInput placeholder={t('enter_information')}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('tax_code_if_business')}</AppText>
                        <AppTextInput placeholder={t('enter_tax_code')}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('issue_date')}</AppText>
                        <DatePickerInput/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('place_of_issue')}</AppText>
                        <AppTextInput placeholder={t('enter_information')}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppButton name={t('continue')} onPress={()=> navigation.navigate('CheckInvestScreen_2')}/>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default CheckInvestScreen_1