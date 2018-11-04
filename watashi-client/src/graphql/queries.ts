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
      sentenceType
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
      sentenceType
      categoryEnding @client {
        wordArray
        wordType
      }
      verbStem @client {
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
      selectedVariation
      polarity
      tense
      gender
      question
    }

    modifiers @client {
      topicNo
      subjectNo
      topicAdjective
      topicAdverb
      subjectAdjective
      subjectAdverb
    }
  }
}`;

export const GET_NOUNS_AND_PRE_OPTIONS = gql`{
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

export const GET_ALL_WORDS_AND_OPTIONS = gql`{
  
  sentenceDisplayOptions @client {
    toggleSentenceStats
    toggleSentenceOrder
    toggleSentenceHide
  }

  sentenceStats @client {
    topicHover
    subjectHover
    verbHover

    politenessHover
    polarityHover
    tenseHover
    questionHover    
    selectedExerciseNumber
  }

  preOptions @client {
    politeness
    variation
    polarity
    tense
    gender
    question
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
      sentenceType
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
      sentenceType
      categoryEnding @client {
        wordArray
        wordType
      }
      verbStem @client {
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
      selectedVariation
      polarity
      tense
      gender
      question
    }

    modifiers @client {
      topicNo
      subjectNo
      topicAdjective
      topicAdverb
      subjectAdjective
      subjectAdverb
    }
  }
}`;

// ${sentenceDisplayOptions}
// ${sentenceStats}
// ${nouns}
// ${exercises}
