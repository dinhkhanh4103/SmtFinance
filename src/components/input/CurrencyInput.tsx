import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import light from '../../theme/light';


const CurrencyInput = ({
  value,
  onChangeText,
  placeholder = 'Nhập số tiền',
  unit = 'VNĐ',
  editable = true,
}: any) => {
  // Hàm format số theo dấu chấm
  const formatNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleChange = (text: string) => {
    const formatted = formatNumber(text);
    onChangeText(formatted);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input]}
        keyboardType="numeric"
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        editable={editable}
        placeholderTextColor="#aaa"
      />
      <View style={styles.separator} />
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 52,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    color: light.Primary,
    fontWeight: '600',
    fontSize: 16,
  },
  inputDisabled: {
    color: '#aaa',
  },
  separator: {
    width: 1,
    height: '80%',
    backgroundColor: '#ccc',
    marginHorizontal: 8,
  },
  unit: {
    color: '#888',
    fontSize: 14,
  },
});

export default CurrencyInput;
