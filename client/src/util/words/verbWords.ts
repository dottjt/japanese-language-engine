import {
  PRIMARY_TYPE_VERB,
  CATEGORY_FOOD,
  CATEGORY_DRINK,

  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,

  __TYPENAME_WORDS,
} from '../constants/wordConstants';

export const wordEat = {
  japanese: '食べる',
  english: 'eat',
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_FOOD ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  },
  __typename: __TYPENAME_WORDS,
};

export const wordDrink = {
  japanese: '飲む',
  english: 'drink',
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_DRINK ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_U,
  },
  __typename: __TYPENAME_WORDS,
};

export const verbArray = [
  wordEat,
  wordDrink,
];