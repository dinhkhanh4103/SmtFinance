import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import light from '../../theme/light'

const QuestionScreen = () => {
    const {t}= useTranslation();
    const question = {
        content:"Tại sao tôi không nhận được thông báo hoạt động của bài viết bất kỳ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%'}}>
            <HeaderBack title={t('question')}/>
            <AppBlock>
                <AppText size={20} weight='600' semiBold>{t('community')}</AppText>
                <AppBlock pv={12} style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}}> 
                    <AppText size={16} weight='600'>{t('question')}</AppText>
                    <AppText>{question.content}</AppText>
                </AppBlock>
            </AppBlock>
            <AppBlock>
                <AppBlock pv={12} style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}}> 
                    <AppText size={16} weight='600'>{t('answer')}</AppText>
                    <AppText>{question.answer}</AppText>
                </AppBlock>
            </AppBlock>
            <AppBlock mt={12} alignItems='center'>
                <AppText size={12} weight='600' semiBold>{t('is_info_helpful')}</AppText>
                <AppBlock row mt={8}>
                    <TouchableOpacity>
                        <AppBlock row mh={12}>
                            <FontAwesomeIcon icon={faThumbsUp} color={light.Primary}/>
                            <AppText ml={4} size={12} weight='600' color={light.Primary}> {t('helpful')}</AppText>
                        </AppBlock>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AppBlock row mh={12}>
                            <FontAwesomeIcon icon={faThumbsDown} color={light.red500}/>
                            <AppText ml={4} size={12} weight='600' color={light.red500}>{t('not_helpful')}</AppText>
                        </AppBlock>
                    </TouchableOpacity>
                </AppBlock>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default QuestionScreen