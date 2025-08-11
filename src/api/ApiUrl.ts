const host = 'http://localhost:3815';
export default {
  host,
  register: '/users/register',
  login: '/users/login',
  sendEmail: '/users/send-verification-email',
  checkOtp: '/users/check-otp',
  verifyOtp: '/users/verify-otp',
  refreshToken: '/users/refresh-token',
  forgotPassword: '/users/forgot-pass',
  changePassword: '/users/change-password',

  // User
  addInfor: '/users/add_infor',
  getProfile: '/users/get/my-profile',
  updateProfile: '/users/:id',
  deleteUser: '/users/delete/user',

  // Socia
  loginWithGoogle: '/users/login-with-google',
  loginWithApple: '/users/login-with-apple',
  //QuangMD@123
  // Device management
  userDevice: '/user_device',

  // Other
  notifications: '/notifications',
  orders: '/orders',
  payments: '/payments',
  upload: '/upload',
};
