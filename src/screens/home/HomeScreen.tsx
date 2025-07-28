import { View, Text, StatusBar, FlatList, Dimensions, Share, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppBlock from '../../components/view/AppBlock'
import HomeHeader from './components/HomeHeader'
import Slider from '../../components/view/Slider'
import ImageSlider from '../../components/view/ImageSlider'
import MenuButton from './components/MenuButton'
import ShareCard from './components/ShareCard'
import App from '../../../App'
import TransactionPoint from './components/TransactionPoint'
import RequestSupport from './components/RequestSupport'
import SupportCategories from './components/SupportCategories'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window');
const HomeScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation()
  const itemsSlider = [require('../../../assets/images/slider_image_home.jpg'),
    require('../../../assets/images/slider_image_home.jpg'),
    require('../../../assets/images/slider_image_home.jpg'),
    require('../../../assets/images/slider_image_home.jpg'),
    require('../../../assets/images/slider_image_home.jpg')
  ]
  const listComponent = [0,1,2,3,4,5,6,7,8,9,10]
  const imageBanner1 = require('../../../assets/images/banner_home.png')
  const imageBanner2 = require('../../../assets/images/banner_home_2.png')
  const isAuthentic = true
  function onPressSeeMoreRequestSupport(){
    
  }
  const [showCallCapital, setShowCallCapital] = useState(false);
  
  const renderItem = ({ item, index }: { item: number; index: number }) => {
    switch(item){
      case 0: 
        return (
          <AppBlock alignItems='center'>
            <AppBlock height={180} radius={12} style={{width:'95%'}}>
              <ImageSlider images={itemsSlider} showDots imageWidth={width * 0.95}/>
            </AppBlock>
          </AppBlock>
        );
      case 1:
        return (
          <AppBlock alignItems='center'>
            <MenuButton onPressCallCapital={() => {setShowCallCapital(true)}}/>
          </AppBlock>
        );
      case 2:
          return(
            <AppBlock>
              <ShareCard/>
            </AppBlock>
          );
      case 3:
          return(<TransactionPoint/>);
      case 4:
        return (<RequestSupport/>);
      case 5:
        return(
          <AppBlock alignItems='center' mv={20}>
            <Image source={imageBanner1} style={{width:'95%', height:108, borderRadius: 12}} resizeMode='cover'/>
          </AppBlock>
        );
      case 6:
        return(
          <AppBlock> 
            <SupportCategories/>
          </AppBlock>
        );
      case 7:
        return(
          <AppBlock alignItems='center' mv={20}>
            <Image source={imageBanner2} style={{width:'95%', height:108, borderRadius: 12}} resizeMode='cover'/>
          </AppBlock>
        );

      default:
        return null;
    }
  }
  return (
    <AppBlock flex background='white' alignItems='center'>
      <HomeHeader/>
      <FlatList
          showsVerticalScrollIndicator={false}
          style={{padding: 0, flex: 1, marginTop: 8, backgroundColor:'translucent', width:'100%', alignContent: 'center'}}
          data={listComponent}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        {isAuthentic ? null : 
          <AppBlock style={{position: 'absolute', bottom:0, width: width, backgroundColor:'white'}} shadow={true} padding={8} row>
            <TouchableOpacity onPress={()=>{navigation.navigate('BiometricScreen')}}>
              <AppBlock row alignItems='center' justifyContent='space-between'>
                <AppBlock style={{width:64, height:64}} alignItems='center' justifyContent='center'>
                  <Image source={require('../../../assets/images/authen_home.png')}/>
                  <AppBlock style={{width:'30%', height:'30%', position:"absolute", top:0, left:0 , borderTopWidth:2, borderLeftWidth:2, borderTopLeftRadius:6, borderColor:light.Primary}}/>
                  <AppBlock style={{width:'30%', height:'30%', position:"absolute", top:0, right:0 , borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:6, borderColor:light.Primary}}/>
                  <AppBlock style={{width:'30%', height:'30%', position:"absolute", bottom:0, left:0 , borderBottomWidth:2, borderLeftWidth:2, borderBottomLeftRadius:6, borderColor:light.Primary}}/>
                  <AppBlock style={{width:'30%', height:'30%', position:"absolute", bottom:0, right:0 , borderBottomWidth:2, borderRightWidth:2, borderBottomRightRadius:6, borderColor:light.Primary}}/>
                </AppBlock>
                <AppBlock justifyContent='center' style={{width:'80%'}}>
                  <AppText size={16} weight='600' semiBold color='#554C46'>{t('unverified_account_question')}</AppText>
                  <AppText size={14} weight='400' color='#2C2C2C'>{t('complete_verification_to_use_services')}</AppText>
                </AppBlock>
              </AppBlock>
            </TouchableOpacity>
          </AppBlock>
        }
        <Modal
                  visible={showCallCapital}
                  onRequestClose={()=>{setShowCallCapital(false)}}
                  animationType="slide"
                  transparent
                  >
                    <TouchableOpacity
                      style={styles.modalOverlay} // Vùng overlay mờ để đóng modal khi chạm bên ngoài
                      activeOpacity={1} // Đảm bảo toàn bộ overlay có thể chạm
                      onPressOut={()=>{setShowCallCapital(false)}} // Đóng modal khi chạm ra ngoài
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
                                <AppText size={20} weight='600' semiBold>{t('loan_location')}</AppText> 
                              </AppBlock>
                              <TouchableOpacity onPress={()=>{navigation.navigate('LoanListScreen')}}>
                                <AppBlock style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC'}} pv={12}>
                                  <AppText size={16} weight='500'>{t('view_loan_list')}</AppText>
                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_range_1_50_million')}</AppText>
                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('display_investor_loan_info')}</AppText>
                                </AppBlock>
                              </TouchableOpacity>
                              
                              <TouchableOpacity onPress={()=>{setShowCallCapital(false); navigation.navigate('LoanQuickProposalScreen')}}>
                                <AppBlock style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC'}} pv={12}>
                                  <AppText size={16} weight='500'>{t('quick_loan')}</AppText>
                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_range_1_20_million')}</AppText>
                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('chip_id_card_only')}</AppText>
                                </AppBlock>
                              </TouchableOpacity>

                              <TouchableOpacity onPress={()=>{setShowCallCapital(false); navigation.navigate('LoanOnlineProposalScreen')}}>
                                <AppBlock style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC'}} pv={12}>
                                  <AppText size={16} weight='500'>{t('online_loan')}</AppText>
                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_range_1_billion')}</AppText>
                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('income_residence_insurance_household_info_needed')}</AppText>
                                </AppBlock>
                              </TouchableOpacity>

                              <TouchableOpacity>
                                <AppBlock  pv={12}>
                                  <AppText size={16} weight='500'>{t('loan_consultation_support')}</AppText>
                                  <AppText size={14} weight='400' color='#8C8C8C'>{t('free_consultation_from_app_specialist')}</AppText>
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
export default HomeScreen