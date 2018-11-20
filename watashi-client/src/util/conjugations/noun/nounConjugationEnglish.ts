import {
  createError,
} from '../../functions';

import {
  filtersentenceType,
  returnSentenceParts,
  createWord,  
} from '../utilConjugation';

import {
  polarityPermissions, 
  nounConjugationPermissionsEnglish,
} from './nounPermissions';

import {
  __TYPENAME_CONJUGATED_ENGLISH_NOUN,
} from '../../constants/typeNameConstants';

import {
  ENGLISH_POLARITY,

  T,
  WA_TS,
  MO_TS,
  GA_TS,

  // WO_SV,
  // NI_SV,
  // DE_SV,
  
  // SENTENCE_TYPE_VERB,
  // SENTENCE_TYPE_TOPIC,
  // SENTENCE_TYPE_SUBJECT,

  // POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,

  ENGLISH_TENSE,

  // CONJUGATION_TYPE_NOUN_ENGLISH,
} from '../../constants/optionsConstants';

import determineNounIndefiniteArticle from './determineNounIndefiniteArticle';
import determineNounPlural from './determineNounPlural';



const determineNounPolarity = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordArrayElement[] => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = polarityPermissions(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  if (permissions) {
    if (options.polarity === POLARITY_NEGATIVE) {
      return createWord(['not'], ENGLISH_POLARITY);
    }  
  }
  return createWord([''], ENGLISH_POLARITY);
};

const determineNounConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordArrayElement[] => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounConjugationPermissionsEnglish(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  if (permissions) {
    if (options.selectedVariation === WA_TS || options.selectedVariation === T) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is'], ENGLISH_TENSE);
        case `${TENSE_PAST}`: return createWord(['was'], ENGLISH_TENSE);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - WA_TS', `${options.polarity}${options.tense} unknown`));
    }
  
    if (options.selectedVariation === MO_TS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is', 'also'], ENGLISH_TENSE);
        case `${TENSE_PAST}`: return createWord(['was', 'also'], ENGLISH_TENSE);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - MO_TS', `${options.tense} unknown`));
    }
    
    if (options.selectedVariation === GA_TS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is', 'the', 'one', 'that', 'is'], ENGLISH_TENSE);
        case `${TENSE_PAST}`: return createWord(['is', 'the', 'one', 'that', 'was'], ENGLISH_TENSE);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - GA_TS', `${options.tense} unknown`));
    }  
  }
  return createWord([''], ENGLISH_TENSE);
};


const nounConjugationEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  const noun = filtersentenceType(words, sentenceType) as Util.Noun;

  const nounDeclension = determineNounPlural(noun, sentenceContext);
  const nounIndefiniteArticle = determineNounIndefiniteArticle(words, noun, sentenceType);
  const nounPolarity = determineNounPolarity(words, options, sentenceType);
  const nounTense = determineNounConjugationEnglish(words, options, sentenceType);

  return nounTense.concat(nounPolarity).concat(nounIndefiniteArticle).concat(nounDeclension); 

  // return {
  //   type,
  //   sentenceType,
  //   nounDeclension,
  //   nounTense,
  //   nounPolarity,
  //   nounIndefiniteArticle,
  //   __typename: __TYPENAME_CONJUGATED_ENGLISH_NOUN,
  // };
};

export default nounConjugationEnglish;