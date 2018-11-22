import {
  __TYPENAME_NOUN,
  __TYPENAME_VERB,
  __TYPENAME_ENGLISH_NOUN,
  __TYPENAME_JAPANESE_NOUN,
  __TYPENAME_ENGLISH_VERB,
  __TYPENAME_JAPANESE_VERB,
} from '../constants/typeNameConstants';

export const createNounWord = ({ nounWordType, nounPluralType, nounCategory, kanji, singular }: any): Util.Noun => ({
  nounJapanese: { 
    kanji,
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

export const createVerbWord = ({ verbJapaneseType, verbCategory, kanji, infinitive, presentParticiple, preterite, simplePresentContinuousHeSheIt, pastParticiple }: any): Util.Verb => ({
  verbJapanese: {
    kanji,
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
