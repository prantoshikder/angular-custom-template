import { gql } from 'graphql-tag';

export const CREATE_KYC = gql`
  mutation CreateKYC(
    $ip: String
    $port: String
    $mac_addres: String
    $login_time: String
    $logout_time: String
    $device_id: String
    $device_os: String
    $device_model: String
    $app_version: String
    $latitude: String
    $longitude: String
  ) {
    createKYC(
      input: {
        ip: $ip
        port: $port
        mac_addres: $mac_addres
        login_time: $login_time
        logout_time: $logout_time
        device_id: $device_id
        device_os: $device_os
        device_model: $device_model
        app_version: $app_version
        latitude: $latitude
        longitude: $longitude
      }
    ) {
      id
      user_id
      devices {
        ip
        port
        mac_addres
        login_time
        logout_time
        device_id
        device_os
        device_model
        app_version
        latitude
        longitude
      }
    }
  }
`;
