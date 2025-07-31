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
import { ScrollView } from 'react-native-gesture-handler'

const VerificationInformationScreen_1 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [province_city, setProvince_city] = useState();
    const [district, setDistrict] = useState();
    const [ward_commune, setWard_commune] = useState();

  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock flex>
                <HeaderBack title={t('personal_info_verification')}/>
                <ScrollView style={{flex:1}}>

                    <AppBlock>
                        <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>1/2</AppText>
                        <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('contact_information')}</AppText>
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
                        

                        <AppBlock mt={20}>
                            <AppText size={16} weight='400' regular>{t('current_address')}</AppText>
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
                </ScrollView>
            </AppBlock>
            <AppButton name={t('continue')} onPress={()=> navigation.navigate('VerificationInformationScreen_2')} />
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default VerificationInformationScreen_1