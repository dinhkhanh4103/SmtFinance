import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faImage, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import light from '../../theme/light'
import AppText from '../../components/text/AppText'
import { useAuthStore } from '../../store/authStore'
import { useTranslation } from 'react-i18next'
import AppButton from '../../components/button/AppButton'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler'


const InformationScreen = ({navigation}:any) => {
    const {t} = useTranslation();
    const user = useAuthStore(state => state.user)
    const contact = user['contact'];
    const idCard = user['idCard']

  return (
   <AppSafeAreaView>
        <AppBlock style={{width:'100%'}}>
            <AppBlock background='#C6C6C6' height={130}>
                <AppBlock row style={{position:'absolute', bottom: -35, left:12}}>
                    <AppBlock>
                        <Image source={require('../../../assets/images/avatar.jpg')} style={{width:100, height:100, borderRadius:50}}/>
                        <TouchableOpacity>
                            <AppBlock style={{position:'absolute', bottom:0, right:0}} padding={6} background={light.Primary} radius={99} alignItems='center' justifyContent='center'>
                                <FontAwesomeIcon icon={faImage} color='white' size={16}/>
                            </AppBlock>
                        </TouchableOpacity>
                    </AppBlock>
                    <AppBlock justifyContent='flex-end' ml={12}>
                        <AppText size={20} weight='600' semiBold>{user.name}</AppText>
                    </AppBlock>
                </AppBlock>
                <TouchableOpacity style={{position:'absolute', bottom:12, right:12}}>
                    <AppBlock padding={6} background={light.Primary} radius={99} alignItems='center' justifyContent='center'>
                        <FontAwesomeIcon icon={faPenToSquare} size={16} color='white'/>
                    </AppBlock>
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute', top:12, left:12}} onPress={()=>navigation.goBack()}>
                    <AppBlock padding={6} background={light.Primary} radius={99} alignItems='center' justifyContent='center'>
                        <FontAwesomeIcon icon={faArrowLeft} size={16} color='white'/>
                    </AppBlock>
                </TouchableOpacity>
            </AppBlock>
        </AppBlock>
        <AppBlock flex style={{width:'95%'}} pt={50} justifyContent='space-between'>
            <ScrollView style={{flex:1}}>

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
                    <AppBlock mt={20} > 
                        <AppText size={16} weight='700' semiBold mb={12}>{t('identity_document_info')}</AppText>
                        <AppBlock row alignItems='center'>
                            <Image source={require('../../../assets/icons/icon_cccd.png')}/>
                            <AppText ml={12} style={{width:'90%'}} size={14} weight='400' regular>{t('document_type')}: <AppText size={14} weight='700' semiBold>{idCard.type}</AppText></AppText>
                        </AppBlock>
                        <AppBlock row alignItems='center' mt={8}>
                            <Image source={require('../../../assets/icons/icon_cccd.png')}/>
                            <AppText ml={12} style={{width:'90%'}} size={14} weight='400' regular>{t('identity_document_number')}: <AppText size={14} weight='700' semiBold>{idCard.number}</AppText></AppText>
                        </AppBlock>
                        <AppBlock row alignItems='center' mt={8}>
                            <Image source={require('../../../assets/icons/icon_date.png')}/>
                            <AppText ml={12} style={{width:'90%'}} size={14} weight='400' regular>{t('issue_date')}: <AppText size={14} weight='700' semiBold>{idCard.issueDate}</AppText></AppText>
                        </AppBlock>
                    </AppBlock>
                </AppBlock>
            </ScrollView>
            <AppBlock>
                <AppButton name={t('edit')}/>
            </AppBlock>
        </AppBlock>
   </AppSafeAreaView>
  )
}

export default InformationScreen