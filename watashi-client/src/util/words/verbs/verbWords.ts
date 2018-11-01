import {
  PRIMARY_TYPE_VERB,
  CATEGORY_FOOD,
  CATEGORY_DRINK,

  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
} from '../../constants/wordConstants';

import {
  __TYPENAME_WORD,
  __TYPENAME_META,
  __TYPENAME_ENGLISH,
  __TYPENAME_JAPANESE,
} from '../../constants/typeNameConstants';

export const wordEat = {
  japanese: { 
    kanji: '食べる',
    // hiragana: 'たべる',
    // furigana: 'taberu',
    __typename: __TYPENAME_JAPANESE,
  },
  english: { 
    present: 'eat',
    past: 'ate',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_FOOD ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_RU,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

export const wordDrink = {
  japanese: { 
    kanji: '飲む',
    // hiragana: 'のむ',
    // furigana: 'nomu',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'drink',
    past: 'drank',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_DRINK ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_U,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

export const wordDo = {
  japanese: { 
    kanji: 'する',
    // hiragana: 'する',
    // furigana: 'suru',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'do',
    past: 'did',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_FOOD ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_RU,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

export const wordCome = {
  japanese: { 
    kanji: '来る',
    // hiragana: 'くる',
    // furigana: 'suru',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'come',
    past: 'came',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_FOOD ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_RU,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};



export const verbArray = [
  wordEat,
  wordDrink,
  wordDo,
];