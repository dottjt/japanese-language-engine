import {
  PRIMARY_TYPE_NOUN,
  CATEGORY_RESPONSE,

  __TYPENAME_WORDS,
} from '../constants/constants';

export const wordYes = {
  japanese: 'はい',
  english: 'yes',
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_RESPONSE ],
  meta: {},
  __typename: __TYPENAME_WORDS,
};

export const responseArray = [
  wordYes,
];