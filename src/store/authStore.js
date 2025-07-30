import { create } from 'zustand';

export const useAuthStore = create(set => ({
  user: null,
  token: null,
  isLogin : false,
  login: (user) =>
    set(() => ({
      user,
      token: null,
      isLogin: true,
    })),

  logout: () =>
    set(() => ({
      user: null,
      token: null,
      isLogin:false,
    })),
}));
