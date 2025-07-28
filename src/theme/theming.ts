import {StatusBar, Platform} from 'react-native';

import {appSize} from '../config/AppConstant';

export const sizes = {
  font: 14,
  radius: appSize(8),
  padding: appSize(16),

  icon: appSize(24),
  input: appSize(14),

  buttonHeight: appSize(50),
  buttonText: 16,

  //font size
  title: 20,
  headline: 24,
  subheading: 16,
  paragraph: appSize(35),
  caption: 12,
};

export const fonts = {
  regular: 'BeVietnamPro-Regular',
  bold: 'BeVietnamPro-Bold',
  boldItalic: 'BeVietnamPro-BoldItalic',
  italic: 'BeVietnamPro-Italic',
  light: 'BeVietnamPro-Light',
  lightItalic: 'BeVietnamPro-LightItalic',
  medium: 'BeVietnamPro-Medium',
  mediumItalic: 'BeVietnamPro-MediumItalic',
  semiBold: 'BeVietnamPro-SemiBold',
  semiBoldItalic: 'BeVietnamPro-SemiBoldItalic',
  extraLight: 'BeVietnamPro-ExtraLight',
  extraLightItalic: 'BeVietnamPro-ExtraLightItalic',
  thin: 'BeVietnamPro-Light', // TEMP
};

export function handlerStatusBar() {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('#000000');
  }
  StatusBar.setBarStyle('light-content');
}
