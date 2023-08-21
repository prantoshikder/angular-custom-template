import gql from 'graphql-tag';

export const OTP_VERIFY = gql`
  query ($email: String, $mobile: String, $otp: String) {
    checkOTP(input: { email: $email, mobile: $mobile, otp: $otp }) {
      email
      mobile
      isValid
    }
  }
`;

export const REGISTER_OTP_VERIFY = gql`
  query ($email: String, $mobile: String, $otp: String) {
    checkOtpReg(input: { email: $email, mobile: $mobile, otp: $otp }) {
      isValid
      email
      mobile
      token
    }
  }
`;
