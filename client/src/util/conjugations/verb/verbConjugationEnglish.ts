import {
  createError,
  filtersentenceType,
  returnSentenceParts,
} from '../../functions';

import {
  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../constants/optionsConstants';

import {
  verbConjugationPermissionsEnglish,
} from './verbPermissions';

const determineVerbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): string => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = verbConjugationPermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    switch(`${options.polarity}`) {
      case `${POLARITY_POSITIVE}`: return '';
      case `${POLARITY_NEGATIVE}`: return 'do not';
    }
    throw new Error(createError('conjugations/verb', 'determineVerbConjugationEnglish', `${options.polarity} unknown`));
  }
  return '';
}; 

const verbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.ConjugatedEnglishVerb => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_VERB_ENGLISH;

  const verbPolarity = determineVerbConjugationEnglish(words, options, sentenceType);

  return {
    verbPolarity,
    word,
    type,
  }
  // return `${verbPolarity} ${word.english}`;
};

export default verbConjugationEnglish;