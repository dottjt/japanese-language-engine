import {
  // VERB,
  TOPIC,
  SUBJECT,
} from '../../constants/optionsConstants';

// JAPANESE

export const nounParticlePermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, wordType: string): boolean => {
  if (topic && subject && wordType === TOPIC) {
    return true;
  };
  if (!topic && subject && verb && wordType === SUBJECT) {
    return true;
  };

  return false;
};

export const nounEndingPermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, wordType: string): boolean => {
  if (topic && wordType === TOPIC) {
    return true;
  }
  if (topic && subject && wordType === TOPIC) {
    return true;
  };
  if (!topic && subject && verb && wordType === SUBJECT) {
    return true;
  };

  return false;
};


// ENGLISH

export const nounPolarityPermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, wordType: string): boolean => {
  if (topic && !subject) {
    return true;
  };
  if (topic && subject && wordType === TOPIC) {
    return true;
  };
  if (!topic && subject && verb && wordType === SUBJECT) {
    return true;
  };

  return false;
};

export const nounEndingPermissionsEnglish = (topic: Util.Word, subject: Util.Word, verb: Util.Word, wordType: string): boolean => {
  if (topic && subject && wordType === TOPIC) {
    return true;
  };
  
  return false;
};