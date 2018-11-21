import {
  filtersentenceType,
  createWord,  
} from '../utilConjugation';

import {
  __TYPENAME_CONJUGATED_ENGLISH_NOUN,
} from '../../constants/typeNameConstants';

import {
  ENGLISH_NOUN_DECLENSION,
} from '../../constants/wordConstants';

import {
  CONTEXT_SUBJECT_QUANTITY_MULTIPLE,
} from '../../constants/contextConstants';

import determineNounPlural from './determineNounPlural';


const nounConjugationEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  const noun = filtersentenceType(words, sentenceType) as Util.Noun;

  return sentenceContext.subjectQuantity === CONTEXT_SUBJECT_QUANTITY_MULTIPLE 
    ? determineNounPlural(noun) 
    : createWord([noun.nounEnglish.singular], ENGLISH_NOUN_DECLENSION);
};

export default nounConjugationEnglish;