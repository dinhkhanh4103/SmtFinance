import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const actions = [
  { icon: 'cash-send', label: 'Chuyển tiền', onPress: () => {} },
  { icon: 'phone', label: 'Gọi', onPress: () => {} },
  { icon: 'alert-circle-outline', label: 'Báo cáo', onPress: () => {} },
  { icon: 'block-helper', label: 'Chặn', onPress: () => {} },
];

const ActionBubbleMenu = () => {
  return (
    <View style={styles.container}>
      {/* Bubble pointer */}
      <View style={styles.pointer} />
      {/* Menu content */}
      <View style={styles.menu}>
        {actions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={action.onPress}>
            <Icon name={action.icon} size={22} color="#000" style={styles.icon} />
            <Text style={styles.label}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ActionBubbleMenu;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    position: 'absolute',
    top: 50,
    right: 10,
    zIndex:10
  },
  pointer: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#2979FF',
    marginRight: 20,
    marginBottom: -1,
  },
  menu: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2979FF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  icon: {
    width: 30,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});
