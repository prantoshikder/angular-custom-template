import gql from 'graphql-tag';

export const GET_ALL_TARIFF = gql`
  query (
    $user_id: Int
    $email: String
    $mobile: String
    $rate_type: String
    $user_type: Int
    $is_active: Int
    $pageLimit: Int
    $pageNumber: Int
  ) {
    getAllTariff(
      input: {
        user_id: $user_id
        email: $email
        mobile: $mobile
        rate_type: $rate_type
        user_type: $user_type
        is_active: $is_active
        pageLimit: $pageLimit
        pageNumber: $pageNumber
      }
    ) {
      totalCount
      getTariff {
        user {
          id
          email
          user_type_id
          parent_user_id
          user_profile {
            id
            avatar
            first_name
            last_name
          }
          user_types {
            user_type
          }
        }
        tariff
        is_active
      }
    }
  }
`;

export const GET_ALL_END_USER_TARIFF = gql`
  query (
    $user_id: Int
    $email: String
    $mobile: String
    $status: Int
    $pageLimit: Int
    $pageNumber: Int
  ) {
    getAllEndUsersTariff(
      input: {
        user_id: $user_id
        email: $email
        mobile: $mobile
        status: $status
        pageLimit: $pageLimit
        pageNumber: $pageNumber
      }
    ) {
      totalCount
      getEndUserTariff {
        id
        affiliate_id
        promocode_id
        mobile
        email
        email_verified_date
        mobile_verified_date
        status
        user_profile {
          first_name
          gender
          dob
        }
        is_referral
        referred_by
        tariff
        level_number
      }
    }
  }
`;
