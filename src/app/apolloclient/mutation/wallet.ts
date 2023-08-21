import gql from 'graphql-tag';

export const CURRENCY_SELECTED_BY_USER = gql`
  mutation CurrencySelectByUser($currencies: JSON!) {
    currencySelectByUser(input: { currencies: $currencies }) {
      id
      wallet_number
      currencies
      status
      remarks
    }
  }
`;

export const MONEY_CLAIM = gql`
  mutation MoneyClaim {
    moneyClaim {
      success
    }
  }
`;
