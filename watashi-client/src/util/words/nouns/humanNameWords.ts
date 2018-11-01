import {
  PRIMARY_TYPE_NOUN,
  CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import {
  __TYPENAME_WORD,
  __TYPENAME_META,
  __TYPENAME_ENGLISH,
  __TYPENAME_JAPANESE,
} from '../../constants/typeNameConstants';

export const wordSasaki = {
  japanese: { 
    kanji: '佐々木',
    // hiragana: 'ささき',
    // furigana: 'Sasaki',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'Sasaki',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_HUMAN_NAME ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

export const wordNomura = {
  japanese: { 
    kanji: '野村',
    // hiragana: 'のむら',
    // furigana: 'Nomura',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'Nomura',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_HUMAN_NAME ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

export const wordKato = {
  japanese: { 
    kanji: '加藤',
    // hiragana: 'かと',
    // furigana: 'Kato',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'Kato',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_HUMAN_NAME ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

export const wordKobayashi = {
  japanese: { 
    kanji: '小林',
    // hiragana: 'こばやし',
    // furigana: 'Kobayashi',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    present: 'Kobayashi',
    past: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_HUMAN_NAME ],
  meta: {
    verbType: 'NA',
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};


export const humanNameArray = [
  wordSasaki,
  wordNomura,
  wordKato,
  wordKobayashi,
];
