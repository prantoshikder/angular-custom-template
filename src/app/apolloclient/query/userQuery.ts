import gql from 'graphql-tag';

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    getUserProfile {
      id
      user_id
      first_name
      last_name
      email
      mobile
      dob
      state
      address
      gender
      id_status
      nid_number
      passport_number
      driving_lic_number
      driving_lic_front
      driving_lic_back
      nid_front
      nid_back
      passport
      self_image
      avatar
      zip_code
      district
      country_id
      user_type_id
      level_number
      level_name
      badge
    }
  }
`;

export const GET_REFERRAL_USERS = gql`
  query GetReferralUsers(
    $user_id: Int
    $mobile: String
    $email: String
    $pageNumber: Int
    $pageLimit: Int
  ) {
    getReferralUsers(
      input: {
        user_id: $user_id
        mobile: $mobile
        email: $email
        pageNumber: $pageNumber
        pageLimit: $pageLimit
      }
    ) {
      totalCount
      ref_users {
        id
        user_type_id
        user_type
        profile_id
        company_id
        mobile
        email
        parent_user_id
        email_verified_date
        mobile_verified_date
        is_otp_verified
        email_otp
        mobile_otp
        otp_secret
        status
        is_default
        promo_codes
        approved_by
        approved_date
        created_by
        created_date
        user_profile {
          id
          user_id
          mobile
          email
          user_type_id
          first_name
          last_name
          gender
          dob
          nid_number
          passport_number
          driving_lic_number
          address
          country_id
          state
          zip_code
          district
          avatar
          self_image
          nid_front
          nid_back
          passport
          driving_lic_front
          driving_lic_back
          id_status
          request_date
          accepted_date
          rejected_date
          remarks
          level_number
          level_name
          badge
        }
        user_types {
          id
          user_type
        }
      }
    }
  }
`;
