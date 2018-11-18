import {
  CATEGORY_ANIMAL,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// ANIMAL

const wordCat = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_ANIMAL ],
  kanji: '猫',
  singular: 'cat',
});

const wordDog = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_ANIMAL ],
  kanji: '犬',
  singular: 'dog',
});

const nounArray = [
  wordCat,
  wordDog,
];

export default nounArray;