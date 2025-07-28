import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { useRoute } from '@react-navigation/native'
import AppText from '../../components/text/AppText'
import CurrencyInput from '../../components/input/CurrencyInput'
import RangeSlider from '../trade/components/RangeSlider'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import AppButton from '../../components/button/AppButton'
import light from '../../theme/light'
import { faCircleDot, faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons'
import AppTextInput from '../../components/input/AppTextInput'

const InvestFundraisingScreen = ({navigation, route}:any) => {
    const {t} = useTranslation();
    const { selectedItem } = route.params;
    const [investAmount, setInvestAmount] = useState(500000);
    const [investAmountString, setInvestAmountString] = useState('500.000');
    const [agree, setAgree] = useState(false)
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('invest_fundraising')}/>
                <AppBlock mt={12}>
                    <AppText size={16} weight='600' semiBold>{selectedItem?.title}</AppText>
                    <CurrencyInput value={selectedItem.amount} editable={false}/>
                </AppBlock>
                <AppBlock mt={12}>
                    <AppText size={16} weight='400'>{t('investment_amount')}</AppText>
                    <CurrencyInput value={investAmountString}
                    onChangeText={(text:any) => {
                        setInvestAmountString(text);
                        setInvestAmount(Number(text));
                    }}
                    />
                    <AppBlock style={{width:'100%'}}>
                    <RangeSlider value={investAmount} onValueChange={(value:any) => {setInvestAmount(value) ; setInvestAmountString(value.toLocaleString('vi-VN'));}} minimumValue={500000} maximumValue={20000000} step={500000}/>
                    </AppBlock>
                    <AppBlock row alignItems='center' mt={12}>
                    <FontAwesomeIcon icon={faCircle} size={4}/>
                        <AppText ml={8} size={12} weight='400'>{t('min_investment')}</AppText>
                    </AppBlock>
                    <AppBlock row alignItems='center'>
                    <FontAwesomeIcon icon={faCircle} size={4}/>
                        <AppText ml={8} size={12} weight='400'>{t('investment_multiple')}</AppText>
                    </AppBlock>
                    <AppBlock row alignItems='center'>
                    <FontAwesomeIcon icon={faCircle} size={4}/>
                        <AppText ml={8} size={12} weight='400'>{t('max_investment_fundraising')}</AppText>
                    </AppBlock>
                    <AppBlock row alignItems='center'>
                    <FontAwesomeIcon icon={faCircle} size={4}/>
                        <AppText ml={8} size={12} weight='400'>{t('max_investment_disbursement_note')}</AppText>
                    </AppBlock>
                    <AppBlock row alignItems='center'>
                    <FontAwesomeIcon icon={faCircle} size={4}/>
                        <AppText ml={8} size={12} weight='400'>{t('max_investment_amount')} {selectedItem.amount}</AppText>
                    </AppBlock>
                </AppBlock>
                <AppBlock mt={12}>
                    <AppText size={16} weight='600' semiBold>{t('investment_info')}</AppText>
                    <AppBlock row justifyContent='space-between' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}>
                    <AppText color='#554C46' size={14} weight='400' >{t('interest_rate')}</AppText>
                    <AppText size={14} weight='600'>{selectedItem.interest}/năm</AppText>
                    </AppBlock>
                    <AppBlock row justifyContent='space-between' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8} mt={8}>
                    <AppText color='#554C46' size={14} weight='400' >{t('term')}</AppText>
                    <AppText size={14} weight='600'>{selectedItem.term}</AppText>
                    </AppBlock>
                    <AppBlock row justifyContent='space-between' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8} mt={8}>
                    <AppText color='#554C46' size={14} weight='400' >{t('investment_amount')}</AppText>
                    <AppText size={14} weight='600'>{investAmount.toLocaleString('vi-VN')} VNĐ</AppText>
                    </AppBlock>
                </AppBlock>

                <AppBlock mt={12}>
                    <AppBlock row justifyContent='space-between'>
                        <AppText size={16} weight='600' semiBold color='#122457'>{t('borrower_info')}</AppText>
                        <TouchableOpacity onPress={()=>{navigation.navigate('BorrowerInformationScreen_1')}}>
                            <AppBlock row alignItems='center'>
                                <AppText size={12} weight='400' color='#8C8C8C'>{t('view_borrower_info')}</AppText>
                                <FontAwesomeIcon icon={faChevronRight} size={12}/>
                            </AppBlock>
                        </TouchableOpacity>
                    </AppBlock>
                    <AppTextInput editable={false} value='DINH DUC KHANH'/>
                </AppBlock>

                <AppBlock mb={12} row alignItems='center' style={{width:'100%'}}>
                    <TouchableOpacity onPress={()=>{setAgree(!agree)}} style={{flexDirection:'row', alignItems:'center', width:'95%'}}>
                        <FontAwesomeIcon icon={agree ? faCircleDot : faCircleRegular} color={light.Primary} size={20}/>
                        <AppText ml={8} size={14} weight='400'>{t('agree_to_terms')} <AppText color={light.Primary}>{t('terms_and_conditions')}</AppText></AppText>
                    </TouchableOpacity>
                </AppBlock>
            </AppBlock>
            <AppBlock mb={12}>
                <AppButton name={t('continue')} disable={agree? false : true} onPress={()=>navigation.navigate('CheckInvestScreen_1')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default InvestFundraisingScreen