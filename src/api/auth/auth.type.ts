export interface LoginRequest {
  user_name: string;
  password: string;
  unique_id: string;
  token_device: string;
  device_name: string;
}

export interface AddressDetail {
  city: {
    id: number;
    name: string;
    value: string;
  };
  district: {
    id: number;
    name: string;
    value: string;
  };
  ward: {
    id: number | string;
    name: string;
    value: string;
  };
  detail: string;
}

export interface UserData {
  id: number;
  address_id: number;
  full_name: string;
  gender: number;
  dob: string;
  email: string;
  phone: string;
  avatar: string | null;
  type_certificate_identify: number;
  certificate_identify: string;
  date_range: string;
  front_photo: string;
  back_side_photo: string;
  issued_by: string;
  role: number;
  is_online: number;
  is_authenticated: number;
  google_id: string | null;
  facebook_id: string | null;
  apple_id: string | null;
  status: number;
  deleted: number;
  created_date: string;
  updated_date: string | null;
  address_detail_1: AddressDetail;
  address_detail_2: AddressDetail;
}
export interface paramRegisterType {
  email: string;
  phone?: string;
  password: string;
  full_name?: string;
  token_device?: string;
  unique_id?: string;
  device_name?: string;
}

export interface RegisterResponse {
  code: number;
  status: number;
  message: string;
  data?: {
    id: number;
    email: string;
    phone?: string;
    full_name?: string;
    role?: string;
  };
}

export interface OtpResponse {
  code: number;
  status: number;
  message: string;
  data?: any;
}

export type APIResponseType<T = {}> = {
  code: number;
  status: number;
  message: string;
  data?: T;
  error?: any;
  page_infor?: any;
  pageInfo?: any;
};

export type refreshToken = {
  refresh_token: string;
};

export interface refreshTokenResponse {
  code: number;
  status: number;
  message: string;
  data?: {
    access_token: string;
    refresh_token: string;
  };
  errors?: any;
}

export interface SentOptResponse {
  account_status: number;
  id: number;
}

export interface AddInforRequest {
  full_name: string;
  gender: number;
  dob: string;
  referral_code: string;
}
