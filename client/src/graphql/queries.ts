import gql from "graphql-tag";

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

    sentenceDisplayOptions @client {
      showSentenceStats 
    }

    sentenceStats @client {
      nounPolarityHover
      nounPastHover
      selectedExerciseNumber
    }

    exercises @client {
      englishSentence
      japaneseSentence
      options
    }
  }
`;
