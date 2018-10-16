import {
  PRIMARY_TYPE_ADJECTIVE,
  CATEGORY_FOOD,

  __TYPENAME_WORDS,
} from '../constants';

export const wordDelicious = {
  japanese: 'おいしい',
  english: 'delicious',
  primaryType: PRIMARY_TYPE_ADJECTIVE,
  category: [ CATEGORY_FOOD ],
  typeMeta: {},
  __typename: __TYPENAME_WORDS,
};

export const wordLike = {
  japanese: '好き',
  english: 'like',
  primaryType: PRIMARY_TYPE_ADJECTIVE,
  category: [ CATEGORY_FOOD ],
  typeMeta: {},
  __typename: __TYPENAME_WORDS,
};

export const adjectiveArray = [
  wordDelicious,
  wordLike,
];
