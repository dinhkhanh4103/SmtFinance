import {StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle, TextStyle} from 'react-native';
import AppText  from '../text/AppText';
import light from '../../theme/light';
import AppIcon from '../icon/AppIcon';
import {appSize} from '../../config/AppConstant';
import React from 'react';

type CustomButtonProps = {
  backgroundColor?: string;
  textColor?: string;
  name: string;
  width?: number;
  heigth?: number;
  onPress?: () => void;
  disable?: boolean;
  textStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
  iconleft?: any;
  iconRight?: any;
  radius?: number;
};

export default function AppButton({
  backgroundColor = light.Primary,
  textColor = 'white',
  name,
  width,
  heigth = 48,
  onPress = () => {},
  disable = false,
  textStyle,
  style,
  iconleft,
  iconRight,
  radius = appSize(8),
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[{width: width ? width : '100%', alignItems: 'center'}]}>
      <View
        style={[
          styles.button,
          {
            backgroundColor: disable ? light.Neutrals400 : backgroundColor,
            width: width ? width : '100%',
            height: heigth,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: radius,
          },
          style,
        ]}>
        {!!iconleft && <AppIcon size={18} icon={iconleft} />}

        <AppText
          style={[
            textStyle,
            {
              color: textColor,
              marginHorizontal: 5,
              textAlign: 'center',
            },
          ]}>
          {name}
        </AppText>

        {!!iconRight && <AppIcon size={20} icon={iconRight} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: light.Primary
  },
});
