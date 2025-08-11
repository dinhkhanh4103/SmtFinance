import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import light from '../../../theme/light';

const DistanceModal = ({ visible, onClose, distance, onChangeDistance }: any) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Phạm vi</Text>
          <Text style={styles.value}>{distance} Km</Text>

          <Slider
            style={{ width: '100%' }}
            minimumValue={1}
            maximumValue={50}
            step={1}
            minimumTrackTintColor={light.Primary}
            thumbTintColor={light.Primary}
            value={distance}
            onValueChange={onChangeDistance}
          />

          <View style={styles.rangeLabel}>
            <Text style={styles.labelText}>{'<1km'}</Text>
            <Text style={styles.labelText}>{'>50km'}</Text>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DistanceModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: light.Primary,
    marginBottom: 8,
  },
  rangeLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 4,
  },
  labelText: {
    fontSize: 12,
    color: '#999',
  },
  closeButton: {
    marginTop: 16,
    padding: 8,
  },
  closeText: {
    color: light.Primary,
    fontWeight: '500',
  },
});
