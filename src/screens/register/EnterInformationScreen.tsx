import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faMobileScreen, faVenusMars} from '@fortawesome/free-solid-svg-icons'
import AppScreenWrapper from '../../components/view/AppScreenWrapper'
import light from '../../theme/light'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import AppTextInput from '../../components/input/AppTextInput'
import { faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons'
import AppButton from '../../components/button/AppButton'
import DatePickerInput from '../../components/input/DatePickerInput'
import DropDown from '../../components/input/DropDown'
import AppModal from '../../components/view/AppModal'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppConstant from '../../config/AppConstant'

const { width, height } = Dimensions.get('window');
const EnterInformationScreen = ({navigation}:any) => {
    const { t } = useTranslation();
    const [gender, setGender] = React.useState<string>('');
    const [showModal, setShowModal] = React.useState(false);
    function handleComplete() {
        navigation.navigate('SignUpSuccessScreen');
    }
  return (
    <AppBlock style={{flex:1, backgroundColor:'white'}} pt={AppConstant.TOP} pb={AppConstant.BOTTOM}>

        <AppBlock flex background='white' alignItems='center' justifyContent='center'>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                resizeMode='contain'
                style={styles.background}
            >
                <AppScreenWrapper>
                    <AppBlock flex alignItems='center' justifyContent='space-between'>
                        <AppBlock>

                            <AppBlock row alignItems='center' justifyContent='space-between' mt={100} style={{width: '100%'}}>
                                <AppBlock>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <FontAwesomeIcon icon={faArrowLeft} size={20}/>
                                    </TouchableOpacity>
                                </AppBlock>
                                <AppBlock row alignItems='center'>
                                    <AppBlock width={24} height={24} style={{borderRadius:'50%'}} background={light.Primary}/>
                                    <AppBlock width={44} height={2} background={light.Primary} mh={6}/>
                                    <AppBlock width={24} height={24} style={{borderRadius:'50%'}} background={light.Primary}/>
                                    <AppBlock width={44} height={2} background={light.Primary} mh={6}/>
                                    <AppBlock width={24} height={24} style={{borderRadius:'50%'}} background={light.Primary}/>
                                </AppBlock>
                                <AppBlock width={20}/>
                            </AppBlock>
                            
                            <AppBlock>
                                <AppBlock alignItems='center' mt={50}>
                                    <AppText size={24} weight='700' semiBold color='#122457' mt={20} mb={10}>{t('enter_information')}</AppText>
                                    <AppText size={14} weight='400' color='#122457'>{t('enter_information_description')}</AppText>
                                </AppBlock>
                                <AppBlock mt={20}>
                                    <AppText color='#554C46' size={16} weight='500' regular>{t('full_name')}</AppText>
                                    <AppTextInput placeholder={t('enter_full_name')} leftIcon={faUser}/>
                                </AppBlock>
                                <AppBlock>
                                    <AppText color='#554C46' size={16} weight='500' regular>{t('date_of_birth')}</AppText>
                                    <DatePickerInput/>
                                </AppBlock>
                                <AppBlock>
                                    <AppText color='#554C46' size={16} weight='500' regular>{t('gender')}</AppText>
                                    <DropDown
                                        iconLeft={faVenusMars}
                                        placeholder={t('enter_gender')}
                                        data={[
                                            { label: t('male'), value: 'male' },
                                            { label: t('female'), value: 'female' },
                                            { label: t('other'), value: 'other' },
                                        ]}
                                        value={gender} // <-- THÊM DÒNG NÀY
                                        onChange={(value : any) => setGender(value)}
                                    />
                                </AppBlock>
                                <AppBlock>
                                    <AppText color='#554C46' size={16} weight='500' regular>{t('referal_code')}</AppText>
                                    <AppTextInput placeholder={t('enter_referal_code')} leftIcon={faMobileScreen} rightIcon={faCircleQuestion} onPressRightIcon={() => setShowModal(true)}/>
                                    <AppModal
                                        visible={showModal}
                                        onClose={() => setShowModal(false)}
                                        title={t('referal_code')}
                                        message={t('referal_note')}
                                        highlightText={t('hotline_number')}
                                        buttonText={t('understood')}
                                    />
                                </AppBlock>
                            </AppBlock>
                        </AppBlock>

                        <AppBlock style={{width:'100%'}} alignItems='center' justifyContent='center' mt={20}>
                            <AppButton name={t('complete')} textStyle={{fontWeight: '600', fontSize: 16}} onPress={handleComplete} />
                        </AppBlock>
                        
                    </AppBlock>
                </AppScreenWrapper>
            </ImageBackground>
        </AppBlock>
    </AppBlock>
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
  button: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 200,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
export default EnterInformationScreen