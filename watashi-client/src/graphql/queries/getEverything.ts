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
      politenessArray
      variationArray
      polarityArray
      genderArray
      questionArray
      themesArray
    }
    
    preModifiers @client {
      topicNoArray
      subjectNoArray
      topicAdjectiveArray
      topicAdverbArray
      subjectAdjectiveArray
      subjectAdverbArray
    }
    
    preSentenceContext @client {
      topicIntentArray

      topicProximityArray
      topicDestinationArray
      eventDirectionArray

      eventOccuranceArray
      eventDurationArray
      eventPOVArray

      subjectConnectionArray
      subjectRoleArray
      subjectQuantityArray
    }

    nouns @client {
      nounJapanese @client {
        kanji
        hiragana
      }
      nounEnglish @client {
        singular
      }
      nounCategory
      nounWordType
      nounPluralType
    }

    verbs @client {
      verbJapanese @client {
        kanji
        hiragana
      }
      verbEnglish @client {
        infinitive
        presentParticiple
        preterite
        pastParticiple
        simplePresentContinuousHeSheIt
      }
      verbJapaneseType
      verbCategory
    }

    adjectives @client {
      adjectiveJapanese @client {
        kanji
        hiragana
      }
      adjectiveEnglish @client {
        positive
      }
      adjectiveCategory
      adjectiveType
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
        selectedPoliteness
        selectedVariation
        selectedPolarity
        selectedGender
        selectedQuestion
        selectedTheme
      }

      modifiers @client {
        selectedTopicNo
        selectedSubjectNo
        selectedTopicAdjective
        selectedTopicAdverb
        selectedSubjectAdjective
        selectedSubjectAdverb
      }

      sentenceContext @client {
        selectedTopicIntent
       
        selectedTopicProximity
        selectedTopicDestination
        selectedEventDirection

        selectedEventOccurance
        selectedEventDuration
        selectedEventPOV
       
        selectedSubjectConnection
        selectedSubjectRole
        selectedSubjectQuantity
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