import {
  createError,
} from '../../functions';

import {
  // returnSentenceParts,
  createWord,  
  createEmptyWord,
} from '../utilConjugation';

import {
  adverbConjugationPermissionsEnglish,
  polarityPermissions, 
} from './adverbPermissions';

import {
  __TYPENAME_CONJUGATED_ENGLISH_NOUN,
} from '../../constants/typeNameConstants';

import {
  T,
  WA_TS,
  MO_TS,
  GA_TS,

  WO_SV,
  NI_SV,
  DE_SV,

  TENSE_PRESENT,
  TENSE_PAST,
} from '../../constants/optionsConstants';

import {
  ENGLISH_ADVERB,
} from '../../constants/wordConstants';


const determineAdverbConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordArrayElement[] => {
  // const { topic, subject, verb } = returnSentenceParts(words);

  // NOTE: I wonder if permissions in this context works when you can play them anywhere within a sentence, rather than having it determined within this function. 
  // const permissions = adverbConjugationPermissionsEnglish(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);
  const permissions = adverbConjugationPermissionsEnglish(options);

  if (permissions) {
    switch(`${options.tense}${options.selectedVariation}`) {
      case `${TENSE_PRESENT}${T}`:
      case `${TENSE_PAST}${T}`:
      case `${TENSE_PRESENT}${WA_TS}`:
      case `${TENSE_PAST}${WA_TS}`:
        return createEmptyWord(ENGLISH_ADVERB);
      
      case `${TENSE_PRESENT}${MO_TS}`:
      case `${TENSE_PAST}${MO_TS}`:
        return createWord(['also'], ENGLISH_ADVERB);

      case `${TENSE_PRESENT}${GA_TS}`: return createWord(['the', 'one', 'that', 'is'], ENGLISH_ADVERB);
      case `${TENSE_PAST}${GA_TS}`: return createWord(['the', 'one', 'that', 'was'], ENGLISH_ADVERB);

      // NOTE: THESE NEED TO BE FIGURED OUT
      case `${TENSE_PAST}${WO_SV}`:
      case `${TENSE_PRESENT}${WO_SV}`:

      case `${TENSE_PAST}${NI_SV}`:
      case `${TENSE_PRESENT}${NI_SV}`:

      case `${TENSE_PAST}${DE_SV}`:
      case `${TENSE_PRESENT}${DE_SV}`:
        return createEmptyWord(ENGLISH_ADVERB);
    }
    throw new Error(createError('adverbConjugationEnglish.ts', 'determineAdverbConjugationEnglish - WA_TS', `${options.polarity}${options.tense} unknown`));
  }
  return createEmptyWord(ENGLISH_ADVERB);
};

const determineAdverbPolarity = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordArrayElement[] => {
  // const { topic, subject, verb } = returnSentenceParts(words);
  // const permissions = polarityPermissions(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, options, sentenceType);
  const permissions = polarityPermissions(options);

  if (permissions) {
    return createWord(['not'], ENGLISH_ADVERB);
  }
  return createEmptyWord(ENGLISH_ADVERB);
};

const adverbConjugationEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  const adverb = determineAdverbConjugationEnglish(words, options, sentenceType)
  const adverbPolarity = determineAdverbPolarity(words, options, sentenceType);

  return adverb.concat(adverbPolarity);
};


export default adverbConjugationEnglish;