import gql from "graphql-tag";

export const PRODUCTS = gql`
  query Products {
    products {
      id
      name
      description
      quantity
      price
    }
  }
`;

export default {};
