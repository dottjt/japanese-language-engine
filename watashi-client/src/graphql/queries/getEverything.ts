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
    nounJapanese @client {
      kanji
    }
    nounEnglish @client {
      singular
    }
    nounCategory
    nounWordType
    nounPluralType
  }

  exercises @client {
    englishSentence @client {
      type
      sentenceType

      # for nouns
      nounDeclension @client {
        wordArray
        wordType
      }
      nounTense @client {
        wordArray
        wordType
      }
      nounPolarity @client {
        wordArray
        wordType
      }
      nounIndefiniteArticle @client {
        wordArray
        wordType
      }

      # for verbs
      verbConjugation @client {
        wordArray
        wordType
      }
      verbPolarity @client {
        wordArray
        wordType
      }
    }

    japaneseSentence @client {
      type
      sentenceType

      # for nouns
      nounDeclension @client {
        wordArray
        wordType
      }
      nounTense @client {
        wordArray
        wordType
      }
      nounPolarity @client {
        wordArray
        wordType
      }
      nounCategoryEnding @client {
        wordArray
        wordType
      }
      nounTopicParticle @client {
        wordArray
        wordType
      }

      #  for verbs
      verbStem @client {
        wordArray
        wordType
      }
      verbPolarity @client {
        wordArray
        wordType
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

    sentenceContext @client {
      topicPosition
      topicDestination
      eventDirection

      eventOccurance
      eventDuration
      eventPOV
      
      subjectConnection
      subjectRole
    }
  }
}`;

export default GET_EVERYTHING;
