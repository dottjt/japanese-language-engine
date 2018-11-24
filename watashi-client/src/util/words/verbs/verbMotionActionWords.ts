import {
  CATEGORY_LOCATION,
  CATEGORY_VERB_ACTION_MOVEMENT,
  // CATEGORY_VERB_ACTION_STATIC,
  // CATEGORY_VERB_ACTION_POSSESSION,

  // SENTENCE_TYPE_VERB_TYPE_RU,
  // SENTENCE_TYPE_VERB_TYPE_U,
  SENTENCE_TYPE_VERB_TYPE_IRREGULAR,

  // VERB_TYPE_ACTION_TRANSITIVE,
  // VERB_TYPE_ACTION_INTRANSITIVE,
  VERB_TYPE_ACTION_BOTH,
  // VERB_TYPE_HELPING,
  // VERB_TYPE_LINKING,
  // VERB_TYPE_LINKING_OR_ACTION,
  // VERB_TYPE_TO_BE,
} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';

const wordGo = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
  verbCategory: [ CATEGORY_LOCATION, CATEGORY_VERB_ACTION_MOVEMENT ],
  verbType: VERB_TYPE_ACTION_BOTH,
  kanji: '行く',
  hiragana: 'いく',
  infinitive: 'go',
  presentParticiple: 'going',
  pastParticiple: 'gone',
  preterite: 'went',
  simplePresentContinuousHeSheIt: 'goes', 
});

const wordCome = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
  verbCategory: [ CATEGORY_LOCATION, CATEGORY_VERB_ACTION_MOVEMENT ],
  verbType: VERB_TYPE_ACTION_BOTH,
  kanji: '来る',
  hiragana: 'くる',
  infinitive: 'come',
  presentParticiple: 'coming',
  pastParticiple: 'come',
  preterite: 'came',
  simplePresentContinuousHeSheIt: 'comes', 
});

const verbArray = [
  wordGo,
  wordCome,
];

export default verbArray;