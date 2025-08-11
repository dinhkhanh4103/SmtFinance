// Tệp: CustomCameraScreen.tsx

import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Alert, Platform, PermissionsAndroid } from 'react-native';
import { Camera, useCameraDevice, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import AppBlock from '../../../components/view/AppBlock';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CustomCameraScreen = ({ route, navigation }: any) => {
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const isFocused = useIsFocused();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs permission to access your camera',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          return false;
        }
      }
      return true; // iOS tự xin trong Info.plist
    };
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        // const status = await Camera.requestCameraPermission();
        const permission = await requestCameraPermission();
        setHasPermission(permission);
      } catch (error) {
        console.error('Camera permission error:', error);
        Alert.alert('Lỗi', 'Không thể cấp quyền camera');
      }
    })();
    return () => {
    isMounted = false;
  };
  }, []);

  const takePhoto = async () => {
    try {
      if (!camera.current) return;
      const photo = await camera.current.takePhoto({ flash: 'off' });

      // Trả uri ảnh về qua callback
      route.params?.onTakePhoto?.(`file://${photo.path}`);
      navigation.goBack();
    } catch (error) {
      console.error('Lỗi khi chụp ảnh:', error);
      Alert.alert('Lỗi', 'Không thể chụp ảnh');
    }
  };

  if (hasPermission === null || !device) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
        <Text style={{ color: 'white', marginTop: 10 }}>Đang tải camera...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Ứng dụng cần quyền truy cập camera để sử dụng chức năng này.
        </Text>
      </View>
    );
  }

  return (
    <AppBlock flex alignItems='center' justifyContent='center' background='#000'>
    {isFocused && (
      <Camera
        ref={camera}
        style={{width:'90%', height:'30%'}}
        device={device}
        isActive={true}
        photo={true}
      />
    )}

    {/* Khung căn chỉnh CCCD */}
    <View style={styles.frameContainer}>
      <View style={styles.frameBox} />
    </View>

    <View style={styles.overlay}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <FontAwesomeIcon icon={faXmark} color='white' size={30}/>
        </TouchableOpacity>
      <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
        <AppBlock width={50} height={50} radius={25} background='white' alignItems='center' justifyContent='center'>
            <AppBlock width={44} height={44} radius={22} border={4}/>
        </AppBlock>
      </TouchableOpacity>
      <AppBlock style={{width:30}}/>
    </View>
  </AppBlock>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 40,
    width: '90%',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  captureButton: {
    backgroundColor: '#00000088',
    padding: 16,
    borderRadius: 50,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  frameContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  frameBox: {
    width: 300, // tùy chỉnh theo kích thước CCCD
    height: 190,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
});

export default CustomCameraScreen;
