import gql from 'graphql-tag';

const GET_EVERYTHING = gql`{
  user @client {
    username
    email
    thumbUrl

    accessToken
    idToken
    expiresAt
  }

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
    themes
  }
  
  preModifiers @client {
    topicNo
    subjectNo
    topicAdjective
    topicAdverb
    subjectAdjective
    subjectAdverb
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
      themes
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

export default GET_EVERYTHING;
