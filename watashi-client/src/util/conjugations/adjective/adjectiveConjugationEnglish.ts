// import {
//   createError,
// } from '../../functions';

import {
  // returnSentenceParts,
  createWord,  
} from '../utilConjugation';

// import {
//   polarityPermissions, 
//   nounConjugationPermissionsEnglish,
// } from './nounPermissions';

import {
  __TYPENAME_CONJUGATED_ENGLISH_NOUN,
} from '../../constants/typeNameConstants';

// import {
//   T,
//   WA_TS,
//   MO_TS,
//   GA_TS,

//   // WO_SV,
//   // NI_SV,
//   // DE_SV,

//   // POLARITY_POSITIVE,
//   POLARITY_NEGATIVE,

//   // TENSE_PRESENT,
//   // TENSE_PAST,
// } from '../../constants/optionsConstants';

import {
  ENGLISH_ADJECTIVE,
} from '../../constants/wordConstants';

// import {
//   CONTEXT_SUBJECT_QUANTITY_MULTIPLE,
// } from '../../constants/contextConstants';

const adjectiveConjugation = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  return createWord([''], ENGLISH_ADJECTIVE);
};

export default adjectiveConjugation;