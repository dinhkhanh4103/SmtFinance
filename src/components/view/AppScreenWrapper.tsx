// src/components/common/AppScreenWrapper.tsx
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
  ViewStyle,
  ScrollViewProps,
  SafeAreaView,
} from 'react-native';

interface Props extends ScrollViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  scrollContentStyle?: ViewStyle;
}

const AppScreenWrapper: React.FC<Props> = ({ children, style, scrollContentStyle, ...rest }) => {
  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.flex, style]}
    > 
      <ScrollView
        contentContainerStyle={[styles.scrollContent, scrollContentStyle]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        {...rest}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AppScreenWrapper;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '95%',
  },
  scrollContent: {
    flexGrow: 1,
  },
});
