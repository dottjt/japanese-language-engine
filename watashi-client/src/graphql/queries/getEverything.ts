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
  
  preSentenceContext @client {
    topicPosition
    topicDestination
    eventDirection
    eventOccurance
    eventDuration
    subjectConnection
    subjectRole
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
      nounType
      nounPluralType
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
          nounType
          nounPluralType
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
          nounType
          nounPluralType
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
      selectedTheme
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
