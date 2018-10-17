import {
  PRIMARY_TYPE_VERB,
  CATEGORY_FOOD,
  CATEGORY_DRINK,

  VERB_TYPE_RU,
  VERB_TYPE_U,

  __TYPENAME_WORDS,
} from '../constants/constants';

export const wordEat = {
  japanese: '食べる',
  english: 'eat',
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_FOOD ],
  meta: {
    verbType: VERB_TYPE_RU,
  },
  __typename: __TYPENAME_WORDS,
};

export const wordDrink = {
  japanese: '飲む',
  english: 'drink',
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_DRINK ],
  meta: {
    verbType: VERB_TYPE_U,
  },
  __typename: __TYPENAME_WORDS,
};

export const verbArray = [
  wordEat,
  wordDrink,
];