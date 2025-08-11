import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppBlock from '../../../components/view/AppBlock'
import AppText from '../../../components/text/AppText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRightArrowLeft, faBell, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import AppButton from '../../../components/button/AppButton'
import { time } from '../../../i18n/locales/en'
import { act } from 'react-test-renderer'

const NotificationItem = ({item, onPress, onPressPay}: any) => {
    const {t} = useTranslation()
    const actions = item.actions;
    const type = item.type;
  return (
    <TouchableOpacity onPress={onPress}>
        <AppBlock style={{width:'100%'}} justifyContent='space-between' mb={12}>
            <AppBlock row >
                    <AppBlock width={32} height={32} background={type == 'loan' || type == 'investment' ? '#BFFFD1' : type == 'reminder' ? '#FFE8AE' : '#DCDCDC'} alignItems='center' justifyContent='center' radius={16}>
                        <FontAwesomeIcon icon={type == 'loan' || type == 'investment' ? faWallet : type == 'reminder' ? faBell : faArrowRightArrowLeft} size={18} color={type == 'loan' || type == 'investment' ? '#3FC58D' : type == 'reminder' ? '#FFA500' : '#808080'}/>
                    </AppBlock>
                    <AppBlock ml={8} style={{width:'90%'}}>
                        <AppBlock row alignItems='center' justifyContent='space-between'>
                            <AppText size={14} weight='500'>{item.title}</AppText>
                            <AppText size={10} weight='500' color='#8C8C8C'>{item.time}</AppText>
                        </AppBlock>
                        <AppBlock style={{width:'90%'}}>
                            <AppText size={12} weight='400'>{item.description}</AppText>
                        </AppBlock>
                        <AppBlock row mt={8}>
                            {actions.map((action: any) =>(
                                <AppBlock mr={12}>
                                    <AppButton name={action.text} width={106} heigth={38} onPress={action.text == 'Thanh toán' ? onPressPay : ()=>{}}/>
                                </AppBlock>
                            ))}
                        </AppBlock>
                    </AppBlock>
            </AppBlock>
            <AppBlock style={{width:'100%'}} height={1} background='#ccc' mt={12}></AppBlock>
        </AppBlock>
    </TouchableOpacity>
  )
}

export default NotificationItem