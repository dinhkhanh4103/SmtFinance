import {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

import light from '../../theme/light';
import {sizes} from '../../theme/theming';
import {appSize} from '../../config/AppConstant';
import {handleBorder, handleMargin, handlePadding} from '../helpers/utilHelper';
import useTheme from '../hooks/useTheme';

export interface Props extends ViewProps {
  children?: ReactNode;
  center?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  margin?: boolean | number | number[];
  padding?: boolean | number | number[];
  shadow?: boolean;
  row?: boolean;
  wrap?: boolean;
  column?: boolean;
  space?: 'between' | 'around' | 'evenly';
  border?: boolean | number | number[];
  flex?: number | boolean;
  background?: string;
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
  width?: number;
  height?: number;
  radius?: number;
  alignSelf?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  overflow?: 'hidden';
  borderColor?: string;
}

export default function (props: Props) {
  // useEffect(() => {
  //   getConfig();
  // }, []);
  const {theme} = useTheme();
  const colors = light;
  const {
    margin,
    padding,
    center,
    middle,
    top,
    bottom,
    left,
    right,
    shadow,
    row,
    column,
    space,
    border,
    flex,
    style,
    background,
    width,
    height,
    radius,
    wrap,
  } = props;

  const viewStyle: StyleProp<ViewStyle> = [
    margin ? (typeof margin !== 'boolean' ? handleMargin(margin) : styles.margin) : undefined,
    padding ? (typeof padding !== 'boolean' ? handlePadding(padding) : styles.padding) : undefined,
    border
      ? typeof border !== 'boolean'
        ? handleBorder(border, props.borderColor || colors.border)
        : styles.border
      : undefined,

    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    left && styles.left,
    right && styles.right,
    bottom && styles.bottom,
    shadow && styles.shadow,
    row && styles.row,
    wrap && styles.wrap,
    column && styles.column,
    space && {justifyContent: `space-${space}`},
    flex ? (typeof flex === 'number' ? {flex} : {flex: 1}) : undefined,
    width ? {width: appSize(width)} : undefined,
    height ? {height: appSize(height)} : undefined,
    radius ? {borderRadius: appSize(radius)} : undefined,
    (background && {backgroundColor: background}) || undefined,
    props.ph !== undefined && {paddingHorizontal: appSize(props.ph)},
    props.pv !== undefined && {paddingVertical: appSize(props.pv)},
    props.pt !== undefined && {paddingTop: appSize(props.pt)},
    props.pr !== undefined && {paddingRight: appSize(props.pr)},
    props.pl !== undefined && {paddingLeft: appSize(props.pl)},
    props.pb !== undefined && {paddingBottom: appSize(props.pb)},
    props.mh !== undefined && {marginHorizontal: appSize(props.mh)},
    props.mv !== undefined && {marginVertical: appSize(props.mv)},
    props.mt !== undefined && {marginTop: appSize(props.mt)},
    props.mr !== undefined && {marginRight: appSize(props.mr)},
    props.ml !== undefined && {marginLeft: appSize(props.ml)},
    props.mb !== undefined && {marginBottom: appSize(props.mb)},
    props.alignSelf !== undefined && {alignSelf: props.alignSelf},
    props.alignItems !== undefined && {alignItems: props.alignItems},
    props.justifyContent !== undefined && {
      justifyContent: props.justifyContent,
    },
    props.overflow !== undefined && {overflow: props.overflow},
    style,
  ];
  const tmpProps = {
    props,
    ...{margin: 0, padding: 0, border: 0},
  };
  return (
    <View {...tmpProps} style={viewStyle}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
  column: {flexDirection: 'column'},
  left: {
    justifyContent: 'flex-start',
  },
  margin: {
    margin: sizes.padding,
  },
  middle: {
    justifyContent: 'center',
  },
  padding: {
    padding: sizes.padding,
  },
  right: {
    justifyContent: 'flex-end',
  },
  row: {flexDirection: 'row'},
  shadow: {
    elevation: 2,
    shadowColor: light.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 13,
  },
  top: {
    justifyContent: 'flex-start',
  },
  wrap: {
    flexWrap: 'wrap',
  },
});

export const keyExtractor = (item: any, index: any) => index.toString();
