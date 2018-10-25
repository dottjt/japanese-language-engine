import {
  createError,
} from '../../functions';

import {
  filtersentenceType,
  returnSentenceParts,
  createWord,
} from '../../utilConjugation';


import {
  VERB_ENGLISH_CONJUGATION,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../constants/optionsConstants';

import {
  verbConjugationPermissionsEnglish,
} from './verbPermissions';

const determineVerbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = verbConjugationPermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    switch(`${options.polarity}`) {
      case `${POLARITY_POSITIVE}`: return createWord([''], VERB_ENGLISH_CONJUGATION);
      case `${POLARITY_NEGATIVE}`: return createWord(['do', 'not'], VERB_ENGLISH_CONJUGATION);
    }
    throw new Error(createError('conjugations/verb', 'determineVerbConjugationEnglish', `${options.polarity} unknown`));
  }
  return createWord([''], VERB_ENGLISH_CONJUGATION);
}; 

const verbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.ConjugatedEnglishVerb => {
  const verb = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_VERB_ENGLISH;

  const verbPolarity = determineVerbConjugationEnglish(words, options, sentenceType);

  return {
    verbPolarity,
    verb,
    type,
  }
  // return `${verbPolarity} ${word.english}`;
};

export default verbConjugationEnglish;