import {
  CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

const wordSasaki = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_HUMAN_NAME ],
  kanji: '佐々木',
  singular: 'Sasaki',
});

const wordNomura = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_HUMAN_NAME ],
  kanji: '野村',
  singular: 'Nomura',
});

const wordKato = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_HUMAN_NAME ],
  kanji: '加藤',
  singular: 'Nomura',
});

const wordKobayashi = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_HUMAN_NAME ],
  kanji: '小林',
  singular: 'Nomura',
});

const nounArray = [
  wordSasaki,
  wordNomura,
  wordKato,
  wordKobayashi,
];

export default nounArray;