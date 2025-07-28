import { View, Text, TouchableOpacity } from 'react-native'
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
import { FlatList } from 'react-native-gesture-handler'
import App from '../../../App'

const CheckCallCapitalScreen_4 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [occupation, setOccupation] = useState();
    const [contactPersons, setContactPersons] = useState([1, 2]);
    const [nextNumber, setNextNumber] = useState(3);
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('online_loan')}/>
                <AppBlock>
                    <AppText size={24} weight='600' semiBold>{t('check_fundraising_conditions')}</AppText>
                    <AppText size={14} weight='400' regular mt={4}>{t('complete_info_steps')}</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>4/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('contact_info')}</AppText>
                    <FlatList
                        data={contactPersons}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                        style={{height: '73%', marginTop:12}}
                        renderItem={({item})=>(
                            <AppBlock>
                                    <AppBlock mt={8}>
                                        <AppText size={20} weight='400' regular mb={4}>{t('contact_person')} {item}</AppText>
                                        <AppText size={16} weight='400' regular>{t('full_name')}</AppText>
                                        <AppTextInput placeholder={t('enter_full_name')}/>
                                    </AppBlock>
                                    <AppBlock mt={4}>
                                        <AppText size={16} weight='400' regular>{t('relationship_to_you')}</AppText>
                                        <DropDown
                                            placeholder={t('enter_relationship')}
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
                                        <AppText size={16} weight='400' regular>{t('phone_number')}</AppText>
                                        <AppTextInput placeholder={t('enter_phone_number')}/>
                                    </AppBlock>
                            </AppBlock>
                        )}
                    />
                </AppBlock>
            </AppBlock>
            <AppBlock style={{position:"absolute", bottom:0, width:"100%"}}>  
                <TouchableOpacity onPress={()=>{
                    const newContactPersons = [...contactPersons, nextNumber];
                    setContactPersons(newContactPersons);
                    setNextNumber(prevNumber => prevNumber + 1);
                }}>
                    <AppText mb={12} size={14} weight='600' semiBold color={light.Primary}>+ {t('add_contact')}</AppText>
                </TouchableOpacity>
                <AppButton name={t('continue')} onPress={()=> navigation.navigate('CheckCallCapitalScreen_5')}/>    
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default CheckCallCapitalScreen_4