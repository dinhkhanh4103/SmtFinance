import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../view/AppBlock'

const AppSwitch = ({isEnabled, toggleSwitch}: any) => {
  return (
    <AppBlock>
        <TouchableOpacity style={{width:40, height:24}} onPress={toggleSwitch}>
            <AppBlock style={{width:40, height:24}} background={isEnabled? '#dcdcdc':'#00B71D'} radius={51} justifyContent='center'>
                <AppBlock style={{position:'absolute', width:20, height:20, left: isEnabled ? 3 : 17}} background='white' radius={10}></AppBlock>
            </AppBlock>
        </TouchableOpacity>
    </AppBlock>
  )
}

export default AppSwitch