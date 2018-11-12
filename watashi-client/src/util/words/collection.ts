import adjectiveCollection from './adjectives/adjectiveCollection';
import nounCollection from './nouns/nounCollection';
import miscCollection from './misc/miscCollection';
import verbCollection from './verbs/verbCollection';

const allWords: Util.Word[] =
  adjectiveCollection
    .concat(nounCollection)
    .concat(miscCollection)
    .concat(verbCollection);

export default allWords;
