import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import { useTranslation } from 'react-i18next'
import AppText from '../../../components/text/AppText'
import light from '../../../theme/light'

const ItemInvesting = ({item, onPress}:any) => {
    const {t}= useTranslation();
  return (
    <TouchableOpacity onPress={onPress}>
        <AppBlock pv={12} style={{borderBottomWidth:1, borderBottomColor: light.Primary}}>
            <AppBlock row style={{width:'100%'}} justifyContent='space-between'>
                <AppText size={16} weight='400'>{item.date}</AppText>
                <AppText size={14} weight='400' color='#8C8C8C'>{item.code}</AppText>
            </AppBlock>
            <AppBlock row style={{width:'100%'}} justifyContent='space-between'>
                <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_term')}</AppText>
                <AppText size={14} weight='400' color='#8C8C8C'>{item.term}</AppText>
            </AppBlock>
            <AppBlock row style={{width:'100%'}} justifyContent='space-between'>
                <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_amount')}</AppText>
                <AppText size={16} weight='500' color={light.Primary}>{item.amount.toLocaleString('vi-VN')} VNĐ</AppText>
            </AppBlock>
            <AppBlock row style={{width:'100%'}} justifyContent='space-between'>
                <AppText size={14} weight='400' color='#8C8C8C'>{t('status')}</AppText>
                <AppText size={16} weight='500' color={item.status == 'Hoàn tất' ? '#3FC58D' : item.status == 'Đang trả' ? '#DE4B4B' : '#FFB321'}>{item.status}</AppText>
            </AppBlock>
        </AppBlock>
    </TouchableOpacity>
  )
}

export default ItemInvesting