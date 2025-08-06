import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  Animated,
  PanResponder,
  Pressable,
} from 'react-native';

const { height } = Dimensions.get('window');

const CustomBottomSheet = ({ visible, onClose }) => {
  const translateY = useRef(new Animated.Value(height)).current;
  const lastGestureDy = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dy > 10; // bắt gesture nếu kéo xuống
      },
      onPanResponderMove: (_, gestureState) => {
        const dy = gestureState.dy;
        if (dy > 0) {
          translateY.setValue(dy);
          lastGestureDy.current = dy;
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 120) {
          // nếu kéo xuống đủ xa thì đóng
          closeSheet();
        } else {
          // nếu không đủ thì bật lại vị trí cũ
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const openSheet = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  useEffect(() => {
    if (visible) openSheet();
    else closeSheet();
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <Pressable style={styles.overlay} onPress={closeSheet} />
      <Animated.View
        style={[
          styles.sheet,
          {
            transform: [{ translateY }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.dragIndicator} />
        <Text style={styles.title}>🧾 Đây là Bottom Sheet có vuốt</Text>
        <Text>Vuốt xuống để đóng lại</Text>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000066',
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    minHeight: 250,
  },
  dragIndicator: {
    width: 50,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default CustomBottomSheet;
