import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'

const FlightTicketScreen = () => {
    const {t} = useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%'}}>
            <HeaderBack title={t('flight_tickets')}/>
            <AppBlock>
                <AppBlock pv={12} style={{borderBottomWidth:1, borderBottomColor:"#DCDCDC"}}>
                    <TouchableOpacity>
                        <AppBlock row>
                            <Image source={require('../../../assets/icons/icon_domestic_flight.png')}/>
                            <AppText ml={8} size={16} weight='400'>{t('book_domestic_flight')}</AppText>
                        </AppBlock>
                    </TouchableOpacity>
                </AppBlock>
                <AppBlock pv={12} style={{borderBottomWidth:1, borderBottomColor:"#DCDCDC"}}>
                    <TouchableOpacity>
                        <AppBlock row>
                            <Image source={require('../../../assets/icons/icon_interrnational_flight.png')}/>
                            <AppText ml={8} size={16} weight='400'>{t('book_international_flight')}</AppText>
                        </AppBlock>
                    </TouchableOpacity>
                </AppBlock>
                <AppBlock pv={12} style={{borderBottomWidth:1, borderBottomColor:"#DCDCDC"}}>
                    <TouchableOpacity>
                        <AppBlock row>
                            <Image source={require('../../../assets/icons/icon_booking_history.png')}/>
                            <AppText ml={8} size={16} weight='400'>{t('flight_booking_history')}</AppText>
                        </AppBlock>
                    </TouchableOpacity>
                </AppBlock>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default FlightTicketScreen