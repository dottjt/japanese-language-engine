import {
  PRIMARY_TYPE_NOUN,
  CATEGORY_LOCATION,
} from '../../constants/wordConstants';

import { createWord } from '../utilWord';

// LOCATION

const wordHome = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  category: [ CATEGORY_LOCATION ],
  kanji: '家',
  hiragana: 'いえ',
  furigana: 'ie',
  present: 'home',
  past: 'NA',
});

const nounArray = [
  wordHome,
];

export default nounArray;
