import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AppBlock from '../view/AppBlock';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import AppText from '../text/AppText';
import light from '../../theme/light';

const HeaderBack = ({title, iconRight, onPressIconRight}: any) => {
    const navigation = useNavigation();
  return (
    <AppBlock
      row
      alignItems="center"
      style={{ width: '100%' }}
      mb={12}
      justifyContent='space-between'
    >
      <AppBlock row alignItems="center">
        <AppBlock>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} />
          </TouchableOpacity>
        </AppBlock>
        <AppBlock alignItems="center" ml={16}>
          <AppText size={20} weight='600' semiBold>{title}</AppText>
        </AppBlock>
      </AppBlock>
      {iconRight?
        <AppBlock>
          <TouchableOpacity onPress={onPressIconRight}>  
            <FontAwesomeIcon icon={iconRight} size={24} color={light.Primary}/>
          </TouchableOpacity>
        </AppBlock>
      :<AppBlock/>
      }
    </AppBlock>
  );
};

export default HeaderBack;
