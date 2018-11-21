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
      topicIntent

      topicProximity
      topicDestination
      eventDirection

      eventOccurance
      eventDuration
      eventPOV

      subjectConnection
      subjectRole
      subjectQuantity
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
        word
        tag
      }

      japaneseSentence @client {
        word
        tag
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
        topicIntent
        
        topicProximity
        topicDestination
        eventDirection

        eventOccurance
        eventDuration
        eventPOV
        
        subjectConnection
        subjectRole
        subjectQuantity
      }
    }
  }
`;

export default GET_EVERYTHING;




// Japanese Union Types

// ... on ConjugatedJapaneseNoun {
//   nounTense @client {
//     wordArray
//     wordType
//   }
//   nounPolarity @client {
//     wordArray
//     wordType
//   }
//   nounCategoryEnding @client {
//     wordArray
//     wordType
//   }
//   nounTopicParticle @client {
//     wordArray
//     wordType
//   }
// }

// ... on ConjugatedJapaneseVerb {
//   verbStem @client {
//     wordArray
//     wordType
//   }
//   verbPolarity @client {
//     wordArray
//     wordType
//   }
// }

// #   ... on ConjugatedEnglishNoun {
//   #     type
//   #     sentenceType
//   #     nounDeclension @client {
//   #       wordArray
//   #       wordType
//   #     }
//   #     nounTense @client {
//   #       wordArray
//   #       wordType
//   #     }
//   #     nounPolarity @client {
//   #       wordArray
//   #       wordType
//   #     }
//   #     nounIndefiniteArticle @client {
//   #       wordArray
//   #       wordType
//   #     }
//   #   }

//   #   ... on ConjugatedEnglishVerb {
//   #     type
//   #     sentenceType
//   #     verbConjugation @client {
//   #       wordArray
//   #       wordType
//   #     }
//   #     verbPolarity @client {
//   #       wordArray
//   #       wordType
//   #     }
//   #   }

//   #   ... on ConjugatedEnglishPreposition {
//   #     type
//   #     sentenceType
//   #     preposition @client {
//   #       wordArray
//   #       wordType
//   #     }
//   #   }