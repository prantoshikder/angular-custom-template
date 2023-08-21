import gql from 'graphql-tag';

export const GET_EXCHANGE_RATE = gql`
  query ExchangeRate($amount: Float, $fromCurrencyId: Int, $toCurrencyId: Int) {
    exchangeRate(
      input: {
        amount: $amount
        fromCurrencyId: $fromCurrencyId
        toCurrencyId: $toCurrencyId
      }
    ) {
      convertedAmount
      oneToExchangeRate
    }
  }
`;
