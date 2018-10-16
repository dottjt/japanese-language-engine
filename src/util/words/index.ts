import { adjectiveArray } from './adjectives';
import { humanNameArray } from './humanNames';
import { nounArray } from './nouns';
import { responseArray } from './responses';
import { verbArray } from './verbs';

const allWords: Util.Word[] =
  adjectiveArray
    .concat(humanNameArray)
    .concat(nounArray)
    .concat(responseArray)
    .concat(verbArray);

export default allWords;
