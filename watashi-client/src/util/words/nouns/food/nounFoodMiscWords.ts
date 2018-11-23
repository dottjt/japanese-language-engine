
import {
  CATEGORY_FOOD,
  CATEGORY_FOOD_GENERAL,

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

49.	卵	たまご	tamago	Egg
50.	食パン	しょくパン	shoku pan	Plain Bread / White Bread


const nounArray = [
  wordApple,
];

export default nounArray;

