import {
  createCommonPermissions,
} from '../../utilConjugation';

// JAPANESE

export const nounParticlePermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);
  
  if (onlyTopic) { return false };
  if (onlySubject) { return false };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return true }; 
  if (onlyTopicAndSubjectTOPIC) { return true };
  if (onlyTopicAndSubjectSUBJECT) { return false };  

  throw new Error('nounParticlePermissions - sentence situation not covered');
};

export const nounConjugationPermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return false };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error('nounEndingPermissions - sentence situation not covered');
};


// ENGLISH

export const nounPolarityPermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return false };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error('nounPolarityPermissions - sentence situation not covered');
};


export const nounConjugationPermissionsEnglish = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return false };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error('nounConjugationPermissionsEnglish - sentence situation not covered');
};


export const nounIndefiniteArticlePermissionsEnglish = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return false };
  if (onlySubject) { return true };
  if (onlyVerb) { return false }; // technically not possible.
  if (onlySubjectAndVerb) { return true  };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error('nounIndefiniteArticlePermissionsEnglish - sentence situation not covered');  
};

