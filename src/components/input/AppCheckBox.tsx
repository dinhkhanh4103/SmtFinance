import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'; // Bỏ useState
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import light from '../../theme/light';
import { sizes } from '../../theme/theming';

type AppCheckBoxProps = {
  label?: string;
  onValueChange?: (value: boolean) => void;
  size?: number;
  checked: boolean; // <-- THÊM PROP `checked` VÀO ĐÂY
};
let sizeLabel = 14;
const AppCheckBox = ({
  label = 'Tôi đồng ý điều khoản',
  onValueChange,
  size,
  checked,
}: AppCheckBoxProps) => {
  sizeLabel = size ? size : 14;

  const toggleCheckbox = () => {
    const newValue = !checked;
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <FontAwesomeIcon
        icon={checked ? faSquareCheck : faSquare}
        size={20}
        color={light.Primary}
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
