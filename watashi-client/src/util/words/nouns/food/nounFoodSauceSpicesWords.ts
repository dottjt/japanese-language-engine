
import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_SAUCE_SPICE,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../../constants/wordConstants';

import { createNounWord } from '../../utilWord';

const wordPeach = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'peach',
  kanji: '桃',
});


// 60.	調味料	ちょうみりょう	choumi ryou	Seasoning / Condiment / Flavoring / Spices

const wordFlavouring = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'flavouring',
  kanji: '調味料',
  hiragana:	'ちょうみりょう'
});

const wordSugar = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'sugar',
  kanji: '砂糖',
  hiragana:	'さとう'
});

const wordWasabi = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'wasabi',
  kanji: '山葵',
  hiragana:	'わさび'
});

const wordOil = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'oil',
  kanji: '油',
  hiragana: 'あぶら'
});

const wordOysterSauce = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'oyster sauce',
  kanji: 'オイスターソース',
  hiragana: 'おいすたーそーす'
});

const wordWine = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'wine',
  kanji: 'ワイン',
  hiragana: 'わいん'
});

const wordWhiteWine = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'white wine',
  kanji: '白ワイン',
  hiragana: 'しろわいん'
});

const wordRedWine = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'red wine',
  kanji: '赤ワイン',
  hiragana: 'あかわいん'
});

const wordSoySauce = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'soy sauce',
  kanji: '醤油',
  hiragana: 'しょうゆ'
});

const wordRiceWineVinegar = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'rice wine vinegar',
  kanji: 'みりん',
  hiragana: 'みりん',
});

const wordSesameOil = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'sesame oil',
  kanji: '胡麻油',
  hiragana: 'ごまあぶら'
});

const wordVegetableOil = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'vegetable oil',
  kanji: 'サラダ油',
  hiragana: 'さらだゆ' // /さらだあぶら
});

const wordWater = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'water',
  kanji: '水',
  hiragana: 'みず'
});

const wordSauce = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'sauce',
  kanji: 'たれ',
  hiragana: 'たれ' // or ソース (そーす)
});

const wordBroth = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'broth',
  kanji: '出汁',
  hiragana: 'だし'
});

const wordRiceWine = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'rice wine',
  kanji: '酒',
  hiragana: 'さけ' // ) or 日本酒 (にほんしゅ
});

const wordOliveOil = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'olive oil',
  kanji: 'オリーブ油',
  hiragana: 'おりーぶゆ' // /おりーぶおいる
});

const wordSalt = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'salt',
  kanji: '塩',
  hiragana: 'しお'
});

const wordBlackPepper = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'black pepper',
  kanji: '胡椒',
  hiragana: 'こしょう'
});

const wordJapanesePepper = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'Japanese pepper',
  kanji: '山椒',
  hiragana: 'さんしょう'
});

const wordVinegar = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'vinegar',
  kanji: '酢',
  hiragana: 'す'
});

const wordMustard = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'mustard',
  kanji: '辛子',
  hiragana: 'からし'
});

const wordHoney = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_SAUCE_SPICE ],
  singular: 'honey',
  kanji: '蜂蜜',
  hiragana: 'はちみつ'
});

const nounArray = [
  wordFlavouring,
  wordSugar,
  wordWasabi,
  wordOil,
  wordOysterSauce,
  wordWine,
  wordWhiteWine,
  wordRedWine,
  wordSoySauce,
  wordRiceWineVinegar,
  wordSesameOil,
  wordVegetableOil,
  wordWater,
  wordSauce,
  wordBroth,
  wordRiceWine,
  wordOliveOil,
  wordSalt,
  wordBlackPepper,
  wordJapanesePepper,
  wordVinegar,
  wordMustard,
  wordHoney,
];

export default nounArray;



