import {
  PRIMARY_TYPE_ADJECTIVE,
  CATEGORY_FOOD,

  __TYPENAME_WORDS,
  __TYPENAME_META,
  __TYPENAME_ENGLISH,
  __TYPENAME_JAPANESE,
} from '../../constants/wordConstants';

export const wordDelicious = {
  japanese: { 
    kanji: 'おいしい',
    // hiragana: 'おいしい',
    // furigana: 'oishi',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'delicious',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_ADJECTIVE,
  category: [ CATEGORY_FOOD ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORDS,
};

export const wordLike = {
  japanese: { 
    kanji: '好き',
    // hiragana: 'すき',
    // furigana: 'suki',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'like',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_ADJECTIVE,
  category: [ CATEGORY_FOOD ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORDS,
};

export const adjectiveArray = [
  wordDelicious,
  wordLike,
];
