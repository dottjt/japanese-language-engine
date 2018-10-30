import gql from 'graphql-tag';

// const sentenceDisplayOptions = gql`
//   sentenceDisplayOptions @client {
//     toggleSentenceStats
//     toggleSentenceOrder
//   }
// `;

// const sentenceStats = gql`
//   sentenceStats @client {
//     polarityHover
//     politenessHover
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
      categoryEnding @client {
        wordArray
        wordType
      }
      nounEnding @client {
        wordArray
        wordType
      }
      topicParticle @client {
        wordArray
        wordType
      }
      tense @client {
        wordArray
        wordType
      }
      polarity @client {
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
    toggleSentenceHide
  }

  sentenceStats @client {
    politenessHover
    polarityTenseHover
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
      categoryEnding @client {
        wordArray
        wordType
      }
      tense @client {
        wordArray
        wordType
      }
      polarity @client {
        wordArray
        wordType
      }
      topicParticle @client {
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
