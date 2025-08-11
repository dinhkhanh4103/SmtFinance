import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import AppBlock from '../../components/view/AppBlock';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faMobileScreen,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';
import AppScreenWrapper from '../../components/view/AppScreenWrapper';
import light from '../../theme/light';
import AppText from '../../components/text/AppText';
import { useTranslation } from 'react-i18next';
import AppTextInput from '../../components/input/AppTextInput';
import { faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons';
import AppButton from '../../components/button/AppButton';
import DatePickerInput from '../../components/input/DatePickerInput';
import DropDown from '../../components/input/DropDown';
import AppModal from '../../components/view/AppModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppConstant from '../../config/AppConstant';
import { useAddInfo } from '../../api/auth/auth';
import DataUtils from '../../utils/DataUtils';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  showFlashMessageError,
  showFlashMessageSuccess,
} from '../../helpers/messageHelper';
import useCheckResp from '../../utils/checkResp';

const { width, height } = Dimensions.get('window');
const EnterInformationScreen = (props: any) => {
  const { checkResponse } = useCheckResp();
  const id = props.route.params;
  const navigation = props.navigation;
  const { t } = useTranslation();
  const [gender, setGender] = React.useState<string>('');
  const [showModal, setShowModal] = React.useState(false);
  const { mutate: addInfo, isPending } = useAddInfo();

  const validationSchema = yup.object().shape({
    full_name: yup.string().required('full_name_required'),
    date_of_birth: yup.string().required('date_of_birth_required'),
    gender: yup.string().required('gender_required'),
    referal_code: yup.string(),
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      full_name: '',
      date_of_birth: '',
      gender: '',
      referal_code: '',
    },
  });
  function handleComplete(data: any) {
    addInfo(
      { ...data, id: id },
      {
        onSuccess: succ => {
          if (DataUtils.checkSuccessfully(succ)) {
            __DEV__ && console.log(JSON.stringify(succ));
            showFlashMessageSuccess(checkResponse(succ));
          } else {
            __DEV__ && console.log(JSON.stringify(succ));
            showFlashMessageError(checkResponse(succ));
          }
        },
        onError: error => {
          __DEV__ && console.log('Add Info err', error);
          showFlashMessageError(checkResponse(error));
        },
      },
    );
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
              <AppBlock>
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
                  </AppBlock>
                  <AppBlock width={20} />
                </AppBlock>

                <AppBlock>
                  <AppBlock alignItems="center" mt={50}>
                    <AppText
                      size={24}
                      weight="700"
                      semiBold
                      color="#122457"
                      mt={20}
                      mb={10}
                    >
                      {t('enter_information')}
                    </AppText>
                    <AppText size={14} weight="400" color="#122457">
                      {t('enter_information_description')}
                    </AppText>
                  </AppBlock>
                  <AppBlock mt={20}>
                    <Controller
                      control={control}
                      name="full_name"
                      render={({ field: { onChange, onBlur, value } }) => (
                        <AppTextInput
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          placeholder={t('enter_full_name')}
                          leftIcon={faUser}
                        />
                      )}
                    />
                    {errors.full_name && (
                      <AppText color="red" size={12} mb={4}>
                        {t(errors.full_name.message)}
                      </AppText>
                    )}
                  </AppBlock>
                  <AppBlock>
                    <AppText color="#554C46" size={16} weight="500" regular>
                      {t('date_of_birth')}
                    </AppText>
                    <Controller
                      control={control}
                      name="date_of_birth"
                      render={({ field: { onChange, value } }) => (
                        <DatePickerInput value={value} onChange={onChange} />
                      )}
                    />
                    {errors.date_of_birth && (
                      <AppText color="red" size={12} mb={4}>
                        {t(errors.date_of_birth.message)}
                      </AppText>
                    )}
                  </AppBlock>
                  <AppBlock>
                    <AppText color="#554C46" size={16} weight="500" regular>
                      {t('gender')}
                    </AppText>
                    <Controller
                      control={control}
                      name="gender"
                      render={({ field: { onChange, value } }) => (
                        <DropDown
                          iconLeft={faVenusMars}
                          placeholder={t('enter_gender')}
                          data={[
                            { label: t('male'), value: 'male' },
                            { label: t('female'), value: 'female' },
                            { label: t('other'), value: 'other' },
                          ]}
                          value={value}
                          onChange={onChange}
                        />
                      )}
                    />
                    {errors.gender && (
                      <AppText color="red" size={12} mb={4}>
                        {t(errors.gender.message)}
                      </AppText>
                    )}
                  </AppBlock>
                  <AppBlock>
                    <AppText color="#554C46" size={16} weight="500" regular>
                      {t('referal_code')}
                    </AppText>
                    <Controller
                      control={control}
                      name="referal_code"
                      render={({ field: { onChange, onBlur, value } }) => (
                        <AppTextInput
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          placeholder={t('enter_referal_code')}
                          leftIcon={faMobileScreen}
                          rightIcon={faCircleQuestion}
                          onPressRightIcon={() => setShowModal(true)}
                        />
                      )}
                    />
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

              <AppBlock
                style={{ width: '100%' }}
                alignItems="center"
                justifyContent="center"
                mt={20}
              >
                <AppButton
                  name={t('complete')}
                  textStyle={{ fontWeight: '600', fontSize: 16 }}
                  onPress={handleSubmit(handleComplete)}
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
});
export default EnterInformationScreen;
