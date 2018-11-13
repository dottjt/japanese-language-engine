import {
  __TYPENAME_WORD,
  __TYPENAME_META,
  __TYPENAME_ENGLISH,
  __TYPENAME_JAPANESE,
} from '../constants/typeNameConstants';

export const createWord = ({ primaryType, verbType, category, kanji, hiragana, furigana, presentTense, presentParticiple, simplePast, pastParticiple }: any) => ({
  japanese: { 
    kanji,
    hiragana,
    furigana,
    __typename: __TYPENAME_JAPANESE,
  },
  english: { 
    presentTense,
    presentParticiple,
    simplePast,
    pastParticiple,
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType,
  category,
  
  meta: {
    verbType,
    // verbPrepositionType,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,

});

