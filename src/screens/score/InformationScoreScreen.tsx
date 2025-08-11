import { View, Text, TouchableOpacity, Animated, LayoutAnimation, Platform, UIManager } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import AppSafeAreaView from '../../components/view/AppSafeAreaView';
import AppBlock from '../../components/view/AppBlock';
import HeaderBack from '../../components/header/HeaderBack';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import AppText from '../../components/text/AppText';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp, faCircle } from '@fortawesome/free-solid-svg-icons';

// Cho phép LayoutAnimation trên Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const InformationScoreScreen = () => {
  const { t } = useTranslation();
  const [showDetail1, setShowDetail1] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);

  const toggleDetail = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowDetail1(!showDetail1);
  };

  return (
    <AppSafeAreaView>
      <AppBlock flex style={{ width: '95%' }}>
        <HeaderBack title={t('point_information')} />
        <ScrollView style={{ flex: 1 }}>
          <AppBlock>
            <TouchableOpacity onPress={toggleDetail}>
              <AppBlock row alignItems="center" justifyContent="space-between">
                <AppText size={16} weight="600">Cách điểm tín dụng được tăng</AppText>
                <FontAwesomeIcon icon={showDetail1 ? faChevronUp : faChevronDown} />
              </AppBlock>
            </TouchableOpacity>

            {showDetail1 && (
              <AppBlock mt={12}>
                <AppText>Điểm tín dụng tăng khi bạn:</AppText>
                {[
                  'Cung cấp đầy đủ và chính xác thông tin xác thực',
                  'Tiêu dùng hợp lý',
                  'Sử dụng đa dạng dịch vụ và tuân thủ đúng cam kết',
                  'Thanh toán đầy đủ và đúng hạn các khoản vay',
                ].map((text, index) => (
                  <AppBlock key={index} row alignItems="center" mt={8} ml={8}>
                    <FontAwesomeIcon icon={faCircle} size={6} />
                    <AppText ml={8} size={14} weight="400">{text}</AppText>
                  </AppBlock>
                ))}
              </AppBlock>
            )}
          </AppBlock>
          <AppBlock mt={12}>
            <TouchableOpacity onPress={()=>{
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setShowDetail2(!showDetail2);
            }}>
              <AppBlock row alignItems="center" justifyContent="space-between">
                <AppText size={16} weight="600">Cách điểm tín dụng bị giảm</AppText>
                <FontAwesomeIcon icon={showDetail2 ? faChevronUp : faChevronDown} />
              </AppBlock>
            </TouchableOpacity>

            {showDetail2 && (
              <AppBlock mt={12}>
                <AppText>Điểm tín dụng giảm khi bạn:</AppText>
                {[
                  'Cung cấp đầy đủ và chính xác thông tin xác thực',
                  'Tiêu dùng hợp lý',
                  'Sử dụng đa dạng dịch vụ và tuân thủ đúng cam kết',
                  'Thanh toán đầy đủ và đúng hạn các khoản vay',
                ].map((text, index) => (
                  <AppBlock key={index} row alignItems="center" mt={8} ml={8}>
                    <FontAwesomeIcon icon={faCircle} size={6} />
                    <AppText ml={8} size={14} weight="400">{text}</AppText>
                  </AppBlock>
                ))}
              </AppBlock>
            )}
          </AppBlock>
        </ScrollView>
      </AppBlock>
    </AppSafeAreaView>
  );
};

export default InformationScoreScreen;
