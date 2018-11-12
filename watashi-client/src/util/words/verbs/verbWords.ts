import {
  PRIMARY_TYPE_VERB,
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_HUMAN_ACTION,

  SENTENCE_TYPE_VERB_TYPE_RU,
  // SENTENCE_TYPE_VERB_TYPE_U,
} from '../../constants/wordConstants';

import { createWord } from '../utilWord';

export const wordEat = createWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  category: [ CATEGORY_FOOD, CATEGORY_HUMAN_ACTION ],
  kanji: '食べる',
  hiragana: 'たべる',
  furigana: 'taberu',
  present: 'eat',
  past: 'ate',
});

export const wordSleep = createWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  category: [ CATEGORY_HUMAN_ACTION ],
  kanji: '寝る',
  hiragana: 'ねる',
  furigana: 'neru',
  present: 'sleep',
  past: 'slept',
});

export const wordDrink = createWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  category: [ CATEGORY_DRINK, CATEGORY_HUMAN_ACTION ],
  kanji: '飲む',
  hiragana: 'のむ',
  furigana: 'nomu',
  present: 'drink',
  past: 'drank',
});

export const wordSee = createWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  category: [ CATEGORY_HUMAN_ACTION ],
  kanji: '見る',
  hiragana: 'みる',
  furigana: 'miru',
  present: 'see',
  past: 'saw',
});

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



const verbArray = [
  wordEat,
  wordDrink,
  wordSleep,
  wordSee,
  // wordLook,
  // wordDo,
];

export default verbArray;