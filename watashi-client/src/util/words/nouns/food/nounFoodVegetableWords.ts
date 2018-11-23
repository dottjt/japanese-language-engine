import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_GENERAL,

  NOUN_PLURAL_GENERAL,

  NOUN_TYPE_SPACE,
} from '../../../constants/wordConstants';

import { createNounWord } from '../../utilWord';

const wordApple = createNounWord({ // リンゴ
  nounWordType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  kanji: '苹果',
  singular: 'apple',
});

const wordOrange = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'orange',
  kanji: 'オレンジ',
});

const wordJapanesePlum = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'japanese plum',
  kanji: '梅',
});

const wordWatermelon = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'watermelon',
  kanji: '西瓜',
});

const wordGrape = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'grape',
  kanji: '葡萄',
});

const wordPear = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'pear',
  kanji: '西洋梨',
});

const wordGrapefruit = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'grapefruit',
  kanji: '	グレープフルーツ',
});

const wordBanana = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'banana',
  kanji: '甘蕉',
});

const wordCherry = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'cherry',
  kanji: '桜桃',
});

const wordStrawberry = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'strawberry',
  kanji: '苺', //  / 莓	いちご
});

const wordPeach = createNounWord({
  nounWOrdType: NOUN_TYPE_SPACE,
  nounPluralType: NOUN_PLURAL_GENERAL,
  nounCategory: [ CATEGORY_FOOD ],
  singular: 'peach',
  kanji: '桃',
});


Carrot	人参 / 人蔘	にんじん	
Onion	玉ねぎ / 玉葱	たまねぎ	
Spring (green) onion	葱	ねぎ	
Cucumber	胡瓜	きゅうり	

eggplant: 茄子 (なす)

lotus root: 蓮根 (れんこん) or 蓮 (はす)

ginger: 生姜 (しょうが)

bell pepper: ピーマン (ぴーまん)

potato: じゃがいも
garlic: にんにく

shiso, Japanese mint: しそ
scallion: ねぎ or 長ねぎ (ながねぎ)

red pepper or chili pepper: 唐辛子 (とうがらし) or パプリカ (ぱぷりか)

shishito pepper: 獅子唐 (ししとう)





const nounArray = [
  wordApple,
];

export default nounArray;



Pepper	胡椒	こしょう	
Salt	塩	しお	