import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import SearchIconRight from '../../components/input/SearchIconRight'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
import AppText from '../../components/text/AppText'

const ContactsScreen = ({navigation, route}:any) => {
    const {t}= useTranslation();
    const accountBankList = [
        {
            id: 1,
            bankName: 'VpBank',
            owner: 'Quách Công Lịch',
            accountNumber: '04062146205',
            icon: require('../../../assets/icons/icon_vpbank.png'),
        },
        {
            id: 2,
            bankName: 'VietinBank',
            owner: 'Vũ Thị Thu',
            accountNumber: '2376872246575',
            icon: require('../../../assets/icons/icon_viettinbank.png'),
        },
    ];
    const handleSelect = (contacts:any) => {
        if (route.params?.onSelect) {
            route.params.onSelect(contacts); // Truyền dữ liệu về
        }
        navigation.goBack(); // Quay lại
    };
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%'}} flex>
            <HeaderBack title={t('contacts')}/>
            <SearchIconRight placeholder={t('search')}/>
            <FlatList
                data={accountBankList}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>item.bankName}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>handleSelect(item)}>
                        <AppBlock row justifyContent='space-between'>
                            <AppBlock pv={4} row>
                                <AppBlock style={{width:48, height:48}} radius={24} border={1} borderColor='#F4F4F4' alignItems='center' justifyContent='center'>
                                    <Image source={item.icon} style={{width:40, height:40}} resizeMode='contain'/>
                                </AppBlock>
                                <AppBlock ml={8} justifyContent='space-between'>
                                    <AppText size={16} weight='600' semiBold>{item.bankName}</AppText>
                                    <AppText size={14} weight='400'>{item.owner}</AppText>
                                </AppBlock>
                            </AppBlock>
                            <AppBlock justifyContent='center'>
                                <AppText size={16} weight='600' semiBold>{item.accountNumber}</AppText>
                            </AppBlock>
                        </AppBlock>
                    </TouchableOpacity>
                )}    
            />
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default ContactsScreen