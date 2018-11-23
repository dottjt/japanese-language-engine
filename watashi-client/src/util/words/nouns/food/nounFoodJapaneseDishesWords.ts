import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_DISH,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../../constants/wordConstants';

import { createNounWord } from '../../utilWord';

const wordSushi = createNounWord({ // 鮨 / 鮓
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '寿司',
  hiragana: 'すし',
  singular: 'sushi',
});

const wordSashimi = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '刺身',
  hiragana: 'さしみ',
  singular:	'sashimi (Sliced Raw Fish)',
});

const wordTenpura = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '天婦羅',
  hiragana: 'てんぷら',
  singular:	'tenpura (Deep-fried Fish and Vegetables)',
});


const wordGyuu = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '牛丼',
  hiragana: 'ぎゅうどん',
  singular:	'gyuu don (Rice topped with Beef and Vegetables)',
});


const wordOyako = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '親子丼',
  hiragana: 'おやこどん',
  singular:	'oyako don (Rice topped with Boiled Chicken and Eggs)',
});


const wordTen = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '天丼',
  hiragana: 'てんどん',
  singular:	'ten don (Rice topped with Deep-fried Prawns & Fishes)',
});


const wordUnagiDon = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '鰻丼',
  hiragana: 'うなぎどん',
  singular:	'unagi don (Rice topped with Glaze-grilled Eel)',
});


const wordUnagi = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '鰻',
  hiragana: 'うなぎ',
  singular:	'unagi (Eel)',
});


const wordTonkatsu = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '豚カツ',
  hiragana: 'とんカツ',
  singular:	'tonkatsu (Pork Cutlet)',
});


const wordKare = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: 'カレーライス',
  hiragana: 'カレーライス',
  singular:	'kare raisu (Curry and Rice)',
});


const wordSuki = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '鋤焼き',
  hiragana: 'すきやき',
  singular:	'suki yaki (Thin Slices of Beef cooked with various Vegetables in a Heavy Iron Pan)',
});


const wordOkonomi = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: 'お好み焼き',
  hiragana: 'おこのみやき',
  singular:	'okonomi yaki (Thin and Flat Pancake cooked on a Hot Plate with bits of Meat, Seafood and Chopped Cabbages)',
});


const wordTeppan = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '鉄板焼き',
  hiragana: 'てっぱんやき',
  singular:	'teppan yaki (Grilled Meat cooked on Iron Plate)',
});


const wordYaki = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '焼き鳥',
  hiragana: 'やきとり',
  singular:	'yaki tori (Grilled Chicken / Broiled Chicken)',
});


const wordTako = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '蛸焼き',
  hiragana: 'たこやき',
  singular:	'tako yaki (Octopus Dumpling)',
});


const wordYakiSoba = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '焼きそば',
  hiragana: 'やきそば',
  singular:	'yaki soba (Pan Fried Noodle)',
});


const wordGyouza = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '餃子',
  hiragana: 'ギョウザ',
  singular:	'gyouza (Dumpling stuffed with Minced Pork and Vegetables)',
});


const wordChawan = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '茶碗蒸し',
  hiragana: 'ちゃわんむし',
  singular:	'chawan mushi (Steamed Egg Custard in Tea Cup)',
});


const wordShabu = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: 'しゃぶしゃぶ',
  hiragana: 'しゃぶしゃぶ',
  singular:	'shabu shabu (Japanese Style Hotpot)',
});


const wordMiso = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '味噌',
  hiragana: 'みそ',
  singular:	'miso (Miso / Bean Paste)',
});


const wordMisoSoup = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '味噌汁',
  hiragana: 'みそしる',
  singular:	'miso shiru (Miso Soup)',
});


const wordRa = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: 'ラーメン',
  hiragana: 'ラーメン',
  singular:	'ramen (Ramen)',
});


const wordUdon = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: 'うどん',
  hiragana: 'うどん',
  singular:	'udon (Noodle made of Wheat Flour)',
});


const wordSoba = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '蕎麦',
  hiragana: 'そば',
  singular:	'soba (Buckwheat Noodle)',
});


const wordMochi = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '餅',
  hiragana: 'もち',
  singular:	'mochi (Sticky Rice Cake)',
});

const wordAnpan = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '餡パン',
  hiragana: 'あんパン',
  singular:	'anpan (Japanese Bun filled with Red Bean Paste)',
});

const wordTofu = createNounWord({
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD, CATEGORY_FOOD_DISH ],
  kanji: '豆腐',
  hiragana: 'とうふ',
  singular:	'toufu (Bean Curd)',
});

const nounArray = [
  wordSushi,
  wordSashimi,
  wordTenpura,
  wordGyuu,
  wordOyako,
  wordTen,
  wordUnagiDon,
  wordUnagi,
  wordTonkatsu,
  wordKare,
  wordSuki,
  wordOkonomi,
  wordTeppan,
  wordYaki,
  wordTako,
  wordYakiSoba,
  wordGyouza,
  wordChawan,
  wordShabu,
  wordMiso,
  wordMisoSoup,
  wordRa,
  wordUdon,
  wordSoba,
  wordMochi,
  wordAnpan,
];

export default nounArray;
