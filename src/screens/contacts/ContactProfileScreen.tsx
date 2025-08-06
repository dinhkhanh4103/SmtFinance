import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useMemo, useRef } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faImage, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import light from '../../theme/light'
import AppText from '../../components/text/AppText'
import { useAuthStore } from '../../store/authStore'
import { useTranslation } from 'react-i18next'
import AppButton from '../../components/button/AppButton'
import { faArrowLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler'
import ThreeDotsIcon from '../../../assets/icons/ThreeDotsIcon'
import ActionBubbleMenu from './components/ActionBubbleMenu'
import BottomSheet from '@gorhom/bottom-sheet';


const ContactProfileScreen = ({navigation}:any) => {
    const {t} = useTranslation();
    const user = useAuthStore(state => state.user)
    const contact = user['contact'];
    const idCard = user['idCard']
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const openSheet = () => {
        bottomSheetRef.current?.snapToIndex(1); // Mở bottom sheet tại index 0
    };
  return (
   <AppSafeAreaView>
        <AppBlock style={{width:'100%'}}>
            <AppBlock background='#C6C6C6' height={130}>
                <AppBlock style={{position:'absolute', bottom: -45, left:12}}>
                    <AppBlock row>
                        <AppBlock>
                            <Image source={require('../../../assets/images/avatar.jpg')} style={{width:100, height:100, borderRadius:50}}/>
                        </AppBlock>
                        <AppBlock justifyContent='flex-end' ml={12}>
                            <AppText size={20} weight='600' semiBold>{user.name}</AppText>
                            <AppText size={16} weight='400' color={light.Primary}>429 Điểm (Good)</AppText>
                        </AppBlock>
                    </AppBlock>
                </AppBlock>
                <TouchableOpacity style={{position:'absolute', top:12, left:12}} onPress={()=>navigation.goBack()}>
                    <AppBlock padding={6} background={light.Primary} radius={99} alignItems='center' justifyContent='center'>
                        <FontAwesomeIcon icon={faArrowLeft} size={16} color='white'/>
                    </AppBlock>
                </TouchableOpacity>
            </AppBlock>
        </AppBlock>
        <AppBlock flex style={{width:'95%'}} pt={50} justifyContent='space-between'>
            <AppBlock row justifyContent='space-between'> 
                <TouchableOpacity style={{width:336, height:44}}>
                    <AppBlock style={{width:'100%', height:'100%'}} alignItems='center' justifyContent='center' background={light.Primary} radius={12}>
                        <AppText size={16} weight='500' color='white'>{t('send_message')}</AppText>
                    </AppBlock>
                </TouchableOpacity>
                <TouchableOpacity style={{width:48, height:44}} onPress={openSheet}>
                    <AppBlock style={{width:'100%', height:'100%'}} alignItems='center' justifyContent='center' background={light.Primary} radius={12}>
                        <FontAwesomeIcon icon={faEllipsis} color='white'/>
                        
                    </AppBlock>
                </TouchableOpacity>
            </AppBlock>
            <ScrollView style={{flex:1, paddingTop:12}}>
                <AppBlock>
                    <AppBlock>
                        <AppText size={16} weight='700' semiBold mb={12}>{t('introduce')}</AppText>
                        <AppBlock row alignItems='center'>
                            <Image source={require('../../../assets/icons/icon_date.png')}/>
                            <AppText ml={12} size={14} weight='400' regular>{t('date_of_birth')}: <AppText size={14} weight='700' semiBold>{user.dateOfBirth}</AppText></AppText>
                        </AppBlock>
                        <AppBlock row alignItems='center' mt={8}>
                            <Image source={require('../../../assets/icons/icon_gender.png')}/>
                            <AppText ml={12} size={14} weight='400' regular>{t('gender')}: <AppText size={14} weight='700' semiBold>{user.gender}</AppText></AppText>
                        </AppBlock>
                    </AppBlock>

                    <AppBlock mt={20} > 
                        <AppText size={16} weight='700' semiBold mb={12}>{t('contact_info')}</AppText>
                        <AppBlock row alignItems='center'>
                            <Image source={require('../../../assets/icons/icon_location.png')}/>
                            <AppText ml={12} style={{width:'90%'}} size={14} weight='400' regular>{t('permanent_address')}: <AppText size={14} weight='700' semiBold>{contact.permanentAddress}</AppText></AppText>
                        </AppBlock>
                        <AppBlock row alignItems='center' mt={8}>
                            <Image source={require('../../../assets/icons/icon_location.png')}/>
                            <AppText ml={12} style={{width:'90%'}} size={14} weight='400' regular>{t('current_address')}: <AppText size={14} weight='700' semiBold>{contact.currentAddress}</AppText></AppText>
                        </AppBlock>
                        <AppBlock row alignItems='center' mt={8}>
                            <Image source={require('../../../assets/icons/icon_email.png')}/>
                            <AppText ml={12} style={{width:'90%'}} size={14} weight='400' regular>Email: <AppText size={14} weight='700' semiBold>{contact.email}</AppText></AppText>
                        </AppBlock>
                        <AppBlock row alignItems='center' mt={8}>
                            <Image source={require('../../../assets/icons/icon_phone.png')}/>
                            <AppText ml={12} style={{width:'90%'}} size={14} weight='400' regular>{t('phone_number')}: <AppText size={14} weight='700' semiBold>{contact.phone}</AppText></AppText>
                        </AppBlock>
                        <AppBlock row alignItems='center' mt={8}>
                            <Image source={require('../../../assets/icons/icon_phone.png')}/>
                            <AppText ml={12} style={{width:'90%'}} size={14} weight='400' regular>{t('secondary_phone_number')}: <AppText size={14} weight='700' semiBold>{contact.secondaryPhone}</AppText></AppText>
                        </AppBlock>
                    </AppBlock>
                </AppBlock>
            </ScrollView>
            <BottomSheet
                ref={bottomSheetRef}
                index={-1} // index = -1 để sheet ban đầu đóng
                snapPoints={snapPoints}
                enablePanDownToClose
            >
                <View style={{ flex: 1, alignItems: 'center' }}>
                <Text>👋 Đây là nội dung trong Bottom Sheet</Text>
                </View>
            </BottomSheet>
            
        </AppBlock>
   </AppSafeAreaView>
  )
}

export default ContactProfileScreen