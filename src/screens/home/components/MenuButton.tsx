import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import light from '../../../theme/light'
import AppText from '../../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window');
const MenuButton = ({onPressCallCapital}:any) => {
    const navigation = useNavigation();
    const { t } = useTranslation()
  return (
    <AppBlock row justifyContent='space-between' mt={8} style={{width: '85%'}} alignItems='center'>
        <TouchableOpacity onPress={onPressCallCapital}>
            <AppBlock justifyContent='center' alignItems='center'>
                <AppBlock radius={8} border={2} borderColor={light.Primary} padding={8} alignItems='center' justifyContent='center' width={48} height={48}>
                    <Image source={require('../../../../assets/icons/call_capital.png')} />
                </AppBlock>
                <AppText mt={4} size={12} weight='400'>{t('call_capital')}</AppText>
            </AppBlock>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('TradeScreen')}>
            <AppBlock justifyContent='center' alignItems='center'>
                <AppBlock radius={8} border={2} borderColor={light.Primary} padding={8} alignItems='center' justifyContent='center' width={48} height={48}>
                    <Image source={require('../../../../assets/icons/invest.png')} />
                </AppBlock>
                <AppText mt={4} size={12} weight='400'>{t('invest')}</AppText>
            </AppBlock>
        </TouchableOpacity>

        <TouchableOpacity>
            <AppBlock justifyContent='center' alignItems='center'>
                <AppBlock radius={8} border={2} borderColor={light.Primary} padding={8} alignItems='center' justifyContent='center' width={48} height={48}>
                    <Image source={require('../../../../assets/icons/pay.png')} />
                </AppBlock>
                <AppText mt={4} size={12} weight='400'>{t('pay')}</AppText>
            </AppBlock>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('ShoppingScreen')}>
            <AppBlock justifyContent='center' alignItems='center'>
                <AppBlock radius={8} border={2} borderColor={light.Primary} padding={8} alignItems='center' justifyContent='center' width={48} height={48}>
                    <Image source={require('../../../../assets/icons/introduce.png')} />
                </AppBlock>
                <AppText mt={4} size={12} weight='400'>{t('shopping')}</AppText>
            </AppBlock>
        </TouchableOpacity>
    </AppBlock>
  )
}

export default MenuButton