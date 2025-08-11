import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';
import ApiUrl from './ApiUrl';
import { Platform, PlatformOsType } from 'react-native';
import DataLocal from '../utils/local/DataLocal';
import { refreshTokenResponse } from './auth/auth.type.ts';
import { showAlertMessage } from '../helpers/messageHelper';
import store from '../redux/store';
import { StatusLogin } from '../redux/loginSlice.tsx';
import { isEqual } from 'lodash';
export type ErrMsgType = 'MANUAL' | 'FLASH' | 'ALERT';
const client = axios.create({
  baseURL: ApiUrl.host,
  timeout: 30000,
});
export function generateRandomId(length = 10) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567899';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export interface ApiHeader extends AxiosRequestHeaders {
  'Content-Type': string;
  Accept: string;
  'request-id'?: string;
  os?: PlatformOsType;
  Authorization?: string;
}

export interface ApiParams {
  url: string;
  params?: any;
  header?: ApiHeader;
  showMessage?: ErrMsgType;
  isSilent?: boolean;
  noToken?: boolean;
}

let showingAlert: boolean = false;

export const initHeader = (token?: string) => {
  if (token) {
    client.defaults.headers.common = { Authorization: `Bearer ${token}` };
  }
};

const getDefaultHeaders = (): ApiHeader => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'request-id': generateRandomId(5).toLowerCase(),
  os: Platform.OS,
});
export function getHeaders(header?: any, noToken: boolean = false): ApiHeader {
  let requestHeaders: ApiHeader = header || getDefaultHeaders();
  if (!noToken) {
    const accessToken = DataLocal.accessToken;
    if (accessToken) {
      requestHeaders.Authorization = 'bearer ' + accessToken;
    }
  }
  return requestHeaders;
}
export async function refreshAccessToken(): Promise<string | null> {
  try {
    const refreshToken = DataLocal.refreshToken;
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await post<refreshTokenResponse>({
      url: ApiUrl.host + ApiUrl.refreshToken,
      params: { refresh_token: refreshToken },
      noToken: true,
    });

    if (response && response.data) {
      const { access_token, refresh_token } = response.data;
      await DataLocal.saveAccessToken(access_token);
      await DataLocal.saveRefreshToken(refresh_token);
      await DataLocal.saveTimeToken(new Date().getTime().toString());
      return access_token; // Trả về access token mới
    }
    return null;
  } catch (error) {
    console.log('Refresh token failed:', error);
    return null; // Trả về null nếu refresh thất bại
  }
}
export async function performApiRequest(config: AxiosRequestConfig) {
  try {
    const response = await client.request(config);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      const newToken = await refreshAccessToken();
      if (newToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${newToken}`,
        };
        try {
        } catch (retryError) {
          throw retryError;
        }
      } else {
        if (!showingAlert) {
          showingAlert = true;
          showAlertMessage({
            title: 'Phiên đăng nhập hết hạn',
            message: 'Vui lòng đăng nhập lại.',
            onPress: () => {
              showingAlert = false;
              store.dispatch(StatusLogin(false));
            },
            cancelable: false,
          });
        }
        throw new Error('unauthorized');
      }
    } else if (error.response) {
      console.log('Server error:', error.response.data);
      throw error.response.data || error;
    } else if (error.request) {
      console.log('Network error:', error.message);
      throw new Error('Network Error');
    } else {
      console.log('Request error:', error.message);
      throw error;
    }
  }
}

// API parameter initialization
const initApiParams = (props: ApiParams) => {
  const {
    url,
    params,
    header = getHeaders(props.header, props.noToken),
    showMessage = 'MANUAL',
    isSilent = true,
  } = props;

  return {
    url,
    params,
    header,
    showMessage,
    isSilent,
  };
};

// HTTP methods
export async function get<T>(props: ApiParams): Promise<T> {
  const { url, params: getParams, header, isSilent } = initApiParams(props);

  let params = getParams;
  if (header['Content-Type'] === 'application/x-www-form-urlencoded') {
    params = JSON.stringify(params);
  }

  const apiConfig: AxiosRequestConfig = {
    method: 'get' as Method,
    url,
    params,
    headers: header,
  };

  return await performApiRequest(apiConfig);
}

export async function post<T>(props: ApiParams): Promise<T> {
  const { url, params: postParams, header, isSilent } = initApiParams(props);

  let params = postParams;
  if (header['Content-Type'] === 'application/x-www-form-urlencoded') {
    params = JSON.stringify(params);
  }

  const apiConfig: AxiosRequestConfig = {
    method: 'post' as Method,
    url,
    data: params,
    headers: header,
  };

  return await performApiRequest(apiConfig);
}

export async function put<T>(props: ApiParams): Promise<T> {
  const { url, params: putParams, header, isSilent } = initApiParams(props);

  let params = putParams;
  if (header['Content-Type'] === 'application/x-www-form-urlencoded') {
    params = JSON.stringify(params);
  }

  const apiConfig: AxiosRequestConfig = {
    method: 'put' as Method,
    url,
    data: params,
    headers: header,
  };

  return await performApiRequest(apiConfig);
}

export async function del<T>(props: ApiParams): Promise<T> {
  const { url, params: deleteParams, header, isSilent } = initApiParams(props);

  let params = deleteParams;
  if (header['Content-Type'] === 'application/x-www-form-urlencoded') {
    params = JSON.stringify(params);
  }

  const apiConfig: AxiosRequestConfig = {
    method: 'delete' as Method,
    url,
    params,
    data: params,
    headers: header,
  };

  return await performApiRequest(apiConfig);
}

export async function patch<T>(props: ApiParams): Promise<T> {
  const { url, params: patchParams, header, isSilent } = initApiParams(props);

  let params = patchParams;
  if (header['Content-Type'] === 'application/x-www-form-urlencoded') {
    params = JSON.stringify(params);
  }

  const apiConfig: AxiosRequestConfig = {
    method: 'patch' as Method,
    url,
    data: params,
    headers: header,
  };

  return await performApiRequest(apiConfig);
}

// Error handler
export const errorHandler = (error: any, isSilent = true) => {
  if (error.response) {
    const { message } = error;
    if (!isSilent && !showingAlert) {
      showingAlert = true;
      showAlertMessage({
        title: error.response?.status.toString() || 'Something went wrong',
        message,
        onPress: () => {
          showingAlert = false;
        },
        cancelable: false,
      });
    }
    return { message };
  } else if (error.request) {
    if (!isSilent && !showingAlert) {
      showingAlert = true;
      showAlertMessage({
        title: 'Something went wrong',
        message: '',
        onPress: () => {
          showingAlert = false;
        },
        cancelable: false,
      });
    }
  } else {
    if (!isSilent && !showingAlert) {
      showingAlert = true;
      showAlertMessage({
        title: 'Something went wrong',
        message: '',
        onPress: () => {
          showingAlert = false;
        },
        cancelable: false,
      });
    }
  }
  return { message: 'Something went wrong' };
};

export const isSuccessResponse = (status?: number, successStatus = 1) =>
  isEqual(status, successStatus);

export const getApiUrl = (apiStr: string) => `${ApiUrl.host}${apiStr}`;
