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

const CheckCallCapitalScreen_3 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [occupation, setOccupation] = useState();
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('online_loan')}/>
                <AppBlock>
                    <AppText size={24} weight='600' semiBold>{t('check_fundraising_conditions')}</AppText>
                    <AppText size={14} weight='400' regular mt={4}>{t('complete_info_steps')}</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>3/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('occupation_info')}</AppText>
                    <AppBlock mt={20}>
                        <AppText size={16} weight='400' regular>{t('occupation')}</AppText>
                        <DropDown
                            placeholder={t('select_occupation')}
                            data={[
                                { label: t('IT'), value: 'it' },
                                { label: t('Tự do'), value: 'free' },
                                { label: t('Khác'), value: 'other' },
                            ]}
                            value={occupation}
                            onChange={(value : any) => setOccupation(value)}
                        />
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('company_business_name')}</AppText>
                        <AppTextInput placeholder={t('enter_company_name')}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('company_address')}</AppText>
                        <AppTextInput placeholder={t('enter_specific_address')}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('average_monthly_income')}</AppText>
                        <AppTextInput placeholder={t('enter_number')}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppButton name={t('continue')} onPress={()=> navigation.navigate('CheckCallCapitalScreen_4')}/>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default CheckCallCapitalScreen_3