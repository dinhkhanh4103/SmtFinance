import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from 'react-native-gesture-handler';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import light from '../../theme/light';
import { useTranslation } from 'react-i18next';

const SearchIconRight = ({ value, onSearch, placeholder, style } : any) => {
  return (
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder} // Sử dụng placeholder truyền vào hoặc từ i18n
          placeholderTextColor="#8C8C8C"
          onChangeText={onSearch} // Gọi hàm onSearch khi text thay đổi
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} color={light.Primary}/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FBF5EE', // Màu nền gần giống trong ảnh
      borderRadius: 50, // Tạo hình dạng viên thuốc
      paddingHorizontal: 15,
      height: 48, // Chiều cao của SearchBar
      marginVertical: 10,
      width: '100%', // Chiều rộng mặc định
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1, // Để TextInput chiếm hết không gian còn lại
      height: '100%', // Để TextInput cao bằng container
      fontSize: 16,
      color: '#333',
      // Bỏ padding mặc định của TextInput trên Android
      paddingVertical: 0, 
    },
  });
export default SearchIconRight