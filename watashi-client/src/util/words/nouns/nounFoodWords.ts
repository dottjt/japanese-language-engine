import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_GENERAL,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../constants/wordConstants';

import { createNounWord } from '../utilWord';

const wordFood = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD_GENERAL ],
  kanji: '食べ物',
  singular: 'food',
});

const wordCake = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  kanji: 'ケーキ',
  singular: 'cake',
});

const wordApple = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  kanji: '苹果',
  singular: 'apple',
});

const nounArray = [
  wordFood,
  
  wordCake,
  wordApple,
];

export default nounArray;
