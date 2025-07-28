import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText';
import light from '../../theme/light';
import AppButton from '../../components/button/AppButton'



const RequestDetailScreen = ({ navigation, route }: any) => { 
  const {t} = useTranslation();
  const { itemDetail } = route.params;

  if (!itemDetail) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderBack title={t('request_details')} navigation={navigation}/>
        <AppBlock flex alignItems='center' justifyContent='center'>
          <Text>Không tìm thấy thông tin chi tiết yêu cầu.</Text>
        </AppBlock>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <AppBlock flex alignItems='center' justifyContent='space-between'>
        <AppBlock style={{width:'95%'}}>
          <HeaderBack title={t('request_details')} navigation={navigation}/>
          <Image source={itemDetail.image} style={{width: '100%', height: 208}} resizeMode='cover'/>
          {itemDetail.avatar
          ?
            <AppBlock row  mt={12}>
                <Image source={itemDetail.avatar} style={{ width:70, height:70, borderRadius:50 }}/>
                <AppBlock pl={8} justifyContent='space-between'>
                  <AppText size={14} weight='500'>{itemDetail.companyName}</AppText>
                  <AppText size={12} weight='400'>{t('reputable_support')}</AppText>
                  <AppButton width={68} heigth={26} name={t('details')} textStyle={{fontSize:12}}/>
                </AppBlock>
            </AppBlock>
          :
            <AppBlock></AppBlock>
          }
          <AppBlock style={{ width: '95%', marginTop: 20, paddingHorizontal: 10 }}>
            <AppText size={16} weight='600' semiBold color={light.Primary} >{itemDetail.title}</AppText>
            <AppBlock row>
              <AppText size={12} weight='500' color='#989898'>{t('time')}: </AppText>
              <AppText size={12} weight='500'>{itemDetail.timeRange}</AppText>
            </AppBlock>
            <AppBlock row>
              <AppText size={12} weight='500' color='#989898'>{t('support_duration')}: </AppText>
              <AppText size={12} weight='500'>{itemDetail.duration}</AppText>
            </AppBlock>
            <AppBlock row>
              <AppText size={12} weight='500' color='#989898'>{t('support_amount')}: </AppText>
              <AppText size={12} weight='500'>{itemDetail.amount}</AppText>
            </AppBlock>
            <AppBlock row>
              <AppText size={12} weight='500' color='#989898'>{t('interest_rate')}: </AppText>
              <AppText size={12} weight='500'>{itemDetail.interestRate}</AppText>
            </AppBlock>

            <AppBlock mt={20} alignItems='center' justifyContent='center'>
              <AppText size={12} weight='500' mb={8}>{itemDetail.description[0]}</AppText>
              <AppText size={12} weight='500' mb={8}>{itemDetail.description[1]}</AppText>
              <AppText size={12} weight='500' mb={8}>{itemDetail.description[2]}</AppText>
            </AppBlock>
          </AppBlock>
        </AppBlock>
        <AppBlock style={{width:'95%'}}>
          <AppButton name={t('request_support')} onPress={()=>navigation.navigate('CheckInformationLoanScreen')}/>
        </AppBlock>
      </AppBlock>
    </SafeAreaView>
  )
}

export default RequestDetailScreen