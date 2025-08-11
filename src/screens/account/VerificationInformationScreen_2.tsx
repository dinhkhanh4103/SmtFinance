import React, { useState } from 'react';
import { View, TouchableOpacity, Image, PermissionsAndroid, Platform, Alert, StyleSheet, Dimensions, Modal } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import AppBlock from '../../components/view/AppBlock';
import HeaderBack from '../../components/header/HeaderBack';
import AppSafeAreaView from '../../components/view/AppSafeAreaView';
import AppText from '../../components/text/AppText';
import light from '../../theme/light';
import AppButton from '../../components/button/AppButton';
import DropDown from '../../components/input/DropDown';
import AppTextInput from '../../components/input/AppTextInput';
import DatePickerInput from '../../components/input/DatePickerInput';
import { Screen } from 'react-native-screens';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const VerificationInformationScreen_2 = ({ navigation }: any) => {
  const { t } = useTranslation();

  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs permission to access your camera',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS tự xin trong Info.plist
  };

  const handleTakePhoto = async (side: 'front' | 'back') => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Permission denied', 'You must grant camera access to continue.');
      return;
    }

    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      (result) => {
        if (result.didCancel || result.errorCode || !result.assets || result.assets.length === 0) {
          console.error('Camera error: ', result.errorMessage);
          return;
        }

        const uri = result.assets[0].uri;
        console.log(uri)
        if (side === 'front') {
          setFrontImage(uri || null);
        } else {
          setBackImage(uri || null);
        }
      },
    );
  };
  const [frontPhoto, setFrontPhoto] = useState<string | null>(null);
  const [backPhoto, setBackPhoto] = useState<string | null>(null);
  const openCamera = (side: 'front' | 'back') => {
    navigation.navigate('CustomCameraScreen', {
        onTakePhoto: (uri: string) => {
        if (side === 'front') setFrontPhoto(uri);
        else setBackPhoto(uri);
        },
    });
};
    const [documentType, setDocumentType] = useState();
    const [openModal, setOpenModal] = useState(false);
  return (
    <AppSafeAreaView>
      <AppBlock flex style={{ width: '95%', height: '100%' }} justifyContent='space-between'>
        <AppBlock flex>
          <HeaderBack title={t('personal_info_verification')} />
          <ScrollView style={{flex:1}}>

            <AppBlock>
              <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>2/2</AppText>
              <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('identity_document_info')}</AppText>
              
              <AppBlock mt={12}>
                  <AppText size={16} weight='400'>{t('document_type')}</AppText>
                  <DropDown
                      placeholder={t('select_province_city')}
                      data={[
                          { label: t('Căn cước công dân có gắn chip'), value: 'cccd' },
                          { label: t('Căn cước công dân có gắn chip'), value: 'cccd' },
                          { label: t('Căn cước công dân có gắn chip'), value: 'cccd' },
                      ]}
                      value={documentType} // <-- THÊM DÒNG NÀY
                      onChange={(value : any) => setDocumentType(value)}
                  />
              </AppBlock>
              <AppBlock mt={8}>
                  <AppText size={16} weight='400'>{t('identity_document_number')}</AppText>
                  <AppTextInput placeholder='Căn cước công dân có gắn chip'/>
              </AppBlock>
              {/* Front */}
              <AppBlock mt={8}>
                  <AppText  size={16} weight='400'>{t('front_photo')}</AppText>
                  <AppBlock alignItems='center' justifyContent='center' width={80} mt={8}>
                      <TouchableOpacity style={{alignItems:"center"}} onPress={()=>openCamera('front')}>            
                          <Image source={require('../../../assets/images/upload_image.png')}/>
                      </TouchableOpacity>
                  </AppBlock>
              </AppBlock>

              {/* Back */}
              <AppBlock mt={8}>
                  <AppText  size={16} weight='400'>{t('back_photo')}</AppText>
                  <AppBlock alignItems='center' justifyContent='center' width={80} mt={8}>
                      <TouchableOpacity style={{alignItems:"center"}} onPress={()=>openCamera('back')}>            
                          <Image source={require('../../../assets/images/upload_image.png')}/>
                      </TouchableOpacity>
                  </AppBlock>
              </AppBlock>

              <AppBlock mt={8}>
                  <AppText size={16} weight='400'>{t('issue_date')}</AppText>
                  <DatePickerInput/>
              </AppBlock>

              <AppBlock mt={8}>
                  <AppText size={16} weight='400'>{t('place_of_issue')}</AppText>
                  <AppTextInput placeholder={t('enter_information')}/>
              </AppBlock>
            </AppBlock>
          </ScrollView>
        </AppBlock>
        <AppBlock>
            <AppButton
            name={t('confirm')}
            onPress={() => setOpenModal(true)}
            />
                            <Modal
                                visible={openModal}
                                onRequestClose={()=>setOpenModal(false)}
                                transparent
                                animationType="fade"
                            >
                                <AppBlock flex justifyContent='center' alignItems='center' background='rgba(0,0,0,0.4)'>
                                    <AppBlock style={styles.modalContainer} alignItems='center' justifyContent='center'>
                                        <AppBlock  alignItems='center' style={{width:'90%'}}>
                                            <AppText size={16} weight='400' regular>Hay đảm bảo những thông tin trên chính xác. Bạn chắc chắn muốn xác thực?</AppText>
                                        </AppBlock>
                                        
                                        <TouchableOpacity onPress={()=>{setOpenModal(false); navigation.navigate('MainTabs', {screen:'Account'})}}>
                                            <AppText pv={12} color={light.Primary} size={16} weight='600' semiBold>{t('confirm')}</AppText>
                                        </TouchableOpacity>
                                        <AppBlock style={{width: '100%'}} border={1} borderColor='#DCDCDC'></AppBlock>
                                        <TouchableOpacity onPress={()=>setOpenModal(false)}>
                                            <AppText pv={12} color='red' size={16} weight='600' semiBold>{t('cancel')}</AppText>
                                        </TouchableOpacity>
                                    </AppBlock>
                                </AppBlock>
                            </Modal>
        </AppBlock>
      </AppBlock>
    </AppSafeAreaView>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 5,
    paddingTop: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#554C46',
    marginBottom: 12,
  },
  content: {
    fontSize: 14,
    color: '#554C46',
    lineHeight: 22,
    marginBottom: 24,
  },
  highlight: {
    color: '#D18800',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#D18800',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default VerificationInformationScreen_2;
