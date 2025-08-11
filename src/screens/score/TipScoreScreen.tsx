import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import HistoriesScoreItem from './components/HistoriesScoreItem'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBolt, faCheck } from '@fortawesome/free-solid-svg-icons'

const TipScoreScreen = () => {
    const {t} = useTranslation();
    const [selected, setSelected] = useState('authenticate');
    

  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('tips_to_increase_points')}/>
            <AppBlock row justifyContent='space-between'>
                <TouchableOpacity style={{width:'25%'}} onPress={()=>setSelected('authenticate')}>
                    <AppBlock style={{width:'100%', borderBottomWidth: 4, borderBottomColor: selected == 'authenticate' ? light.Primary : 'transparent', paddingBottom:12}} alignItems='center'>
                        <AppText size={16} weight='500' color={selected =='authenticate' ? light.Primary : '#8C8C8C'}>{t('authenticate')}</AppText>
                    </AppBlock>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'25%'}} onPress={()=>setSelected('credit')}>
                    <AppBlock style={{width:'100%', borderBottomWidth: 4, borderBottomColor: selected == 'credit' ? light.Primary : 'transparent', paddingBottom:12}} alignItems='center'>
                        <AppText size={16} weight='500' color={selected =='credit' ? light.Primary : '#8C8C8C'}>{t('credit')}</AppText>
                    </AppBlock>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'25%'}} onPress={()=>setSelected('buy_sell')}>
                    <AppBlock style={{width:'100%', borderBottomWidth: 4, borderBottomColor: selected == 'buy_sell' ? light.Primary : 'transparent', paddingBottom:12}} alignItems='center'>
                        <AppText size={16} weight='500' color={selected =='buy_sell' ? light.Primary : '#8C8C8C'}>{t('buy_sell')}</AppText>
                    </AppBlock>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'25%'}} onPress={()=>setSelected('consumption')}>
                    <AppBlock style={{width:'100%', borderBottomWidth: 4, borderBottomColor: selected == 'consumption' ? light.Primary : 'transparent', paddingBottom:12}} alignItems='center'>
                        <AppText size={16} weight='500' color={selected =='consumption' ? light.Primary : '#8C8C8C'}>{t('consumption')}</AppText>
                    </AppBlock>
                </TouchableOpacity>
                <AppBlock style={{width:'100%', height:1, position:'absolute', bottom:1, backgroundColor:'#DCDCDC', zIndex:-1}}></AppBlock>
            </AppBlock>
            {selected == 'authenticate'
            ?
                <AppBlock flex>
                    <TouchableOpacity>
                        <AppBlock row justifyContent='space-between' alignItems='center' pv={12} style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} mt={12}>
                            <AppBlock row>
                                <AppBlock style={{width:36}} alignItems='center'>
                                    <Image source={require('../../../assets/icons/icon_auth.png')} style={{width:32, height:32}}/>
                                </AppBlock>
                                <AppBlock ml={12}>
                                    <AppText size={14} weight='500'>{t('face_verification')}</AppText>
                                    <AppText size={10} weight='400' color={light.Primary}>50 điểm</AppText>
                                </AppBlock>
                            </AppBlock>
                            <AppBlock width={36} height={36} justifyContent='center' alignItems='center' background='#DCEEFF' radius={12}>
                                <FontAwesomeIcon icon={faBolt} color={light.Primary}/>
                            </AppBlock>
                        </AppBlock>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AppBlock row justifyContent='space-between' alignItems='center' pv={12} style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} >
                            <AppBlock row>
                                <AppBlock style={{width:36}} alignItems='center'>
                                    <Image source={require('../../../assets/icons/icon_map.png')} style={{width:32, height:32}}/>
                                </AppBlock>
                                <AppBlock ml={12}>
                                    <AppText size={14} weight='500'>{t('share_gps_location')}</AppText>
                                    <AppText size={10} weight='400' color={light.Primary}>5 điểm</AppText>
                                </AppBlock>
                            </AppBlock>
                            <AppBlock width={36} height={36} justifyContent='center' alignItems='center' background='#DCEEFF' radius={12}>
                                <FontAwesomeIcon icon={faBolt} color={light.Primary}/>
                            </AppBlock>
                        </AppBlock>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AppBlock row justifyContent='space-between' alignItems='center' pv={12} style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} >
                            <AppBlock row>
                                <AppBlock style={{width:36}} alignItems='center'>
                                    <Image source={require('../../../assets/icons/icon_auth_cccd.png')} style={{width:36, height:32}}/>
                                </AppBlock>
                                <AppBlock ml={12}>
                                    <AppText size={14} weight='500'>{t('id_passport_verification')}</AppText>
                                    <AppText size={10} weight='400' color={light.Primary}>100 điểm</AppText>
                                </AppBlock>
                            </AppBlock>
                            <AppBlock width={36} height={36} justifyContent='center' alignItems='center' background={light.Success} radius={12}>
                                <FontAwesomeIcon icon={faCheck} color={light.green500}/>
                            </AppBlock>
                        </AppBlock>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AppBlock row justifyContent='space-between' alignItems='center' pv={12} style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}}>
                            <AppBlock row>
                                <AppBlock style={{width:36}} alignItems='center'>
                                    <Image source={require('../../../assets/icons/icon_auth.png')} style={{width:32, height:32}}/>
                                </AppBlock>
                                <AppBlock ml={12}>
                                    <AppText size={14} weight='500'>{t('register_bankcs')}</AppText>
                                    <AppText size={10} weight='400' color={light.Primary}>50 điểm</AppText>
                                </AppBlock>
                            </AppBlock>
                            <AppBlock width={36} height={36} justifyContent='center' alignItems='center' background={light.Success} radius={12}>
                                <FontAwesomeIcon icon={faCheck} color={light.green500}/>
                            </AppBlock>
                        </AppBlock>
                    </TouchableOpacity>
                </AppBlock>
            :
                null
            }
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default TipScoreScreen