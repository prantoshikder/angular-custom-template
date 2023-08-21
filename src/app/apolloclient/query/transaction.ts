import { gql } from 'graphql-tag';

export const GET_TRANSACTION_HISTORY = gql`
  query MoneyTransactionHistory(
    $email: String
    $mobile: String
    $pageLimit: Int
    $pageNumber: Int
    $isRefUser: Boolean
    $all: Boolean
    $payment_gateway_id: Int
    $transaction_type_id: Int
    $transactionId: String
    $start_date: Date
    $end_date: Date
  ) {
    moneyTransactionHistory(
      input: {
        email: $email
        mobile: $mobile
        isRefUser: $isRefUser
        all: $all
        pageLimit: $pageLimit
        pageNumber: $pageNumber
        payment_gateway_id: $payment_gateway_id
        transaction_type_id: $transaction_type_id
        transactionId: $transactionId
        start_date: $start_date
        end_date: $end_date
      }
    ) {
      totalCount
      moneyTransactionHistory {
        id
        transaction_id
        payment_trans_id
        payment_docs
        payment_gateway
        transaction_type
        transaction_acc_number
        amount
        status
        transaction_date
        requested_date
        approved_date
        rejected_date
        remarks
        user {
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
        ref_user {
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
          user_types {
            id
            user_type
          }
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
        }
        currency {
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
          company_master {
            id
            country_id
            company_type
            company_code
            company_name
            country_name
            reg_person_name
            company_logo
            nature_of_biz
            company_short_name
            company_address
            phone_number
            email_address
            fax_number
            is_active
            created_by
            created_date
            updated_by
            updated_date
            remarks
          }
        }
      }
    }
  }
`;

export const MONEY_REQUESTED_LIST = gql`
  query SelfMoneyRequestedList(
    $status: Int
    $payment_gateway_id: Int
    $transaction_type_id: Int
    $transactionId: String
    $pageNumber: Int
    $pageLimit: Int
  ) {
    selfMoneyRequestedList(
      input: {
        status: $status
        payment_gateway_id: $payment_gateway_id
        transaction_type_id: $transaction_type_id
        transactionId: $transactionId
        pageNumber: $pageNumber
        pageLimit: $pageLimit
      }
    ) {
      totalCount
      moneyRequestList {
        id
        transaction_id
        payment_trans_id
        payment_docs
        payment_gateway
        transaction_type
        transaction_acc_number
        amount
        status
        transaction_date
        requested_date
        approved_date
        rejected_date
        remarks
        user {
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
        ref_user {
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
        currency {
          id
          country_code
          country_name
          country_short_name
          is_active
          is_selected_by_admin
          is_used
          currency_name
          currency_symbol
          remarks
          country_flag
          sequence_number
        }
      }
    }
  }
`;
