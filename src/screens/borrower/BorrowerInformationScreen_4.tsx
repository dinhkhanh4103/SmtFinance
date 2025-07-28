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

const BorrowerInformationScreen_4 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [occupation, setOccupation] = useState();
    const [contactPersons, setContactPersons] = useState([1, 2]);
    const [nextNumber, setNextNumber] = useState(3);
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock flex>
                <HeaderBack title={t('borrower_information')}/>
                <AppBlock flex>
                    <AppBlock style={{width:'100%', height: 8}} background='#EBEBEB' radius={99} mb={12}>
                        <AppBlock style={{width:'66%', height: '100%'}} background={light.Primary} radius={99}/>
                    </AppBlock>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>4/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('contact_info')}</AppText>
                    <FlatList
                        data={contactPersons}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                        style={{height: '73%', marginTop:12, flex:1}}
                        renderItem={({item})=>(
                            <AppBlock>
                                    <AppBlock mt={8}>
                                        <AppText size={20} weight='400' regular mb={4}>{t('contact_person')} {item}</AppText>
                                        <AppText size={16} weight='400' regular>{t('full_name')}</AppText>
                                        <AppTextInput value='Nguyễn văn A' editable={false}/>
                                    </AppBlock>
                                    <AppBlock mt={4}>
                                        <AppText size={16} weight='400' regular>{t('relationship_to_you')}</AppText>
                                        <AppTextInput value='Anh' editable={false}/>
                                    </AppBlock>
                                    <AppBlock mt={4}>
                                        <AppText size={16} weight='400' regular>{t('phone_number')}</AppText>
                                        <AppTextInput value='01454584558' editable={false}/>
                                    </AppBlock>
                            </AppBlock>
                        )}
                    />
                </AppBlock>
            </AppBlock>
            <AppBlock style={{width:"100%"}}>  
                <AppButton name={t('continue')} onPress={()=> navigation.navigate('BorrowerInformationScreen_5')}/>    
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default BorrowerInformationScreen_4