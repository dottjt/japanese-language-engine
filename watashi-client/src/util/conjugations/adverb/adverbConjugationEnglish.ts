import {
  createError,
} from '../../functions';

import {
  // filtersentenceType,
  returnSentenceParts,
  createWord,  
  createEmptyWord,
} from '../utilConjugation';

import {
  adverbConjugationPermissionsEnglish,
} from './adverbPermissions';

import {
  __TYPENAME_CONJUGATED_ENGLISH_NOUN,
} from '../../constants/typeNameConstants';

import {
  T,
  WA_TS,
  MO_TS,
  GA_TS,

  // WO_SV,
  // NI_SV,
  // DE_SV,

  TENSE_PRESENT,
  TENSE_PAST,
} from '../../constants/optionsConstants';

import {
  ENGLISH_ADVERB,
} from '../../constants/wordConstants';


const determineAdverbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordArrayElement[] => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = adverbConjugationPermissionsEnglish(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  if (permissions) {
    if (options.selectedVariation === WA_TS || options.selectedVariation === T) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createEmptyWord(ENGLISH_ADVERB);
        case `${TENSE_PAST}`: return createEmptyWord(ENGLISH_ADVERB);
      };
      throw new Error(createError('adverbConjugationEnglish.ts', 'determineAdverbConjugationEnglish - WA_TS', `${options.polarity}${options.tense} unknown`));
    }
  
    if (options.selectedVariation === MO_TS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['also'], ENGLISH_ADVERB);
        case `${TENSE_PAST}`: return createWord(['also'], ENGLISH_ADVERB);
      };
      throw new Error(createError('adverbConjugationEnglish.ts', 'determineAdverbConjugationEnglish - MO_TS', `${options.tense} unknown`));
    }
    
    if (options.selectedVariation === GA_TS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['the', 'one', 'that', 'is'], ENGLISH_ADVERB);
        case `${TENSE_PAST}`: return createWord(['the', 'one', 'that', 'was'], ENGLISH_ADVERB);
      };
      throw new Error(createError('adverbConjugationEnglish.ts', 'determineAdverbConjugationEnglish - GA_TS', `${options.tense} unknown`));
    }  
  }
  return createWord([''], ENGLISH_ADVERB);
};

const determineAdverbPolarity = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordArrayElement[] => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = polarityPermissions(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  if (permissions) {
    if (options.polarity === POLARITY_NEGATIVE) {
      return createWord(['not'], ENGLISH_POLARITY);
    }  
  }
  return createWord([''], ENGLISH_POLARITY);
};

const adverbConjugationEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  // const noun = filtersentenceType(words, sentenceType) as Util.Noun;

  const adverb = determineAdverbConjugationEnglish(words, options, sentenceType)
  const adverbPolarity = determineAdverbPolarity(words, options, sentenceType);

  return adverb.concat(adverbPolarity);
};


export default determineAdverbConjugationEnglish;