import {
  CATEGORY_ANIMAL,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

// ANIMAL

const wordCat = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_ANIMAL ],
  kanji: '猫',
  singular: 'cat',
});

const wordDog = createNounWord({
  nounType: 'TODO',
  nounPluralType: 'TODO',
  category: [ CATEGORY_ANIMAL ],
  kanji: '犬',
  singular: 'dog',
});

const nounArray = [
  wordCat,
  wordDog,
];

export default nounArray;