import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import light from '../../theme/light'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import AppButton from '../../components/button/AppButton'
import { Screen } from 'react-native-screens'


const ResultTransferScreen = ({navigation}:any) => {
    const {t}= useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} alignItems='center' justifyContent='space-between'>
            <AppBlock row alignItems='flex-start' style={{width:'100%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('MainTabs', {screen:'EWallet'})}>
                    <FontAwesomeIcon icon={faHouse} size={24}/>
                </TouchableOpacity>
                <AppText ml={8} size={20} weight='600' semiBold>{t('transaction_result')}</AppText>
            </AppBlock>
            <AppBlock alignItems='center' style={{width:'100%'}}>
                <Image source={require('../../../assets/images/result_transfer.png')} style={{width:256, height:256}}/>
                <AppText size={24} weight='600' color={light.Primary}>{t('transaction_successful')}</AppText>
                <AppText mt={12} center>Bạn đã chuyển số tiền <AppText color={light.Primary}>5.000.000 VNĐ</AppText> cho Vũ Thị Thu</AppText>
                <AppBlock radius={12} border={1} borderColor={light.Primary} padding={12} style={{width:'100%'}} mt={12}>
                    <AppBlock  row justifyContent='space-around'>
                        <AppBlock></AppBlock>
                        <AppBlock>
                            <Image source={require('../../../assets/images/book_color.png')} style={{width:48, height:48}}/>
                        </AppBlock>
                        <AppBlock row ml={8} alignItems='center' justifyContent='center' style={{width:'80%'}}>
                            <AppText>{t('save_account_to_contacts_question')}</AppText>
                        </AppBlock>
                    </AppBlock>
                    <TouchableOpacity>
                        <AppBlock alignItems='flex-end' mt={12}>
                            <AppText size={16} weight='600' semiBold color={light.Primary}>{t('add_to_contacts')}</AppText>
                        </AppBlock>
                    </TouchableOpacity>
                </AppBlock> 
            </AppBlock>
            <AppBlock style={{width:'100%'}}>
                <AppButton name={t('go_home')} onPress={()=>navigation.navigate('MainTabs', {screen:'EWallet'})}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default ResultTransferScreen