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
        tense @client {
          wordArray
          wordType
        }
        polarity @client {
          wordArray
          wordType
        }
        indefiniteArticle @client {
          wordArray
          wordType
        }
        word @client {
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
      japaneseSentence @client {
        type
        nounCategoryEnding @client {
          wordArray
          wordType
        }
        nounEnding @client {
          wordArray
          wordType
        }
        nounTopicParticle @client {
          wordArray
          wordType
        }
        conjugatedVerb @client {
          wordArray
          wordType
        }
        word @client {
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
