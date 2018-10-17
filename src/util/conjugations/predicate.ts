import { 
  // capitalise, 
  // randomArrayElement, 
  createError,
} from "../functions";

import {
  nounConjugationJapanese,
  nounConjugationEnglish,
} from './noun';

import {  
  PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  PRIMARY_TYPE_ADJECTIVE,
} from '../constants/wordConstants';

import {  
  PREDICATE_IDENTIFIER,
} from '../constants/optionsConstants';

const determinePredicateConjugationJapanese = (predicate: Util.Word, options: Util.Options): string => {
  switch(predicate.primaryType) {
    case PRIMARY_TYPE_NOUN:
      return nounConjugationJapanese(predicate, options, PREDICATE_IDENTIFIER);
    case PRIMARY_TYPE_VERB:
      return 'will need to do - verb';
    case PRIMARY_TYPE_ADJECTIVE:
      return 'will need to do - adjc';
    default:
      return createError('conjugations/predicate', 'predicateConjugation', 'topic.primaryType unknown');
  }
};

export const predicateConjugationJapanese = (predicate: Util.Word, options: Util.Options): string => {
  const predicateWord = determinePredicateConjugationJapanese(predicate, options);

  return `${predicateWord}`;
};


const determinePredicateConjugationEnglish = (predicate: Util.Word, options: Util.Options): string => {
  switch(predicate.primaryType) {
    case PRIMARY_TYPE_NOUN:
      return nounConjugationEnglish(predicate, options, PREDICATE_IDENTIFIER);
    case PRIMARY_TYPE_VERB:
      return 'will need to do - verb';
    case PRIMARY_TYPE_ADJECTIVE:
      return 'will need to do - ajective';
    default:
      return createError('conjugations/predicate', 'predicateConjugation', 'topic.primaryType unknown');
  }
};

export const predicateConjugationEnglish = (predicate: Util.Word, options: Util.Options): string => {
  const predicateWord = determinePredicateConjugationEnglish(predicate, options);

  return `${predicateWord}`;
};
