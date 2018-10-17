import gql from "graphql-tag";

export const GET_ALL_WORDS_AND_OPTIONS = gql`
  {
    options {
      sentenceType @client
      politeness @client
      variation @client
    }

    nouns @client {
      japanese
      english
      primaryType
      category
    }
  }
`;
