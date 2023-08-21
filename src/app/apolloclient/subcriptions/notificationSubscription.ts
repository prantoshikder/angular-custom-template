import gql from 'graphql-tag';

export const GET_NOTIFICATION_COUNT_SUBSCRIPTION = gql`
  subscription NotificationCount($user_id: Int) {
    notificationCount(input: { user_id: $user_id }) {
      count
    }
  }
`;
export const GET_NOTIFICATION_SUBSCRIPTION = gql`
  subscription Notification($user_id: Int) {
    notification(input: { user_id: $user_id }) {
      id
      user_id
      user_id_from
      bulk_users
      type_id
      count
      title
      message
      status
      created_date
      updated_date
      created_by
      updated_by
      users_notifications_user_id_fromTousers {
        id
        user_type_id
        user_type
        profile_id
        company_id
        mobile
        email
        parent_user_id
        email_verified_date
        mobile_verified_date
        is_otp_verified
        email_otp
        mobile_otp
        otp_secret
        status
        is_default
        promo_codes
        approved_by
        approved_date
        created_by
        created_date
        user_profile {
          id
          user_id
          mobile
          email
          user_type_id
          first_name
          last_name
          gender
          dob
          nid_number
          passport_number
          driving_lic_number
          address
          country_id
          state
          zip_code
          district
          avatar
          self_image
          nid_front
          nid_back
          passport
          driving_lic_front
          driving_lic_back
          id_status
          request_date
          accepted_date
          rejected_date
          remarks
        }
        user_types {
          id
          user_type
        }
      }
    }
  }
`;
