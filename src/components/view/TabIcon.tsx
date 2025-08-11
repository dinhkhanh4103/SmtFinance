import { View, Text } from 'react-native'
import React from 'react'
import AppBlock from './AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import AppText from '../text/AppText'
import light from '../../theme/light'

const TabIcon = ({focused, color, icon, label} : any) => {
    if (focused){

        return (
        <AppBlock pb={8} flex alignItems='center' justifyContent='space-between' background='#FBF5EE' style={{minWidth: 90, minHeight:70}} mt={30}>
            <AppBlock height={2} background={light.Primary} width={90}/>
            <FontAwesomeIcon icon={icon} size={24} color={light.Primary}/>
            <AppText size={12} color={light.Primary} pb={5}>{label}</AppText>
        </AppBlock>
        )
    }
    return(
        <AppBlock flex alignItems='center' justifyContent='center' style={{minWidth: 90, minHeight:60}} mt={20}>
            <FontAwesomeIcon icon={icon} size={20} color='#8C8C8C'/>
        </AppBlock>
    )
}

export default TabIcon