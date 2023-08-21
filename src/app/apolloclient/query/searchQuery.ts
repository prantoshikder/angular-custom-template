import { gql } from 'graphql-tag';

export const SEARCH_USER_WALLET = gql`
  query SearchUserWallet($searchInput: String, $searchWallet: BigInt) {
    searchUserWallet(
      input: { searchInput: $searchInput, searchWallet: $searchWallet }
    ) {
      wallet_number
      users {
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
        }
        user_types {
          id
          user_type
        }
      }
    }
  }
`;
