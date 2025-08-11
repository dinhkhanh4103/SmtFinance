import {SvgXml} from 'react-native-svg';
import Colors from '../../../assets/colors/Colors';
import React from 'react';

interface AppIconProps {
  icon: string;
  iconColor?: string;
  size?: number;
}

const AppIcon: React.FC<AppIconProps> = ({icon, iconColor = Colors.black, size}) => {
  const modifiedColor = icon.replaceAll('fill="black"', 'fill="' + iconColor + '"');

  return <SvgXml xml={modifiedColor} width={size} height={size} />;
};

export default AppIcon;
