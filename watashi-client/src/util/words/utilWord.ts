import {
  __TYPENAME_NOUN,
  __TYPENAME_VERB,
  __TYPENAME_ADJECTIVE,
  __TYPENAME_ENGLISH_NOUN,
  __TYPENAME_JAPANESE_NOUN,
  __TYPENAME_ENGLISH_VERB,
  __TYPENAME_JAPANESE_VERB,
  __TYPENAME_JAPANESE_ADJECTIVE,
  __TYPENAME_ENGLISH_ADJECTIVE,
} from '../constants/typeNameConstants';

export const createNounWord = ({ nounWordType, nounPluralType, nounCategory, kanji, hiragana, singular }: any): Util.Noun => ({
  nounJapanese: { 
    kanji,
    hiragana,
    __typename: __TYPENAME_JAPANESE_NOUN,
  },
  nounEnglish: { 
    singular,
    __typename: __TYPENAME_ENGLISH_NOUN,
  },
  nounCategory,
  nounWordType,
  nounPluralType,
  __typename: __TYPENAME_NOUN,
});

export const createVerbWord = ({ verbJapaneseType, verbCategory, kanji, hiragana, infinitive, presentParticiple, preterite, simplePresentContinuousHeSheIt, pastParticiple }: any): Util.Verb => ({
  verbJapanese: {
    kanji,
    hiragana,
    __typename: __TYPENAME_JAPANESE_VERB,
  },
  verbEnglish: {
    infinitive,
    presentParticiple,
    pastParticiple,
    simplePresentContinuousHeSheIt,
    preterite,
    __typename: __TYPENAME_ENGLISH_VERB,
  },
  verbCategory,
  verbJapaneseType,
  __typename: __TYPENAME_VERB,
});

export const createAdjectiveWord = ({ adjectiveType, adjectiveCategory, kanji, hiragana, positive, comparative, superlative }: any): Util.Adjective => ({
  adjectiveJapanese: {
    kanji,
    hiragana,
    __typename: __TYPENAME_JAPANESE_ADJECTIVE,
  },
  adjectiveEnglish: {
    positive,
    comparative,
    superlative, 
    __typename: __TYPENAME_ENGLISH_ADJECTIVE,
  },
  adjectiveCategory,
  adjectiveType,
  __typename: __TYPENAME_ADJECTIVE,
});
