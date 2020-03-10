import gql from 'graphql-tag';

export const GET_HIGHEST_PRICE = gql`
  query GetHighestPrice($presentmentCurrencies: [CurrencyCode!]) {
    products(first: 1, sortKey: PRICE, reverse: true) {
      edges {
        node {
          presentmentPriceRanges(
            first: 1
            presentmentCurrencies: $presentmentCurrencies
          ) {
            edges {
              node {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_RESULTS = gql`
  query SearchResults(
    $presentmentCurrencies: [CurrencyCode!]
    $searchText: String!
    $sortKey: ProductSortKeys
    $reverse: Boolean
  ) {
    products(
      first: 10
      query: $searchText
      sortKey: $sortKey
      reverse: $reverse
    ) {
      edges {
        cursor
        node {
          id
          title
          availableForSale
          productType
          handle
          presentmentPriceRanges(
            first: 1
            presentmentCurrencies: $presentmentCurrencies
          ) {
            edges {
              node {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
          images(first: 1) {
            edges {
              node {
                id
                originalSrc
                transformedSrc
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                presentmentPrices(
                  first: 1
                  presentmentCurrencies: $presentmentCurrencies
                ) {
                  edges {
                    node {
                      compareAtPrice {
                        amount
                        currencyCode
                      }
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
          onlineStoreUrl
        }
      }
    }
  }
`;
