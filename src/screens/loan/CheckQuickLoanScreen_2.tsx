import React, { useState } from 'react';
import { View, TouchableOpacity, Image, PermissionsAndroid, Platform, Alert } from 'react-native';
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

const CheckQuickLoanScreen_2 = ({ navigation }: any) => {
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
  return (
    <AppSafeAreaView>
      <AppBlock style={{ width: '95%', height: '100%' }} justifyContent='space-between'>
        <AppBlock>
          <HeaderBack title={t('quick_loan')} />

          <AppBlock>
            <AppText size={24} weight='600' semiBold>{t('check_loan_conditions')}</AppText>
            <AppText size={14} weight='400' regular mt={4}>{t('complete_info_steps')}</AppText>
            <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>2/3</AppText>
            <AppText size={20} weight='600' semiBold color={light.Primary} mt={4}>{t('take_chip_id_photo')}</AppText>

            {/* Front */}
            <AppBlock mt={20}>
              <TouchableOpacity onPress={() => openCamera('front')}>
                <AppBlock
                  height={250}
                  background='#F4F4F4'
                  radius={12}
                  border={1}
                  borderColor='#8C8C8C'
                  alignItems='center'
                  justifyContent='center'
                  overflow='hidden'
                >
                  {frontPhoto ? (
                    <Image
                      source={{ uri: frontPhoto }}
                      style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                    />
                  ) : (
                    <AppBlock alignItems='center'>
                      <AppBlock
                        width={36}
                        height={36}
                        alignItems='center'
                        justifyContent='center'
                        radius={18}
                        border={1}
                        borderColor={light.Primary}
                        background='white'
                      >
                        <FontAwesomeIcon icon={faCamera} color={light.Primary} size={24} />
                      </AppBlock>
                      <AppText size={16} weight='600' semiBold mt={4}>
                        {t('front_id_card')}
                      </AppText>
                    </AppBlock>
                  )}
                </AppBlock>
              </TouchableOpacity>
            </AppBlock>

            {/* Back */}
            <AppBlock mt={20}>
              <TouchableOpacity onPress={() => openCamera('back')}>
                <AppBlock
                  height={250}
                  background='#F4F4F4'
                  radius={12}
                  border={1}
                  borderColor='#8C8C8C'
                  alignItems='center'
                  justifyContent='center'
                  overflow='hidden'
                >
                  {backPhoto ? (
                    <Image
                      source={{ uri: backPhoto }}
                      style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                    />
                  ) : (
                    <AppBlock alignItems='center'>
                      <AppBlock
                        width={36}
                        height={36}
                        alignItems='center'
                        justifyContent='center'
                        radius={18}
                        border={1}
                        borderColor={light.Primary}
                        background='white'
                      >
                        <FontAwesomeIcon icon={faCamera} color={light.Primary} size={24} />
                      </AppBlock>
                      <AppText size={16} weight='600' semiBold mt={4}>
                        {t('back_id_card')}
                      </AppText>
                    </AppBlock>
                  )}
                </AppBlock>
              </TouchableOpacity>
            </AppBlock>
          </AppBlock>
        </AppBlock>

        <AppButton
          name={t('send')}
          onPress={() => navigation.navigate('CheckQuickLoanScreen_3')}
        />
      </AppBlock>
    </AppSafeAreaView>
  );
};

export default CheckQuickLoanScreen_2;
