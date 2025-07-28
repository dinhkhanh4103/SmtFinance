import React from 'react';
import { Image, View } from 'react-native';
import Svg, { Circle, Line, Path, Text as SvgText } from 'react-native-svg';
import AppBlock from '../../../components/view/AppBlock';

interface RadarChartProps {
  size?: number;
  labels: string[];
  data: number[]; // [0-1]
  maxValue: number;
  levels?: number;
}

const RadarChartCircular: React.FC<RadarChartProps> = ({
  size = 300,
  labels,
  data,
  maxValue,
  levels = 4,
}) => {
  const center = size / 2;
  const radius = center - 40;
  const angleStep = (2 * Math.PI) / labels.length;

 const getCoord = (value: number, index: number, r = radius) => {
  const angle = angleStep * index - Math.PI / 2;
  return {
    x: center + r * value * Math.cos(angle),
    y: center + r * value * Math.sin(angle),
  };
};

  const dataPoints = data.map((v, i) => getCoord(v / maxValue, i));
  const buildPath = (points: { x: number; y: number }[]) => {
    return points.reduce(
      (path, point, i) =>
        path +
        `${i === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)} `,
      ''
    ) + 'Z';
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width={size} height={size}>
        {/* Vẽ vòng tròn đồng tâm */}
        {[...Array(levels)].map((_, i) => {
          const r = radius * ((i + 1) / levels);
          return (
            <Circle
              key={`circle-${i}`}
              cx={center}
              cy={center}
              r={r-20}
              stroke="#F4F4F4"
              strokeWidth={1}
              fill="none"
            />
          );
        })}

        {/* Vẽ trục */}
        {labels.map((_, i) => {
          const { x, y } = getCoord(1, i);
          return (
            <Line
              key={`axis-${i}`}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#cd7a00"
              strokeWidth={1}
            />
          );
        })}

        {/* Vùng dữ liệu */}
        <Path
          d={buildPath(dataPoints)}
          fill="rgba(234,248,255,0.5)"
          stroke="#cd7a00"
          strokeWidth={2}
        />

      </Svg>
    </View>
  );
};

export default RadarChartCircular;
