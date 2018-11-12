import {
  PRIMARY_TYPE_NOUN,
  CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import { createWord } from '../utilWord';

const wordSasaki = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  category: [ CATEGORY_HUMAN_NAME ],
  kanji: '佐々木',
  hiragana: 'ささき',
  furigana: 'Sasaki',
  present: 'Sasaki',
  past: 'NA',
});

const wordNomura = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  category: [ CATEGORY_HUMAN_NAME ],
  kanji: '野村',
  hiragana: 'のむら',
  furigana: 'Nomura',
  present: 'Nomura',
  past: 'NA',
});

const wordKato = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  category: [ CATEGORY_HUMAN_NAME ],
  kanji: '加藤',
  hiragana: 'かと',
  furigana: 'Kato',
  present: 'Nomura',
  past: 'NA',
});

const wordKobayashi = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  category: [ CATEGORY_HUMAN_NAME ],
  kanji: '小林',
  hiragana: 'こばやし',
  furigana: 'Kobayashi',
  present: 'Nomura',
  past: 'NA',
});

const nounArray = [
  wordSasaki,
  wordNomura,
  wordKato,
  wordKobayashi,
];

export default nounArray;