import { View, Text, Image, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppBlock from '../../components/view/AppBlock'
import HeaderWallet from './components/HeaderWallet'
import { ScrollView } from 'react-native-gesture-handler'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import light from '../../theme/light'
import { useNavigation } from '@react-navigation/native'

const WalletScreen = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const [showTransfer, setShowTransfer] = useState(false);
    const recentContacts = [
        {
            id: '1',
            name: 'Vũ Thị Thu',
            avatar: require('../../../assets/images/avatar.jpg'),
        },
        {
            id: '2',
            name: 'Huỳnh Minh Hiếu',
            avatar: require('../../../assets/images/avatar.jpg'),
        },
        {
            id: '3',
            name: 'Quách Công Lịch',
            avatar: require('../../../assets/images/avatar.jpg'),
        },
        {
            id: '4',
            name: 'Nguyễn Thanh Tùng',
            avatar: require('../../../assets/images/avatar.jpg'),
        },
        {
            id: '5',
            name: 'Ngô Thị Nguyệt',
            avatar: require('../../../assets/images/avatar.jpg'),
        },
    ];
   const recentTransactions = [
  {
    id: '1',
    name: 'Spotify',
    time: '05:49 pm',
    amount: -75000,
    type: 'decrease',
    icon: require('../../../assets/images/avatar.jpg'),
  },
  {
    id: '2',
    name: 'Netflix',
    time: '02:30 pm',
    amount: -240000,
    type: 'decrease',
    icon: require('../../../assets/images/avatar.jpg'),
  },
  {
    id: '3',
    name: 'Vũ Thị Thu',
    time: '02:10 pm',
    amount: -500000,
    type: 'decrease',
    icon: require('../../../assets/images/avatar.jpg'),
  },
  {
    id: '4',
    name: 'Hoàn tiền',
    time: '07:59 pm',
    amount: 62000,
    type: 'increase',
    icon: require('../../../assets/images/avatar.jpg'),
  },
];

  return (
    <AppBlock flex background='white'>
        <HeaderWallet/>
            <AppBlock flex alignItems='center' justifyContent='center'>
                <AppBlock flex justifyContent='center' style={{width:'95%'}}>
                    <AppBlock row justifyContent='space-around' mt={20} style={{
                            width:'100%',
                            backgroundColor: '#fff',
                            borderRadius: 16,
                            // iOS: bóng đều
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.1,
                            shadowRadius: 16,

                            // Android: elevation để tạo bóng
                            elevation: 5,
                        }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('TopUpScreen')}>
                                <AppBlock alignItems='center' width={80} height={71} justifyContent='center'>
                                    <Image source={require('../../../assets/icons/icon_to_up.png')}/>
                                    <AppText mt={8}>{t('top_up')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>setShowTransfer(true)}>
                                <AppBlock alignItems='center' width={80} height={71} justifyContent='center'>
                                    <Image source={require('../../../assets/icons/icon_transfer_money.png')}/>
                                    <AppText mt={8}>{t('transfer_money')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AppBlock alignItems='center' width={80} height={71} justifyContent='center'>
                                    <Image source={require('../../../assets/icons/icon_qr.png')}/>
                                    <AppText mt={8}>{t('qr_code')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                    </AppBlock>
                    <AppBlock mt={20}>
                        <AppText size={16} mb={12} weight='600'>{t('recent_transactions')}</AppText>
                        <FlatList
                            data={recentContacts}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item)=>item.id}
                            renderItem={({item}) =>(
                                <AppBlock style={{width:80}} alignItems='center' mr={8}>
                                    <Image source={item.avatar} style={{width:48, height:48, borderRadius:24}}/>
                                    <AppText mt={4} style={{textAlign:'center'}}>{item.name}</AppText>
                                </AppBlock>
                            )}
                        />
                    </AppBlock>
                    
                    <AppBlock mt={20} flex>
                        <AppText size={16} mb={12} weight='600'>{t('recent_transactions')}</AppText>
                        <FlatList
                            data={recentTransactions}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item)=>item.id}
                            style={{flex:1}}
                            renderItem={({item}) =>(
                                <TouchableOpacity>
                                    <AppBlock row justifyContent='space-between' pv={8} style={{borderBottomWidth: 1 , borderBottomColor:'#DCDCDC'}}>
                                        <AppBlock row>  
                                            <Image source={item.icon} style={{width:48, height:48, borderRadius:24}}/>
                                            <AppBlock justifyContent='space-around'>
                                                <AppText size={16} weight='400'>{item.name}</AppText>
                                                <AppText size={12} weight='400' color='#8C8C8C'>{item.time}</AppText>
                                            </AppBlock>
                                        </AppBlock>
                                        <AppBlock justifyContent='flex-end'>
                                            <AppText size={16} weight='400' color={ item.type =="increase" ? light.green500 : light.red500}>{ item.type =="increase" ? "+"+item.amount.toLocaleString('vi-VN')+" VNĐ" : item.amount.toLocaleString('vi-VN')+ " VNĐ"}</AppText>
                                        </AppBlock>
                                    </AppBlock>
                                </TouchableOpacity>
                            )}
                        />
                    </AppBlock>
                </AppBlock>
                <Modal
                                  visible={showTransfer}
                                  onRequestClose={()=>{setShowTransfer(false)}}
                                  animationType="slide"
                                  transparent
                                  >
                                    <TouchableOpacity
                                      style={styles.modalOverlay} // Vùng overlay mờ để đóng modal khi chạm bên ngoài
                                      activeOpacity={1} // Đảm bảo toàn bộ overlay có thể chạm
                                      onPressOut={()=>{setShowTransfer(false)}} // Đóng modal khi chạm ra ngoài
                                    >
                                      <AppBlock flex background='rgba(0,0,0,0)' justifyContent='flex-end'>
                                        <TouchableOpacity activeOpacity={1}>
                                          <AppBlock style={{width:'100%', borderTopRightRadius: 12, borderTopLeftRadius: 12}} background='white' alignItems='center' pb={12}>
                                            <AppBlock style={{width:"100%"}} alignItems='center' pv={12}>
                                                <AppBlock width={60} height={4} background='#ccc'/>
                                            </AppBlock>
                                            <AppBlock style={{width:"100%"}}   height={1} background='#DCDCDC' mb={12}/>
                                            <AppBlock style={{width:"90%"}}>
                                              <AppBlock alignItems='center'>
                                                <AppText size={20} weight='600' semiBold>{t('select_transfer_method')}</AppText> 
                                              </AppBlock>
                                              <TouchableOpacity onPress={()=>{navigation.navigate('TransferBankCSScreen')}}>
                                                <AppBlock style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC'}} pv={12}>
                                                  <AppText size={16} weight='500'>{t('transfer_within_bankcs')}</AppText>
                                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('transfer_to_account_by_phone')}</AppText>
                                                </AppBlock>
                                              </TouchableOpacity>
                                              
                                              <TouchableOpacity onPress={()=>{setShowTransfer(false); navigation.navigate('TransferBankScreen')}}>
                                                <AppBlock style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC'}} pv={12}>
                                                  <AppText size={16} weight='500'>{t('transfer_to_bank')}</AppText>
                                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('transfer_to_other_account_by_account_number')}</AppText>
                                                </AppBlock>
                                              </TouchableOpacity>
                                            </AppBlock>
                                          </AppBlock>
                                        </TouchableOpacity>
                                      </AppBlock>
                                    </TouchableOpacity>
                                </Modal>
            </AppBlock>
    </AppBlock>
  )
}
const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end', // Căn chỉnh modal content xuống dưới cùng
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Nền mờ cho modal
      zIndex:10
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent', // Có thể dùng 'rgba(0,0,0,0.2)' nếu muốn nền mờ
        zIndex: 10, // Đảm bảo overlay nằm trên nội dung nhưng dưới menu
    },
    menuContainer: {
        position: 'absolute',
        top: 30, // Điều chỉnh vị trí Y để nó xuất hiện ngay dưới icon filter
        right: 0, // Điều chỉnh vị trí X để nó xuất hiện bên phải icon filter
        width: 200,
        // height: 120, // Bỏ height cố định để nó tự co giãn theo nội dung
        zIndex: 2, // Đảm bảo menu nằm trên overlay và các nội dung khác
    },
    // Bạn có thể thêm các style khác nếu cần
});
export default WalletScreen