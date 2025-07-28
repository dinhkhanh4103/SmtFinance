import { faChevronDown, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import light from '../../theme/light';
import AppBlock from '../view/AppBlock';

const DropDown = ({ data, value, onChange, placeholder, iconLeft } : any) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item : any) => {
    onChange(item.value);
    setVisible(false);
  };

  const selectedLabel = data.find((d : any) => d.value === value)?.label || placeholder || 'Select';

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={() => setVisible(true)}
      > <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {iconLeft?
          <FontAwesomeIcon
            icon={iconLeft}
            size={20}
            style={[
              styles.leftIcon,
              visible && { color: light.Primary },
            ]}
          />
        :
          <AppBlock></AppBlock>
        }
          <Text style={styles.selectedText}>{selectedLabel}</Text>
      </View>
        <FontAwesomeIcon
          icon={faChevronDown}
          size={20}
          style={[
            styles.rightIcon,
            visible && { color: light.Primary },
          ]}
        />
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8C8C8C',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 52,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  selectedText: {
    color: '#8C8C8C',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: light.Primary,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  },
  leftIcon: {
    color: '#8C8C8C',
    marginRight: 8,
  },
  rightIcon: {
    color: '#8C8C8C',
  },
});

export default DropDown;
