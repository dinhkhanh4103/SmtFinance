import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import AppText from '../../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationArrow, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import light from '../../../theme/light'
import { useNavigation } from '@react-navigation/native'

const TransactionPoint = () => {
  const navigation = useNavigation();
    const {t} = useTranslation();
    const transactionPoint = {
        "address": "4517 Washington Ave. Manchester, Kentucky 39495",
        "distance": "467m"
    }
  return (
    <AppBlock flex alignItems='center'>
      <AppBlock style={{width:'95%'}}> 
        <AppText size={18} mt={20} mb={8} weight='600' semiBold>{t('nearest_transaction_point')}</AppText>

        <ImageBackground resizeMode='cover' source={require('../../../../assets/images/bg_near_transaction.png')} style={{width:'100%', borderRadius:12, borderColor: light.Primary, borderWidth: 1, height:75, overflow: 'hidden'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('TransactionPointScreen')}>
                <AppBlock background='#F2F5FF99' row justifyContent='space-between' alignItems='center' ph={12} style={{width:'100%', height:'100%'}}>
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
        </ImageBackground>
      </AppBlock>
    </AppBlock>
  )
}

export default TransactionPoint