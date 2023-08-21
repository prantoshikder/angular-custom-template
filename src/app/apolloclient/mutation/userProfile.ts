import gql from 'graphql-tag';

export const UPDATE_USER_PROFILE = gql`
  mutation CreateUserProfile(
    $first_name: String
    $last_name: String
    $gender: String
    $dob: String
    $address: String
    $country_id: Int
    $state: String
    $zip_code: Int
    $district: String
  ) {
    createUserProfile(
      input: {
        first_name: $first_name
        last_name: $last_name
        gender: $gender
        dob: $dob
        address: $address
        country_id: $country_id
        state: $state
        zip_code: $zip_code
        district: $district
      }
    ) {
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
      level_number
      level_name
      badge
    }
  }
`;

export const UPLOAD_AVATAR = gql`
  mutation singleUploadAvatar($file: Upload!) {
    singleUploadAvatar(file: $file) {
      success
      avatar
      message
    }
  }
`;
export const UPLOAD_DOCUMENT_TYPE = gql`
  mutation uploadID($files: [Upload], $id_type: String, $id: String) {
    uploadID(files: $files, input: { id_type: $id_type, id: $id }) {
      success
      avatar
      message
      errorStatus
      error
      token
    }
  }
`;
