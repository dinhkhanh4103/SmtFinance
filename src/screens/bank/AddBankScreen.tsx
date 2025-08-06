import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AppSafeAreaView from '../../components/view/AppSafeAreaView';
import AppBlock from '../../components/view/AppBlock';
import HeaderBack from '../../components/header/HeaderBack';
import AppText from '../../components/text/AppText';
import AppTextInput from '../../components/input/AppTextInput';
import DatePickerInput from '../../components/input/DatePickerInput';
import AppButton from '../../components/button/AppButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../../components/input/DropDown';
import light from '../../theme/light';

const AddBankScreen = ({navigation}:any) => {
    const {t}=useTranslation();
    const [showConfirm, setShowConfirm] = useState(false);
    const [method, setMethod] = useState('sms');

    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('add_account')}/>
            <AppBlock flex>
                <AppBlock>
                    <AppText size={16} weight='400'>{t('card_number')}</AppText>
                    <AppTextInput placeholder={t('enter_card_number')}/>
                </AppBlock>
                <AppBlock>
                    <AppText size={16} weight='400'>{t('cardholder_name')}</AppText>
                    <AppTextInput placeholder={t('enter_cardholder_name')}/>
                </AppBlock>
                <AppBlock row justifyContent='space-between'>
                    <AppBlock style={{width:'48%'}}>  
                        <AppText size={16} weight='400'>{t('expiration_date')}</AppText>
                        <AppTextInput placeholder="MM/DD"/>
                    </AppBlock>
                    <AppBlock style={{width:'48%'}}>  
                        <AppText size={16} weight='400'>{t('cvv')}</AppText>
                        <AppTextInput placeholder={t('enter_cvv')}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock >
                <AppButton name={t('link')} onPress={()=>{setShowConfirm(true)}}/>
            </AppBlock>
            <Modal 
                visible={showConfirm}
                transparent
                animationType="fade"
                onRequestClose={() => setShowConfirm(false)}
            >
                <AppBlock flex alignItems='center' justifyContent='center' background="rgba(0, 0, 0, 0.3)">
                    <AppBlock background='white' style={{width:'90%'}} padding={12} radius={24}>
                        <AppBlock alignItems='flex-end' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pb={12}>
                            <TouchableOpacity onPress={()=>setShowConfirm(false)}>
                                <FontAwesomeIcon icon={faXmark} size={20}/>
                            </TouchableOpacity>
                        </AppBlock>
                        <AppBlock>
                            <AppBlock row justifyContent='space-between' pv={12} alignItems='flex-end'>
                                <AppText size={14} weight='400'>{t('cardholder_name')}:</AppText>
                                <AppText size={16} weight='600' semiBold>DINH DUC KHANH</AppText>
                            </AppBlock>
                            <AppBlock row justifyContent='space-between' pv={12} alignItems='flex-end'>
                                <AppText size={14} weight='400'>{t('card_number')}:</AppText>
                                <AppText size={16} weight='600' semiBold>5487484684</AppText>
                            </AppBlock>
                            <AppBlock row justifyContent='space-between' pv={12} alignItems='flex-end'>
                                <AppText size={14} weight='400'>{t('linked_date')}:</AppText>
                                <AppText size={16} weight='600' semiBold>{formattedDate}</AppText>
                            </AppBlock>
                            <AppBlock pv={12} >
                                <AppText size={14} weight='400'>{t('select_authentication_method')}</AppText>
                                <DropDown
                                    placeholder={t('select_authentication_method')}
                                    data={[
                                        { label: t('SMS'), value: 'sms' },
                                        { label: t('Email'), value: 'email' },
                                    ]}
                                    value={method} // <-- THÊM DÒNG NÀY
                                    onChange={(value : any) => setMethod(value)}
                                />
                            </AppBlock>
                        </AppBlock>
                        <AppBlock mt={36}>
                            <AppButton name={t('confirm')} onPress={()=>navigation.navigate('AuthSmsOTPScreen')}/>
                        </AppBlock>
                        <AppBlock mt={8}>
                            <AppButton name={t('cancel')} backgroundColor='white' textColor={light.Primary}/>
                        </AppBlock>
                    </AppBlock>
                </AppBlock>
            </Modal>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default AddBankScreen