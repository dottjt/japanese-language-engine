import {
  PRIMARY_TYPE_VERB,
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_HUMAN_ACTION,

  SENTENCE_TYPE_VERB_TYPE_RU,
  // SENTENCE_TYPE_VERB_TYPE_U,

  DIRECTION_VERB,
} from '../../constants/wordConstants';

import { createWord } from '../utilWord';

export const wordEat = createWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU, // action, transitive
  nounType: 'TODO',
  nounPluralType: 'TODO',
  // verbPrepositionType: 'NA',
  category: [ CATEGORY_FOOD, CATEGORY_HUMAN_ACTION ],
  
  kanji: '食べる',
  hiragana: 'たべる',
  furigana: 'taberu',
  presentTense: 'eat',
  presentParticiple: '',
  simplePast: 'ate',
  pastParticiple: '',
});

export const wordSleep = createWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  nounType: 'TODO',
  nounPluralType: 'TODO',
  // verbPrepositionType: 'NA',
  category: [ CATEGORY_HUMAN_ACTION ],
  kanji: '寝る',
  hiragana: 'ねる',
  furigana: 'neru',
  presentTense: 'sleep',
  // presentParticiple
  simplePast: 'slept',
  // pastParticiple

});

export const wordDrink = createWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  nounType: 'TODO',
  nounPluralType: 'TODO',
  // verbPrepositionType: 'NA',
  category: [ CATEGORY_DRINK, CATEGORY_HUMAN_ACTION ],
  kanji: '飲む',
  hiragana: 'のむ',
  furigana: 'nomu',
  presentTense: 'drink',
  // presentParticiple
  simplePast: 'drank',
  // pastParticiple
});

export const wordSee = createWord({
  primaryType: PRIMARY_TYPE_VERB,
  verbType: SENTENCE_TYPE_VERB_TYPE_RU,
  nounType: 'TODO',
  nounPluralType: 'TODO',
  // verbPrepositionType: DIRECTION_VERB,
  category: [ CATEGORY_HUMAN_ACTION ],
  kanji: '見る',
  hiragana: 'みる',
  furigana: 'miru',
  presentTense: 'see',
  // presentParticiple
  simplePast: 'saw',
  // pastParticiple
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
//     presentTense: 'do',
//     simplePast: 'did',
//     __typename: __TYPENAME_ENGLISH,
//   },
//   primaryType: PRIMARY_TYPE_VERB,
//   category: [ CATEGORY_FOOD ],
//   meta: {
//     verbType: SENTENCE_TYPE_VERB_TYPE_RU,
// verbPrepositionType: '',
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
//     presentTense: 'come',
//     simplePast: 'came',
//     __typename: __TYPENAME_ENGLISH,
//   },
//   primaryType: PRIMARY_TYPE_VERB,
//   category: [ CATEGORY_FOOD ],
//   meta: {
//     verbType: SENTENCE_TYPE_VERB_TYPE_RU,
// verbPrepositionType: '',
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