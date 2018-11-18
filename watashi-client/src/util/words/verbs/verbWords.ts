import {
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_HUMAN_ACTION,

  SENTENCE_TYPE_VERB_TYPE_RU,
  // SENTENCE_TYPE_VERB_TYPE_U,

  // DIRECTION_VERB,
} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';

export const wordEat = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU, 
  verbCategory: [ CATEGORY_FOOD, CATEGORY_HUMAN_ACTION ], 
  kanji: '食べる',
  infinitive: 'eat',
  presentParticiple: 'eating',
  pastParticiple: 'ate',
  simplePresentContinuousHeSheIt: 'eats', 
});

export const wordSleep = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_HUMAN_ACTION ],
  kanji: '寝る',
  infinitive: 'sleep',
  presentParticiple: 'sleeping',
  pastParticiple: 'slept',
  simplePresentContinuousHeSheIt: 'sleeps', 
});

export const wordDrink = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_DRINK, CATEGORY_HUMAN_ACTION ],
  kanji: '飲む',
  infinitive: 'drink',
  presentParticiple: 'drinking',
  pastParticiple: 'drank',
  simplePresentContinuousHeSheIt: 'drinks', 
});


export const wordSee = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_HUMAN_ACTION ],
  kanji: '見る',
  infinitive: 'see',
  presentParticiple: 'seeing',
  pastParticiple: 'saw',
  simplePresentContinuousHeSheIt: 'sees', 
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