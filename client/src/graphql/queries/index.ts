import gql from "graphql-tag";

export const GET_ALL_SENTENCE_DISPLAY_OPTIONS_QUERY = gql`
  {
    sentenceDisplayOptions {
      showSentenceHints @client
    }
  }
`;

export const GET_ALL_WORDS_AND_OPTIONS = gql`{
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
  }
`;
