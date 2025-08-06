import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import SearchIconRight from '../../components/input/SearchIconRight'
import AppText from '../../components/text/AppText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const FAQScreen = ({navigation}:any) => {
    const {t} = useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%'}}>
            <HeaderBack title={t('faq')}/>
            <AppBlock>
                <SearchIconRight placeholder={t('search')}/>
                <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen')}>
                    <AppBlock row justifyContent='space-between' alignItems='center' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}> 
                        <AppBlock style={{width:'85%'}}>
                            <AppText>Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?</AppText>
                        </AppBlock>
                        <FontAwesomeIcon icon={faChevronRight} size={20}/>
                    </AppBlock>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen')}>
                    <AppBlock row justifyContent='space-between' alignItems='center' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}> 
                        <AppBlock style={{width:'85%'}}>
                            <AppText>Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?</AppText>
                        </AppBlock>
                        <FontAwesomeIcon icon={faChevronRight} size={20}/>
                    </AppBlock>
                 </TouchableOpacity >
                 <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen')} >
                    <AppBlock row justifyContent='space-between' alignItems='center' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}> 
                        <AppBlock style={{width:'85%'}}>
                            <AppText>Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?</AppText>
                        </AppBlock>
                        <FontAwesomeIcon icon={faChevronRight} size={20}/>
                    </AppBlock>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen')}>
                    <AppBlock row justifyContent='space-between' alignItems='center' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}> 
                        <AppBlock style={{width:'85%'}}>
                            <AppText>Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?</AppText>
                        </AppBlock>
                        <FontAwesomeIcon icon={faChevronRight} size={20}/>
                    </AppBlock>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen')}>
                    <AppBlock row justifyContent='space-between' alignItems='center' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}> 
                        <AppBlock style={{width:'85%'}}>
                            <AppText>Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?</AppText>
                        </AppBlock>
                        <FontAwesomeIcon icon={faChevronRight} size={20}/>
                    </AppBlock>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen')}>
                    <AppBlock row justifyContent='space-between' alignItems='center' style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} pv={8}> 
                        <AppBlock style={{width:'85%'}}>
                            <AppText>Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?</AppText>
                        </AppBlock>
                        <FontAwesomeIcon icon={faChevronRight} size={20}/>
                    </AppBlock>
                 </TouchableOpacity>
                 
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default FAQScreen