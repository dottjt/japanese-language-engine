import {
  createCommonPermissions,
} from '../../functions';

import {
  SENTENCE_TYPE_TOPIC,
  SENTENCE_TYPE_SUBJECT,
  // SENTENCE_TYPE_VERB,
} from '../../constants/optionsConstants';

// JAPANESE

export const nounParticlePermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, /* onlyVerb, */ onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);
  
    if (onlyTopic) { return false };
    if (onlySubject) { return false };
    // if (onlyVerb) { return false }; // not possible.
    if (onlySubjectAndVerb) { return true };
    if (onlyTopicAndSubjectTOPIC) { return true };
    if (onlyTopicAndSubjectSUBJECT) { return false };  

    throw new Error('nounParticlePermissions - sentence situation not covered');
};

export const nounConjugationPermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, /* onlyVerb, */ onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true };
  if (onlySubject) { return true };
  // if (onlyVerb) { return false }; // not possible.
  if (onlySubjectAndVerb) { return false };
  if (onlyTopicAndSubjectTOPIC) { return false };
  if (onlyTopicAndSubjectSUBJECT) { return true };  

  throw new Error('nounEndingPermissions - sentence situation not covered');
};

// ENGLISH

export const nounPolarityPermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {


  if (topic && !subject) {
    return true;
  };
  if (topic && subject && sentenceType === SENTENCE_TYPE_TOPIC) {
    return true;
  };
  if (!topic && subject && verb && sentenceType === SENTENCE_TYPE_SUBJECT) {
    return true;
  };

  return false;
};

export const nounEndingPermissionsEnglish = (topic: Util.Word, subject: Util.Word, verb: Util.Word, sentenceType: string): boolean => {
  if (topic && subject && sentenceType === SENTENCE_TYPE_TOPIC) {
    return true;
  };
  
  return false;
};