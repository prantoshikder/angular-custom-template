import gql from 'graphql-tag';

export const OTP_VERIFY_MONEY_REQUEST = gql`
  mutation AcceptRequest($id: Int!, $otp: String) {
    acceptRequest(input: { id: $id, otp: $otp }) {
      message
      transaction_id
      status
      rejected_date
      remarks
    }
  }
`;
