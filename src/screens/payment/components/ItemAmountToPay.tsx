import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import AppText from '../../../components/text/AppText'
import light from '../../../theme/light'

const ItemAmountToPay = ({amount, selected, onPress}:any) => {
  return (
    <TouchableOpacity style={{width:'30%'}} onPress={onPress}>
        <AppBlock radius={8} border={1} borderColor={ selected ? light.Primary : '#DCDCDC'} alignItems='center' justifyContent='center' pv={12}>
            <AppText size={16} weight='400' color={ selected ? light.Primary : '#8C8C8C'}>{amount}</AppText>
        </AppBlock>
    </TouchableOpacity>
  )
}

export default ItemAmountToPay