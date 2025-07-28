import { View, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import AppText from '../../components/text/AppText'
import { faCirclePlus, faDownload, faFilter, faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import light from '../../theme/light'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import ItemHistoryLoan from './components/ItemHistoryLoan'



const HistoriesLoanScreen = () => {
    const {t} = useTranslation();
    const [selected, setSelected] = useState('loan');
    const [selctedDetail, setSelectedDetail] = useState({
            id: '1',
            date: '07/05/2023 04:20',
            code: '146S23STFZZZA84',
            term: '6 tháng',
            amount: 20000000,
            status: 'Chưa phê duyệt',
            statusColor: '#F4A11A',
        },);
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedCompleted, setSelectedCompleted] = useState(true);
    const [selectedPaying, setSelectedPaying] = useState(true);
    const [selectedNotApproved, setSelectedNotApproved] = useState(true);
    const [detailVisible, setDetailVisible] = useState(false);
    const investingData = [
        {
            id: '1',
            date: '07/05/2023 04:20',
            code: '146S23STFZZZA84',
            term: '6 tháng',
            amount: 20000000,
            status: 'Chưa phê duyệt',
            statusColor: '#F4A11A',
        },
        {
            id: '2',
            date: '07/05/2023 04:20',
            code: '146S23STFZZZA84',
            term: '6 tháng',
            amount: 20000000,
            status: 'Hoàn tất',
            statusColor: '#1DC6B0',
        },
        {
            id: '3',
            date: '07/05/2023 04:20',
            code: '146S23STFZZZA84',
            term: '3 tháng',
            amount: 5000000,
            status: 'Đang trả',
            statusColor: '#E85C40',
        },
        {
            id: '4',
            date: '07/05/2023 04:20',
            code: '146S23STFZZZA84',
            term: '24 tháng',
            amount: 40000000,
            status: 'Hoàn tất',
            statusColor: '#1DC6B0',
        },
        {
            id: '5',
            date: '07/05/2023 04:20',
            code: '146S23STFZZZA84',
            term: '8 tháng',
            amount: 15000000,
            status: 'Đang trả',
            statusColor: '#E85C40',
        },
        {
            id: '6',
            date: '07/05/2023 04:20',
            code: '146S23STFZZZA84',
            term: '6 tháng',
            amount: 10250000,
            status: 'Hoàn tất',
            statusColor: '#1DC6B0',
        },
        {
            id: '7',
            date: '07/05/2023 04:20',
            code: '146S23STFZZZA84',
            term: '6 tháng',
            amount: 10250000,
            status: 'Hoàn tất',
            statusColor: '#1DC6B0',
        },
    ];
    const [filterData, setFilterData] = useState(investingData);
    const closeMenu = () => {
        setMenuVisible(false);
    };
    useEffect(()=>{
        const newFilteredNotifications = investingData.filter(item => {
          if (!selectedCompleted && !selectedPaying && !selectedNotApproved) {
            return false;
          }
    
          if (selectedCompleted && item.status === 'Hoàn tất') {
            return true;
          }
          if (selectedPaying && item.status === 'Đang trả') {
            return true;
          }
          if (selectedNotApproved && item.status === 'Chưa phê duyệt') {
            return true;
          }
          return false;
        });
        setFilterData(newFilteredNotifications);
      }, [selectedCompleted, selectedPaying, selectedNotApproved])
  return (
    <AppSafeAreaView>
        {menuVisible && (
            <TouchableWithoutFeedback onPress={closeMenu}>
                <View style={styles.overlay} />
            </TouchableWithoutFeedback>
        )}
        <AppBlock style={{width:'95%'}} flex>
            <HeaderBack title ={t('history')}/>
            <AppBlock row style={{width:'100%', zIndex:10}} justifyContent='space-around'>
            <TouchableOpacity style={{width:'35%'}} onPress={()=>{setSelected('loan')}}>
                <AppBlock style={{width: '100%', borderBottomWidth: selected=='loan' ? 4 : 0, borderBottomColor:light.Primary}} pv={8} alignItems='center'>
                <AppText size={16} weight='500' color={selected=='loan' ? light.Primary: '#8C8C8C'}>{t('loan')}</AppText>
                </AppBlock>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'35%'}} onPress={()=>{setSelected('invested')}}>
                <AppBlock style={{ width: '100%',borderBottomWidth: selected=='invested' ? 4 : 0, borderBottomColor:light.Primary}} pv={8} alignItems='center'>
                <AppText size={16} weight='500' color={selected=='invested' ? light.Primary: '#8C8C8C'}>{t('invested')}</AppText>
                </AppBlock>
            </TouchableOpacity>
            </AppBlock>
            <AppBlock style={{height:1, marginTop:-2 }} background='#8C8C8C'/>
            {selected == 'loan'
            ?
                <AppBlock flex pv={12}>
                    <AppBlock row justifyContent='space-between'>
                        <AppText size={16} weight='500'>{t('recent_transactions')}</AppText>
                        <AppBlock>
                                      <TouchableOpacity onPress={()=>{setMenuVisible(!menuVisible)}}>
                                        <FontAwesomeIcon icon={faFilter} size={24} color={light.Primary}/>
                                      </TouchableOpacity>
                                      {menuVisible
                                        ?
                                        <AppBlock
                                            padding={12}
                                            background='#fff'
                                            // Sử dụng `styles.menuContainer` để quản lý vị trí và các style khác
                                            style={styles.menuContainer}
                                            radius={8}
                                            shadow={true}
                                        >
                                          <TouchableOpacity onPress={()=>setSelectedCompleted(!selectedCompleted)}>
                                            <AppBlock row alignItems='center'>
                                              <FontAwesomeIcon icon={selectedCompleted ? faSquareCheck: faSquare} color={selectedCompleted ? '#3FC58D' : '#8C8C8C'}/>
                                              <AppText ml={8}>{t('completed')}</AppText>
                                            </AppBlock>
                                          </TouchableOpacity>
                                          <TouchableOpacity onPress={()=>setSelectedPaying(!selectedPaying)}>
                                            <AppBlock row alignItems='center' mt={8}> {/* Thêm mt để tạo khoảng cách */}
                                              <FontAwesomeIcon icon={selectedPaying ? faSquareCheck: faSquare} color={selectedPaying ? '#3FC58D' : '#8C8C8C'}/>
                                              <AppText ml={8}>{t('paying')}</AppText>
                                            </AppBlock>
                                          </TouchableOpacity>
                                          <TouchableOpacity onPress={()=>setSelectedNotApproved(!selectedNotApproved)}>
                                            <AppBlock row alignItems='center' mt={8}> {/* Thêm mt để tạo khoảng cách */}
                                              <FontAwesomeIcon icon={selectedNotApproved ? faSquareCheck: faSquare} color={selectedNotApproved ? '#3FC58D' : '#8C8C8C'}/>
                                              <AppText ml={8}>{t('not_approved')}</AppText>
                                            </AppBlock>
                                          </TouchableOpacity>
                                        </AppBlock>
                                        :
                                        null
                                      }
                        </AppBlock>
                    </AppBlock>
                    <FlatList
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item})=><ItemHistoryLoan item={item} onPress={()=>{ setSelectedDetail(item); setDetailVisible(true)}}/>}
                        style={{flex:1}}
                    />
                </AppBlock>
            :
            null
            }
            <Modal
                      visible={detailVisible}
                      onRequestClose={()=>{setDetailVisible(false)}}
                      animationType="slide"
                      transparent
                      >
                        <TouchableOpacity
                          style={[styles.modalOverlay, {backgroundColor: detailVisible ? 'rgba(0, 0, 0, 0.1)' : 'transparent'}]} // Vùng overlay mờ để đóng modal khi chạm bên ngoài
                          activeOpacity={1}
                          onPressOut={()=>{setDetailVisible(false)}}
                        >
                          <AppBlock flex background='rgba(0,0,0,0)' justifyContent='flex-end'>
                            <TouchableOpacity activeOpacity={1}>
                              <AppBlock style={{width:'100%', borderTopRightRadius: 12, borderTopLeftRadius: 12}} background='white' alignItems='center' pb={12}>
                                <AppBlock style={{width:"100%"}} alignItems='center' pv={12}>
                                    <AppBlock width={60} height={4} background='#ccc'/>
                                    <AppBlock mt={12} style={{width:'100%'}} height={1} background='#DCDCDC'/>
                                </AppBlock>
                                <AppBlock style={{width:"90%"}}>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_reference_code')}</AppText>
                                    <AppText size={14} weight='400'>{selctedDetail.code}</AppText>
                                  </AppBlock>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('borrower')}</AppText>
                                    <AppText size={14} weight='400'>Đinh Đức Khánh</AppText>
                                  </AppBlock>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_type')}</AppText>
                                    <AppText size={14} weight='400'>Vay Online</AppText>
                                  </AppBlock>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('receipt_method')}</AppText>
                                    <AppText size={14} weight='400'>BIDV</AppText>
                                  </AppBlock>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('interest_rate')}</AppText>
                                    <AppText size={14} weight='400'>19%/năm</AppText>
                                  </AppBlock>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('periodic_contribution_amount')}</AppText>
                                    <AppText size={14} weight='400' color={light.Primary}>{selctedDetail.amount.toLocaleString('vi-VN')} VNĐ</AppText>
                                  </AppBlock>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_term')}</AppText>
                                    <AppText size={14} weight='400'>12 tháng</AppText>
                                  </AppBlock>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('purpose')}</AppText>
                                    <AppText size={14} weight='400'>Khởi nghiệp</AppText>
                                  </AppBlock>
                                  <AppBlock row style={{width:'100%', paddingVertical:8, borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} justifyContent='space-between'>
                                    <AppText size={14} weight='400' color='#8C8C8C'>{t('status')}</AppText>
                                    <AppText size={14} weight='400'>{selctedDetail.status}</AppText>
                                  </AppBlock>
                                  <TouchableOpacity style={{marginTop: 12}}>
                                    <AppBlock alignItems='center' style={{width:'100%'}} border={1} borderColor={light.Primary} radius={12} pv={10} row justifyContent='center'>
                                        <FontAwesomeIcon icon={faDownload} color={light.Primary} size={24}/>
                                        <AppText ml={8} size={16} weight='500' color={light.Primary}>{t('download')}</AppText>
                                    </AppBlock>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{marginTop: 12}}>
                                    <AppBlock alignItems='center' style={{width:'100%'}} background='#DE4B4B' radius={12} pv={10} row justifyContent='center'>
                                        <AppText ml={8} size={16} weight='500' color='white'>{t('get_otp')}</AppText>
                                    </AppBlock>
                                  </TouchableOpacity>
                                </AppBlock>
                              </AppBlock>
                            </TouchableOpacity>
                          </AppBlock>
                        </TouchableOpacity>
                    </Modal>
        </AppBlock>
    </AppSafeAreaView>
  )
}
const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      zIndex:10
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        zIndex: 1,
    },
    menuContainer: {
        position: 'absolute',
        top: 30,
        right: 0,
        width: 200,
        zIndex: 2,
    },
});
export default HistoriesLoanScreen