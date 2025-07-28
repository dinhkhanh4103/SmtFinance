import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import light from '../../../theme/light';

const formatMoney = (value:any) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const RangeSlider = ({
  value,
  onValueChange,
  minimumValue = 1000000,
  maximumValue = 1000000000,
  step = 1000000,
  unit = 'VNĐ',
}:any) => {
  return (
    <View style={styles.wrapper}>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#D88C28"
        maximumTrackTintColor="#ccc"
        thumbTintColor={light.Primary}
        step={step}
      />
      <View style={styles.labelRow}>
        <Text style={styles.label}>{formatMoney(minimumValue)} {unit}</Text>
        <Text style={styles.label}>{formatMoney(maximumValue)} {unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // paddingVertical: 8,
    // paddingHorizontal: 4,
    width:'100%'
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -6,
  },
  label: {
    color: '#888',
    fontSize: 13,
  },
  
});

export default RangeSlider;
