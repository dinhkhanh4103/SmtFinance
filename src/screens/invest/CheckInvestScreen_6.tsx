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
const CheckInvestScreen_6 = ({navigation}: any) => {
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
                <HeaderBack title={t('online_loan')}/>
                <AppBlock>
                    <AppText size={24} weight='600' semiBold>{t('check_investment_conditions')}</AppText>
                    <AppText size={14} weight='400' regular mt={4}>{t('complete_info_steps')}</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>6/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('bank_info')}</AppText>
                    <AppBlock mt={8}>
                    <AppText size={20} weight='400' regular mb={4}>{t('bank_account')} 1</AppText>
                        <AppText size={16} weight='400' regular>{t('bank')}</AppText>
                        <DropDown
                            placeholder={t('select_bank')}
                            data={[
                                { label: t('MB'), value: 'mb' },
                                { label: t('BIDV'), value: 'bidv' },
                            ]}
                            value={bank}
                            onChange={(value : any) => setBank(value)}
                        />
                    </AppBlock>
                    <AppBlock mt={4}>

                        <AppText size={16} weight='400' regular>{t('account_number')}</AppText>
                        <AppTextInput placeholder={t('enter_account_number')}/>
                    </AppBlock>
                    <AppBlock mt={4}>
                        <AppText size={16} weight='400' regular>{t('cardholder_name')}</AppText>
                        <AppTextInput  placeholder={t('enter_cardholder_name')}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock style={{position:"absolute", bottom:0, width:"100%"}}>  
                <AppButton name={t('continue')} onPress={handleContinue}/>
                <Modal
                    visible={openModal}
                    onRequestClose={()=>setOpenModal(false)}
                    transparent
                    animationType="fade"
                >
                    <AppBlock flex justifyContent='center' alignItems='center' background='rgba(0,0,0,0.4)'>
                        <AppBlock style={styles.modalContainer} alignItems='center' justifyContent='center'>
                            <AppBlock  alignItems='center' style={{width:'90%'}}>
                                <AppText size={16} weight='400' regular>Bạn có chắc chắn muốn đầu tư với mức đầu tư là <AppText size={16} weight='400' regular color={light.Primary}>185.000.000 VNĐ</AppText> không?</AppText>
                            </AppBlock>
                            
                            <TouchableOpacity onPress={()=>navigation.navigate('InvestSuccessScreen')}>
                                <AppText pv={12} color={light.Primary} size={16} weight='600' semiBold>{t('confirm')}</AppText>
                            </TouchableOpacity>
                            <AppBlock style={{width: '100%'}} border={1} borderColor='#DCDCDC'></AppBlock>
                            <TouchableOpacity onPress={()=>setOpenModal(false)}>
                                <AppText pv={12} color='red' size={16} weight='600' semiBold>{t('cancel')}</AppText>
                            </TouchableOpacity>
                        </AppBlock>
                    </AppBlock>
                </Modal>
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
export default CheckInvestScreen_6