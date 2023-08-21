import { gql } from 'graphql-tag';

export const CLAIM_DAILY_LOGIN_POINTS = gql`
  mutation ClaimDailyLoginPoints($day: Int) {
    claimDailyLoginPoints(day: $day)
  }
`;

export const REDEEM_POINTS_TO_MONEY = gql`
  mutation RedeemPointsToMoneyViewPackage($package_id: Int!) {
    redeemPointsToMoneyViewPackage(input: { package_id: $package_id }) {
      id
      package_name
      package_points
      money_amount
      status
      created_date
      created_by
      updated_by
      updated_date
      is_eligible_to_redeem
    }
  }
`;

export const CLAIM_DEPOSIT_CHALLENGE_REWARD = gql`
  mutation ClaimDepositChallengeReward($id: Int) {
    claimDepositChallengeReward(input: { id: $id }) {
      id
      challenge_type_id
      challenge_count
      user_id
      is_active
      challenge_types {
        id
        type
        status
        duration
        duration_unit_id
        challenge_type_count
        created_by
      }
    }
  }
`;
