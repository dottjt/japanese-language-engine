import gql from 'graphql-tag';

const GET_NOUNS_VERBS_AND_PRE_OPTIONS = gql`{
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

  verbs @client {
    verbJapanese @client {
      kanji
    }
    verbEnglish @client {
      infinitive
      presentParticiple
      pastParticiple
      simplePresentContinuousHeSheIt
    }
    verbJapaneseType
    verbCategory
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
}`

export default GET_NOUNS_VERBS_AND_PRE_OPTIONS;
