import { View, Text, ScrollView, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppBlock from '../../components/view/AppBlock'
import AppConstant from '../../config/AppConstant'
import AppText from '../../components/text/AppText'
import AccountHeader from './components/AccountHeader'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRightFromBracket, faArrowsLeftRight, faBuildingColumns, faDollar, faLocation, faLocationDot, faLock, faShareNodes, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faClock, faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { useAuthStore } from '../../store/authStore'

const AccountScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {logout} = useAuthStore();
  const [showMethod, setShowMethod] = useState(false);
  function handleLogout(){  
    logout();
  }
  return (
    <AppBlock flex background='white'>
      <AccountHeader/>
      <ScrollView>
        <AppBlock flex alignItems='center'>
          <AppBlock style={{width:'95%'}} mt={12}>
            <AppBlock>
              <AppText size={16} weight='600' semiBold>{t('personal')}</AppText>
              <TouchableOpacity onPress={()=>navigation.navigate('BankLinkScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_bank.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('bank_link')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_heart.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('favorites')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('RatingsScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_star.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('ratings_feedback')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_location.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('transaction_point')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>setShowMethod(true)}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_pay.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('pay')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_history.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('history')}</AppText>
                </AppBlock>
              </TouchableOpacity>
            </AppBlock>

            <AppBlock mt={8} >
              <AppText size={16} weight='600' semiBold>{t('settings')}</AppText>
              <TouchableOpacity onPress={()=>navigation.navigate('AboutScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_share.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('about_app')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('SecurityScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_security.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('security')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_wallet.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('wallet_setup')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('LanguageScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_language.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('language')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{navigation.navigate('SupportConsultationScreen')}}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_support.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('support_consultation')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>
            </AppBlock>

            <AppBlock mt={8} >
              <AppText size={16} weight='600' semiBold>{t('terms_and_conditions')}</AppText>
              <TouchableOpacity onPress={()=>navigation.navigate('TernConditionScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_sheld_user.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('terms_conditions')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_security_shield.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('loan_terms')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>
            </AppBlock>
          </AppBlock>
          <TouchableOpacity style={{width:'100%', backgroundColor:'#FFCBCB', alignItems:'center'}} onPress={handleLogout}>
                <AppBlock row pv={12} alignItems='center' style={{width:'95%'}}>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} color='#DE4B4B' size={20}/>
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8} color='#DE4B4B'>{t('logout')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
          </TouchableOpacity>
        </AppBlock>
      </ScrollView>
      <Modal
                                        visible={showMethod}
                                        onRequestClose={()=>{setShowMethod(false)}}
                                        animationType="slide"
                                        transparent
                                        >
                                          <TouchableOpacity
                                            style={styles.modalOverlay} // Vùng overlay mờ để đóng modal khi chạm bên ngoài
                                            activeOpacity={1} // Đảm bảo toàn bộ overlay có thể chạm
                                            onPressOut={()=>{setShowMethod(false)}} // Đóng modal khi chạm ra ngoài
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
                                                      <AppText size={20} weight='600' semiBold>{t('payment_method')}</AppText> 
                                                    </AppBlock>
                                                    <TouchableOpacity onPress={()=>{navigation.navigate('PeriodicPaymentScreen')}}>
                                                      <AppBlock style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC'}} pv={12}>
                                                        <AppText size={16} weight='500'>{t('periodic_payment')}</AppText>
                                                        <AppText size={14} weight='400' color='#8C8C8C'>{t('monthly_interest_principal_payment')}</AppText>
                                                      </AppBlock>
                                                    </TouchableOpacity>
                                                    
                                                    <TouchableOpacity onPress={()=>{setShowMethod(false); navigation.navigate('PrePaymentScreen')}}>
                                                      <AppBlock style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC'}} pv={12}>
                                                        <AppText size={16} weight='500'>{t('prepayment_principal')}</AppText>
                                                        <AppText size={14} weight='400' color='#8C8C8C'>{t('deduct_from_principal_balance')}</AppText>
                                                      </AppBlock>
                                                    </TouchableOpacity>
                                                  </AppBlock>
                                                </AppBlock>
                                              </TouchableOpacity>
                                            </AppBlock>
                                          </TouchableOpacity>
                                      </Modal>
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
export default AccountScreen