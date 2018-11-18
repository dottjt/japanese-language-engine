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
    eventPOV
    
    subjectConnection
    subjectRole  
  }
}`

export default GET_NOUNS_VERBS_AND_PRE_OPTIONS;
