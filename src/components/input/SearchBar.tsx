import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next'; // Để sử dụng i18n
import Ionicons from 'react-native-vector-icons/Ionicons'; // Cần cài đặt thư viện này
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import light from '../../theme/light';

// Đảm bảo bạn đã cài đặt react-native-vector-icons:
// npm install react-native-vector-icons
// npx react-native link react-native-vector-icons (cho RN < 0.60)
// Hoặc theo hướng dẫn cài đặt thủ công cho Android/iOS nếu cần

const SearchBar = ({ value, onSearch, placeholder, style } : any) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.container, style]}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} color={light.Primary}/>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder} // Sử dụng placeholder truyền vào hoặc từ i18n
        placeholderTextColor="#8C8C8C"
        onChangeText={onSearch} // Gọi hàm onSearch khi text thay đổi
      />
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

export default SearchBar;