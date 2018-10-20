import {
  createError,
  filterWordType,
} from '../../functions';

import {
  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,
} from '../../constants/optionsConstants';

const determineVerbConjugationEnglish = (options: Util.Options): string => {
  switch(`${options.polarity}`) {
    case `${POLARITY_POSITIVE}`: return '';
    case `${POLARITY_NEGATIVE}`: return 'do not';
    default: return createError('conjugations/verb', 'determineVerbConjugationEnglish', `${options.polarity}${options.politeness} unknown`);
  }
}; 

const verbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, wordType: string): string => {
  const word = filterWordType(words, wordType);
  const verbPolarity = determineVerbConjugationEnglish(options);

  return `${verbPolarity}${word.english}`;
};

export default verbConjugationEnglish;