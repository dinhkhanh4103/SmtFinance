interface AddressDetail {
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
