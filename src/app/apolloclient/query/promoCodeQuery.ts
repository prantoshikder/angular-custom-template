import gql from 'graphql-tag';

export const GET_PROMO_CODE = gql`
  query {
    getUserPromoCodes {
      success
      message
      status
      data {
        promo_code
        promo_code_user_type
        is_used
      }
    }
  }
`;
