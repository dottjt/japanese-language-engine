import {
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_HUMAN_ACTION,

  CATEGORY_LOCATION,

  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
  SENTENCE_TYPE_VERB_TYPE_IRREGULAR,

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

const wordGo = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
  verbCategory: [ CATEGORY_LOCATION ],
  kanji: '行く',
  infinitive: 'go',
  presentParticiple: 'going',
  pastParticiple: 'gone',
  simplePresentContinuousHeSheIt: 'goes', 
});

const wordCome = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
  verbCategory: [ CATEGORY_LOCATION ],
  kanji: '来る',
  infinitive: 'come',
  presentParticiple: 'coming',
  pastParticiple: 'came',
  simplePresentContinuousHeSheIt: 'comes', 
});


const verbArray = [
  wordGo,
  wordCome,
];

export default verbArray;