import {
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_HUMAN_ACTION,

  // CATEGORY_LOCATION,

  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
  // SENTENCE_TYPE_VERB_TYPE_IRREGULAR,

  // VERB_TYPE_ACTION_TRANSITIVE,
  // VERB_TYPE_ACTION_INTRANSITIVE,
  // VERB_TYPE_ACTION_BOTH,
  // VERB_TYPE_HELPING,
  // VERB_TYPE_LINKING,
  // VERB_TYPE_LINKING_OR_ACTION,
  // VERB_TYPE_TO_BE,

  // VERB_ACTION_STATIC,
  // VERB_ACTION_MOVEMENT,
  // VERB_ACTION_POSESSION,
} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';

const wordEat = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU, 
  verbCategory: [ CATEGORY_FOOD, CATEGORY_HUMAN_ACTION ],
  // verbType: VERB_TYPE_TRANSITIVE,
  kanji: '食べる',
  infinitive: 'eat',
  presentParticiple: 'eating',
  pastParticiple: 'ate',
  simplePresentContinuousHeSheIt: 'eats', 
});

const wordSleep = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_HUMAN_ACTION ],
  kanji: '寝る',
  infinitive: 'sleep',
  presentParticiple: 'sleeping',
  pastParticiple: 'slept',
  simplePresentContinuousHeSheIt: 'sleeps', 
});

const wordDrink = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_U,
  verbCategory: [ CATEGORY_DRINK, CATEGORY_HUMAN_ACTION ],
  kanji: '飲む',
  infinitive: 'drink',
  presentParticiple: 'drinking',
  pastParticiple: 'drank',
  simplePresentContinuousHeSheIt: 'drinks', 
});

const wordSee = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU,
  verbCategory: [ CATEGORY_HUMAN_ACTION ],
  kanji: '見る',
  infinitive: 'see',
  presentParticiple: 'seeing',
  pastParticiple: 'saw',
  simplePresentContinuousHeSheIt: 'sees', 
});

const verbArray = [
  wordEat,
  wordDrink,
  wordSleep,
  wordSee,
];

export default verbArray;