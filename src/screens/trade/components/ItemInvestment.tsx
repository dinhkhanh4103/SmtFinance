import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import AppText from '../../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import light from '../../../theme/light'

const ItemInvestment = ({item, onPress}:any) => {
    const {t} = useTranslation();
  return (
    <TouchableOpacity onPress={onPress}>
        <AppBlock row style={{width:'100%', borderBottomWidth: 1 , borderBottomColor: light.Primary}} justifyContent='space-between' alignItems='center' pv={12}>
            <AppBlock>
                <AppText size={16} weight='600' semiBold>{item.title}</AppText>
                <AppText size={14} weight='400' color='#8C8C8C'>{item.date}</AppText>
                <AppText size={14} weight='400' color='#8C8C8C'>{t('interest_rate')}: <AppText color='#3FC58D'>{item.interest}</AppText></AppText>
            </AppBlock>

            <AppBlock>
                <AppText size={16} weight='500' color={light.Primary}>{item.amount}</AppText>
                <AppBlock row alignItems='center' justifyContent='space-between' pv={4}>
                    <AppText size={14} weight='400' color='#8C8C8C'>{t('term')}: {item.term}</AppText>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </AppBlock>
            </AppBlock>
        </AppBlock>
    </TouchableOpacity>
  )
}

export default ItemInvestment