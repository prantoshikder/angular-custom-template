import gql from 'graphql-tag';
export const INWALLET_MONEY_TRNASFER = gql`
  mutation InWalletTransferMoney(
    $amount: Float
    $fromCurrencyId: Int
    $toCurrencyId: Int
  ) {
    inWalletTransferMoney(
      input: {
        amount: $amount
        fromCurrencyId: $fromCurrencyId
        toCurrencyId: $toCurrencyId
      }
    )
  }
`;
