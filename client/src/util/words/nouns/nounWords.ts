import {
  PRIMARY_TYPE_NOUN,

  CATEGORY_HUMAN,
  CATEGORY_ANIMAL,
  CATEGORY_LOCATION,
} from '../../constants/wordConstants';

import {
  __TYPENAME_WORD,
  __TYPENAME_META,
  __TYPENAME_ENGLISH,
  __TYPENAME_JAPANESE,
} from '../../constants/typeNameConstants';

// HUMAN

export const wordPerson = {
  japanese: { 
    kanji: '人',
    // hiragana: 'ひと',
    // furigana: 'hito',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'person',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_HUMAN ],
  meta: {
    verbType: 'NA',  
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};


// ANIMAL

export const wordCat = {
  japanese: { 
    kanji: '猫',
    // hiragana: 'ねこ',
    // furigana: 'neko',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'cat',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_ANIMAL ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

export const wordDog = {
  japanese: { 
    kanji: '犬',
    // hiragana: 'いぬ',
    // furigana: 'inu',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'dog',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_ANIMAL ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};


// LOCATION

export const wordHome = {
  japanese: { 
    kanji: '家',
    // hiragana: 'いえ',
    // furigana: 'ie',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'home',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_LOCATION ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};







export const nounArray = [
  wordPerson,
  wordCat,
  wordDog,
];
