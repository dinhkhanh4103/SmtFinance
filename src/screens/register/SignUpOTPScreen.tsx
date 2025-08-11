import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';
import AppBlock from '../../components/view/AppBlock';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faLocation,
  faLock,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import AppScreenWrapper from '../../components/view/AppScreenWrapper';
import light from '../../theme/light';
import AppText from '../../components/text/AppText';
import { useTranslation } from 'react-i18next';
import AppTextInput from '../../components/input/AppTextInput';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import AppButton from '../../components/button/AppButton';
import OTPInput from '../../components/input/OTPInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppConstant from '../../config/AppConstant';
import { sendVerify } from '../../api/auth/auth';
import DataUtils from '../../utils/DataUtils';
import {
  showFlashMessageError,
  showFlashMessageSuccess,
} from '../../helpers/messageHelper';
import useCheckResp from '../../utils/checkResp';
const { width, height } = Dimensions.get('window');
const EnterOTPScreen = props => {
  const { email } = props.route.params;
  const navigation = props.navigation;
  const { mutate: ResendOtp, isSuccess, isError } = sendVerify();
  const { checkResponse } = useCheckResp();
  const { t } = useTranslation();

  useEffect(() => {
    if (email) {
      ResendOtp(email, {
        onSuccess: () => {},
        onError: error => {},
      });
    }
  }, [email]);
  const handleResendOTP = () => {
    __DEV__ && console.log('Resend OTP Success:', email);
    if (email) {
      ResendOtp(email, {
        onSuccess: succ => {
          // Alert.alert('sentEmail');
          __DEV__ && console.log('Resend OTP Success:', succ);
          if (DataUtils.checkSuccessfully(succ)) {
            showFlashMessageSuccess(checkResponse(succ));
          } else {
            showFlashMessageError(checkResponse(succ));
          }
        },
        onError: error => {
          __DEV__ && console.log('Resend OTP errr:', error);
          showFlashMessageError(checkResponse(succ));
        },
      });
    }
  };
  function handleEnterOTP() {
    navigation.navigate('EnterInformationScreen', { id: 500 });
  }
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
                  <AppBlock
                    width={44}
                    height={2}
                    background={light.Primary}
                    mh={6}
                  />
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
                    {t('enter_otp')}
                  </AppText>
                  <AppText size={14} weight="400" color="#554C46">
                    {t('enter_otp_description')}
                  </AppText>
                </AppBlock>
                <AppBlock mt={20}>
                  <OTPInput />
                  <AppBlock justifyContent="flex-end" row alignItems="center">
                    <TouchableOpacity onPress={() => handleResendOTP()}>
                      <AppText
                        color="#554C46"
                        size={14}
                        weight="700"
                        regular
                        mt={20}
                      >
                        {t('resend_otp')}
                      </AppText>
                    </TouchableOpacity>
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
                  name={t('confirm')}
                  textStyle={{ fontWeight: '600', fontSize: 16 }}
                  onPress={handleEnterOTP}
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
export default EnterOTPScreen;
