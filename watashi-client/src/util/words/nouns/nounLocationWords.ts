import {
  CATEGORY_LOCATION,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// LOCATION

const wordHome = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_LOCATION ],
  kanji: '家',
  singular: 'home',
});

const nounArray = [
  wordHome,
];

export default nounArray;
