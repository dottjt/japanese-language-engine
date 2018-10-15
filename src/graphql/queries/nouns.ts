import gql from 'graphql-tag';

export const GET_ALL_NOUNS = gql`{
  nouns @client {
    japanese
    english
    primaryType
    category
  }
}`