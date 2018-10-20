import {
  // VERB,
  TOPIC,
  SUBJECT,
} from '../../constants/optionsConstants';

export const nounParticlePermissions = (topic: Util.Word, subject: Util.Word, verb: Util.Word, wordType: string): boolean => {
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