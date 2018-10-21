import {
  PRIMARY_TYPE_NOUN,
  CATEGORY_RESPONSE,

  __TYPENAME_WORDS,
  __TYPENAME_META,
} from '../constants/wordConstants';

export const wordYes = {
  japanese: 'はい',
  english: 'yes',
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