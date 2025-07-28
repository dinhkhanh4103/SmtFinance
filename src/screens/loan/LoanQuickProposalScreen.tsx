import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { launchImageLibrary } from "react-native-image-picker";
import AppBlock from "../../components/view/AppBlock";
import HeaderBack from "../../components/header/HeaderBack";
import { FlatList, Image, TouchableOpacity } from "react-native";
import AppText from "../../components/text/AppText";
import ItemInvestment from "../trade/components/ItemInvestment";
import { ScrollView } from "react-native-gesture-handler";
import CurrencyInput from "../../components/input/CurrencyInput";
import RangeSlider from "../trade/components/RangeSlider";
import AppConstant from "../../config/AppConstant";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import light from "../../theme/light";
import AppTextInput from "../../components/input/AppTextInput";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-regular-svg-icons";
import AppButton from "../../components/button/AppButton";
import DropDown from "../../components/input/DropDown";



const LoanQuickProposalScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [amount, setAmount] = useState(1000000);
  const [amountString, setAmountString] = useState('1.000.000');

  const [term, setTerm] = useState(6);
  const [termString, setTermString] = useState('6');

  const [agree, setAgree] = useState(false);

  const interestRate = 19;
  const [paymentMonth, setPaymentMonth] = useState<number>(1);
  useEffect(()=>{
    setPaymentMonth(Math.floor(amount*(interestRate/100)/12))
  }, [amount])
  

  const[paymentMethod, setPaymentMethod] = useState();
  return (
    <AppBlock style={{width:'100%'}} flex background='white' alignItems='center' pt={AppConstant.TOP} justifyContent="space-between">
      <AppBlock style={{width:'95%'}} flex>
        <HeaderBack title ={t('quick_loan')} iconRight={faCirclePlus} onPressIconRight={()=>{navigation.navigate('HistoriesTradeScreen')}}/>
        <AppText size={24} weight="600" semiBold>{t('loan_proposal')}</AppText>
        <ScrollView showsVerticalScrollIndicator={false}>
            <AppBlock style={{width:'100%'}} mt={12}>
              <AppBlock>
                <AppText size={16} weight='400'>{t('investment_amount')}</AppText>
                <CurrencyInput value={amountString}
                  onChangeText={(text:any) => {
                    setAmountString(text);
                    const parsed = Number(text.replace(/\./g, '')); // loại dấu chấm
                    if (!isNaN(parsed)) {
                      setAmount(parsed);
                    } else {1
                      setAmount(0); // fallback
                    }
                  }}
                  placeholder="Số tiền vay"
                  unit="VNĐ"
                />
                <AppBlock style={{width:'100%'}}>
                  <RangeSlider value={amount} onValueChange={(value:any) => {setAmount(value) ; setAmountString(value.toLocaleString('vi-VN'));}} minimumValue={1000000} maximumValue={20000000} step={500000}/>
                </AppBlock>
              </AppBlock>

              <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('term')}</AppText>
                <CurrencyInput value={termString}
                  onChangeText={(text:any) => {
                    setTermString(text);
                    setTerm(Number(text))
                  }}
                  placeholder="Kỳ hạn"
                  unit="Tháng"
                />
                <AppBlock style={{width:'100%'}}>
                  <RangeSlider value={term} onValueChange={(value:any) => {setTerm(value) ; setTermString(value.toLocaleString('vi-VN'));}} minimumValue={6} maximumValue={32} unit={t('month')} step={1}/>
                </AppBlock>
              </AppBlock>

              <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('interest_rate')} ({interestRate}%/{t('year')})</AppText>
                <AppText mt={8} size={20} weight='600' semiBold>{paymentMonth.toLocaleString('vi-VN')} VNĐ/tháng</AppText>
              </AppBlock>
              <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('periodic_contribution_amount')}</AppText>
                <AppText mt={8} size={20} weight='600' semiBold>{(Math.floor(amount/term + paymentMonth)).toLocaleString('vi-VN')} VNĐ/tháng</AppText>
              </AppBlock>
              <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('total_payable')}</AppText>
                <AppText mt={8} size={20} weight='600' semiBold>{(Math.floor((amount/term + paymentMonth)*term)).toLocaleString('vi-VN')} VNĐ</AppText>
              </AppBlock>
              <AppBlock mt={12}>
                <AppText size={16} weight='400' color='#122457'>{t('loan_purpose')}</AppText>
                <DropDown
                    placeholder={t('select_purpose')}
                    data={[
                        { label: t('IT'), value: 'it' },
                        { label: t('Tự do'), value: 'free' },
                        { label: t('Khác'), value: 'other' },
                    ]}
                    value={paymentMethod}
                    onChange={(value : any) => setPaymentMethod(value)}
                />
              </AppBlock>
              <AppBlock mt={8}>
                        <AppText size={16} weight='400' regular color="#122457">{t('payment_method')}</AppText>
                            <DropDown
                                placeholder={t('select_method')}
                                data={[
                                    { label: t('IT'), value: 'it' },
                                    { label: t('Tự do'), value: 'free' },
                                    { label: t('Khác'), value: 'other' },
                                ]}
                                value={paymentMethod}
                                onChange={(value : any) => setPaymentMethod(value)}
                            />
                    </AppBlock>
              <AppBlock mb={12} row alignItems='center' style={{width:'100%'}}>
                <TouchableOpacity onPress={()=>{setAgree(!agree)}} style={{flexDirection:'row', alignItems:'center', width:'95%'}}>
                  <FontAwesomeIcon icon={agree ? faCircleDot : faCircle} color={light.Primary} size={20}/>
                  <AppText ml={8} size={14} weight='400'>{t('agree_to_terms')} <AppText color={light.Primary}>{t('terms_and_conditions')}</AppText></AppText>
                </TouchableOpacity>
              </AppBlock>
            </AppBlock>
          </ScrollView>
              <AppBlock mb={12}>
                <AppButton name={t('confirm')} disable={agree? false : true} onPress={()=>navigation.navigate('CheckQuickLoanScreen_1')}/>
              </AppBlock>
      </AppBlock>
    </AppBlock>
  )
}

export default LoanQuickProposalScreen