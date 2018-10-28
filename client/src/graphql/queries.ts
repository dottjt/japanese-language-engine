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
      polarityHover
      nounPastHover
      selectedExerciseNumber
    }

    exercises @client {
      englishSentence @client {
        type
        # tense
        # polarity
        # indefiniteArticle
        noun
        # verbPolarity
        # verb
      }
      japaneseSentence @client {
        type
      }
      options @client {
        politeness
        variation
        polarity
        tense
        gender
        question
      }
    }
  }
`;
