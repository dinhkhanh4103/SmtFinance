import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import AppButton from '../../components/button/AppButton'

const TopUpScreen = ({navigation}:any) => {
    const {t} = useTranslation();
    const [selectedBank, setSelectedBank] = useState('VpBank');
    const [amount, setAmount] = useState(0);
    const [amountString, setAmountString] = useState('');
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
    },
];
    const maskMiddle = (text:String) => {
        if (text.length <= 6) return text; // Không cần che nếu quá ngắn

        const start = text.slice(0, 4);
        const end = text.slice(-4);
        const masked = '*'.repeat(text.length - 8);

        return `${start}${masked}${end}`;
    };
    const formatCurrency = (value:String) => {
        const cleaned = value.replace(/\D/g, ''); // Xóa mọi ký tự không phải số
        return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <HeaderBack title={t('top_up')}/>
            <ScrollView style={{flex:1}}>
                <AppBlock>
                    <AppText size={16} weight='400'>{t('amount_to_top_up')}</AppText>
                    <AppBlock row radius={12} border={1} borderColor='#C6C6C6' ph={8} pv={4} mt={8} justifyContent='space-between'>
                        <TextInput style={{flex:1, fontSize:14, color:light.Primary}} value={amountString} keyboardType="numeric" inputMode="numeric" placeholder={t('enter_number')} onChangeText={(text)=>{setAmount(Number(text.replace(/\./g, ''))); setAmountString(formatCurrency(text))}}/>
                        <AppBlock alignItems='center' justifyContent='center' ph={12} style={{borderLeftWidth:1, borderLeftColor:'#C6C6C6'}}>
                            <AppText color='#8C8C8C'>VNĐ</AppText>
                        </AppBlock>
                    </AppBlock>
                </AppBlock>
                <AppBlock mt={12}>
                    <AppText size={16} weight='400'>{t('source_of_fund')}</AppText>
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
                            <AppBlock row radius={12} border={1} borderColor= {selectedBank == t('pay_with_cash') ? light.Primary : '#DCDCDC'} background= {selectedBank == t('pay_with_cash') ? '#FBF5EE' : 'white'} pv={8} ph={12} mt={12} >
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
                </AppBlock>
            </ScrollView>
            <AppBlock>
                <AppButton name={t('top_up')} disable={amountString.length > 0 ? false: true} onPress={()=> navigation.navigate('PaymentTopUpScreen', {amount: amount, selectedBank: selectedBank})}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default TopUpScreen