import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_ALCOHOL,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../../constants/wordConstants';

import { createNounWord } from '../../utilWord';

const wordAlcohol = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'alcohol',
  kanji:	'酒	',
  hiragana: 'さけ',
});

const wordPlum = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'plum',
  kanji: 'wine	梅酒	',
  hiragana: 'うめしゅ',
});

const wordSake = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'sake',
  kanji: '日本酒',
  hiragana: 'にほんしゅ',
});

const wordBeer = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'beer',
  kanji:	'麦酒',
  hiragana: 'ビール',
});

const wordDraft = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'draft beer',
  kanji: '生ビール	',
  hiragana: 'なまビール',
});

const wordWine = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'wine',
  kanji:	'ワイン',
  hiragana: 'ワイン',
});

const wordSherry = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'sherry',
  kanji:	'シェリー',
  hiragana: 'シェリー',
});

const wordChampagne = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'champagne',
  kanji:	'三鞭酒',
  hiragana: 'シャンパン',
});

const wordWhite = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'white wine',
  kanji: '白ワイン',
  hiragana: 'しろワイン',
});

const wordRed = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'red wine',
  kanji: '赤ワイン',
  hiragana: 'あかワイン',
});

const wordSpirits = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'spirits',
  kanji:	'焼酎',
  hiragana: 'しょうちゅう',
});

const wordWhiskey = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'whiskey',
  kanji:	'ウィスキー',
  hiragana: 'ウィスキー',
});

const wordVodka = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'vodka',
  kanji:	'ウォッカ',
  hiragana: 'ウォッカ',
});

const wordGin = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'gin',
  kanji:	'ジン',
  hiragana: 'ジン',
});

const wordScotch = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'scotch',
  kanji:	'スコッチ',
  hiragana: 'スコッチ',
});

const wordTequila = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'tequila',
  kanji:	'テキーラ',
  hiragana: 'テキーラ',
});

const wordBrandy = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'brandy',
  kanji:	'ブランデー',
  hiragana: 'ブランデー',
});

const wordRum = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_ALCOHOL ],
  singular: 'rum',
  kanji:	'ラ',
  hiragana: 'ラ',
});

const nounArray = [
  wordAlcohol,
  wordPlum,
  wordSake,
  wordBeer,
  wordDraft,
  wordWine,
  wordSherry,
  wordChampagne,
  wordWhite,
  wordRed,
  wordSpirits,
  wordWhiskey,
  wordVodka,
  wordGin,
  wordScotch,
  wordTequila,
  wordBrandy,
  wordRum,
];

export default nounArray;


// Alcohol		アルコール
