import gql from 'graphql-tag';

export const SET_AUTHENTICATED_USER = gql`
  mutation SetAuthenticatedUser($user: AuthenticatedUserInput!) {
    setAuthenticatedUser(user: $user) @client {
      id
      firstName
      lastName
      email
      expiresAt
    }
  }
`;

export const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authenticatedUser @client {
      id
      firstName
      lastName
      email
      expiresAt
    }
  }
`;

export const REMOVE_FROM_WISHLIST = gql`
  mutation RemoveFromWishlist($productHandle: String!) {
    removeFromWishlist(productHandle: $productHandle) @client {
      id
      handle
      image
      title
      price
    }
  }
`;

export const ADD_TO_WISHLIST = gql`
  mutation AddToWishlist($product: WishlistProductInput!) {
    addToWishlist(product: $product) @client {
      id
      handle
      image
      title
      price
    }
  }
`;

export const GET_WISHLIST = gql`
  query GetWishlist {
    wishlist @client {
      id
      handle
      image
      title
      price
    }
  }
`;
