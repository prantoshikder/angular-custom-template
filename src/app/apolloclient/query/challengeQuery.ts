import gql from 'graphql-tag';

export const GET_CHALLENGE_BY_USER = gql`
  query GetChallengesByUser {
    getChallengesByUser {
      id
      challenge_type_id
      claimable_points
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
        challenge_duration_units {
          id
          duration_unit
        }
      }
    }
  }
`;
