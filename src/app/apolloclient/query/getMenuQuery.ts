import gql from 'graphql-tag';

export const GET_MENUS = gql`
  query GetAllMenusTwo {
    getAllMenusTwo {
      id
      menu_name
      icon_name_web
      is_active
      seq_number
      remarks
      childrens {
        id
        menu_name
        icon_name_web
        bit_routes {
          id
          route_name_app
          route_name_web
        }
      }
      bit_routes {
        id
        route_name_app
        route_name_web
      }
    }
  }
`;
