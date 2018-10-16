import {
  PRIMARY_TYPE_VERB,
  CATEGORY_FOOD,
  CATEGORY_DRINK,

  __TYPENAME_WORDS,
} from '../constants';

export const wordEat = {
  japanese: '食べる',
  english: 'eat',
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_FOOD ],
  typeMeta: {},
  __typename: __TYPENAME_WORDS,
};

export const wordDrink = {
  japanese: '飲む',
  english: 'drink',
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_DRINK ],
  typeMeta: {},
  __typename: __TYPENAME_WORDS,
};

export const verbArray = [
  wordEat,
  wordDrink,
];