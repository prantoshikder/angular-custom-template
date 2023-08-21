import gql from 'graphql-tag';

export const CREATE_TARIFF = gql`
  mutation ($user_id: Int!, $tariff: JSON!) {
    createTariff(input: { user_id: $user_id, tariff: $tariff }) {
      status_code
      message
      data {
        id
        tariff
        is_active
      }
    }
  }
`;

export const UPDATE_TARIFF = gql`
  mutation (
    $user_id: Int
    $rate: Float
    $unit: UnitType
    $parent_id: Int
    $user_type_id: Int
    $special_case_on_sub_affiliate: Special_case_on_sub_affiliate
    $special_case: Special_case
  ) {
    updateTariff(
      input: {
        user_id: $user_id
        rate: $rate
        unit: $unit
        parent_id: $parent_id
        user_type_id: $user_type_id
        special_case_on_sub_affiliate: $special_case_on_sub_affiliate
        special_case: $special_case
      }
    ) {
      message
      status_code
      data {
        id
        tariff
      }
    }
  }
`;

export const UPDATE_TARIFF_STATUS = gql`
  mutation (
    $user_id: Int
    $is_active: Int
    $parent_id: Int
    $user_type_id: Int
  ) {
    updateTariff(
      input: {
        user_id: $user_id
        is_active: $is_active
        parent_id: $parent_id
        user_type_id: $user_type_id
      }
    ) {
      message
      status_code
      data {
        id
        is_active
        tariff
      }
    }
  }
`;
