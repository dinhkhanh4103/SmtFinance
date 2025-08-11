import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownSmallIcon = ({ width = 12, height = 7, color = '#8C8C8C' }) => (
  <Svg width={width} height={height} viewBox="0 0 12 7" fill="none">
    <Path d="M12 0.5L6 6.5L0 0.5H12Z" fill={color} />
  </Svg>
);

export default ArrowDownSmallIcon;
