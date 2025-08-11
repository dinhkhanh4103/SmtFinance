import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import SelectedLoan from './components/SelectedLoan'
import ItemAmountToPay from './components/ItemAmountToPay'
import CurrencyInput from '../../components/input/CurrencyInput'
import DropDown from '../../components/input/DropDown'
import { ScrollView } from 'react-native-gesture-handler'
import AppButton from '../../components/button/AppButton'

const PrePaymentScreen = ({navigation}:any) => {
    const {t}= useTranslation();
    const [selectedLoan, setSelectedLoan] = useState();
    const [selectedAmount, setSelectedAmount] = useState('');
    const [method, setMethod] = useState('');

    const loanData = [
        {
            date: '07/05/2023 04:20',
            loanCode: '146S235TFZZA84',
            term: '6 tháng',
            amount: '20.000.000 VNĐ',
        },
        {
            date: '24/04/2023 16:20',
            loanCode: '146S235TFZZA85',
            term: '6 tháng',
            amount: '20.000.000 VNĐ',
        },
        {
            date: '31/03/2023 15:12',
            loanCode: '146S235TFZZA86',
            term: '12 tháng',
            amount: '20.000.000 VNĐ',
        },
    ];
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('prepayment_principal')}/>
            <ScrollView style={{flex:1}}>
                <AppBlock>
                    <AppBlock>
                        <AppText size={16} weight='400'>{t('loan')}</AppText>
                    </AppBlock>
                    <AppBlock>
                        <SelectedLoan listLoan={loanData} onPress={(item:any)=>setSelectedLoan(item)}/>
                    </AppBlock>
                    { selectedLoan &&
                        <AppBlock mt={12}>
                            <AppBlock>
                                <AppText size={16} weight='400'>{t('contract_id')}</AppText>
                                <AppText mt={4} size={14} weight='400'>{selectedLoan.loanCode}</AppText>
                                <AppBlock row justifyContent='space-between' mt={8}>
                                    <AppBlock>
                                        <AppText size={16} weight='400'>{t('term')}</AppText>
                                        <AppText mt={4} size={14} weight='400'>31/07/2023</AppText>
                                    </AppBlock>
                                    <AppBlock>
                                        <AppText size={16} weight='400'>{t('amount_to_pay')}</AppText>
                                        <AppText mt={4} size={14} weight='400'>{selectedLoan.amount}</AppText>
                                    </AppBlock>
                                </AppBlock> 
                            </AppBlock>
                            <AppBlock mt={12}>
                                <AppText size={16} weight='400'>{t('amount_to_pay_option')}</AppText>
                                <AppBlock mt={8}>
                                    <AppBlock row justifyContent='space-between'>
                                        <ItemAmountToPay amount={'1.000.000'} selected={selectedAmount === '1.000.000'} onPress={()=>setSelectedAmount('1.000.000')}/>
                                        <ItemAmountToPay amount={'2.000.000'} selected={selectedAmount === '2.000.000'} onPress={()=>setSelectedAmount('2.000.000')}/>
                                        <ItemAmountToPay amount={'5.000.000'} selected={selectedAmount === '5.000.000'} onPress={()=>setSelectedAmount('5.000.000')}/>
                                    </AppBlock>
                                    <AppBlock row justifyContent='space-between' mt={8}>
                                        <ItemAmountToPay amount={'1.000.000'} selected={selectedAmount === '10.000.000'} onPress={()=>setSelectedAmount('10.000.000')}/>
                                        <ItemAmountToPay amount={t('all')} selected={selectedAmount === selectedLoan.amount} onPress={()=>setSelectedAmount(selectedLoan.amount)}/>
                                        <ItemAmountToPay amount={t('other')} selected={selectedAmount === ""} onPress={()=>setSelectedAmount("")}/>
                                    </AppBlock>
                                    <AppBlock>
                                        <CurrencyInput value={selectedAmount}/>
                                    </AppBlock>
                                    <AppBlock mt={12}>
                                        <AppText size={16} weight='400'>{t('payment_method')}</AppText>
                                        <DropDown
                                            placeholder={t('select_method')}
                                            data={[
                                                { label: 'Ngân hàng', value: 'Ngân hàng' },
                                                { label: 'Nộp trực tiếp', value: 'Nộp trực tiếp' },
                                            ]}
                                            value={method} // <-- THÊM DÒNG NÀY
                                            onChange={(value : any) => setMethod(value)}
                                        />
                                    </AppBlock>
                                </AppBlock>
                            </AppBlock>
                        </AppBlock>
                    }
                </AppBlock>
            </ScrollView>
            <AppBlock>
                <AppButton name={t('pay')} onPress={()=>navigation.navigate('PaymentSuccessScreen')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default PrePaymentScreen