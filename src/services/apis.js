const BASE_URL = process.env.REACT_APP_BASE_URL
// const BASE_URL = `http://localhost:4000`

export const paymentEndpoints = {
    PRODUCT_PAYMENT_API : BASE_URL + "/payment/capturePayment",
    // PRODUCT_PAYMENT_API: "http://localhost:4000/api/v1/payment/capturePayment",
    PRODUCT_VERIFY_API: BASE_URL + "/payment/verifyPayment",
    // SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
    TEMPDATA_API: BASE_URL + "/payment/tempdata"
  }

  // https://royal-webtech.onrender.com/api/v1/user/signup
  // /signup

//   /api/v1/payment
export const userEndpoints = {
  USER_SIGNUP_API : BASE_URL + "/user/signup",
  USER_LOGIN_API : BASE_URL + "/user/login",
  UPDATE_USER_DATA_API : BASE_URL + "/user/updateUserDetails",
  SHOW_USER_DETAILS_API : BASE_URL + "/user/getUserDetails"
}
