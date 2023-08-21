import { gql } from 'graphql-tag';

export const GET_ALL_PAYMENT_GATEWAYS = gql`
  query GetPaymentGateways {
    getPaymentGateways {
      method_name
      payment_gateway {
        id
        payment_method
        method_type
        gw_icon
        status
      }
    }
  }
`;

export const GET_USER_PAYMENT_GATEWAYS = gql`
  query SinglePaymentAccount {
    singlePaymentAccount {
      id
      user_id
      account_list
      created_by
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
      }
    }
  }
`;

export const SEARCH_PAYMENT_GATEWAYS = gql`
  query GetPaymentAccount(
    $isAdmin: Boolean!
    $isDeposit: Boolean
    $searchInput: String
  ) {
    getPaymentAccount(
      input: {
        isAdmin: $isAdmin
        isDeposit: $isDeposit
        searchInput: $searchInput
      }
    ) {
      id
      user_id
      account_list
      created_by
      users {
        id
        user_type_id
        user_type
        profile_id
        company_id
        mobile
        email
        parent_user_id
        status
        user_profile {
          id
          user_id
          mobile
          email
          user_type_id
          first_name
          last_name
          avatar
        }
        user_types {
          id
          user_type
        }
      }
    }
  }
`;
