import gql from 'graphql-tag';

const GET_NOUNS_AND_PRE_OPTIONS = gql`{
  nouns @client {
    japanese @client {
      kanji
      # hiragana
      # furigana
    }
    english @client {
      present
      past
    }
    primaryType
    category
    meta @client {
      verbType
    }
  }

  preOptions @client {
    politeness
    variation
    polarity
    tense
    gender
    question
  }
}`

export default GET_NOUNS_AND_PRE_OPTIONS;
