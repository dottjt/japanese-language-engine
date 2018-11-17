import {
  PRIMARY_TYPE_NOUN,

  CATEGORY_HUMAN,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// HUMAN

const wordPerson = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_HUMAN ],
  kanji: '人',
  hiragana: 'ひと',
  furigana: 'hito',
  presentTense: 'person',
  presentParticiple: 'NA',
  simplePast: 'NA',
  pastParticiple: 'NA',
});

const nounArray = [
  wordPerson,
];

export default nounArray;
