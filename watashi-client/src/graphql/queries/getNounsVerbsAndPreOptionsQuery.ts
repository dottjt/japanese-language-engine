import gql from 'graphql-tag';

const GET_NOUNS_VERBS_ADJECTIVES = gql`{
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
}`

export default GET_NOUNS_VERBS_ADJECTIVES;
