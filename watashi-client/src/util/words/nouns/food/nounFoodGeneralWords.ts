import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_GENERAL,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../../constants/wordConstants';

import { createNounWord } from '../../utilWord';

const wordFood = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD_GENERAL ],
  kanji: '食べ物',
  hiragana: '',
  singular: 'food',
});

const wordDrink = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '飲み物',
  hiragana:	'のみもの',
  singular: 'drink',
});

const wordVegetable = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '野菜',
  hiragana:	'やさい',
  singular: 'vegetable',
});

const wordJapaneseFood = createNounWord({ // japanese dish, japanese cooking
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '日本料理',
  hiragana:	'にほんりょうり',
  singular: 'japanese food', // japanese dish, japanese cooking
});

const wordBreakfast = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '朝食',
  hiragana:	'ちょうしょく',
  singular: 'breakfast',
});

const wordBreakfastTwo = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '朝御飯',
  hiragana:	'あさごはん',
  singular: 'breakfast',
});

const wordLunch = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '昼食',
  hiragana:	'ちゅうしょく',
  singular: 'lunch',
});

const wordLunchTwo = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '昼御飯',
  hiragana:	'ひるごはん',
  singular: 'lunch',
});

const wordDinner = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '夕食',
  hiragana:	'ゆうしょく',
  singular: 'dinner',
});

const wordDinnerTwo = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '晩御飯',
  hiragana:	'ばんごはん',
  singular: 'dinner',
});

const wordSupper = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '夜食',
  hiragana:	'やしょく',
  singular: 'supper',
});

const wordSideDish = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: 'おかず',
  hiragana:	'okazu',
  singular:	'side dish',
});

const wordSnack = createNounWord({ // refreshment
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: 'お八つ',
  hiragana:	'おやつ',
  singular:	'snack', // Refreshment
});

const wordBoxLunch = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '弁当',
  hiragana:	'べんとう',
  singular:	'box lunch',
});

const wordTrainStationBoxLunch = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '駅弁',
  hiragana:	'えきべん',
  singular:	'train station box lunch',
});

const wordMeal = createNounWord({ // Cooked Rice
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_GENERAL ],
  kanji: '御飯',
  hiragana:	'ごはん',
  singular:	'meal', //  Cooked Rice
});

// rice: 米 (こめ)
// uncooked rice: 米 (こめ)
// cooked rice: ご飯 (ごはん)
// also cooked rice: 飯 (めし)

const nounArray = [
  wordFood,
  wordDrink,
  wordVegetable,
  wordJapaneseFood,
  wordBreakfast,
  wordBreakfastTwo,
  wordLunch,
  wordLunchTwo,
  wordDinner,
  wordDinnerTwo,
  wordSupper,
  wordSideDish,
  wordSnack,
  wordBoxLunch,
  wordTrainStationBoxLunch,
  wordMeal,
];

export default nounArray;
