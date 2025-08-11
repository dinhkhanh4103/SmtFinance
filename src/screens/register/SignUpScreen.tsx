import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AppBlock from '../../components/view/AppBlock';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faLocation,
  faLock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import AppScreenWrapper from '../../components/view/AppScreenWrapper';
import light from '../../theme/light';
import AppText from '../../components/text/AppText';
import { useTranslation } from 'react-i18next';
import AppTextInput from '../../components/input/AppTextInput';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import AppButton from '../../components/button/AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppConstant from '../../config/AppConstant';
import { useRegister } from '../../api/auth/auth';
import DataUtils from '../../utils/DataUtils';
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../../redux/store';
import {
  showFlashMessageError,
  showFlashMessageSuccess,
} from '../../helpers/messageHelper';
import useCheckResp from '../../utils/checkResp';

const { width, height } = Dimensions.get('window');

// Validation schema using Yup
const validationSchema = yup.object().shape({
  email: yup.string().email('invalid_email_format').required('email_required'),
  password: yup
    .string()
    .min(6, 'password_min_6_characters')
    .matches(/[A-Z]/, 'password_must_contain_uppercase')
    .matches(/\d/, 'password_must_contain_number')
    .required('password_required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords_must_match')
    .required('confirm_password_required'),
});

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpScreen = ({ navigation }: any) => {
  const isLogin = useSelector((state: RootState) => state.loginSlice.state);
  const { t } = useTranslation();
  const { checkResponse } = useCheckResp();
  const [uniqueId, setUniqueId] = React.useState('');
  const { mutate: signUp } = useRegister();
  Alert.alert(JSON.stringify(isLogin));
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: 'Hello123',
      confirmPassword: 'Hello123',
    },
  });

  const password = watch('password');

  const passwordValidations = {
    hasMinLength: password && password.length >= 6,
    hasUppercase: password && /[A-Z]/.test(password),
    hasNumber: password && /\d/.test(password),
  };
  React.useEffect(() => {
    // DeviceInfo.getUniqueId().then(r => setUniqueId(r));
  }, []);

  const handleGetOTP = (data: SignUpFormData) => {
    __DEV__ && 'Sign Up Data1: ' + JSON.stringify(1233);
    // navigation.navigate('SignUpOTPScreen', { email: data.email });
    // signUp(
    //   {
    //     email: data.email,
    //     phone: '0123456789',
    //     password: data.password,
    //     full_name: 'Nguyen Van A',
    //     unique_id: 'device_unique_id_123',
    //     token_device: 'firebase_token_here',
    //     device_name: 'iPhone 15',
    //   },
    //   {
    //     onSuccess(succ) {
    //       navigation.navigate('SignUpOTPScreen', { email: data.email });
    //       if (DataUtils.checkSuccessfully(succ)) {
    //         __DEV__ && console.log(JSON.stringify(succ));
    //         showFlashMessageSuccess(checkResponse(succ));

    //       } else {
    //         __DEV__ && console.log(JSON.stringify(succ));
    //         showFlashMessageError(checkResponse(succ));
    //       }
    //     },
    //     onError(err) {
    //       __DEV__ && console.log('Fail :  ' + JSON.stringify(err));
    //       showFlashMessageError(checkResponse(err));
    //     },
    //   },
    // );
  };

  return (
    <AppBlock
      style={{ flex: 1, backgroundColor: 'white' }}
      pt={AppConstant.TOP}
      pb={AppConstant.BOTTOM}
    >
      <AppBlock
        flex
        background="white"
        alignItems="center"
        justifyContent="center"
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
                justifyContent="space-between"
                mt={100}
                style={{ width: '100%' }}
              >
                <AppBlock>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} />
                  </TouchableOpacity>
                </AppBlock>
                <AppBlock row alignItems="center">
                  <AppBlock
                    width={24}
                    height={24}
                    style={{ borderRadius: '50%' }}
                    background={light.Primary}
                  />
                  <AppBlock width={44} height={2} background="#C6C6C6" mh={6} />
                  <AppBlock
                    width={24}
                    height={24}
                    style={{ borderRadius: '50%' }}
                    background="#C6C6C6"
                  />
                  <AppBlock width={44} height={2} background="#C6C6C6" mh={6} />
                  <AppBlock
                    width={24}
                    height={24}
                    style={{ borderRadius: '50%' }}
                    background="#C6C6C6"
                  />
                </AppBlock>
                <AppBlock width={20} />
              </AppBlock>

              <AppBlock>
                <AppBlock alignItems="center">
                  <AppText
                    size={24}
                    weight="700"
                    semiBold
                    color="#554C46"
                    mt={20}
                    mb={10}
                  >
                    {t('register')}
                  </AppText>
                  <AppText size={14} weight="400" color="#554C46">
                    {t('description_signup')}
                  </AppText>
                </AppBlock>

                <AppBlock mt={20}>
                  <AppText color="#554C46" size={16} weight="500" regular>
                    {t('email')}
                  </AppText>
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <AppTextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={t('email')}
                        leftIcon={faEnvelope}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    )}
                  />
                  {errors.email && (
                    <AppText color="red" size={12} mt={4}>
                      {t(errors.email.message || 'email_error')}
                    </AppText>
                  )}
                </AppBlock>

                <AppBlock>
                  <AppText color="#554C46" size={16} weight="500" regular>
                    {t('password')}
                  </AppText>
                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <AppTextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureText
                        placeholder={t('enter_password')}
                        leftIcon={faLock}
                      />
                    )}
                  />
                  {errors.password && (
                    <AppText color="red" size={12} mt={4}>
                      {t(errors.password.message || 'password_error')}
                    </AppText>
                  )}
                </AppBlock>

                <AppBlock>
                  <AppText color="#554C46" size={16} weight="500" regular>
                    {t('confirm_password')}
                  </AppText>
                  <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <AppTextInput
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        secureText
                        placeholder={t('enter_confirm_password')}
                        leftIcon={faLock}
                      />
                    )}
                  />
                  {errors.confirmPassword && (
                    <AppText color="red" size={12} mt={4}>
                      {t(
                        errors.confirmPassword.message ||
                          'confirm_password_error',
                      )}
                    </AppText>
                  )}
                </AppBlock>

                <AppBlock>
                  <AppBlock row alignItems="center">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      color={
                        passwordValidations.hasMinLength
                          ? light.Primary
                          : '#C6C6C6'
                      }
                    />
                    <AppText
                      color={
                        passwordValidations.hasMinLength
                          ? light.Primary
                          : '#554C46'
                      }
                      size={14}
                      weight="400"
                      regular
                      ml={6}
                    >
                      {t('check_password_6_characters')}
                    </AppText>
                  </AppBlock>
                  <AppBlock row alignItems="center">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      color={
                        passwordValidations.hasUppercase
                          ? light.Primary
                          : '#C6C6C6'
                      }
                    />
                    <AppText
                      color={
                        passwordValidations.hasUppercase
                          ? light.Primary
                          : '#554C46'
                      }
                      size={14}
                      weight="400"
                      regular
                      ml={6}
                    >
                      {t('check_password_1_uppercase')}
                    </AppText>
                  </AppBlock>
                  <AppBlock row alignItems="center">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      color={
                        passwordValidations.hasNumber
                          ? light.Primary
                          : '#C6C6C6'
                      }
                    />
                    <AppText
                      color={
                        passwordValidations.hasNumber
                          ? light.Primary
                          : '#554C46'
                      }
                      size={14}
                      weight="400"
                      regular
                      ml={6}
                    >
                      {t('check_password_1_number')}
                    </AppText>
                  </AppBlock>
                </AppBlock>
              </AppBlock>

              <AppBlock
                style={{ width: '100%' }}
                alignItems="center"
                justifyContent="center"
                mt={20}
              >
                <AppButton
                  name={t('get_otp')}
                  textStyle={{
                    fontWeight: '600',
                    fontSize: 16,
                    color: !isValid ? '#C6C6C6' : 'white',
                  }}
                  style={{
                    backgroundColor: !isValid ? '#E0E0E0' : light.Primary,
                  }}
                  onPress={handleSubmit(handleGetOTP)}
                  disabled={!isValid}
                />
              </AppBlock>
            </AppBlock>
          </AppScreenWrapper>
        </ImageBackground>
      </AppBlock>
    </AppBlock>
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
});

export default SignUpScreen;
