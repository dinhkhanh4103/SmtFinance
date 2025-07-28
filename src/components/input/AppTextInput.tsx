import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import light from '../../theme/light';

interface AppTextInputProps extends TextInputProps {
  leftIcon?: any;
  rightIcon?: any;
  secureText?: boolean;
  onPressRightIcon?: () => void;
  editable?: any,
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  leftIcon,
  rightIcon,
  secureText = false,
  placeholder,
  onPressRightIcon,
  editable = true,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(!secureText);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocused ? light.Primary : '#8C8C8C' },
      ]}
    >
      {leftIcon && (
        <FontAwesomeIcon
          icon={leftIcon}
          style={styles.leftIcon}
          size={20}
          color={isFocused ? light.Primary : '#8C8C8C'}
        />
      )}

      <TextInput
        style={styles.input}
        secureTextEntry={!showPassword}
        placeholder={placeholder}
        placeholderTextColor="#8C8C8C"
        editable={editable}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {secureText ? (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            size={20}
            style={styles.rightIcon}
            color={isFocused ? light.Primary : '#8C8C8C'}
          />
        </TouchableOpacity>
      ) : (
        rightIcon && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <FontAwesomeIcon
              icon={rightIcon}
              size={20}
              style={styles.rightIcon}
              color={isFocused ? light.Primary : '#8C8C8C'}
            />
          </TouchableOpacity>
        )
      )}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 52,
    backgroundColor: 'white',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#8C8C8C',
    paddingVertical: 0,
    fontFamily: 'BeVietnamPro-Regular',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
});
