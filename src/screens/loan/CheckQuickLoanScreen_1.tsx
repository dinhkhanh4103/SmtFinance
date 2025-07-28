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

const CheckQuickLoanScreen_1 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [occupation, setOccupation] = useState();
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('quick_loan')}/>
                <AppBlock>
                    <AppText size={24} weight='600' semiBold>{t('check_loan_conditions')}</AppText>
                    <AppText size={14} weight='400' regular mt={4}>{t('complete_info_steps')}</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>1/3</AppText>
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
                        <AppText size={16} weight='400' regular>{t('issue_date')}</AppText>
                        <DatePickerInput/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('place_of_issue')}</AppText>
                        <AppTextInput placeholder={t('enter_information')}/>
                    </AppBlock>
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
                </AppBlock>
            </AppBlock>
            <AppButton name={t('continue')} onPress={()=> navigation.navigate('CheckQuickLoanScreen_2')}/>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default CheckQuickLoanScreen_1