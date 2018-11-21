import {
  createError,
} from '../../functions'

import {
  createCommonPermissions,
} from '../utilConjugation';

import {
  POLARITY_NEGATIVE,
} from '../../constants/optionsConstants'

// NOTE: I have no idea if any of this is try/working. 
export const adverbConjugationPermissionsEnglish = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  if (onlyTopic) { return true }
  else if (onlySubject) { return true }
  else if (onlyVerb) { return false } // technically not possible.
  else if (onlySubjectAndVerb) { return false }
  else if (onlyTopicAndSubjectTOPIC) { return false }
  else if (onlyTopicAndSubjectSUBJECT) { return true }  

  throw new Error(createError('adverbPermissions.ts', 'adverbConjugationPermissionsEnglish', 'Sentence situation not covered'));
};

export const polarityPermissions = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, options: Util.Options, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);

  // NOT SURE ABOUT THIS.
  if (options.polarity === POLARITY_NEGATIVE) {
    if (onlyTopic) { return true }
    else if (onlySubject) { return true }
    else if (onlyVerb) { return false } // technically not possible.
    else if (onlySubjectAndVerb) { return false }
    else if (onlyTopicAndSubjectTOPIC) { return false }
    else if (onlyTopicAndSubjectSUBJECT) { return true }  

    throw new Error(createError('adverbPermissions.ts', 'polarityPermissions', 'Sentence situation not covered'));
  } else {
    return false
  }
};
