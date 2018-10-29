import gql from 'graphql-tag';

// const sentenceDisplayOptions = gql`
//   sentenceDisplayOptions @client {
//     toggleSentenceStats 
//   }
// `;

// const sentenceStats = gql`
//   sentenceStats @client {
//     polarityHover
//     nounPastHover
//     selectedExerciseNumber
//   }
// `;

// const nouns = gql`
//   nouns @client {
//     japanese @client {
//       kanji
//       # hiragana
//       # furigana
//     }
//     english @client {
//       present
//       past
//     }
//     primaryType
//     category
//     meta @client {
//       verbType
//     }
//   }
// `;

export const GET_EXERCISES = gql`{
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
}`;

export const GET_NOUNS = gql`{
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
}`

export const GET_ALL_WORDS_AND_OPTIONS = gql`{
  
  sentenceDisplayOptions @client {
    toggleSentenceStats
    toggleSentenceOrder
  }

  sentenceStats @client {
    nounPolitenessHover
    nounPastHover
    questionHover    
    selectedExerciseNumber
  }

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
}`;

// ${sentenceDisplayOptions}
// ${sentenceStats}
// ${nouns}
// ${exercises}
