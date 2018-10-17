import gql from "graphql-tag";

export const GET_ALL_OPTIONS_QUERY = gql`
  {
    options {
      sentenceType @client
      politeness @client
      variation @client
    }
  }
`;
