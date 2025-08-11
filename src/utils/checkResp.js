import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const useCheckResp = () => {
  const { t } = useTranslation();
  const checkResponse = res => {
    if (typeof res === 'string') {
      return res;
    }
    
    switch (res?.status) {
      case 200:
        return t('200');
      case 401:
        return t('401');
      case 303:
        return t('303');
      case 403:
        return t('403');
      case 400:
        return t('400');
      case 404:
        return t('404');
      case 405:
        return t('405');
      case 406:
        return t('406');
      case 417:
        return t('417');
      case 407:
        return t('407');
      case 408:
        return t('408');
      case 409:
        return t('409');
      case 410:
        return t('410');
      case 411:
        return t('411');
      case 412:
        return t('412');
      case 413:
        return t('413');
      case 414:
        return t('414');
      case 415:
        return t('415');
      case 416:
        return t('416');
      case 422:
        return t('422');
      case 500:
        return t('500');
      case 503:
        return t('503');

      default:
        return 'Something went wrong :(((';
    }
  };
  return { checkResponse };
};
export default useCheckResp;

const styles = StyleSheet.create({});
