import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import AppButton from '../../components/button/AppButton'
import light from '../../theme/light'


const BankLinkScreen = ({navigation}:any) => {
    const {t}= useTranslation();
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
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%'}}>
            <HeaderBack title={t('bank_link')}/>
            <FlatList
                                    data={listBank}
                                    keyExtractor={(item) => item.id}
                                    showsVerticalScrollIndicator={false}
                                    style={{ paddingVertical:8}}
                                    renderItem={({item})=>(
                                        <TouchableOpacity>
                                            <AppBlock row radius={12} border={1} borderColor= "#8C8C8C" background= "white" pv={8} ph={12} mt={12} >
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
            <AppBlock mt={12}>
                <AppButton name={"+ " + t('add_account')} backgroundColor='white' textColor={light.Primary} onPress={()=>{navigation.navigate('AddBankScreen')}}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default BankLinkScreen