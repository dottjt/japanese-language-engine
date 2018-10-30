import {
  createError,
  emptyWordElement,
} from '../../functions';

import {
  filtersentenceType,
  returnSentenceParts,
  createWord,
} from '../../utilConjugation';

import {
  VERB_ENGLISH_CONJUGATION,
  VERB_ENGLISH_POLARITY,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  CONJUGATION_TYPE_VERB_ENGLISH,
} from '../../constants/optionsConstants';

import {
  __TYPENAME_CONJUGATED_ENGLISH_VERB,
} from '../../constants/typeNameConstants';

import {
  verbConjugationPermissionsEnglish,
} from './verbPermissions';

const determineVerbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): { tense: Util.WordElement, polarity: Util.WordElement } => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = verbConjugationPermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    switch(`${options.polarity}`) {
      case `${POLARITY_POSITIVE}`: return { tense: createWord([''], VERB_ENGLISH_CONJUGATION), polarity: createWord([''], VERB_ENGLISH_CONJUGATION) };
      case `${POLARITY_NEGATIVE}`: return { tense: createWord(['do'], VERB_ENGLISH_CONJUGATION), polarity: createWord(['not'], VERB_ENGLISH_POLARITY) };
    }
    throw new Error(createError('conjugations/verb', 'determineVerbConjugationEnglish', `${options.polarity} unknown`));
  }
  return { tense: createWord([''], VERB_ENGLISH_CONJUGATION), polarity: createWord([''], VERB_ENGLISH_CONJUGATION) };
}; 

const verbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.ConjugatedEnglishWord => {
  const word = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_VERB_ENGLISH;

  const { tense, polarity } = determineVerbConjugationEnglish(words, options, sentenceType);

  return {
    tense,
    indefiniteArticle: emptyWordElement(),
    polarity,
    word,
    type,
    __typename: __TYPENAME_CONJUGATED_ENGLISH_VERB,
  }
  // return `${verbPolarity} ${word.english}`;
};

export default verbConjugationEnglish;