import { gql } from 'graphql-tag';

export const GET_CLAIMABLE_POINTS_LIST = gql`
  query GetClaimablePointsList {
    getClaimablePointsList {
      day
      point
      date
      is_claimed
    }
  }
`;

export const GET_POINTS_WALLET = gql`
  query GetPointsWallet($user_id: Int) {
    getPointsWallet(input: { user_id: $user_id }) {
      id
      user_id
      wallet_number
      claimable_points
      status
      created_by
      created_date
      updated_by
      updated_date
      remarks
    }
  }
`;

export const GET_PACKAGES = gql`
  query GetPackages {
    getPackages {
      id
      package_name
      package_points
      money_amount
      status
      created_date
      created_by
      updated_by
      updated_date
      is_eligible_to_redeem
      base_currency {
        id
        country_code
        country_name
        country_short_name
        country_flag
        is_active
        is_selected_by_admin
        is_used
        currency_users
        currency_name
        currency_symbol
        is_base_currency
        currency_value_live
        currency_value_bitdeposit
        currency_variation
        remarks
        sequence_number
      }
    }
  }
`;

export const GET_POINTS_HISTORY = gql`
  query GetPointsTransaction(
    $email: String
    $mobile: String
    $pageNumber: Int
    $pageLimit: Int
  ) {
    getPointsTransaction(
      input: {
        email: $email
        mobile: $mobile
        pageNumber: $pageNumber
        pageLimit: $pageLimit
      }
    ) {
      totalCount
      pointTransactions {
        id
        user_id
        transaction_type
        points
        created_date
        remarks
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
  }
`;
