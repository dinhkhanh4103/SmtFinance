import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { saveData, getData, removeData } from '../utils/storage';

export default function SettingsScreen() {
  const [input, setInput] = useState('');
  const [saved, setSaved] = useState('');

  useEffect(() => {
    const load = async () => {
      const val = await getData('myKey');
      if (val) setSaved(val);
    };
    load();
  }, []);

  const handleSave = async () => {
    await saveData('myKey', input);
    setSaved(input);
  };

  const handleRemove = async () => {
    await removeData('myKey');
    setSaved('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput
        label="Enter text"
        value={input}
        onChangeText={setInput}
      />
      <Button mode="contained" onPress={handleSave} style={{ marginTop: 16 }}>
        Save
      </Button>
      <Button mode="outlined" onPress={handleRemove} style={{ marginTop: 8 }}>
        Remove
      </Button>

      <Text style={{ marginTop: 16 }}>Saved: {saved}</Text>
    </View>
  );
}
