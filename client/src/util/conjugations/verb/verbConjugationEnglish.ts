import {
  createError,
  filtersentenceType,
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

const verbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): string => {
  const word = filtersentenceType(words, sentenceType);
  const verbPolarity = determineVerbConjugationEnglish(options);

  return `${verbPolarity}${word.english}`;
};

export default verbConjugationEnglish;