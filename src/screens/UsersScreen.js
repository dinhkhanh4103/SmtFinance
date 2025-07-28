import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {useUsersQuery} from '../hooks/useUser'

const UsersScreen = () => {
  const { data, isLoading, error } = useUsersQuery();

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
};

export default UsersScreen;
