import {
  CATEGORY_HUMAN,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// HUMAN

const wordPerson = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_HUMAN ],
  kanji: '人',
  singular: 'person',
});

const nounArray = [
  wordPerson,
];

export default nounArray;
