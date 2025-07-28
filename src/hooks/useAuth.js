import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { loginUser, getProfile } from '../api/userApi';

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      const { accessToken } = data;
      await AsyncStorage.setItem('token', accessToken);
      setToken(accessToken);
    },
  });

  const { data: profile, refetch } = useQuery({
    queryKey: ['me'],
    queryFn: () => getProfile(token),
    enabled: !!token,
  });

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
  };

  const loadToken = async () => {
    const savedToken = await AsyncStorage.getItem('token');
    if (savedToken) setToken(savedToken);
  };

  return {
    login: loginMutation.mutateAsync,
    loginLoading: loginMutation.isLoading,
    loginError: loginMutation.error,
    profile,
    refetchProfile: refetch,
    logout,
    loadToken,
    token,
  };
};
