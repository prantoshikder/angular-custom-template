import gql from 'graphql-tag';

export const GET_USER_MONEY_WALLET = gql`
  query GetUserMoneyWallet {
    getUserMoneyWallet {
      id
      wallet_number
      currencies
      status
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
        }
        user_types {
          id
          user_type
        }
      }
    }
  }
`;

// Temporary wallet data
export const GET_CLAIMABLE_MONEY_WALLET = gql`
  query GetClaimableMoneyWallet {
    getClaimableMoneyWallet {
      user_id
      amount
      country_name
      currency_name
      currency_symbol
      currency_flag
      isClaim
      last_claimed_date
      created_date
      updated_date
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
`;

// Temporary wallet data
export const GET_CLAIMABLE_WALLET_TRANSACTION_LOG = gql`
  query GetClaimableWalletTransactionLog(
    $user_id: Int
    $pageLimit: Int
    $pageNumber: Int
    $searchInput: String
  ) {
    getClaimableWalletTransactionLog(
      user_id: $user_id
      pageLimit: $pageLimit
      pageNumber: $pageNumber
      searchInput: $searchInput
    ) {
      data {
        id
        user_id
        referer_user_id
        amount
        created_by
        create_date
        remarks
        users_claimable_wallet_trans_log_user_idTousers {
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
        users_claimable_wallet_trans_log_referer_user_idTousers {
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
      totalCount
    }
  }
`;
