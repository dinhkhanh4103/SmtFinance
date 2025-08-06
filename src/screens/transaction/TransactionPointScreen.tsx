import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faFilter, faLocationArrow, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import AppText from '../../components/text/AppText'
import { width } from '@fortawesome/free-solid-svg-icons/faEye'
import { useTranslation } from 'react-i18next'
import HeaderBack from '../../components/header/HeaderBack'
import light from '../../theme/light'
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'
import MapView, { Marker, UrlTile } from 'react-native-maps';
import SearchBar from '../../components/input/SearchBar'
import DistanceModal from './components/DistanceModal'

const TransactionPointScreen = ({navigation}: any) => {
    const {t} = useTranslation();
    const [selected, setSelected] = useState('deposit_money');
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [distance, setDistance] = useState(10);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 3000)
    })
    const transactionPoint = {
        "address": "4517 Washington Ave. Manchester, Kentucky 39495",
        "distance": "467m"
    }
  return (
    <>

        {isLoading
        ?
            <AppBlock flex background='white' alignItems='center' justifyContent='center'>
                <AppBlock alignItems='center'>
                    <Image source={require('../../../assets/images/load_maps.png')}/>
                    <AppText mt={12} size={36} weight='600' semiBold color={light.Primary}>{t('transaction_point')}</AppText>
                </AppBlock>
            </AppBlock>
    
        :
            <AppSafeAreaView>
                <AppBlock style={{width:'95%'}} alignItems='center'>
                    <HeaderBack title={t('transaction_point')} iconRight={faFilter} onPressIconRight={()=>{setShowModal(true)}}/>
                    <AppBlock row width={212} background='#F4F4F4' height={36} radius={12}>
                        <AppBlock style={{width:'50%', height:'100%', borderRadius:12}} background={selected == 'deposit_money' ? light.Primary : '#F4F4F4'}>
                            <TouchableOpacity style={{width:'100%', height:'100%', alignItems:'center', justifyContent:'center'}} onPress={()=>{setSelected('deposit_money')}}>
                                <AppText color={selected == 'deposit_money' ? 'white' : '#8C8C8C'} size={16} weight='500'>{t('deposit_money')}</AppText>  
                            </TouchableOpacity>
                        </AppBlock>
                        <AppBlock style={{width:'50%', height:'100%', borderRadius:12}} background={selected == 'receive_money' ? light.Primary : '#F4F4F4'}>
                            <TouchableOpacity style={{width:'100%', height:'100%', alignItems:'center', justifyContent:'center'}} onPress={()=>{setSelected('receive_money')}}>
                                <AppText color={selected == 'receive_money' ? 'white' : '#8C8C8C'} size={16} weight='500'>{t('receive_money')}</AppText>
                            </TouchableOpacity>
                        </AppBlock>
                    </AppBlock>
                    <AppBlock background='#ccc' style={{width:'100%', height:512}} mt={12}>
                        <MapView
                            
                            style={{flex:1}}
                            initialRegion={{
                                latitude: 21.0285, // Hà Nội
                                longitude: 105.8542,
                                latitudeDelta: 0.05,
                                longitudeDelta: 0.05,
                            }}
                        >
                            <UrlTile
                                urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                maximumZ={19}
                            />
                            <Marker
                                coordinate={{ latitude: 21.0285, longitude: 105.8542 }}
                                title="Hà Nội"
                                description="Thủ đô Việt Nam"
                                pinColor='red'
                            />
                        </MapView>
                    </AppBlock>
                    <AppBlock>
                        <SearchBar placeholder={t('search')}/>
                    </AppBlock>
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
                <DistanceModal visible={showModal} distance={distance} onClose={()=>{setShowModal(false)}} onChangeDistance={(value:number) => {setDistance(value)}}/>
            </AppSafeAreaView>
        }
    </>
  )
}

export default TransactionPointScreen