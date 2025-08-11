import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppBlock from '../../components/view/AppBlock';
import AppText from '../../components/text/AppText';
import light from '../../theme/light';
import { useTranslation } from 'react-i18next';
import App from '../../../App';
import AppTextInput from '../../components/input/AppTextInput';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import AppCheckBox from '../../components/input/AppCheckBox';
import AppButton from '../../components/button/AppButton';
import AppScreenWrapper from '../../components/view/AppScreenWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../hooks/useAuth';
import { useAuthStore } from '../../store/authStore';
import AppConstant from '../../config/AppConstant';
import { useLogin } from '../../api/auth/auth.ts';
import { useForm, Controller } from 'react-hook-form';
import LoginRequest from '../../api/auth/auth.type';
import * as Keychain from 'react-native-keychain';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import DataLocal from '../../utils/local/DataLocal';
import {
  showFlashMessageError,
  showFlashMessageSuccess,
} from '../../helpers/messageHelper';
import useCheckResp from '../../utils/checkResp';
import DataUtils from '../../utils/DataUtils';
import { StatusLogin } from '../../redux/loginSlice.tsx';
import { useDispatch } from 'react-redux';
const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const { mutate: Login } = useLogin();
  const { checkResponse } = useCheckResp();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_name: '',
      password: '',
    },
  });
  React.useEffect(() => {
    async function loadCredentials() {
      const creds = await Keychain.getGenericPassword();
      if (creds) {
        setValue('user_name', creds.username);
        setValue('password', creds.password);
        setChecked(true);
      }
    }
    loadCredentials();
  }, [setValue]);
  const { login } = useAuthStore();
  // async function handleLogin(data: LoginRequest) {
  //   navigation.navigate('MainTabs');
  //   console.log('Login Data:', data);
  //   Login(
  //     {
  //       user_name: data.user_name,
  //       password: data.password,
  //       unique_id: 'string',
  //       token_device: 'string',
  //       device_name: 'string',
  //     },
  //     {
  //       onSuccess: async (succ: any) => {
  //         if (DataUtils.checkSuccessfully(succ)) {
  //           __DEV__ && console.log(JSON.stringify(succ));
  //           showFlashMessageSuccess(checkResponse(succ));
  //           await DataLocal.saveInfoUser(user);
  //           await DataLocal.saveAccessToken(accessToken);
  //           await DataLocal.saveRefreshToken(refreshToken);
  //           await DataLocal.saveStatusLogin();
  //           await DataLocal.saveTimeToken(new Date().getTime().toString());
  //           if (checked) {
  //             await Keychain.setGenericPassword(data.user_name, data.password);
  //           } else {
  //             await Keychain.resetGenericPassword();
  //           }
  //           console.log('Login Success:', succ);
  //         } else {
  //           __DEV__ && console.log(JSON.stringify(succ));
  //           showFlashMessageError(checkResponse(succ));
  //         }
  //       },
  //       onError(err) {
  //         __DEV__ && console.log('Fail :  ' + JSON.stringify(err));
  //         showFlashMessageError(checkResponse(err));
  //       },
  //     },
  //   );
  // }
  async function handleLogin(data: LoginRequest) {
    // Fake response data để test lưu local và Keychain
    dispatch(StatusLogin(true));
    const fakeResponse = {
      data: {
        data_user: {
          id: 22,
          address_id: 6,
          full_name: 'Đức',
          gender: 1,
          dob: '2000-07-30T00:00:00.000Z',
          email: 'bminhduc0104@gmail.com',
          phone: '0967055525',
          avatar: null,
          type_certificate_identify: 1,
          certificate_identify: '125842329',
          date_range: '2015-09-24T00:00:00.000Z',
          front_photo: 'front.png',
          back_side_photo: 'back_side.png',
          issued_by: 'CA tỉnh Phú Thọ',
          role: 1,
          is_online: 0,
          is_authenticated: 1,
          google_id: null,
          facebook_id: null,
          apple_id: null,
          status: 1,
          deleted: 0,
          created_date: '2023-08-11T04:04:15.000Z',
          updated_date: null,
          address_detail_1: {
            city: { id: 249, name: 'Phú Thọ', value: 'Phú Thọ' },
            district: { id: 1644, name: 'Xã Yên Trị', value: 'Xã Yên Trị' },
            ward: {
              id: 190104,
              name: 'Phường Khắc Niệm',
              value: 'Phường Khắc Niệm',
            },
            detail: '',
          },
          address_detail_2: {
            city: { id: 201, name: 'Hà Nội', value: 'Hà Nội' },
            district: {
              id: 1485,
              name: 'Quận Cầu Giấy',
              value: 'Quận Cầu Giấy',
            },
            ward: {
              id: '1A0603',
              name: 'Phường Mai Dịch',
              value: 'Phường Mai Dịch',
            },
            detail:
              '16 ngõ 59 Phạm Văn Đồng, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội',
          },
        },
        access_token: 'String',
        refresh_token: 'String',
      },
    };

    // Lấy dữ liệu từ fakeResponse
    const user = fakeResponse.data.data_user;
    const accessToken = fakeResponse.data.access_token;
    const refreshToken = fakeResponse.data.refresh_token;

    await DataLocal.saveInfoUser(user);
    await DataLocal.saveAccessToken(accessToken);
    await DataLocal.saveRefreshToken(refreshToken);
    await DataLocal.saveStatusLogin();
    await DataLocal.saveTimeToken(new Date().getTime().toString());

    if (checked) {
      await Keychain.setGenericPassword(data.user_name, data.password);
    } else {
      await Keychain.resetGenericPassword();
    }

    showFlashMessageSuccess('Đăng nhập thành công (fake)');
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <AppBlock
        flex
        background="white"
        alignItems="center"
        justifyContent="center"
        pb={AppConstant.BOTTOM}
        pt={AppConstant.TOP}
      >
        <ImageBackground
          source={require('../../../assets/images/background.png')}
          resizeMode="contain"
          style={styles.background}
        >
          <AppScreenWrapper>
            <AppBlock flex alignItems="center" justifyContent="space-between">
              <AppBlock
                row
                alignItems="center"
                justifyContent="center"
                mt={150}
              >
                <Image
                  source={require('../../../assets/images/logo.png')}
                  style={{ width: 74 }}
                />
                <AppText
                  color={light.Primary}
                  size={32}
                  weight="800"
                  ml={4}
                  semiBold
                >
                  {t('name_app')}
                </AppText>
              </AppBlock>
              <AppBlock
                alignItems="center"
                style={{ width: '100%' }}
                justifyContent="center"
              >
                <AppBlock alignItems="center">
                  <AppBlock>
                    <AppText size={24} weight="700" semiBold color="#122457">
                      {t('login')}
                    </AppText>
                  </AppBlock>
                  <AppBlock
                    row
                    alignItems="center"
                    justifyContent="space-between"
                    mt={20}
                    mb={20}
                  >
                    <TouchableOpacity style={styles.btn_media}>
                      <Image
                        source={require('../../../assets/icons/google_login.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_media}>
                      <Image
                        source={require('../../../assets/icons/apple_login.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_media}>
                      <Image
                        source={require('../../../assets/icons/fb_login.png')}
                      />
                    </TouchableOpacity>
                  </AppBlock>
                </AppBlock>

                <AppBlock
                  style={{ width: '100%' }}
                  row
                  alignItems="center"
                  mb={20}
                  justifyContent="space-between"
                >
                  <AppBlock
                    background={light.Primary}
                    height={1}
                    style={{ width: '42%' }}
                  ></AppBlock>
                  <AppText mh={8} size={14} weight="500">
                    {t('or')}
                  </AppText>
                  <AppBlock
                    background={light.Primary}
                    height={1}
                    style={{ width: '42%' }}
                  ></AppBlock>
                </AppBlock>

                <AppBlock style={{ width: '100%' }}>
                  <AppBlock>
                    <AppText color="#122457" size={16} weight="400" regular>
                      {t('account')}
                    </AppText>
                    <Controller
                      control={control}
                      name="user_name"
                      rules={{ required: true }}
                      render={({ field: { onChange, value } }) => (
                        <AppTextInput
                          placeholder={t('enter_account')}
                          leftIcon={faUser}
                          value={value}
                          onChangeText={onChange}
                        />
                      )}
                    />
                    {errors.user_name && (
                      <AppText color="red" size={12}>
                        {t('required')}
                      </AppText>
                    )}
                  </AppBlock>
                  <AppBlock>
                    <AppText color="#122457" size={16} weight="400" regular>
                      {t('password')}
                    </AppText>
                    <Controller
                      control={control}
                      name="password"
                      rules={{ required: true }}
                      render={({ field: { onChange, value } }) => (
                        <AppTextInput
                          secureText
                          placeholder={t('enter_password')}
                          leftIcon={faLock}
                          value={value}
                          onChangeText={onChange}
                        />
                      )}
                    />
                    {errors.password && (
                      <AppText color="red" size={12}>
                        {t('required')}
                      </AppText>
                    )}
                  </AppBlock>
                  <AppBlock
                    row
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <AppCheckBox
                      label={t('remember_me')}
                      checked={checked}
                      onValueChange={setChecked}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ForgotPasswordScreen')
                      }
                    >
                      <AppText color={'#284BAC'} size={12} weight="400" regular>
                        {t('forgot_password')}?
                      </AppText>
                    </TouchableOpacity>
                  </AppBlock>
                </AppBlock>
              </AppBlock>

              <AppBlock alignItems="center">
                <AppBlock row mb={8}>
                  <AppText
                    color="#8C8C8C"
                    size={14}
                    weight="400"
                    regular
                    mr={4}
                  >
                    {t('not_account')}
                  </AppText>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                  >
                    <AppText color={'#284BAC'} size={14} weight="500" semiBold>
                      {t('register')}
                    </AppText>
                  </TouchableOpacity>
                </AppBlock>
                <AppBlock
                  mb={0}
                  style={{ width: '100%' }}
                  row
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <AppBlock style={{ width: '82%' }}>
                    <AppButton
                      name={t('login')}
                      onPress={handleSubmit(handleLogin)}
                      radius={12}
                      textColor="white"
                      textStyle={{ fontSize: 16, fontWeight: '500' }}
                    />
                  </AppBlock>
                  <TouchableOpacity style={{ width: '15%' }}>
                    <AppBlock
                      background={light.Primary}
                      style={{ width: '100%' }}
                      height={44}
                      justifyContent="center"
                      alignItems="center"
                      radius={12}
                    >
                      <Image
                        source={require('../../../assets/images/fingerprint.png')}
                        style={{ width: 20, height: 20 }}
                      />
                    </AppBlock>
                  </TouchableOpacity>
                </AppBlock>
              </AppBlock>
            </AppBlock>
          </AppScreenWrapper>
        </ImageBackground>
      </AppBlock>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100, // Adjust to fit the header
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  btn_media: {
    backgroundColor: 'white',
    borderColor: '#7C9AEA',
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 8,
    margin: 8,
    borderRadius: 8,
  },
});
export default LoginScreen;
