import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import SearchIconRight from '../../components/input/SearchIconRight'
import AppText from '../../components/text/AppText'

const ShoppingScreen = ({navigation}:any) => {
    const {t} = useTranslation();
    const listShopping = [
        {id: '1', title: 'Bảo hiểm', icon: require('../../../assets/icons/icon_insurance.png'), navigation:""},
        {id: '2', title: 'Vé máy bay', icon: require('../../../assets/icons/icon_flight_tickets.png'), navigation:"FlightTicketScreen"},
        {id: '3', title: 'Nạp tiền điện thoại', icon: require('../../../assets/icons/icon_phone_top_up.png'), navigation:""},
        {id: '4', title: 'Vé xem phim', icon: require('../../../assets/icons/icon_film_tickets.png'), navigation:""},
        {id: '5', title: 'Gọi taxi', icon: require('../../../assets/icons/icon_call_taxi.png'), navigation:""},
        {id: '6', title: 'Tặng hoa', icon: require('../../../assets/icons/icon_send_flowers.png'), navigation:""},
        {id: '7', title: 'Xổ số', icon: require('../../../assets/icons/icon_lottery.png'), navigation:""},
        {id: '8', title: 'Đặt phòng khách sạn', icon: require('../../../assets/icons/icon_hotel_booking.png'), navigation:""},
    ];
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('shopping')}/>
            <SearchIconRight placeholder={t('search')}/>
            <AppBlock flex>
                <FlatList
                    data={listShopping}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item)=>item.id}
                    numColumns={4}
                    style={{flex:1}}
                    renderItem={({item})=>(
                        <AppBlock style={{width:'25%', marginVertical:8}} alignItems='center'>
                            <TouchableOpacity style={{width:80}} onPress={()=>navigation.navigate(item.navigation)}>
                                <AppBlock alignItems='center'>
                                    <AppBlock style={{width:48, height:48}} radius={8} border={1} borderColor='#DCDCDC' alignItems='center' justifyContent='center'>
                                        <Image source={item.icon} style={{width:32, height:32}}/>
                                    </AppBlock>
                                    <AppBlock>
                                        <AppText size={12} weight='400' center>{item.title}</AppText>
                                    </AppBlock>
                                </AppBlock>
                            </TouchableOpacity>
                        </AppBlock>
                    )}
                />
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default ShoppingScreen