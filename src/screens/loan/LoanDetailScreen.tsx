import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppBlock from '../../components/view/AppBlock';
import AppSafeAreaView from '../../components/view/AppSafeAreaView';
import HeaderBack from '../../components/header/HeaderBack';
import AppText from '../../components/text/AppText';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons';
import light from '../../theme/light';
import AppButton from '../../components/button/AppButton';

const LoanDetailScreen = ({navigation, route}:any) => {
    const { itemDetail } = route.params;
    const {t} = useTranslation();
    const [agree, setAgree] = useState(false);
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={itemDetail.title}/>
                <AppText size={18} weight='600'>{t('loan_package_details')}</AppText>
                <AppBlock mt={24}>
                    <AppText size={16} weight='400' color='#554C46'>{t('support_amount')}</AppText>
                    <AppText size={20} weight='600' semiBold>{itemDetail.amount}</AppText>
                </AppBlock>
                <AppBlock mt={12}>
                    <AppText size={16} weight='400' color='#554C46'>{t('support_duration')}</AppText>
                    <AppText size={20} weight='600' semiBold>{itemDetail.duration}</AppText>
                </AppBlock>
                <AppBlock mt={12}>
                    <AppText size={16} weight='400' color='#554C46'>{t('interest_rate')}({itemDetail.interestRate}/tháng)</AppText>
                    <AppText size={20} weight='600' semiBold>1.000.000</AppText>
                </AppBlock>
                <AppBlock mt={12}>
                    <AppText size={16} weight='400' color='#554C46'>{t('periodic_contribution_amount')}</AppText>
                    <AppText size={20} weight='600' semiBold>1.000.000</AppText>
                </AppBlock>
                <AppBlock mt={12}>
                    <AppText size={16} weight='400' color='#554C46'>{t('total_payable')}</AppText>
                    <AppText size={20} weight='600' semiBold>1.000.000</AppText>
                </AppBlock>
                <AppBlock mt={24} row alignItems='center' style={{width:'100%'}}>
                    <TouchableOpacity onPress={()=>{setAgree(!agree)}} style={{flexDirection:'row', alignItems:'center', width:'95%'}}>
                        <FontAwesomeIcon icon={agree ? faCircleDot : faCircle} color={light.Primary} size={20}/>
                        <AppText ml={8} size={14} weight='400'>{t('agree_to_terms')} <AppText color={light.Primary}>{t('terms_and_conditions')}</AppText></AppText>
                    </TouchableOpacity>
                </AppBlock>
            </AppBlock>
            <AppBlock>
                <AppButton name={t('continue')} disable={agree? false : true} onPress={()=>navigation.navigate('CheckInformationLoanScreen')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default LoanDetailScreen