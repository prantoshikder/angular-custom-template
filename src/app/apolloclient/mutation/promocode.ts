import gql from 'graphql-tag';

export const GENERATE_PROMO_CODE = gql`
  mutation generateUserPromoCodes($promo: String) {
    generateUserPromoCodes(input: { promo: $promo }) {
      success
      message
      status
    }
  }
`;
