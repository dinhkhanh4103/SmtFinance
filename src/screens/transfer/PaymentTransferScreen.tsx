import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'

import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import { FlatList } from 'react-native'
import AppButton from '../../components/button/AppButton'
import { ScrollView } from 'react-native-gesture-handler'

const PaymentTransferScreen = ({navigation}:any) => {
    const {t} = useTranslation();
    const [selectedBank, setSelectedBank] = useState('VpBank');
    const amount = 1000000;
    const listBank = [{
        id : "1",
        name: "VpBank",
        number_bank: '08867566585786',
        icon: require('../../../assets/icons/icon_vpbank.png')
    },
    {
        id : "2",
        name: "ViettinBank",
        number_bank: '01244566777788',
        icon: require('../../../assets/icons/icon_viettinbank.png')
    },];
    const maskMiddle = (text:String) => {
        if (text.length <= 6) return text; // Không cần che nếu quá ngắn

        const start = text.slice(0, 4);
        const end = text.slice(-4);
        const masked = '*'.repeat(text.length - 8);

        return `${start}${masked}${end}`;
    };
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <HeaderBack title={t('pay')} />
            <ScrollView style={{flex:1}}>
                <AppBlock>
                    <FlatList
                        data={listBank}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        style={{ paddingVertical:8}}
                        renderItem={({item})=>(
                            <TouchableOpacity onPress={()=>setSelectedBank(item.name)}>
                                <AppBlock row radius={12} border={1} borderColor= {selectedBank == item.name ? light.Primary : '#DCDCDC'} background= {selectedBank == item.name ? '#FBF5EE' : 'white'} pv={8} ph={12} mt={12} >
                                    <AppBlock style={{width:48, height:48, borderRadius:24, borderWidth:1, borderColor:'#F4F4F4'}} alignItems='center' justifyContent='center'>
                                        <Image source={item.icon} style={{width:40, height:40}} resizeMode='contain'/>
                                    </AppBlock>
                                    <AppBlock ml={8} justifyContent='space-between'>
                                        <AppText size={18} weight='600' semiBold>{item.name}</AppText>
                                        <AppText size={12} weight='400' color='#8C8C8C'>{maskMiddle(item.number_bank)}</AppText>
                                    </AppBlock>
                                </AppBlock>
                            </TouchableOpacity>
                        )}  
                    />
                    <TouchableOpacity onPress={()=>setSelectedBank(t('pay_with_cash'))}>
                                                <AppBlock row radius={12} border={1} borderColor= {selectedBank == t('pay_with_cash') ? light.Primary : '#DCDCDC'} background= {selectedBank == t('pay_with_cash') ? '#FBF5EE' : 'white'} pv={8} ph={12} mt={4} >
                                                    <AppBlock style={{width:48, height:48, borderRadius:24, borderWidth:1, borderColor:'#F4F4F4'}} alignItems='center' justifyContent='center'>
                                                        <Image source={require('../../../assets/icons/icon_wallet_top_up.png')} style={{width:32, height:32}} resizeMode='contain'/>
                                                    </AppBlock>
                                                    <AppBlock ml={8} justifyContent='space-between'>
                                                        <AppText size={18} weight='600' semiBold>{t('pay_with_cash')}</AppText>
                                                        <AppText size={12} weight='400' color='#8C8C8C'>{t('at_cash_in_out_points')}</AppText>
                                                    </AppBlock>
                                                </AppBlock>
                    </TouchableOpacity>
                    <AppBlock mt={12}>
                        <AppButton name={"+ " + t('add_account')} backgroundColor='white' textColor={light.Primary}/>
                    </AppBlock>
                    <AppText mt={12} size={16} weight='400'>{t('transaction_details')}</AppText>
                    <AppBlock padding={12} radius={12} border={1} borderColor='#DCDCDC' mt={8}>
                                        <AppBlock row justifyContent='space-between' >
                                            <AppText size={14} weight='400'>{t('transfer_to')}</AppText>
                                            <AppText size={16} weight='600' semiBold>Vũ Thị Thu</AppText>
                                        </AppBlock>
                                        <AppBlock row justifyContent='space-between' mt={8}>
                                            <AppText size={14} weight='400'>{t('account')}</AppText>
                                            <AppText size={16} weight='600' semiBold>0349862464</AppText>
                                        </AppBlock>
                                        <AppBlock row justifyContent='space-between' mt={8}>
                                            <AppText size={14} weight='400'>{t('amount')}</AppText>
                                            <AppText size={16} weight='600' semiBold>{amount.toLocaleString('vi-VN')} VNĐ</AppText>
                                        </AppBlock>
                                    </AppBlock>
                                    <AppBlock padding={12} radius={12} border={1} borderColor='#DCDCDC' mt={12}>
                                        <AppBlock row justifyContent='space-between' >
                                            <AppText size={14} weight='400'>{t('transaction_fee')}</AppText>
                                            <AppText size={16} weight='600' semiBold color={light.green500}>{t('free_of_charge')}</AppText>
                                        </AppBlock>
                                        <AppBlock row justifyContent='space-between' mt={8}>
                                            <AppText size={14} weight='400'>{t('source_of_fund')}</AppText>
                                            <AppText size={20} weight='600' semiBold color={light.Primary}>{amount.toLocaleString('vi-VN')} VNĐ</AppText>
                                        </AppBlock>
                    </AppBlock>
                </AppBlock>
            </ScrollView>
            <AppBlock>
                <AppButton name={t('confirm')} onPress={()=>navigation.navigate('ResultTransferScreen')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default PaymentTransferScreen