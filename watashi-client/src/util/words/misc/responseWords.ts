import {
  PRIMARY_TYPE_NOUN,
  CATEGORY_RESPONSE,
} from '../../constants/wordConstants';

import {
  __TYPENAME_WORD,
  __TYPENAME_META,
  __TYPENAME_ENGLISH,
  __TYPENAME_JAPANESE,
} from '../../constants/typeNameConstants';

export const wordYes = {
  japanese: { 
    kanji: 'はい',
    // hiragana: 'はい',
    // furigana: 'hai',
    __typename: __TYPENAME_JAPANESE,
  },
  english: {
    presentTense: 'yes',
    presentParticiple: 'NA',
    simplePast: 'NA',
    pastParticiple: 'NA',
    __typename: __TYPENAME_ENGLISH,
  },
  primaryType: PRIMARY_TYPE_NOUN,
  category: [ CATEGORY_RESPONSE ],
  meta: {
    verbType: 'NA',  
    nounType: 'TODO',
    nounPluralType: 'TODO',  
    __typename: __TYPENAME_META,
  },
  __typename: __TYPENAME_WORD,
};

const responseArray = [
  wordYes,
];

export default responseArray;
