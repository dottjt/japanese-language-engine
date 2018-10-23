import {
  PRIMARY_TYPE_NOUN,
  CATEGORY_RESPONSE,

  __TYPENAME_WORDS,
  __TYPENAME_META,
  __TYPENAME_JAPANESE,
  __TYPENAME_ENGLISH,
} from '../constants/wordConstants';

export const wordYes = {
  japanese: { 
    kanji: 'はい',
    // hiragana: 'はい',
    // furigana: 'hai',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'yes',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_RESPONSE ],
  meta: {
    verbType: 'NA',  
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORDS,
};

export const responseArray = [
  wordYes,
];