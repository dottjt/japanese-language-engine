import {
  POLITENESS_TYPE_CASUAL,
  POLITENESS_TYPE_FORMAL,

  QUESTION_VARIATION_POSITIVE,
  // QUESTION_VARIATION_NEGATIVE,
} from '../constants';

export const nounPolitenessConjugation = (noun: string, politeness: string, variation: string): string => {
  if (politeness === POLITENESS_TYPE_CASUAL) {
    if (variation === QUESTION_VARIATION_POSITIVE) {
      return `${noun}`;
    };
    return `${noun}じゃない`; 
  };
  if (politeness === POLITENESS_TYPE_FORMAL) {
    if (variation === QUESTION_VARIATION_POSITIVE) {
      return `${noun}です`;
    };
    return `${noun}じゃありません`;
  };
  return 'nounPolitenessConjugation error';
};
