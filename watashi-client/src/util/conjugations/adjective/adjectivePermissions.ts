import {
  createError,
} from '../../functions'

import {
  createCommonPermissions,
} from '../utilConjugation';

// import {
//   T,
//   WA_TS,
//   MO_TS,
//   GA_TS,
//   V,
//   WO_SV,
//   NI_SV,
//   DE_SV,
//   KARA_TS,
//   MADE_TS,
// } from '../../constants/optionsConstants';

export const indefiniteArticlePermissionsEnglish = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return false };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return false  }; // was true
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error(createError('nounPermissions.ts', 'indefiniteArticlePermissionsEnglish', 'Sentence situation not covered')); 
};
