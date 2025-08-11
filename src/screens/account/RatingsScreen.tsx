import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { use, useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native-gesture-handler'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStar0} from '@fortawesome/free-regular-svg-icons'
import AppButton from '../../components/button/AppButton'

const MAX_LENGTH = 100;
const RatingsScreen = () => {
    const {t} = useTranslation();
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}} justifyContent='space-between'>
            <HeaderBack title={t('ratings_feedback')}/>
            <ScrollView style={{flex:1}}>
                <AppBlock>
                    <Image source={require('../../../assets/images/ratings_image.png')} style={{width:'100%', height: 280}}/>
                    <AppText size={12} weight='500' color={light.Primary}>{t('service_rating_question')}</AppText>
                    <AppBlock row justifyContent='space-between' mt={12}>
                         {[1, 2, 3, 4, 5].map((i) => (
                            <TouchableOpacity key={i} onPress={() => setRating(i)}>
                                <AppBlock>
                                    <FontAwesomeIcon icon={i <= rating ? faStar : faStar0}  size={44} color='#FFB321'/>
                                </AppBlock>
                            </TouchableOpacity>
                        ))}
                    </AppBlock>
                    <AppBlock mt={16}>
                        <AppBlock row justifyContent='space-between' mb={8}>
                            <AppText size={16} weight='400'>{t('feedback_content')}</AppText>
                            <AppText>{text.length}/100</AppText>
                        </AppBlock>
                        <TextInput
                            style={styles.input}
                            placeholder={t('enter_content')}
                            value={text}
                            onChangeText={(value) => {
                            if (value.length <= MAX_LENGTH) setText(value);
                            }}
                            multiline
                            textAlignVertical="top" // để chữ canh trên
                        />
                    </AppBlock>
                </AppBlock>
            </ScrollView>
            <AppBlock>
                <AppButton name={t('rate')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  count: {
    fontSize: 13,
    color: '#999',
  },
  input: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 14,
  },
});
export default RatingsScreen