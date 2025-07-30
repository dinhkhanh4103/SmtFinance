import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async () => {
    try {
      await login({ email, password });
      console.log('Login success!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ marginBottom: 8 }}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{ marginBottom: 8 }}
      />
      <Button mode="contained" onPress={handleLogin} loading={loginLoading}>
        Login
      </Button>
      {loginError && <Text style={{ color: 'red' }}>{loginError.message}</Text>}
      {profile && <Text>Xin chào, {profile.name}</Text>}
    </View>
  );
}
