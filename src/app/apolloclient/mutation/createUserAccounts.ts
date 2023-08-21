import gql from 'graphql-tag';

export const CREATE_USER_ACCOUNTS = gql`
  mutation CreatePaymentAccounts(
    $account: String
    $account_holder_name: String
    $branch_name: String
    $gateway_id: Int
  ) {
    createPaymentAccounts(
      input: {
        account: $account
        account_holder_name: $account_holder_name
        branch_name: $branch_name
        gateway_id: $gateway_id
      }
    ) {
      id
      user_id
      account_list
      created_by
    }
  }
`;

export const UPDATE_USER_ACCOUNTS = gql`
  mutation UpdatePaymentAccount(
    $id: Int
    $prev_account: String
    $new_account: String
    $gateway_id: Int
  ) {
    updatePaymentAccount(
      input: {
        id: $id
        prev_account: $prev_account
        new_account: $new_account
        gateway_id: $gateway_id
      }
    ) {
      id
      user_id
      account_list
      created_by
    }
  }
`;

export const DELETE_PAYMENT_ACCOUNT = gql`
  mutation DeletePaymentAccount($id: Int, $account: String, $gateway_id: Int) {
    deletePaymentAccount(
      input: { id: $id, account: $account, gateway_id: $gateway_id }
    ) {
      id
      user_id
      account_list
      created_by
    }
  }
`;
