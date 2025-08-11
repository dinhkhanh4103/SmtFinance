import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserDataType } from './type';

const accessTokenKey = 'ACCESS_TOKEN';
const refreshTokenKey = 'REFRESH_TOKEN';
export const userInfoKey = 'USER_INFO';
const isLoginKey = 'IS_LOGIN';
const tokenFirebaseKey = 'TOKEN_KEY';
const isLogin: boolean | null = null;
const loginTypeKey = 'LOGIN_TYPE_KEY';
const loginType = null;
const userInfo: UserDataType = {} as UserDataType;
const accessToken = null;
const refreshToken = null;
const accountUser = null;
const tokenFirebase = null;

const key_time_token = 'key_time_token';
const time_token = 'time_token';

const languageKey = 'LANGUAGE';
const language = 'vi';
const isIntro = 'first';

type languageType = 'vi' | 'en' | null;

// =========================================

// =========================================
async function saveAccessToken(value: string) {
  try {
    DataLocal.accessToken = value;
    return await AsyncStorage.setItem(accessTokenKey, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}
async function saveRefreshToken(value: string) {
  try {
    DataLocal.refreshToken = value;
    return await AsyncStorage.setItem(refreshTokenKey, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}

async function saveTimeToken(value: string) {
  try {
    DataLocal.time_token = value;
    return await AsyncStorage.setItem(key_time_token, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

async function getTimeToken() {
  try {
    const value = await AsyncStorage.getItem(key_time_token);
    if (value === null || value === undefined) {
      DataLocal.time_token = null;
    } else {
      DataLocal.time_token = parseInt(value);
    }
  } catch (e) {
    DataLocal.time_token = null;
    console.log(e);
  }
}

async function saveLanguage(value: languageType) {
  try {
    DataLocal.language = value;
    return AsyncStorage.setItem(languageKey, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}
async function getLanguage() {
  try {
    const value = await AsyncStorage.getItem(languageKey);
    if (value === null || value === undefined) {
      DataLocal.language = null;
    } else {
      DataLocal.language = JSON.parse(value);
    }
  } catch (e) {
    DataLocal.language = 'en';
    console.log(e);
  }
}
async function getAccessToken() {
  try {
    const value = await AsyncStorage.getItem(accessTokenKey);
    if (value === null || value === undefined) {
      DataLocal.accessToken = null;
    } else {
      DataLocal.accessToken = JSON.parse(value);
    }
  } catch (e) {
    DataLocal.accessToken = null;
    console.log(e);
  }
}
async function getRefreshToken() {
  try {
    const value = await AsyncStorage.getItem(refreshTokenKey);
    if (value === null || value === undefined) {
      DataLocal.refreshToken = null;
    } else {
      DataLocal.refreshToken = JSON.parse(value);
    }
  } catch (e) {
    DataLocal.refreshToken = null;
    console.log(e);
  }
}
async function saveLoginType(value: string) {
  try {
    DataLocal.loginType = value;
    return AsyncStorage.setItem(loginTypeKey, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}
async function getLoginType() {
  try {
    const value = await AsyncStorage.getItem(loginTypeKey);
    if (value === null || value === undefined) {
      DataLocal.loginType = null;
    } else {
      DataLocal.loginType = JSON.parse(value);
    }
  } catch (e) {
    DataLocal.accessToken = null;
    console.log(e);
  }
}
async function removeLoginType() {
  try {
    DataLocal.loginType = null;
    return AsyncStorage.removeItem(loginTypeKey);
  } catch (e) {
    console.log(e);
  }
}
async function removeAccessToken() {
  try {
    DataLocal.accessToken = null;
    return AsyncStorage.removeItem(accessTokenKey);
  } catch (e) {
    console.log(e);
  }
}
async function getInfoUser() {
  try {
    const value = await AsyncStorage.getItem(userInfoKey);
    if (value === null || value === undefined) {
      console.log('Không tìm thấy thông tin người dùng trong AsyncStorage');
      DataLocal.userInfo = {} as UserDataType;
    } else {
      DataLocal.userInfo = JSON.parse(value);
      console.log(
        'Đã lấy thông tin người dùng thành công:',
        DataLocal.userInfo,
      );
      return JSON.parse(value);
    }
  } catch (e) {
    DataLocal.userInfo = {} as UserDataType;
    console.error('Lỗi khi lấy thông tin người dùng:', e);
  }
}

async function saveInfoUser(value: UserDataType) {
  try {
    console.log('Saving user info:', value);
    await saveStatusLogin();
    DataLocal.userInfo = value;
    await AsyncStorage.setItem(userInfoKey, JSON.stringify(value));
    console.log('User info saved successfully');
  } catch (e) {
    console.error('Error saving user info:', e);
    throw e;
  }
}

async function getStatusLogin() {
  try {
    const value = await AsyncStorage.getItem(isLoginKey);
    if (value === null || value === undefined) {
      DataLocal.isLogin = false;
    } else {
      DataLocal.isLogin = JSON.parse(value);
    }
  } catch (e) {
    DataLocal.isLogin = false;
    console.log(e);
  }
}

async function saveStatusLogin() {
  try {
    DataLocal.isLogin = true;
    return AsyncStorage.setItem(isLoginKey, JSON.stringify(true));
  } catch (e) {
    console.log(e);
  }
}

async function getIntro() {
  try {
    const value = await AsyncStorage.getItem('isIntro');
    if (!value || value === '') {
      DataLocal.isIntro = '';
    } else {
      DataLocal.isIntro = 'true';
    }
  } catch (e) {
    DataLocal.isIntro = 'true';
  }
}
async function saveStatusIntro(status: string) {
  try {
    DataLocal.isIntro = status;

    return AsyncStorage.setItem('isIntro', status);
  } catch (e) {
    console.log(e);
  }
}

export async function removeStatusLogin() {
  try {
    DataLocal.isLogin = false;
    return AsyncStorage.removeItem(isLoginKey);
  } catch (e) {
    console.log(e);
  }
}
export async function removeInfoUser() {
  try {
    DataLocal.userInfo = {} as UserDataType;
    return AsyncStorage.removeItem(userInfoKey);
  } catch (e) {
    console.log(e);
  }
}

async function saveAccountUser(value: string) {
  try {
    DataLocal.accountUser = value;
    return AsyncStorage.setItem('ACC_USER', JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}

async function getAccountUser() {
  try {
    const value = await AsyncStorage.getItem('ACC_USER');
    if (value === null || value === undefined) {
      DataLocal.accountUser = {} as UserDataType;
    } else {
      DataLocal.accountUser = JSON.parse(value);
    }
  } catch (e) {
    DataLocal.userInfo = {} as UserDataType;
    console.log(e);
  }
}
async function removeAccountUser() {
  try {
    DataLocal.accountUser = null;
    return AsyncStorage.removeItem('ACC_USER');
  } catch (e) {
    console.log(e);
  }
}

async function saveTokenDevice(value: string) {
  try {
    DataLocal.accountUser = value;
    return AsyncStorage.setItem(tokenFirebaseKey, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}

async function getTokenDevice() {
  try {
    const value = await AsyncStorage.getItem(tokenFirebaseKey);
    if (value === null || value === undefined) {
      DataLocal.tokenFirebase = null;
      console.log('Token null');
    } else {
      DataLocal.tokenFirebase = JSON.parse(value);
      console.log('get token successfully');
    }
  } catch (e) {
    DataLocal.tokenFirebase = null;
    console.log('get token error :', e);
  }
}
async function removeTokenDevice() {
  try {
    DataLocal.accountUser = null;
    return AsyncStorage.removeItem(tokenFirebaseKey);
  } catch (e) {
    console.log(e);
  }
}

async function getAll() {
  await getInfoUser();
  await getStatusLogin();
  await getAccessToken();
  await getLoginType();

  await getIntro();
  await getAccountUser();
  await getTokenDevice();
  return true;
}
async function removeAll() {
  await removeInfoUser();
  await removeAccessToken();
  await removeStatusLogin();
  await removeLoginType();
  // await removeAccountUser();
  await saveStatusIntro('true');
  return true;
}

type DataLocalType = {
  removeAll: any;
  getAll: () => Promise<boolean>;
  getAccessToken: any;
  getStatusLogin: any;
  getInfoUser: any;
  saveInfoUser: any;
  userInfo: UserDataType;
  saveAccessToken: (token: any) => Promise<void>;

  saveTimeToken: (value: string) => Promise<void>;
  getTimeToken: () => void;
  time_token: any;

  removeAccessToken: any;
  saveStatusLogin: any;
  accessToken: any;
  refreshToken: any;
  isLogin: any;
  loginType: any;
  saveLoginType: any;
  removeLoginType: any;
  getLoginType: any;
  saveAccountUser: any;
  getAccountUser: any;
  accountUser: any;
  language: languageType;
  getIntro: () => void;
  saveStatusIntro: (value: string) => void;
  isIntro: string;
  saveLanguage: (value: languageType) => void;
  getLanguage: () => void;
  saveRefreshToken: (value: string) => Promise<void>;
  getRefreshToken: () => Promise<void>;
  removeAccountUser: () => Promise<void>;
  tokenFirebase: any;
  saveTokenDevice: (value: string) => Promise<void>;
  getTokenDevice: () => Promise<void>;
  removeTokenDevice: () => Promise<void>;
};
const DataLocal: DataLocalType = {
  isIntro,
  getIntro,
  saveStatusIntro,
  language,
  getLanguage,
  saveLanguage,
  removeAll,
  getAll,
  getAccessToken,
  getStatusLogin,
  getInfoUser,
  saveInfoUser,
  userInfo,
  saveAccessToken,
  removeAccessToken,
  saveStatusLogin,

  saveTimeToken,
  getTimeToken,
  time_token,

  accessToken,
  isLogin,
  loginType,
  saveLoginType,
  removeLoginType,
  getLoginType,
  saveRefreshToken,
  refreshToken,
  getRefreshToken,
  saveAccountUser,
  accountUser,
  getAccountUser,
  removeAccountUser,
  tokenFirebase,
  saveTokenDevice,
  getTokenDevice,
  removeTokenDevice,
};

export default DataLocal;
