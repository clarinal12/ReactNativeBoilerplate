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

export const NEW_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $quantity: Float!
    $price: Float!
  ) {
    createProduct(
      name: $name
      description: $description
      quantity: $quantity
      price: $price
    ) {
      id
      name
      description
      quantity
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      description
      quantity
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;

export default {};
