import gql from 'graphql-tag';

export const GET_ALL_WORDS_AND_OPTIONS = gql`{
  options {
    sentenceType @client
    sentencePoliteness @client
    sentenceVariation @client
  }

  nouns @client {
    japanese
    english
    primaryType
    category
  }
}`
