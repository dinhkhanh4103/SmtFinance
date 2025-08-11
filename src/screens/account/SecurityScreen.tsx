import { View, Text, Switch, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import HeaderBack from '../../components/header/HeaderBack'
import AppTextInput from '../../components/input/AppTextInput'
import AppSwitch from '../../components/button/AppSwitch'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFingerprint, faLock } from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler'
import AppButton from '../../components/button/AppButton'

const SecurityScreen = ({navigation}:any) => {
    const {t} = useTranslation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [fingerprint, setFingerprint] = useState(false);
    const [face, setFace] = useState(false);
    const toggleSwitch = () => setIsEnabled(prev => !prev);
    const toggleFingerprint = ()=>{
        if(fingerprint == false){
            navigation.navigate('FingerprintSecurityScreen')
        }
        setFingerprint(prev=>!prev);
    }
    const toggleFace= ()=>{
        if(fingerprint == false){
            navigation.navigate('FaceSecurityScreen')
        }
        setFace(prev=>!prev);
    }
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('security')}/>
            <ScrollView style={{flex:1}}>
                
                <AppBlock>
                    <AppBlock>
                        <AppText size={16} weight='600' semiBold>{t('change_password')}</AppText>
                        <AppBlock mt={16}>
                            <AppText size={16} weight='400' >{t('current_password')}</AppText>
                            <AppTextInput secureText placeholder={t('enter_current_password')}/>
                        </AppBlock>
                        <AppBlock>
                            <AppText size={16} weight='400' >{t('new_password')}</AppText>
                            <AppTextInput secureText placeholder={t('enter_new_password')}/>
                        </AppBlock>
                        <AppBlock>
                            <AppText size={16} weight='400' >{t('confirm_password')}</AppText>
                            <AppTextInput secureText placeholder={t('enter_confirm_password')}/>
                        </AppBlock>
                    </AppBlock>
                    <AppBlock>
                        <AppText size={16} weight='600' semiBold>{t('biometric_security')}</AppText>
                        <AppBlock row justifyContent='space-between' alignItems='center' mt={8}>
                            <AppBlock row alignItems='center'>
                                <FontAwesomeIcon icon={faFingerprint} size={20}/>
                                <AppText size={14} weight='400' ml={8}>{t('fingerprint_security')}</AppText>
                            </AppBlock>
                            <AppSwitch isEnabled={fingerprint} toggleSwitch={toggleFingerprint}/>
                        </AppBlock>
                        <AppBlock row justifyContent='space-between' alignItems='center' mt={8}>
                            <AppBlock row alignItems='center'>
                                <Image source={require('../../../assets/icons/icon_face_id.png')}/>
                                <AppText size={14} weight='400' ml={8}>{t('face_security')}</AppText>
                            </AppBlock>
                            <AppSwitch isEnabled={face} toggleSwitch={toggleFace}/>
                        </AppBlock>
                    </AppBlock>
                    <AppBlock mt={12}>
                        <AppText size={16} weight='600' semiBold>{t('two_step_authentication')}</AppText>
                        <AppBlock row justifyContent='space-between' alignItems='center' mt={8}>
                            <AppBlock row alignItems='center'>
                                <FontAwesomeIcon icon={faLock} size={20}/>
                                <AppText size={14} weight='400' ml={8}>{t('smartotp_authentication')}</AppText>
                            </AppBlock>
                            <AppSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch}/>
                        </AppBlock>
                        
                    </AppBlock>
                </AppBlock>
            </ScrollView>
            <AppBlock>
                <AppButton name={t('save_changes')}/>
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default SecurityScreen