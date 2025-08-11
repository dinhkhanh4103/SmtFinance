import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import SearchIconRight from '../../components/input/SearchIconRight'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faLocationArrow, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import { ScrollView } from 'react-native-gesture-handler'
import AppButton from '../../components/button/AppButton'

const SupportConsultationScreen = ({navigation}:any) => {
    const {t}= useTranslation();
    const transactionPoint = {
        "address": "4517 Washington Ave. Manchester, Kentucky 39495",
        "distance": "467m"
    }
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('support_consultation')}/>
            <ScrollView style={{flex:1}}>
                <AppBlock>
                    <SearchIconRight placeholder={t('search')}/>
                    <AppBlock>
                        <AppText size={16} weight='600' semiBold mb={8}>{t('nearest_headquarters')}</AppText>
                        <Image source={require('../../../assets/images/maps_support.png')} style={{width:'100%', height:160}}/>
                    </AppBlock>
                    <AppBlock mv={8}>
                        <TouchableOpacity>
                            <AppBlock background='white' row justifyContent='space-between' alignItems='center' ph={12} style={{width:'100%', height:59}}>
                                <AppBlock row style={{width:'75%'}} alignItems='center'>
                                    <FontAwesomeIcon icon={faMapLocationDot} size={24} color={light.Primary}/>
                                    <AppBlock ph={12}>
                                        <AppText size={14} weight='400'>{transactionPoint.address}</AppText>
                                        <AppText color='#C6C6C6' size={12}>{transactionPoint.distance}</AppText>
                                    </AppBlock>
                                </AppBlock>
                                <AppBlock width={24} height={24} radius={5} background={light.Primary} alignItems='center' justifyContent='center'>
                                    <FontAwesomeIcon icon={faLocationArrow} color='white'/>
                                </AppBlock>
                            </AppBlock>
                        </TouchableOpacity>
                    </AppBlock>
                    <AppBlock>
                        <AppText size={16} weight='600' semiBold mb={8}>{t('topic_help')}</AppText>
                        <AppBlock row justifyContent='space-between'>
                            <TouchableOpacity style={{width:'30%'}}>
                                <AppBlock justifyContent='center' alignItems='center' radius={8} border={1} borderColor='#DCDCDC' pv={12}>
                                    <Image source={require('../../../assets/icons/icon_helps_loan.png')}/>
                                    <AppText>{t('loan')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'30%'}}>
                                <AppBlock justifyContent='center' alignItems='center' radius={8} border={1} borderColor='#DCDCDC' pv={12}>
                                    <Image source={require('../../../assets/icons/icon_helps_chat.png')}/>
                                    <AppText>{t('messages')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'30%'}}>
                                <AppBlock justifyContent='center' alignItems='center' radius={8} border={1} borderColor='#DCDCDC' pv={12}>
                                    <Image source={require('../../../assets/icons/icon_helps_trade.png')}/>
                                    <AppText>{t('buy_sell')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                        </AppBlock >
                        <AppBlock row justifyContent='space-between' mt={12}>
                            <TouchableOpacity style={{width:'30%'}}>
                                <AppBlock justifyContent='center' alignItems='center' radius={8} border={1} borderColor='#DCDCDC' pv={12}>
                                    <Image source={require('../../../assets/icons/icon_helps_score.png')}/>
                                    <AppText>{t('transaction_point')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'30%'}}>
                                <AppBlock justifyContent='center' alignItems='center' radius={8} border={1} borderColor='#DCDCDC' pv={12}>
                                    <Image source={require('../../../assets/icons/icon_helps_community.png')}/>
                                    <AppText>{t('community')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'30%'}}>
                                <AppBlock justifyContent='center' alignItems='center' radius={8} border={1} borderColor='#DCDCDC' pv={12}>
                                    <Image source={require('../../../assets/icons/icon_helps_setting.png')}/>
                                    <AppText>{t('settings')}</AppText>
                                </AppBlock>
                            </TouchableOpacity>
                        </AppBlock>
                    </AppBlock>
                    <AppBlock mt={12}>
                        <AppBlock row justifyContent='space-between'>
                            <AppText size={16} weight='600' semiBold mb={8}>{t('faq')}</AppText>
                            <TouchableOpacity onPress={()=>navigation.navigate('FAQScreen')}>
                                <AppText color={light.Primary}>{t('see_more')}</AppText>
                            </TouchableOpacity>
                        </AppBlock>
                        <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen')}>
                            <AppBlock row justifyContent='space-between' alignItems='center' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}> 
                                <AppBlock style={{width:'85%'}}>
                                    <AppText>Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?</AppText>
                                </AppBlock>
                                <FontAwesomeIcon icon={faChevronRight} size={20}/>
                            </AppBlock>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen')}>
                            <AppBlock row justifyContent='space-between' alignItems='center' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}> 
                                <AppBlock style={{width:'85%'}}>
                                    <AppText>Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?</AppText>
                                </AppBlock>
                                <FontAwesomeIcon icon={faChevronRight} size={20}/>
                            </AppBlock>
                        </TouchableOpacity>

                    </AppBlock>
                </AppBlock>
                <AppBlock pt={12}>
                    <AppText size={16} weight='600' semiBold>{t('customer_care')}</AppText>
                    <AppBlock row mt={8} justifyContent='space-between'>
                        <AppBlock>
                            <AppText size={16} weight='600' semiBold>{t('customer_service_hotline')}</AppText>
                            <AppText size={20} weight='600' semiBold color={light.Primary}>1900 105 951</AppText>
                        </AppBlock>
                        <TouchableOpacity>
                            <AppBlock>
                                <Image source={require('../../../assets/icons/call_cskh.png')}/>
                            </AppBlock>
                        </TouchableOpacity>
                    </AppBlock>
                    <AppBlock mt={8}>
                        <AppButton name={t('chat_with_consultant')}/>
                    </AppBlock>
                    <AppBlock mt={8}>
                        <AppButton name={t('send_support_request')} backgroundColor='white' textColor={light.Primary} onPress={()=>navigation.navigate('SendRequestSupportScreen')}/>
                    </AppBlock>
                </AppBlock>
            </ScrollView>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default SupportConsultationScreen