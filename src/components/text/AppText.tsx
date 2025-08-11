/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {StyleSheet, TextProps, StyleProp, TextStyle, Text} from 'react-native';
import {appSize} from '../../config/AppConstant';
import {fonts, sizes} from '../../theme/theming';
import light from '../../theme/light';
import useTheme from '../hooks/useTheme';
import {styleText} from '../../theme/styleText';

type TextProp = {
  FromText?: keyof typeof styleText;
  italic?: boolean;
  size?: number;
  title?: boolean | null;
  subheading?: boolean;
  headline?: boolean;
  paragraph?: boolean;
  bold?: boolean;
  regular?: boolean;
  light?: boolean;
  thin?: boolean;
  children: string | number | ReactNode;
  numberOfLines?: number;
  note?: boolean;
  center?: boolean;
  right?: boolean;
  primary?: boolean;
  secondary?: boolean;
  white?: boolean;
  black?: boolean;
  height?: number;
  justify?: boolean;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  spacing?: number;
  color?: string;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  semiBold?: boolean;
  ph?: number;
  pv?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  mh?: number;
  mv?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  maxWidth?: number;
} & TextProps;

export default function AppText(props: TextProp) {
  const {theme} = useTheme();
  const colors = light;

  const {
    size,
    primary,
    white,
    black,
    title,
    paragraph,
    note,
    center,
    right,
    bold,
    regular,
    thin,
    height,
    style,
    color,
    spacing,
    transform,
    semiBold,
    secondary,
    italic,
    justify,
    FromText,
  } = props;

  const textStyle: StyleProp<TextStyle> = [
    styles.text,
    {color: theme.textColor},
    (color && {color: color}) || {color: theme.textColor},
    white && styles.white,
    black && styles.black,
    primary && {color: light.primary},
    secondary && {color: colors.backdrop},
    title && styles.title,
    paragraph && styles.paragraph,
    note && {color: colors.placeholder},
    center && styles.center,
    justify && styles.justify,
    right && styles.right,
    (semiBold && {
      fontFamily: fonts.semiBold,
    }) ||
      undefined,
    bold && {fontFamily: fonts.medium},
    regular && {fontFamily: fonts.regular},
    props.light && {fontFamily: fonts.light},
    thin && {fontFamily: fonts.thin},
    (height && {lineHeight: appSize(height)}) || undefined,
    (spacing && {letterSpacing: spacing}) || undefined,
    (transform && {textTransform: transform}) || undefined,
    (size && {fontSize: size}) || {fontSize: 14},
    (props.weight && {fontWeight: props.weight}) || undefined,
    props.ph !== undefined && {paddingHorizontal: appSize(props.ph)},
    props.pv !== undefined && {paddingVertical: appSize(props.pv)},
    props.pt !== undefined && {paddingTop: appSize(props.pt)},
    props.pr !== undefined && {paddingRight: appSize(props.pr)},
    props.pl !== undefined && {paddingLeft: appSize(props.pl)},
    props.pb !== undefined && {paddingBottom: appSize(props.pb)},
    props.mh !== undefined && {paddingHorizontal: appSize(props.mh)},
    props.mv !== undefined && {paddingVertical: appSize(props.mv)},
    props.mt !== undefined && {paddingTop: appSize(props.mt)},
    props.mr !== undefined && {paddingRight: appSize(props.mr)},
    props.ml !== undefined && {paddingLeft: appSize(props.ml)},
    props.mb !== undefined && {paddingBottom: appSize(props.mb)},
    props.maxWidth !== undefined && {maxWidth: appSize(props.maxWidth)},
    style,
  ];

  let fontFamily: TextStyle = {};
  if (StyleSheet.flatten(textStyle).fontWeight) {
    if (!italic) {
      switch (StyleSheet.flatten(textStyle).fontWeight) {
        case '100':
          fontFamily = {fontFamily: fonts.thin};
          break;
        case '200':
          fontFamily = {fontFamily: fonts.extraLight};
          break;
        case '300':
          fontFamily = {fontFamily: fonts.light};
          break;
        case '400':
        case 'normal':
          fontFamily = {fontFamily: fonts.regular};
          break;
        case '500':
          fontFamily = {fontFamily: fonts.medium};
          break;
        case '600':
          fontFamily = {fontFamily: fonts.semiBold};
          break;
        case '700':
        case 'bold':
          fontFamily = {fontFamily: fonts.bold};
          break;
        // case '800':
        //   fontFamily = {fontFamily: fonts.extraBold}
        //   break
        // case '900':
        //   fontFamily = {fontFamily: fonts.black}
        //   break
      }
    } else {
      switch (StyleSheet.flatten(textStyle).fontWeight) {
        // case '100':
        //   fontFamily = {fontFamily: fonts.thinItalic}
        //   break
        case '200':
          fontFamily = {fontFamily: fonts.extraLightItalic};
          break;
        case '300':
          fontFamily = {fontFamily: fonts.lightItalic};
          break;
        case '400':
        case 'normal':
          fontFamily = {fontFamily: fonts.regular};
          break;
        case '500':
          fontFamily = {fontFamily: fonts.mediumItalic};
          break;
        case '600':
          fontFamily = {fontFamily: fonts.boldItalic};
          break;
        case '700':
        case 'bold':
          fontFamily = {fontFamily: fonts.boldItalic};
          break;
        // case '800':
        //   fontFamily = {fontFamily: fonts.extraBoldItalic}
        //   break
        // case '900':
        //   fontFamily = {fontFamily: fonts.blackItalic}
        //   break
      }
    }
  }

  return (
    <Text allowFontScaling={false} {...props} style={[...textStyle, FromText && styleText[FromText]]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  black: {
    color: light.black,
  },
  primary: {
    color: light.primary,
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
  paragraph: {
    fontSize: sizes.paragraph,
  },
  right: {
    textAlign: 'right',
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: sizes.font,
    // color: light.black400,
  },
  title: {
    fontSize: sizes.title,
  },
  white: {
    color: light.white,
  },
});
