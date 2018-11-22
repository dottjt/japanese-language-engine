// import {
//   createCommonPermissions,
// } from '../utilConjugation';

import {
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
} from '../../constants/optionsConstants';

// Japanese

// export const verbConjugationPermissionsEnglish = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
//   const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);
  
//   if (onlyTopic) { return false }; // technically not possible.
//   if (onlySubject) { return false }; // technically not possible.
//   if (onlyVerb) { return true };
//   if (onlySubjectAndVerb) { return true };
//   if (onlyTopicAndSubjectTOPIC) { return false }; // technically not possible.
//   if (onlyTopicAndSubjectSUBJECT) { return false }; // technically not possible.

//   throw new Error('verbConjugationPermissionsEnglish - sentence situation not covered');
// };


export const verbConjugationHelpingPermissionsEnglish = (options: Util.Options): boolean => {

  switch(options.selectedVariation) {
    case T: return true; 
    case WA_TS: return true;
    case MO_TS: return true;
    case GA_TS: return true;
    case V: return true;
    case WO_SV: return true;
    case NI_SV: return true;
    case DE_SV: return true;
    case KARA_TS: return true;
    case MADE_TS: return true;
  }

  throw new Error('verbConjugationPermissionsEnglish - sentence situation not covered');
};
