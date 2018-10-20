import { adjectiveArray } from './adjectiveWords';
import { humanNameArray } from './humanNameWords';
import { nounArray } from './nounWords';
import { responseArray } from './responseWords';
import { verbArray } from './verbWords';

const allWords: Util.Word[] =
  adjectiveArray
    .concat(humanNameArray)
    .concat(nounArray)
    .concat(responseArray)
    .concat(verbArray);

export default allWords;
