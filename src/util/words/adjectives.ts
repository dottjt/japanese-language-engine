import {
  PRIMARY_TYPE_ADJECTIVE,
  CATEGORY_FOOD,

  __TYPENAME_WORDS,
} from '../constants/constants';

export const wordDelicious = {
  japanese: 'おいしい',
  english: 'delicious',
  primaryType: PRIMARY_TYPE_ADJECTIVE,
  category: [ CATEGORY_FOOD ],
  meta: {},
  __typename: __TYPENAME_WORDS,
};

export const wordLike = {
  japanese: '好き',
  english: 'like',
  primaryType: PRIMARY_TYPE_ADJECTIVE,
  category: [ CATEGORY_FOOD ],
  meta: {},
  __typename: __TYPENAME_WORDS,
};

export const adjectiveArray = [
  wordDelicious,
  wordLike,
];
