import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import light from '../../theme/light';
import { sizes } from '../../theme/theming';

type AppCheckBoxProps = {
  label?: string;
  onValueChange?: (value: boolean) => void;
  size?: number;
};
let sizeLabel = 14;
const AppCheckBox = ({ label = 'Tôi đồng ý điều khoản', onValueChange, size }: AppCheckBoxProps) => {
    sizeLabel = size ? size : 14;
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <FontAwesomeIcon
        icon={checked ? faSquareCheck  : faSquare}
        size={20}
        color={light.Primary}
        // style={{ backgroundColor: 'white'}}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
  },
  label: {
    marginLeft: 10,
    fontSize: sizeLabel,
    color: '#122457',
  },
});

export default AppCheckBox;
