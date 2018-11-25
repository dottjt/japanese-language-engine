import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_DESSERT,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../../constants/wordConstants';

import { createNounWord } from '../../utilWord';

const wordCake = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DESSERT ],
  kanji: 'ケーキ',
  hiragana: '',
  singular: 'cake',
});

// Ice cream	アイスクリーム [aisukuriimu]	


const nounArray = [
  wordCake,
];

export default nounArray;
