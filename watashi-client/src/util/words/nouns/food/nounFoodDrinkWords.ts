import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_BEVERAGE,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../../constants/wordConstants';

import { createNounWord } from '../../utilWord';

const wordGreenTea = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_BEVERAGE ],
  singular: 'green tea',
  kanji: 'お茶',
  hiragana:	'おちゃ',
});

const wordBlackTea = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_BEVERAGE ],
  singular: 'black tea',
  kanji: '紅茶',
  hiragana:	'こうちゃ',
});

const wordCoffee = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_BEVERAGE ],
  singular: 'coffee',
  kanji: '珈琲',
  hiragana:	'コーヒー',
});

const wordMilk = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_BEVERAGE ],
  singular: 'milk',
  kanji: '牛乳',
  hiragana:	'ぎゅうにゅう',
});

const wordMilkKatakana = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_BEVERAGE ],
  singular: 'milk',
  kanji: 'ミルク',
  hiragana:	'ミルク',
});

const wordJuice = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_BEVERAGE ],
  singular: 'juice',
  kanji: 'ジュース',
  hiragana:	'ジュース',
});

const wordOrangeJuice = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_BEVERAGE ],
  singular: 'orange juice',
  kanji: 'オレンジジュース',
  hiragana:	'オレンジジュー',
});

const nounArray = [
  wordGreenTea,
  wordBlackTea,
  wordCoffee,
  wordMilk,
  wordMilkKatakana,
  wordJuice,
  wordOrangeJuice,
];

export default nounArray;


