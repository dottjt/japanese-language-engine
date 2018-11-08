import {
  createError,
} from '../functions';

import { 
  filterSpecifcWord,
  getRandomWordViaCategory,
  getRandomWordViaPrimaryType,
} from '../filters';

import {
  NA,

  T,

  WA_TS,
  MO_TS,
  GA_TS,

  V,

  WO_SV,
  NI_SV,
  DE_SV, 

  KARA_TS,
  MADE_TS,
} from '../constants/optionsConstants';

import {
  // PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  // PRIMARY_TYPE_ADJECTIVE,

  CATEGORY_HUMAN_NAME,
  CATEGORY_LOCATION,
} from '../constants/wordConstants';

const genTSV = ({ topic, subject, verb }: { topic?: Util.Topic, subject?: Util.Subject, verb?: Util.Verb } ): Util.SentenceWords => {
  if (topic && !subject && !verb) {
    return { topic };
  }
  if (topic && subject && !verb) {
    return { topic, predicate: { subject } };
  }
  if (!topic && subject && verb) {
    return { predicate: { subject, verb } };
  }
  if (!topic && !subject && verb) {
    return { predicate: { verb }};
  }
  if (topic && subject && verb) {
    return { topic, predicate: { subject, verb } };
  }

  throw new Error(createError('conjugations/generateSentences.tsx', 'genTSV', `Your sentence variation does not exist`));
};


// const generateTTopicWord = (theme) => {
  
// };

const generateWords = (nouns: Util.Word[], variation: string): () => Util.SentenceWords => {
  const wordPerson = filterSpecifcWord(nouns, 'person');
  const randomHumanName = getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME);
  const randomLocationWord = getRandomWordViaCategory(nouns, CATEGORY_LOCATION);
  const randomVerb = getRandomWordViaPrimaryType(nouns, PRIMARY_TYPE_VERB);

  // const randomUVerb
  // const randomRuVerb

  switch(variation) {
    case NA:    return () =>   genTSV({ topic: undefined,       subject: undefined,          verb: undefined })
    case T:     return () =>   genTSV({ topic: wordPerson,      subject: undefined,          verb: undefined });    // T                                                         
    case WA_TS: return () =>   genTSV({ topic: randomHumanName, subject: wordPerson,         verb: undefined });    // WA_TS
    case MO_TS: return () =>   genTSV({ topic: randomHumanName, subject: wordPerson,         verb: undefined });    // MO_TS
    case GA_TS: return () =>   genTSV({ topic: randomHumanName, subject: wordPerson,         verb: undefined });    // GA_TS
    case V:     return () =>   genTSV({ topic: undefined,       subject: undefined,          verb: randomVerb });   // V
    case WO_SV: return () =>   genTSV({ topic: undefined,       subject: wordPerson,         verb: randomVerb });   // WO_SV
    case NI_SV: return () =>   genTSV({ topic: undefined,       subject: randomLocationWord, verb: randomVerb });   // NI_SV
    case DE_SV: return () =>   genTSV({ topic: undefined,       subject: randomLocationWord, verb: randomVerb });   // DE_SV
    case KARA_TS: return () => genTSV({ topic: undefined,       subject: randomLocationWord, verb: randomVerb });   // KARA_TS
    case MADE_TS: return () => genTSV({ topic: undefined,       subject: randomLocationWord, verb: randomVerb });   // MADE_TS
  }
  throw new Error(createError('conjugations/generateSentences.tsx', 'generateWords', `${variation} does not exist`));
};

export default generateWords;