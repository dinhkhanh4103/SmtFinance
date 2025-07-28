import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { UserRepository } from '../database/repositories/UserRepository';

export default function SqliteORMScreen() {
  const repo = new UserRepository();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const init = async () => {
      await repo.createTable();
      const all = await repo.findAll();
      setUsers(all);
    };
    init();
  }, []);

  const addUser = async () => {
    await repo.insert({ name, age: parseInt(age) });
    const all = await repo.findAll();
    setUsers(all);
    setName('');
    setAge('');
  };

  const clearAll = async () => {
    await repo.deleteAll();
    setUsers([]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 8 }}
      />
      <TextInput
        label="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="number-pad"
        style={{ marginBottom: 8 }}
      />
      <Button mode="contained" onPress={addUser}>Add User</Button>
      <Button mode="outlined" onPress={clearAll} style={{ marginTop: 8 }}>Delete All</Button>

      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.id}. {item.name} - {item.age}</Text>
        )}
        style={{ marginTop: 16 }}
      />
    </View>
  );
}
