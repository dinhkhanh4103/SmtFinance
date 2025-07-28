import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import AppTextInput from '../../components/input/AppTextInput'
import AppButton from '../../components/button/AppButton'
import DropDown from '../../components/input/DropDown'
import { FlatList } from 'react-native-gesture-handler'
import AppModal from '../../components/view/AppModal'

const { width } = Dimensions.get('window');
const BorrowerInformationScreen_6 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [bank, setBank] = useState();
    const [openModal, setOpenModal] = useState(false);
    function handleContinue(){
        setOpenModal(true)
    }
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('borrower_information')}/>
                <AppBlock>
                    <AppBlock style={{width:'100%', height: 8}} background='#EBEBEB' radius={99} mb={12}>
                        <AppBlock style={{width:'100%', height: '100%'}} background={light.Primary} radius={99}/>
                    </AppBlock>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>6/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('bank_info')}</AppText>
                    <AppBlock mt={8}>
                    <AppText size={20} weight='400' regular mb={4}>{t('bank_account')} 1</AppText>
                        <AppText size={16} weight='400' regular>{t('bank')}</AppText>
                        <AppTextInput value='Vietcom Bank' editable={false}/>
                    </AppBlock>
                    <AppBlock mt={4}>

                        <AppText size={16} weight='400' regular>{t('account_number')}</AppText>
                        <AppTextInput value='05848484' editable={false}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('cardholder_name')}</AppText>
                        <AppTextInput value='DINH DUC KHANH' editable={false}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock style={{position:"absolute", bottom:0, width:"100%"}}>  
                <AppButton name={t('continue')} onPress={()=>{}}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 5,
    paddingTop: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#554C46',
    marginBottom: 12,
  },
  content: {
    fontSize: 14,
    color: '#554C46',
    lineHeight: 22,
    marginBottom: 24,
  },
  highlight: {
    color: '#D18800',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#D18800',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default BorrowerInformationScreen_6