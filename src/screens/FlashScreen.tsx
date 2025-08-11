import { View, Text, ImageBackground, StyleSheet, Dimensions, StatusBar, FlatList, Image } from 'react-native'
import React from 'react'
import AppBlock from '../components/view/AppBlock'
import AppText from '../components/text/AppText'
import { useTranslation } from 'react-i18next'
import dark from '../theme/dark'
import light from '../theme/light'
import Slider from '../components/view/Slider'
import { title } from '../i18n/locales/en'
import AppButton from '../components/button/AppButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppConstant from '../config/AppConstant'

const { width, height } = Dimensions.get('window');
const widthSlider = width * 0.8

const FlashScreen = ({navigation}: any) => {
    const { t } = useTranslation();
    const slideItems = [
      { id: '1', uri: require('../../assets/images/image_slider_flash.jpg'), title: "Welcome to E-Compliance", descript: "Tạo nên tín dụng của bạn cùng chúng tôi" },
      { id: '2', uri: require('../../assets/images/image_slider_flash.jpg'), title: "Vay vốn", descript: "Vay dễ, lãi thấp, giải ngân nhanh" },
      { id: '3', uri: require('../../assets/images/image_slider_flash.jpg'), title: "Ưu đãi", descript: "Nhiều ưu đãi lớn đang chờ đón bạn" },
      { id: '4', uri: require('../../assets/images/image_slider_flash.jpg'), title: "Dịch vụ", descript: "Luôn đặt sự hài lòng của bạn lên hàng đầu" },
    ];
    function handleButtonLogin(){
      navigation.navigate('LoginScreen')
    }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <AppBlock flex background='white' justifyContent='space-between' pb={AppConstant.BOTTOM}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.background}
          resizeMode="contain"
        >
        <AppBlock row alignItems='center' justifyContent='center' mt={150}>
          <Image source={require('../../assets/images/logo.png')} style={{width: 74}}/>
          <AppText color={light.Primary} size={32} weight='800' ml={4} semiBold>{t('name_app')}</AppText>
        </AppBlock>
        <AppBlock mb={20} flex alignItems='center' justifyContent='flex-end'>
            {/* <Slider data={slideItems}/> */}
          <AppBlock width={widthSlider}>
            <Slider data={slideItems}/>
          </AppBlock>
        </AppBlock>
        <AppBlock row>
          <AppBlock style={{width:'45%'}}>
            <AppButton name={t('login')} textColor='white' onPress={handleButtonLogin}/>
          </AppBlock>
          <AppBlock style={{width:'45%'}} ml={8} height={44}>
            <AppButton name={t('register')} backgroundColor='#F4F4F4' textColor={light.Primary} onPress={() => navigation.navigate('SignUpScreen')}/>
          </AppBlock>
        </AppBlock>
        </ImageBackground>
        <StatusBar barStyle={"dark-content"} translucent/>
      </AppBlock>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100, // Adjust to fit the header
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default FlashScreen