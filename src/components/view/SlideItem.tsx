import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AppBlock from './AppBlock'
import AppText from '../text/AppText'

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth * 0.8;

const SlideItem = ({item} : any) => {
  return (
    <AppBlock padding={0} margin={0} width={itemWidth}>
        <Image source={item.uri} resizeMode='contain' style = {styles.image}/>
        <AppBlock alignItems='center' justifyContent='center' mt={50}>
            <AppText size={24} weight='800' semiBold>{item.title}</AppText>
            <AppText size={16} weight='400' regular>{item.descript}</AppText>
        </AppBlock>
    </AppBlock>
  )
}

export default SlideItem
const styles = StyleSheet.create({
    image:{
        width:'100%',
    }
})