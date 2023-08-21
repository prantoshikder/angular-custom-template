import gql from 'graphql-tag';

export const GET_UPDATE_CURRENCIES = gql`
  subscription UpdatedCurrencies {
    updatedCurrencies {
      currencies
    }
  }
`;
