import {
  CATEGORY_HUMAN,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// HUMAN

const wordPerson = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_HUMAN ],
  kanji: '人',
  singular: 'person',
});


const nounArray = [
  wordPerson,
];

export default nounArray;
