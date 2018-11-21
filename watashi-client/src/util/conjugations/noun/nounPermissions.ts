import {
  createError,
} from '../../functions'

import {
  createCommonPermissions,
} from '../utilConjugation';

// JAPANESE

export const nounParticlePermissions = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);
  
  if (onlyTopic) { return false };
  if (onlySubject) { return false };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return true }; 
  if (onlyTopicAndSubjectTOPIC) { return true };
  if (onlyTopicAndSubjectSUBJECT) { return false };  

  throw new Error(createError('nounPermissions.ts', 'nounParticlePermissions', 'nounParticlePermissions - sentence situation not covered'));
};


export const nounConjugationPermissions = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return false };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error(createError('nounPermissions.ts', 'nounConjugationPermissions', 'nounEndingPermissions - sentence situation not covered'));
};


// ENGLISH

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


export const nounConjugationPermissionsEnglish = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return false };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error(createError('nounPermissions.ts', 'nounConjugationPermissionsEnglish', 'nounConjugationPermissionsEnglish - sentence situation not covered'));
};


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

