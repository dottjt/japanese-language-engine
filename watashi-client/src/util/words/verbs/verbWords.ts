import {
  CATEGORY_VERB_UNKNOWN,
} from '../../constants/wordConstants';

import { createVerbWord } from '../utilWord';

const unknownVerb = createVerbWord({
  verbJapaneseType: '',
  verbCategory: [ CATEGORY_VERB_UNKNOWN ],
  verbType: '',
  kanji: '',
  hiragana: '',
  infinitive: '',
  presentParticiple: '',
  pastParticiple: '',
  preterite: '',
  simplePresentContinuousHeSheIt: '',
});

const verbArray = [
  unknownVerb,
];

export default verbArray;

