import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_FRUIT,
  // CATEGORY_FOOD_GENERAL,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../../constants/wordConstants';

import { createNounWord } from '../../utilWord';


const wordApple = createNounWord({ // リンゴ
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  kanji: '苹果',
  hiragana: 'リンゴ',
  singular: 'apple',
});

const wordOrange = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'orange',
  kanji: 'オレンジ',
  hiragana: 'オレンジ',
});

const wordJapanesePlum = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'japanese plum',
  kanji: '梅',
  hiragana: 'うめ',
});

const wordWatermelon = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'watermelon',
  kanji: '西瓜',
  hiragana: 'すいか',
});

const wordGrape = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'grape',
  kanji: '葡萄',
  hiragana: 'ぶどう',
});

const wordPear = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'pear',
  kanji: '西洋梨',
  hiragana: 'せいようなし',
});

const wordGrapefruit = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'grapefruit',
  kanji: '	グレープフルーツ',
  hiragana: 'グレープフルーツ',
});

const wordBanana = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'banana',
  kanji: '甘蕉',
  hiragana: 'バナナ',
});

const wordCherry = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'cherry',
  kanji: '桜桃',
  hiragana: 'さくらんぼ',
});

const wordStrawberry = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'strawberry',
  kanji: '苺', //  / 莓	いちご
  hiragana: 'いちご',
});

const wordPeach = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'peach',
  kanji: '桃',
  hiragana: 'もも',
});

const wordFig = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_FRUIT ],
  singular: 'fig',
  kanji: '無花果',
  hiragana: 'いちじく',
});


const nounArray = [
  wordApple,
  wordOrange,
  wordJapanesePlum,
  wordWatermelon,
  wordGrape,
  wordPear,
  wordGrapefruit,
  wordBanana,
  wordCherry,
  wordStrawberry,
  wordPeach,
  wordFig,
];

export default nounArray;
