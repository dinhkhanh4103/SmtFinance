import {
  paramRegisterType,
  APIResponseType,
  RegisterResponse,
  OtpResponse,
  SentOptResponse,
  AddInforRequest,
  LoginRequest,
} from './auth.type';
import { useMutation } from '@tanstack/react-query';
import ApiUrl from '../ApiUrl';
import { post, put } from '../AppNetworking';

// Register hook
export function useRegister() {
  return useMutation({
    mutationFn: (
      params: paramRegisterType,
    ): Promise<APIResponseType<RegisterResponse>> =>
      post({
        url: ApiUrl.host + ApiUrl.register,
        params,
      }),
  });
}

// Get OTP

// Verify OTP hook
export function sendVerify() {
  return useMutation<SentOptResponse, Error, string>({
    mutationKey: ['sendVerify'],
    mutationFn: async (email: string): Promise<SentOptResponse> => {
      return await post({
        url: ApiUrl.host + ApiUrl.sendEmail,
        params: { email },
      });
    },
    onError: error => {
      console.error('Failed to send OTP:', error);
    },
    onSuccess: () => {
      console.log('OTP sent successfully.');
    },
  });
}

export function useAddInfo() {
  return useMutation({
    mutationFn: (params: AddInforRequest) => {
      const { id, ...body } = params;
      return put({
        url: ApiUrl.host + ApiUrl.addInfor + id,
        params: body,
      });
    },
  });
}
export function useLogin() {
  return useMutation({
    mutationFn: (params: LoginRequest) =>
      post({
        url: ApiUrl.host + ApiUrl.login,
        params,
      }),
  });
}
