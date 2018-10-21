import {
  PRIMARY_TYPE_NOUN,

  CATEGORY_HUMAN,
  CATEGORY_ANIMAL,

  __TYPENAME_WORDS,
  __TYPENAME_META,
} from '../constants/wordConstants';

// HUMAN

export const wordPerson = {
  japanese: '人',
  english: 'person',
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_HUMAN ],
  meta: {
    verbType: 'NA',  
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORDS,
};


// ANIMAL

export const wordCat = {
  japanese: '猫',
  english: 'cat',
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_ANIMAL ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORDS,
};

export const wordDog = {
  japanese: '犬',
  english: 'dog',
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_ANIMAL ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORDS,
};

export const nounArray = [
  wordPerson,
  wordCat,
  wordDog,
];
