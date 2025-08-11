import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppBlock from '../../../components/view/AppBlock';
import AppText from '../../../components/text/AppText';
import LinearGradient from 'react-native-linear-gradient';
import { useAuthStore } from '../../../store/authStore';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import AppConstant from '../../../config/AppConstant';
const HomeHeader = () => {
  const navigation = useNavigation();
  const STATUS_BAR_HEIGHT =
    Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 44;
  const user = useAuthStore(state => state.user);
  const { t } = useTranslation();
  return (
    <LinearGradient
      colors={['#DFAE66', '#FFFFFF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        width: '100%',
        height: 134,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
      }}
    >
      <AppBlock
        mt={AppConstant.TOP}
        alignItems="center"
        justifyContent="center"
      >
        <AppBlock
          row
          alignItems="center"
          justifyContent="space-between"
          style={{ width: '95%', height: 60 }}
          radius={16}
          border={1}
          borderColor="#C6C6C6"
          background="#FFFFFF66"
          ph={12}
          pv={8}
        >
          <TouchableOpacity>
            <AppBlock row style={{}}>
              <AppBlock style={{}}>
                <Image
                  source={require('../../../../assets/images/avatar.jpg')}
                  resizeMode="cover"
                  style={{ width: 48, height: 48, borderRadius: 24 }}
                />
              </AppBlock>
              <AppBlock justifyContent="center" ml={8}>
                <AppText size={16} weight="600" semiBold>
                  {'user.name'}
                </AppText>
                <AppText size={12} weight="400">
                  {t('welcome_smtFinance')}
                </AppText>
              </AppBlock>
            </AppBlock>
          </TouchableOpacity>
          <AppBlock justifyContent="center" alignItems="center">
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchScreen')}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size={24} />
            </TouchableOpacity>
          </AppBlock>
        </AppBlock>
      </AppBlock>
    </LinearGradient>
  );
};

export default HomeHeader;
