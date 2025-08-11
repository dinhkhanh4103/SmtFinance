import { View, Text, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import light from '../../theme/light'
import AppButton from '../../components/button/AppButton'

const AddBankSuccessScreen = ({navigation}:any) => {
    const {t}= useTranslation();
  return (
   <AppSafeAreaView>
    <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
        <AppBlock alignItems='center' mt={100}>
            <Image source={require('../../../assets/images/add_bank_success.png')} style={{width:373, height:239}}/>
            <AppBlock alignItems='center'>
                <AppText size={24} weight='600' semiBold color={light.Primary} mt={28}>{t('link_successful')}</AppText>
                <AppText size={14} weight='400' center mt={8}>{t('congratulations_card_linked')}</AppText>
            </AppBlock>
        </AppBlock>
        <AppBlock>
            <AppButton name={t('go_home')} onPress={()=>navigation.navigate('MainTabs')}/>
        </AppBlock>
    </AppBlock>
   </AppSafeAreaView>
  )
}

export default AddBankSuccessScreen