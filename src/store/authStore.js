import { create } from 'zustand';

export const useAuthStore = create(set => ({
  user: {
    'name' : 'Vũ Ngọc Khiêm',
    "dateOfBirth": "31/12/1998",
    "gender": "Nam",
    "contact": {
      "permanentAddress": "Đội 15 An Chiểu II, Liên Phương, Tp Hưng Yên, Hưng Yên",
      "currentAddress": "Khu tập thể quân đội binh đoàn số 11, 105 Láng Hạ, Đống Đa, Hà Nội",
      "email": "anhkhiemhy90@gmail.com",
      "phone": "0339160077",
      "secondaryPhone": "0339161627"
    },
    "idCard": {
      "type": "Căn cước công dân gắn chip",
      "number": "000098000071",
      "issueDate": "28/06/2021"
    }
  },
  token: null,

  login: (user, token) =>
    set(() => ({
      user,
      token,
    })),

  logout: () =>
    set(() => ({
      user: null,
      token: null,
    })),
}));
