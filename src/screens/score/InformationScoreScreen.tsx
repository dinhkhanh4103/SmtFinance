import { View, Text } from 'react-native'
import React, { useTransition } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'

const InformationScoreScreen = () => {
    const {t} = useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width: '95%'}}>
            <HeaderBack title={t('point_information')}/>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default InformationScoreScreen