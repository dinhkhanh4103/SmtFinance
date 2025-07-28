import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import AppTextInput from '../../components/input/AppTextInput'
import DatePickerInput from '../../components/input/DatePickerInput'
import AppButton from '../../components/button/AppButton'
import DropDown from '../../components/input/DropDown'
import { FlatList } from 'react-native-gesture-handler'
import App from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const CheckInformationLoanScreen_5 = ({navigation}: any) => {
    const {t} = useTranslation();
    const [loanPurpose, setLoanPurpose] = useState();
    const [selectedImageUri, setSelectedImageUri] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const handleChoosePhoto = () => {
        const options = {
        mediaType: 'photo',
        quality: 0.8,
        maxWidth: 500,
        maxHeight: 500,
        };

        launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorCode);
            Alert.alert('Lỗi chọn ảnh', 'Không thể chọn ảnh, vui lòng thử lại.');
        } else if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            const source = { uri: asset.uri };
            setSelectedImageUri(source.uri);
            setSelectedImageFile(asset); // Lưu toàn bộ thông tin asset
        }
        });
    }
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%', height: "100%"}} justifyContent='space-between'>
            <AppBlock>
                <HeaderBack title={t('online_loan')}/>
                <AppBlock>
                    <AppText size={24} weight='600' semiBold>{t('check_loan_conditions')}</AppText>
                    <AppText size={14} weight='400' regular mt={4}>{t('complete_info_steps')}</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>5/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('proof_documents')}</AppText>
                    <AppBlock mt={20} row alignItems='center'>
                        <AppText size={16} weight='400' regular mr={8}>{t('proof_of_residence_if_any')}</AppText>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faCircleQuestion} size={22}/>
                        </TouchableOpacity>
                    </AppBlock>
                    {selectedImageUri
                    ?
                        <AppBlock></AppBlock>
                    :
                    
                        <AppBlock alignItems='center' justifyContent='center' width={80} mt={8}>
                            <TouchableOpacity style={{alignItems:"center"}} onPress={handleChoosePhoto}>            
                                <Image source={require('../../../assets/images/upload_image.png')}/>
                                <AppText mt={4} color='#8C8C8C' size={12} weight='400'>{t('max_10_photos')}</AppText>
                            </TouchableOpacity>
                        </AppBlock>
                    }
                    
                    <AppBlock mt={8} row alignItems='center'>
                        <AppText size={16} weight='400' regular mr={8}>{t('proof_of_financials')}</AppText>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faCircleQuestion} size={22}/>
                        </TouchableOpacity>
                    </AppBlock>
                    {selectedImageUri
                    ?
                        <AppBlock></AppBlock>
                    :
                    
                        <AppBlock alignItems='center' justifyContent='center' width={80} mt={8}>
                            <TouchableOpacity style={{alignItems:"center"}} onPress={handleChoosePhoto}>            
                                <Image source={require('../../../assets/images/upload_image.png')}/>
                                <AppText mt={4} color='#8C8C8C' size={12} weight='400'>{t('max_20_photos')}</AppText>
                            </TouchableOpacity>
                        </AppBlock>
                    }

                    <AppBlock mt={8}>
                        <AppText size={16} weight='400' regular>{t('loan_purpose')}</AppText>
                            <DropDown
                                placeholder={t('select_purpose')}
                                data={[
                                    { label: t('IT'), value: 'it' },
                                    { label: t('Tự do'), value: 'free' },
                                    { label: t('Khác'), value: 'other' },
                                ]}
                                value={loanPurpose}
                                onChange={(value : any) => setLoanPurpose(value)}
                            />
                    </AppBlock>
                     <AppBlock mt={8}>
                        <AppText size={16} weight='400' regular>{t('payment_method')}</AppText>
                            <DropDown
                                placeholder={t('select_method')}
                                data={[
                                    { label: t('IT'), value: 'it' },
                                    { label: t('Tự do'), value: 'free' },
                                    { label: t('Khác'), value: 'other' },
                                ]}
                                value={loanPurpose}
                                onChange={(value : any) => setLoanPurpose(value)}
                            />
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock style={{position:"absolute", bottom:0, width:"100%"}}>  
                <AppButton name={t('confirm')} onPress={()=> navigation.navigate('CheckInformationLoanScreen_6')}/>    
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default CheckInformationLoanScreen_5;