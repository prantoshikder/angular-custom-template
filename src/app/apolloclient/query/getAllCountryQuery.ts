import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
  query GetCountries {
    getCountries {
      id
      country_code
      country_name
      country_short_name
      is_active
      currency_name
      currency_symbol
    }
  }
`;

export const GET_SELECTED_COUNTRIES = gql`
  query GetAdminSelectedCountry {
    getAdminSelectedCountry {
      id
      country_code
      country_name
      country_short_name
      is_active
      is_selected_by_admin
      is_selected_by_user
      currency_name
      currency_symbol
      remarks
      country_flag
      sequence_number
    }
  }
`;
