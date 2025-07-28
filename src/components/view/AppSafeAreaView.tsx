import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBlock from './AppBlock'

const AppSafeAreaView = ({children}:any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <AppBlock flex alignItems='center'>
                {children}
        </AppBlock>
    </SafeAreaView>
  )
}

export default AppSafeAreaView