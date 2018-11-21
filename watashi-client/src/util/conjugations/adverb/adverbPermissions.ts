import {
  createError,
} from '../../functions'

import {
  createCommonPermissions,
} from '../utilConjugation';

// NOTE: I have no idea if any of this is try/working. 
export const adverbConjugationPermissionsEnglish = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return false };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error(createError('nounPermissions.ts', 'adverbConjugationPermissionsEnglish', 'nounConjugationPermissionsEnglish - sentence situation not covered'));
};

export const polarityPermissions = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return false };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error(createError('nounPermissions.ts', 'polarityPermissions', 'polarityPermissions - sentence situation not covered'));
};
