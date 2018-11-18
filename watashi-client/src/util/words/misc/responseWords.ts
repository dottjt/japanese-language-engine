import {
  CATEGORY_RESPONSE,
} from '../../constants/wordConstants';

import {
  createNounWord,
} from '../utilWord';

export const wordYes = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_RESPONSE ],
  kanji: 'はい',
  singular: 'yes',
});

const responseArray = [
  wordYes,
];

export default responseArray;
