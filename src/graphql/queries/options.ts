import gql from 'graphql-tag';

export const GET_ALL_OPTIONS_QUERY = gql`{
  options {
    sentenceType @client
    sentencePoliteness @client
    sentenceVariation @client
  }
}`