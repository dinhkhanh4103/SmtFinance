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

const BorrowerInformationScreen_5 = ({navigation}: any) => {
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
                <HeaderBack title={t('borrower_information')}/>
                <AppBlock>
                    <AppBlock style={{width:'100%', height: 8}} background='#EBEBEB' radius={99} mb={12}>
                        <AppBlock style={{width:'84%', height: '100%'}} background={light.Primary} radius={99}/>
                    </AppBlock>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>5/6</AppText>
                    <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('proof_documents')}</AppText>
                    <AppBlock mt={20} row alignItems='center'>
                        <AppText size={16} weight='400' regular mr={8}>{t('proof_of_residence_if_any')}</AppText>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faCircleQuestion} size={22}/>
                        </TouchableOpacity>
                    </AppBlock>
                    <AppBlock width={80} height={80} background='#ccc' radius={12}>

                    </AppBlock>
                    
                    <AppBlock mt={8} row alignItems='center'>
                        <AppText size={16} weight='400' regular mr={8}>{t('proof_of_financials')}</AppText>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faCircleQuestion} size={22}/>
                        </TouchableOpacity>
                    </AppBlock>
                    
                    <AppBlock width={80} height={80} background='#ccc' radius={12}>
                        
                    </AppBlock>

                    <AppBlock mt={8}>
                        <AppText size={16} weight='400' regular>{t('loan_purpose')}</AppText>
                        <AppTextInput value='Vay tiêu dùng' editable={false}/>
                    </AppBlock>
                     <AppBlock mt={8}>
                        <AppText size={16} weight='400' regular>{t('payment_method')}</AppText>
                        <AppTextInput value='Chuyển khoản ngân hàng' editable={false}/>
                    </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock style={{position:"absolute", bottom:0, width:"100%"}}>  
                <AppButton name={t('confirm')} onPress={()=> navigation.navigate('BorrowerInformationScreen_6')}/>    
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default BorrowerInformationScreen_5;