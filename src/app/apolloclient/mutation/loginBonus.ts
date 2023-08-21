import { gql } from 'graphql-tag';

export const DAILY_LOGIN_BONUS_ACTIVITY_CHECK = gql`
  mutation DailyLoginBonusActivityCheck($date: Date) {
    DailyLoginBonusActivityCheck(date: $date)
  }
`;
