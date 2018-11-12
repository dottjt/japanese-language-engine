import {
  PRIMARY_TYPE_NOUN,

  CATEGORY_HUMAN,
} from '../../constants/wordConstants';

import { createWord } from '../utilWord';

// HUMAN

const wordPerson = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  category: [ CATEGORY_HUMAN ],
  kanji: '人',
  hiragana: 'ひと',
  furigana: 'hito',
  present: 'person',
  past: 'NA',
});

const nounArray = [
  wordPerson,
];

export default nounArray;
