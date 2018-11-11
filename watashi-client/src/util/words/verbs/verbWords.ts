import {
  PRIMARY_TYPE_VERB,
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_HUMAN_ACTION,

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
  category: [ CATEGORY_FOOD, CATEGORY_HUMAN_ACTION ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_RU,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

// sleep on 
export const wordSleep = {
  japanese: {
    kanji: '寝る',
    // hiragana: 'ねる',
    // furigana: 'neru',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'sleep',
    past: 'slept',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_HUMAN_ACTION ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_RU,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

// drink the
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
  category: [ CATEGORY_DRINK, CATEGORY_HUMAN_ACTION ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_U,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

// see the
export const wordSee = {
  japanese: { 
    kanji: '見る',
    // hiragana: 'みる',
    // furigana: 'miru',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'see',
    past: 'saw',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_HUMAN_ACTION ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_U,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

// look at 
export const wordLook = {
  japanese: { 
    kanji: '見る',
    // hiragana: 'みる',
    // furigana: 'miru',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'look at',
    past: 'looked at',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_VERB,
  category: [ CATEGORY_HUMAN_ACTION ],
  meta: {
    verbType: SENTENCE_TYPE_VERB_TYPE_U,
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

// you have transitive, and intransitive.

// export const wordDo = {
//   japanese: { 
//     kanji: 'する',
//     // hiragana: 'する',
//     // furigana: 'suru',
//     __typename: __TYPENAME_JAPANESE,
//   },
//   english: {
//     present: 'do',
//     past: 'did',
//     __typename: __TYPENAME_ENGLISH,
//   },
//   primaryType: PRIMARY_TYPE_VERB,
//   category: [ CATEGORY_FOOD ],
//   meta: {
//     verbType: SENTENCE_TYPE_VERB_TYPE_RU,
//     __typename: __TYPENAME_META,
//   },
//   __typename: __TYPENAME_WORD,
// };

// export const wordCome = {
//   japanese: { 
//     kanji: '来る',
//     // hiragana: 'くる',
//     // furigana: 'suru',
//     __typename: __TYPENAME_JAPANESE,
//   },
//   english: {
//     present: 'come',
//     past: 'came',
//     __typename: __TYPENAME_ENGLISH,
//   },
//   primaryType: PRIMARY_TYPE_VERB,
//   category: [ CATEGORY_FOOD ],
//   meta: {
//     verbType: SENTENCE_TYPE_VERB_TYPE_RU,
//     __typename: __TYPENAME_META,
//   },
//   __typename: __TYPENAME_WORD,
// };



export const verbArray = [
  wordEat,
  wordDrink,
  wordSee,
  wordLook,
  // wordDo,
];