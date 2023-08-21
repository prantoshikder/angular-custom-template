import { gql } from 'graphql-tag';

export const GET_IN_WALLET_MONEY_EXCHANGE_HISTORY = gql`
  query InWalletMoneyExchangeHistory(
    $start_date: Date
    $end_date: Date
    $from_currency_id: Int
    $to_currency_id: Int
    $pageNumber: Int
    $pageLimit: Int
  ) {
    inWalletMoneyExchangeHistory(
      start_date: $start_date
      end_date: $end_date
      from_currency_id: $from_currency_id
      to_currency_id: $to_currency_id
      pageNumber: $pageNumber
      pageLimit: $pageLimit
    ) {
      totalCount
      histories {
        id
        user_id
        from_currency_id
        to_currency_id
        from_currency_amount
        to_currency_amount
        created_date
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
        country_master_money_exchange_in_wallet_from_currency_idTocountry_master {
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
        country_master_money_exchange_in_wallet_to_currency_idTocountry_master {
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
