import {
  CATEGORY_FOOD,
  CATEGORY_DRINK,
  CATEGORY_HUMAN_ACTION,

  CATEGORY_LOCATION,

  SENTENCE_TYPE_VERB_TYPE_RU,
  SENTENCE_TYPE_VERB_TYPE_U,
  SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';

const wordEat = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_RU, 
  verbCategory: [ CATEGORY_FOOD, CATEGORY_HUMAN_ACTION ], 
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

const wordGo = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
  verbCategory: [ CATEGORY_LOCATION ],
  kanji: '行く',
  infinitive: 'go',
  presentParticiple: 'going',
  pastParticiple: 'gone',
  simplePresentContinuousHeSheIt: 'goes', 
});

const wordDo = createVerbWord({
  verbJapaneseType: SENTENCE_TYPE_VERB_TYPE_IRREGULAR,
  verbCategory: [ CATEGORY_LOCATION ],
  kanji: 'する',
  infinitive: 'do',
  presentParticiple: 'doing',
  pastParticiple: 'done',
  simplePresentContinuousHeSheIt: 'does', 
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
  wordEat,
  wordDrink,
  wordSleep,
  wordSee,
  wordGo,
  wordDo,
  wordCome,
];

export default verbArray;