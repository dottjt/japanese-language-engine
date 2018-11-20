import {
  CATEGORY_HUMAN_NAME,

  // NOUN_PLURAL_GENERAL,
  NOUN_PLURAL_NAME,

  NOUN_TYPE_SPACE,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

const wordSasaki = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_NAME,
  nounCategory: [ CATEGORY_HUMAN_NAME ],
  kanji: '佐々木',
  singular: 'Sasaki',
});

const wordNomura = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_NAME,
  nounCategory: [ CATEGORY_HUMAN_NAME ],
  kanji: '野村',
  singular: 'Nomura',
});

const wordKato = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_NAME,
  nounCategory: [ CATEGORY_HUMAN_NAME ],
  kanji: '加藤',
  singular: 'Nomura',
});

const wordKobayashi = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_NAME,
  nounCategory: [ CATEGORY_HUMAN_NAME ],
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