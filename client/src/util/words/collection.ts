import { adjectiveArray } from './adjectives/adjectiveWords';
import { humanNameArray } from './nouns/humanNameWords';
import { nounArray } from './nouns/nounWords';
import { responseArray } from './misc/responseWords';
import { verbArray } from './verbs/verbWords';

const allWords: Util.Word[] =
  adjectiveArray
    .concat(humanNameArray)
    .concat(nounArray)
    .concat(responseArray)
    .concat(verbArray);

export default allWords;
