import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBlock from './AppBlock'
import AppConstant from '../../config/AppConstant'

const AppSafeAreaView = ({children}:any) => {
  return (
    <AppBlock style={{ flex: 1, backgroundColor: 'white', paddingTop: AppConstant.TOP, paddingBottom: AppConstant.BOTTOM }} >
        <AppBlock flex alignItems='center'>
                {children}
        </AppBlock>
    </AppBlock>
  )
}

export default AppSafeAreaView