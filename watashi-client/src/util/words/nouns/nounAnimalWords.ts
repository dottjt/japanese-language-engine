import {
  PRIMARY_TYPE_NOUN,
  CATEGORY_ANIMAL,
} from '../../constants/wordConstants';

import { createWord } from '../utilWord';

// ANIMAL

const wordCat = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  category: [ CATEGORY_ANIMAL ],
  kanji: '猫',
  hiragana: 'ねこ',
  furigana: 'neko',
  present: 'cat',
  past: 'NA',
});

const wordDog = createWord({
  primaryType: PRIMARY_TYPE_NOUN,
  verbType: 'NA',
  category: [ CATEGORY_ANIMAL ],
  kanji: '犬',
  hiragana: 'いぬ',
  furigana: 'inu',
  present: 'dog',
  past: 'NA',
});

const nounArray = [
  wordCat,
  wordDog,
];

export default nounArray;