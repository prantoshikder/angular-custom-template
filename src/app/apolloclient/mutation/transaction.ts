import { gql } from 'graphql-tag';

export const CREATE_MONEY_REQUEST_TRANSACTION = gql`
  mutation MoneyRequest(
    $currency_id: Int!
    $ref_email: String
    $ref_mobile: String
    $transaction_acc_number: String!
    $payment_gw_id: Int!
    $transaction_type_id: Int!
    $payment_trans_id: String
    $transaction_date: Date
    $amount: Float!
    $remarks: String
    $file: Upload
  ) {
    moneyRequest(
      file: $file
      input: {
        currency_id: $currency_id
        ref_email: $ref_email
        ref_mobile: $ref_mobile
        transaction_acc_number: $transaction_acc_number
        payment_gw_id: $payment_gw_id
        transaction_type_id: $transaction_type_id
        payment_trans_id: $payment_trans_id
        transaction_date: $transaction_date
        amount: $amount
        remarks: $remarks
      }
    ) {
      id
      message
      transaction_id
      status
      rejected_date
      remarks
    }
  }
`;

export const CREATE_MONEY_TRANSFER_TRANSACTION = gql`
  mutation AmountTransfer(
    $wallet_type: Int!
    $currency_id: Int
    $email: String
    $mobile: String
    $wallet_number: BigInt
    $amount: Float!
  ) {
    amountTransfer(
      input: {
        wallet_type: $wallet_type
        currency_id: $currency_id
        email: $email
        mobile: $mobile
        wallet_number: $wallet_number
        amount: $amount
      }
    ) {
      id
      message
      transaction_id
      status
      rejected_date
      remarks
    }
  }
`;
