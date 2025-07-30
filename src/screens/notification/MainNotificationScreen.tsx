import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../components/view/AppBlock'
import HeaderMainNotification from './components/HeaderMainNotification'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import MyRadarChart from './components/RadarChartCustom'
import RadarChartCustom from './components/RadarChartCustom'
import App from '../../../App'
import light from '../../theme/light'
import { useNavigation } from '@react-navigation/native'

const MainNotificationScreen = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();
  return (
    <AppBlock flex background='white'>
        <HeaderMainNotification/>
        <ScrollView style={{flex:1, marginTop:12}}>
            <AppBlock flex style={{width:'100%'}} alignItems='center'>
                <AppBlock style={{width:'95%'}}>
                    <AppBlock row justifyContent='space-around' mt={12}>
                        <TouchableOpacity style={{width:'18%'}} onPress={()=>navigation.navigate('HistoriesScoreScreen')}>
                            <AppBlock alignItems='center'>
                                <Image source={require('../../../assets/icons/icon_history_point.png')}/>
                                <AppText mt={4} size={12} weight='400' style={{textAlign:'center'}}>{t('point_history')}</AppText>
                            </AppBlock>
                        </TouchableOpacity >
                        <TouchableOpacity style={{width:'18%'}} onPress={()=>navigation.navigate('TipScoreScreen')}>
                            <AppBlock alignItems='center'>
                                <Image source={require('../../../assets/icons/icon_score_increase.png')}/>
                                <AppText mt={4} size={12} weight='400' style={{textAlign:'center'}}>{t('tips_to_increase_points')}</AppText>
                            </AppBlock>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:'18%'}} onPress={()=>navigation.navigate('InformationScoreScreen')}>
                            <AppBlock alignItems='center'>
                                <Image source={require('../../../assets/icons/icon_info_score.png')}/>
                                <AppText mt={4} size={12} weight='400' style={{textAlign:'center'}}>{t('point_information')}</AppText>
                            </AppBlock>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:'18%'}}>
                            <AppBlock alignItems='center'>
                                <Image source={require('../../../assets/icons/icon_support_score.png')}/>
                                <AppText mt={4} size={12} weight='400' style={{textAlign:'center'}}>{t('support')}</AppText>
                            </AppBlock>
                        </TouchableOpacity>
                    </AppBlock>

                    <AppBlock mv={12}>
                        <Image source={require('../../../assets/images/banner_notification.png')} style={{width:'100%'}}/>
                    </AppBlock>

                    <AppBlock  alignItems='center' mt={20} pb={30}>
                        <AppBlock alignItems='flex-start' style={{width:'100%'}} mb={20}>
                            <AppText size={16} weight='600'>{t('overview')}</AppText>
                            <AppText size={20} weight='600' color={light.Primary} >429 Điểm</AppText>
                        </AppBlock>
                        <AppBlock style={{width:300, height:300}}>
                            <RadarChartCustom
                                labels={['Xác thực', 'Tín dụng', 'Mua/bán xe', 'Mua sắm']}
                                data={[0.5, 0.8, 0.6, 0.3]} // mỗi giá trị từ 0 → maxValue
                                maxValue={1}
                            />
                            <AppBlock style={{position:'absolute', top:-12, left:150 - 25, width:50}} alignItems='center'>
                                <Image source={require('../../../assets/icons/icon_auth.png')}/>
                                <AppText size={12} weight='500'>{t('authenticate')}</AppText>    
                            </AppBlock>
                            <AppBlock style={{position:'absolute', top:150 -25, right:-25, width:50, height:50}} alignItems='center' justifyContent='center'>
                                <Image source={require('../../../assets/icons/icon_finance.png')}/>
                                <AppText size={12} weight='500'>{t('credit')}</AppText>    
                            </AppBlock>
                            <AppBlock style={{position:'absolute', bottom:-12, left:150 - 35, width:70}} alignItems='center'>
                                <Image source={require('../../../assets/icons/icon_mu_ban_xe.png')}/>
                                <AppText size={12} weight='500'>{t('buy_sell')}</AppText>    
                            </AppBlock>
                            <AppBlock style={{position:'absolute', top:150 -25, left:-30, width:60, height:50}} alignItems='center' justifyContent='center'>
                                <Image source={require('../../../assets/icons/icon_shopping.png')}/>
                                <AppText size={12} weight='500'>{t('shopping')}</AppText>    
                            </AppBlock>
                        </AppBlock>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
        </ScrollView>
    </AppBlock>
  )
}

export default MainNotificationScreen