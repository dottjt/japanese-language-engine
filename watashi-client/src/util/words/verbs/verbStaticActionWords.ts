import {
  CATEGORY_FOOD,
  CATEGORY_DRINK,

  // CATEGORY_LOCATION,
  // CATEGORY_VERB_ACTION_MOVEMENT,
  CATEGORY_VERB_ACTION_STATIC,
  // CATEGORY_VERB_ACTION_POSSESSION,

  // SENTENCE_TYPE_VERB_TYPE_U_RU_VERBS,
  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
  // SENTENCE_TYPE_VERB_TYPE_IRREGULAR,

  // VERB_TYPE_ACTION_TRANSITIVE,
  // VERB_TYPE_ACTION_INTRANSITIVE,
  VERB_TYPE_ACTION_BOTH,
  // VERB_TYPE_HELPING,
  // VERB_TYPE_LINKING,
  // VERB_TYPE_LINKING_OR_ACTION,
  // VERB_TYPE_TO_BE,

} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';

const wordEat = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU, 
  verbCategory: [ CATEGORY_FOOD, CATEGORY_VERB_ACTION_STATIC ],
  verbType: VERB_TYPE_ACTION_BOTH,
  kanji: '食べる',
  infinitive: 'eat',
  presentParticiple: 'eating',
  pastParticiple: 'eaten',
  preterite: 'ate',
  simplePresentContinuousHeSheIt: 'eats', 
});

const wordSleep = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_VERB_ACTION_STATIC ],
  verbType: VERB_TYPE_ACTION_BOTH,
  kanji: '寝る',
  infinitive: 'sleep',
  presentParticiple: 'sleeping',
  pastParticiple: 'slept',
  preterite: 'slept',
  simplePresentContinuousHeSheIt: 'sleeps', 
});

const wordDrink = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_U,
  verbCategory: [ CATEGORY_DRINK, CATEGORY_VERB_ACTION_STATIC ],
  verbType: VERB_TYPE_ACTION_BOTH,
  kanji: '飲む',
  infinitive: 'drink',
  presentParticiple: 'drinking',
  pastParticiple: 'drunk',
  preterite: 'drank',
  simplePresentContinuousHeSheIt: 'drinks', 
});

const wordSee = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_VERB_ACTION_STATIC ],
  verbType: VERB_TYPE_ACTION_BOTH,
  kanji: '見る',
  infinitive: 'see',
  presentParticiple: 'seeing',
  pastParticiple: 'seen',
  preterite: 'saw',
  simplePresentContinuousHeSheIt: 'saw', 
});

const verbArray = [
  wordEat,
  wordDrink,
  wordSleep,
  wordSee,
];

export default verbArray;