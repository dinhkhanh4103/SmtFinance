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

const CheckInvestScreen_2 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [province_city, setProvince_city] = useState();
    const [district, setDistrict] = useState();
    const [ward_commune, setWard_commune] = useState();

  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('online_loan')}/>
                <AppBlock>
                    <AppText size={24} weight='600' semiBold>{t('check_investment_conditions')}</AppText>
                    <AppText size={14} weight='400' regular mt={4}>{t('complete_info_steps')}</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>2/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('residence_info')}</AppText>
                    <AppBlock mt={20}>
                        <AppText size={16} weight='400' regular>{t('permanent_address')}</AppText>
                        <DropDown
                            placeholder={t('select_province_city')}
                            data={[
                                { label: t('Hà Nội'), value: 'Hà Nội' },
                                { label: t('Hồ Chí Minh'), value: 'Hồ chí minh' },
                                { label: t('Quảng Ninh'), value: 'Quảng Ninh' },
                            ]}
                            value={province_city} // <-- THÊM DÒNG NÀY
                            onChange={(value : any) => setProvince_city(value)}
                        />
                        <DropDown
                            placeholder={t('select_district')}
                            data={[
                                { label: t('Hà Nội'), value: 'Hà Nội' },
                                { label: t('Hồ Chí Minh'), value: 'Hồ chí minh' },
                                { label: t('Quảng Ninh'), value: 'Quảng Ninh' },
                            ]}
                            value={district} // <-- THÊM DÒNG NÀY
                            onChange={(value : any) => setDistrict(value)}
                        />
                        <DropDown
                            placeholder={t('select_ward_commune')}
                            data={[
                                { label: t('Hà Nội'), value: 'Hà Nội' },
                                { label: t('Hồ Chí Minh'), value: 'Hồ chí minh' },
                                { label: t('Quảng Ninh'), value: 'Quảng Ninh' },
                            ]}
                            value={ward_commune} // <-- THÊM DÒNG NÀY
                            onChange={(value : any) => setWard_commune(value)}
                        />
                        <AppTextInput placeholder= {t('enter_specific_address')}/>
                    </AppBlock>
                    
                </AppBlock>
            </AppBlock>
            <AppButton name={t('continue')} onPress={()=> navigation.navigate('CheckInvestScreen_3')} />
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default CheckInvestScreen_2