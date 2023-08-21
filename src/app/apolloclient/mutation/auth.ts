import gql from 'graphql-tag';

export const REGISTER_USER = gql`
  mutation createUser(
    $mobile: String
    $email: String
    $password: String
    $user_type_id: Int
    $promo_code: String
  ) {
    createUser(
      input: {
        mobile: $mobile
        email: $email
        password: $password
        user_type_id: $user_type_id
        promo_code: $promo_code
      }
    ) {
      id
      user_type_id
      profile_id
      company_id
      affiliate_id
      parent_user_id
      status
      is_referral
      referred_by
      mobile
      email
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($mobile: String, $email: String, $password: String) {
    loginUser(input: { mobile: $mobile, email: $email, password: $password }) {
      mobile
      id
      email
      token
      user_type_id
      profile_id
      company_id
      affiliate_id
      parent_user_id
      status
      is_referral
      referred_by
    }
  }
`;

export const GENERATE_OTP = gql`
  mutation generateOTP($mobile: String, $email: String) {
    generateOTP(input: { mobile: $mobile, email: $email }) {
      mobile
      email
      message
    }
  }
`;

export const PASSWORD_RESET = gql`
  mutation ($mobile: String, $email: String, $password: String!) {
    updatePassword(
      input: { mobile: $mobile, email: $email, password: $password }
    ) {
      mobile
      email
      token
    }
  }
`;

export const PASSWORD_CHANGE = gql`
  mutation changePassword($old_password: String!, $new_password: String!) {
    changePassword(
      input: { old_password: $old_password, new_password: $new_password }
    )
  }
`;
