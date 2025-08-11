import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import DropDown from '../../components/input/DropDown'
import { TextInput } from 'react-native-gesture-handler'
import AppButton from '../../components/button/AppButton'

const MAX_LENGTH = 500;
const SendRequestSupportScreen = ({navigation}:any) => {
    const {t}= useTranslation();
    const [topic, setTopic] = useState('');
    const [text, setText] = useState('');
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('send_support_request')}/>
            <AppBlock flex>
                <AppBlock>
                    <AppText size={16} weight='400'>{t('topic')}</AppText>
                    <DropDown
                        placeholder={t('select_topic')}
                        data={[
                            { label: t('Vay vốn'), value: 'Hà Nội' },
                            { label: t('Thanh toán'), value: 'Hồ chí minh' },
                            { label: t('Đầu tư'), value: 'Quảng Ninh' },
                        ]}
                        value={topic} // <-- THÊM DÒNG NÀY
                        onChange={(value : any) => setTopic(value)}
                    />
                </AppBlock>
                <AppBlock mt={16}>
                    <AppBlock row justifyContent='space-between' mb={8}>
                        <AppText size={16} weight='400'>{t('question')}</AppText>
                        <AppText color='#8C8C8C'>{text.length}/500</AppText>
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
            <AppBlock>
                <AppButton name={t('send_support_request')} onPress={()=>navigation.navigate('MainTabs', {screen:'Account'})}/>
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
export default SendRequestSupportScreen