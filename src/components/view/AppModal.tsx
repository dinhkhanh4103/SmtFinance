import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  highlightText?: string;
  buttonText?: string;
}

const AppModal: React.FC<AppModalProps> = ({
  visible,
  onClose,
  title = 'Thông báo',
  message = '',
  highlightText = '',
  buttonText = 'Đã hiểu',
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.content}>
            {message}{' '}
            {highlightText ? <Text style={styles.highlight}>{highlightText}</Text> : null}
          </Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.85,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#554C46',
    marginBottom: 12,
  },
  content: {
    fontSize: 14,
    color: '#554C46',
    lineHeight: 22,
    marginBottom: 24,
  },
  highlight: {
    color: '#D18800',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#D18800',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
