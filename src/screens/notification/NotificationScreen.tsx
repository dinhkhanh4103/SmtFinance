import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TouchableWithoutFeedback, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faCheckDouble, faFilter, faGear } from '@fortawesome/free-solid-svg-icons'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
// Không cần Menu từ react-native-paper nếu bạn tự làm popup
// import { Menu } from 'react-native-paper'
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { FlatList } from 'react-native-gesture-handler'
import NotificationItem from './components/NotificationItem'
import { ligatures } from '@fortawesome/free-solid-svg-icons/faEye'
import light from '../../theme/light'
import AppButton from '../../components/button/AppButton'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window'); // Lấy kích thước màn hình

const NotificationScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState(true);
  const [selectedReminder, setSelectedReminder] = useState(true);
  const notification = [
    {
      id: 'notif_img_001',
      type: 'loan',
      status: 'disbursed', // Giải ngân
      icon: 'wallet', // Ví dụ: 'wallet' cho vay vốn
      iconColor: '#3FC58D', // Màu xanh lá cho icon và viền
      title: 'Vay vốn',
      description: 'Khoản vay của bạn đã được giải ngân',
      time: '13:30',
      actions: [
        { id: 'received_loan', text: 'Đã nhận', style: 'primary' },
        { id: 'not_received_loan', text: 'Chưa nhận', style: 'secondary' },
      ],
    },
    {
      id: 'notif_img_002',
      type: 'loan',
      status: 'rejected', // Bị từ chối
      icon: 'wallet',
      iconColor: '#FF6347', // Màu đỏ cho icon và viền
      title: 'Vay vốn',
      description: 'Khoản vay của bạn đã bị từ chối',
      time: '13:30',
      actions: [], // Không có nút hành động
    },
    {
      id: 'notif_img_003',
      type: 'reminder',
      status: 'due_date', // Ngày thanh toán định kỳ
      icon: 'bell', // Ví dụ: 'bell' cho nhắc nhở
      iconColor: '#FFA500', // Màu cam cho icon và viền
      title: 'Nhắc nhở',
      description: 'Hôm nay là ngày thanh toán định kỳ',
      time: '13:30',
      actions: [
        { id: 'pay_due', text: 'Thanh toán', style: 'primary' },
      ],
    },
    {
      id: 'notif_img_004',
      type: 'reminder',
      status: 'overdue', // Quá hạn
      icon: 'bell',
      iconColor: '#FF4500', // Màu cam đậm/đỏ cam
      title: 'Nhắc nhở',
      description: 'Quá hạn vay #15102199 21 ngày. Quý khách vui lòng thực hiện thanh toán càng sớm càng tốt',
      time: '13:30',
      actions: [
        { id: 'pay_overdue', text: 'Thanh toán', style: 'primary' },
      ],
    },
    {
      id: 'notif_img_005',
      type: 'loan',
      status: 'new_borrow_request', // Yêu cầu vay vốn từ khoản đầu tư
      icon: 'trending-up', // Ví dụ: 'trending-up' cho đầu tư
      iconColor: '#1E90FF', // Màu xanh dương
      title: 'Đầu tư',
      description: 'Có 1 người muốn vay vốn khoản đầu tư của bạn',
      time: '13:30',
      actions: [
        { id: 'view_invest_profile', text: 'Xem hồ sơ', style: 'primary' },
      ],
    },
    {
      id: 'notif_img_006',
      type: 'transaction',
      status: 'completed', // Giao dịch hoàn tất
      icon: 'receipt', // Ví dụ: 'receipt' cho giao dịch
      iconColor: '#808080', // Màu xám
      title: 'Giao dịch',
      description: 'Bạn đã đặt mua thành công "Lamborghini Revuelto SVJ 2023"',
      time: '2 ngày trước',
      actions: [],
    },
    {
      id: 'notif_img_007',
      type: 'reminder',
      status: 'paid', // Nhắc nhở đã thanh toán
      icon: 'user-circle', // Thay đổi icon để phân biệt hoặc dùng icon xám
      iconColor: '#808080', // Màu xám
      title: 'Nhắc nhở',
      description: 'Hôm nay là ngày thanh toán định kỳ',
      time: '2 ngày trước',
      actions: [
        { id: 'already_paid', text: 'Đã thanh toán', style: 'disabled' }, // Nút màu xám/disabled
      ],
    },
    {
      id: 'notif_img_005',
      type: 'loan',
      status: 'new_borrow_request', // Yêu cầu vay vốn từ khoản đầu tư
      icon: 'trending-up', // Ví dụ: 'trending-up' cho đầu tư
      iconColor: '#1E90FF', // Màu xanh dương
      title: 'Đầu tư',
      description: 'Có 1 người muốn vay vốn khoản đầu tư của bạn',
      time: '13:30',
      actions: [
        { id: 'view_invest_profile', text: 'Xem hồ sơ', style: 'primary' },
      ],
    },
    {
      id: 'notif_img_007',
      type: 'reminder',
      status: 'paid', // Nhắc nhở đã thanh toán
      icon: 'user-circle', // Thay đổi icon để phân biệt hoặc dùng icon xám
      iconColor: '#808080', // Màu xám
      title: 'Nhắc nhở',
      description: 'Hôm nay là ngày thanh toán định kỳ',
      time: '2 ngày trước',
      actions: [
        { id: 'already_paid', text: 'Đã thanh toán', style: 'disabled' }, // Nút màu xám/disabled
      ],
    },
  ];;
  const [filterData, setFilterData] = useState(notification);
  const [detailVisible, setDetailVisible] = useState(false);
  const [selectedNotificationDetail, setSelectedNotificationDetail] = useState(null);
  const openNotificationDetailModal = (notificationItem:any) => {
    setSelectedNotificationDetail(notificationItem);
    setDetailVisible(true);
  };

  const [payModalVisible, setPayModalVisible] = useState(false)
  const openPayModal = (notificationItem:any) => {
    setPayModalVisible(true);
  };
  useEffect(()=>{
    const newFilteredNotifications = notification.filter(item => {
      if (!selectedTransaction && !selectedLoan && !selectedReminder) {
        return false;
      }

      if (selectedTransaction && item.type === 'transaction') {
        return true;
      }
      if (selectedLoan && item.type === 'loan') {
        return true;
      }
      if (selectedReminder && item.type === 'reminder') {
        return true;
      }
      return false;
    });
    setFilterData(newFilteredNotifications);
  }, [selectedTransaction, selectedLoan, selectedReminder])
  // Hàm để đóng menu
  const closeMenu = () => {
    setMenuVisible(false);
  };
  return (
    <AppSafeAreaView style={{ flex: 1 }}>
      {menuVisible && (
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      <AppBlock flex style={{width:'95%', alignSelf: 'center'}}>
        <AppBlock
          row
          alignItems="center"
          style={{ width: '100%' }}
          mb={12}
          justifyContent='space-between'
        >
          <AppBlock alignItems="center" row>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <AppBlock mr={12}>
                <FontAwesomeIcon icon={faArrowLeft} size={20}/>
              </AppBlock>
            </TouchableOpacity>
            <AppText size={20} weight='600' semiBold>{t('notification')}</AppText>
          </AppBlock>
          <AppBlock row width={90} justifyContent='space-between' alignItems='center'>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faCheckDouble} size={24}/>
            </TouchableOpacity>

            {/* AppBlock chứa icon filter và menu popup */}
            <AppBlock>
              <TouchableOpacity onPress={()=>{setMenuVisible(!menuVisible)}}>
                <FontAwesomeIcon icon={faFilter} size={24}/>
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
                  <TouchableOpacity onPress={()=>setSelectedTransaction(!selectedTransaction)}>
                    <AppBlock row alignItems='center'>
                      <FontAwesomeIcon icon={selectedTransaction ? faSquareCheck: faSquare} color={selectedTransaction ? '#3FC58D' : '#8C8C8C'}/>
                      <AppText ml={8}>{t('transaction')}</AppText>
                    </AppBlock>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>setSelectedLoan(!selectedLoan)}>
                    <AppBlock row alignItems='center' mt={8}> {/* Thêm mt để tạo khoảng cách */}
                      <FontAwesomeIcon icon={selectedLoan ? faSquareCheck: faSquare} color={selectedLoan ? '#3FC58D' : '#8C8C8C'}/>
                      <AppText ml={8}>{t('loan')}</AppText>
                    </AppBlock>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>setSelectedReminder(!selectedReminder)}>
                    <AppBlock row alignItems='center' mt={8}> {/* Thêm mt để tạo khoảng cách */}
                      <FontAwesomeIcon icon={selectedReminder ? faSquareCheck: faSquare} color={selectedReminder ? '#3FC58D' : '#8C8C8C'}/>
                      <AppText ml={8}>{t('reminder')}</AppText>
                    </AppBlock>
                  </TouchableOpacity>
                </AppBlock>
                :
                null
              }
            </AppBlock>

            <TouchableOpacity>
              <FontAwesomeIcon icon={faGear} size={24}/>
            </TouchableOpacity>
          </AppBlock>
        </AppBlock>
        
        {notification == null
        ?
          <AppBlock flex alignItems='center' justifyContent='center'>
            <Image source={require('../../../assets/images/empty_notification.png')}/>
            <AppBlock alignItems='center' mt={24}>
              <AppText size={18} weight='600' semiBold>{t('no_notifications_yet')}</AppText>
              <AppText  size={14} weight='400' mt={8}>{t('latest_updates_here')}</AppText>
            </AppBlock>
          </AppBlock>
        :
          <AppBlock>
            <FlatList
              data={filterData}
              showsVerticalScrollIndicator= {false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) =>(
                <NotificationItem item={item} onPress={() => openNotificationDetailModal(item)} onPressPay={()=> openPayModal(item)}/>
              )}
            />
          </AppBlock>         
        }
        </AppBlock>
        <Modal
          visible={detailVisible}
          onRequestClose={()=>{setDetailVisible(false)}}
          animationType="slide"
          transparent
          >
            <TouchableOpacity
              style={styles.modalOverlay} // Vùng overlay mờ để đóng modal khi chạm bên ngoài
              activeOpacity={1} // Đảm bảo toàn bộ overlay có thể chạm
              onPressOut={()=>{setDetailVisible(false)}} // Đóng modal khi chạm ra ngoài
            >
              <AppBlock flex background='rgba(0,0,0,0)' justifyContent='flex-end'>
                <TouchableOpacity activeOpacity={1}>
                  <AppBlock style={{width:'100%', borderTopRightRadius: 12, borderTopLeftRadius: 12}} background='white' alignItems='center' pb={12}>
                    <AppBlock style={{width:"100%"}} alignItems='center' pv={12}>
                        <AppBlock width={60} height={4} background='#ccc'/>
                        <AppBlock mt={12} style={{width:'100%'}} height={1} background='#DCDCDC'/>
                    </AppBlock>
                    <AppBlock style={{width:"90%"}}>
                      <AppText size={20} weight='600' semiBold>Khoản vay bị từ chối</AppText>
                      <AppBlock row>
                        <AppText size={12} weight='400' color='#8C8C8C' mv={8}>17/08/2023 - 20:02</AppText>
                      </AppBlock>
                      <AppText size={14} weight='400'>Khoản vay của bạn đã bị từ chối do chưa đạt yêu cầu để vay số tiền đó. Vui lòng kiểm tra lại tín dụng hoặc tạo hồ sơ vay khác.</AppText>
                      <AppBlock style={{width:'100%'}} height={1} background='#DCDCDC' mv={8}/>
                      <AppBlock row style={{width:'100%'}} justifyContent='space-between' mb={6}>
                        <AppText  size={14} weight='400' color='#8C8C8C'>Mã hồ sơ vay</AppText>
                        <AppText  size={14} weight='400' color='#8C8C8C'>146S235TZFZZA84</AppText>
                      </AppBlock>
                      <AppBlock row style={{width:'100%'}} justifyContent='space-between' mb={6}>
                        <AppText  size={14} weight='400' color='#8C8C8C'>Trạng thái</AppText>
                        <AppText  size={14} weight='400' color='red'>Từ chối</AppText>
                      </AppBlock>
                       <AppBlock row style={{width:'100%'}} justifyContent='space-between'>
                        <AppText  size={14} weight='400' color='#8C8C8C'>Số tiền vay</AppText>
                        <AppText  size={16} weight='500' color={light.Primary}>270.000.000 VNĐ</AppText>
                      </AppBlock>
                      <AppBlock style={{width:'100%'}} height={1} background='#DCDCDC' mv={8}/>
                      <AppBlock row>
                        <AppText size={14} weight='400' >Cần hỗ trợ vui lòng liên hệ: <AppText size={14} weight='400' color={light.Primary}>{t('hotline_number')}</AppText></AppText>
                      </AppBlock>
                    </AppBlock>
                  </AppBlock>
                </TouchableOpacity>
              </AppBlock>
            </TouchableOpacity>
        </Modal>
        <Modal
          visible={payModalVisible}
          onRequestClose={()=>{setPayModalVisible(false)}}
          animationType="slide"
          transparent
          >
            <TouchableOpacity
              style={styles.modalOverlay} // Vùng overlay mờ để đóng modal khi chạm bên ngoài
              activeOpacity={1} // Đảm bảo toàn bộ overlay có thể chạm
              onPressOut={()=>{setPayModalVisible(false)}} // Đóng modal khi chạm ra ngoài
            >
              <AppBlock flex background='rgba(0,0,0,0)' justifyContent='flex-end'>
                <TouchableOpacity activeOpacity={1}>
                  <AppBlock style={{width:'100%', borderTopRightRadius: 12, borderTopLeftRadius: 12}} background='white' alignItems='center' pb={12}>
                    <AppBlock style={{width:"100%"}} alignItems='center' pv={12}>
                        <AppBlock width={60} height={4} background='#ccc'/>
                    </AppBlock>
                    <AppBlock style={{width:"90%"}}>
                      <AppText size={20} weight='600' semiBold>{t('periodic_payment')}</AppText>
                      <AppBlock row>
                        <AppText size={12} weight='400' color='#8C8C8C' mv={8}>17/08/2023 - 20:02</AppText>
                      </AppBlock>
                      <AppText size={14} weight='400'>Khoản vay của bạn sắp đến hạn thanh toán. Vui lòng thanh toán định kì trước ngày <AppText color={light.Primary}>31/08/2023</AppText></AppText>
                      <AppBlock row mv={12}>
                        <AppText size={14} weight='400' >Cần hỗ trợ vui lòng liên hệ: <AppText size={14} weight='400' color={light.Primary}>{t('hotline_number')}</AppText></AppText>
                      </AppBlock>
                      <AppButton name={t('pay')} onPress={()=> navigation.navigate('PeriodicPaymentScreen')}/>
                    </AppBlock>
                  </AppBlock>
                </TouchableOpacity>
              </AppBlock>
            </TouchableOpacity>
        </Modal>
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end', // Căn chỉnh modal content xuống dưới cùng
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Nền mờ cho modal
      zIndex:10
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent', // Có thể dùng 'rgba(0,0,0,0.2)' nếu muốn nền mờ
        zIndex: 1, // Đảm bảo overlay nằm trên nội dung nhưng dưới menu
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

export default NotificationScreen