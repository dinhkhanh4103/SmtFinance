import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker, { useDefaultStyles } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import light from '../../theme/light';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

const DatePickerInput = () => {
  const [selected, setSelected] = useState<Date>();
  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const defaultStyles = useDefaultStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
          setIsFocused(true);
        }}
        style={[
          styles.inputBox,
          isFocused && { borderColor: light.Primary },
        ]}
        activeOpacity={0.8}
      >
        {/* Icon bên trái */}
        <FontAwesomeIcon
          icon={faCalendar}
          size={20}
          style={[
            styles.leftIcon,
            isFocused && { color: light.Primary },
          ]}
        />

        {/* Ngày hiển thị */}
        <Text style={styles.inputText}>
          {selected ? dayjs(selected).format('DD/MM/YYYY') : 'Chọn ngày'}
        </Text>

        {/* Icon bên phải */}
        <FontAwesomeIcon
          icon={faChevronDown}
          size={20}
          style={[
            styles.rightIcon,
            isFocused && { color: light.Primary },
          ]}
        />
      </TouchableOpacity>

      {/* Picker hiển thị */}
      {show && (
        <View style={styles.pickerContainer}>
          <DatePicker
            date={selected}
            onChange={({ date }) => {
              setSelected(date);
              setShow(false);
              setIsFocused(false);
            }}
            mode="single"
            styles={{
              ...defaultStyles,
              today: {
                borderColor: light.Primary,
                borderWidth: 1,
                borderRadius: '50%',
              },
              selected: {
                backgroundColor: light.Primary,
                borderRadius: '50%',
              },
              selected_label: { color: 'white' },
            }}
          />
        </View>
      )}
    </View>
  );
};

export default DatePickerInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8C8C8C',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: '#8C8C8C',
    marginHorizontal: 8,
  },
  leftIcon: {
    color: '#8C8C8C',
  },
  rightIcon: {
    color: '#8C8C8C',
  },
  pickerContainer: {
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
