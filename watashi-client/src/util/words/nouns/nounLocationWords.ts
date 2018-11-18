import {
  CATEGORY_LOCATION,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// LOCATION

const wordHome = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_LOCATION ],
  kanji: '家',
  singular: 'home',
});

const nounArray = [
  wordHome,
];

export default nounArray;
