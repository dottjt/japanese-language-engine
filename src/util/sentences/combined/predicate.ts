import { 
  createError,
} from '../../functions';

import {
  LANG_ENGLISH,
  LANG_JAPANESE,
} from '../../constants/generalConstants';

import {
  nounConjugationJapanese,
  nounConjugationEnglish,
} from '../../conjugations/nounConjugation';

import {  
  PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  PRIMARY_TYPE_ADJECTIVE,
} from '../../constants/wordConstants';

import {  
  PREDICATE,
} from '../../constants/optionsConstants';

const subjectOrVerb = (subject: Util.Word, verb: Util.Word) => (subject && !verb) || (!subject && verb) ? subject : verb; 

const determinePredicateConjugation = (subject: Util.Word, verb: Util.Word, options: Util.Options, type: string): string => {
  if (type === LANG_JAPANESE) {
    if (subjectOrVerb(subject, verb)) {
      switch(subjectOrVerb(subject, verb).primaryType) {
        case PRIMARY_TYPE_NOUN:
          return nounConjugationJapanese(subjectOrVerb(subject, verb), options, PREDICATE);
        case PRIMARY_TYPE_VERB:
          return 'will need to do - verb';
        case PRIMARY_TYPE_ADJECTIVE:
          return 'will need to do - adjc';
        default:
          return createError('conjugations/predicate', 'predicateConjugation', 'topic.primaryType unknown');
      }
    } else {
      switch(subjectOrVerb(subject, verb).primaryType) {
        case PRIMARY_TYPE_NOUN:
          return `${nounConjugationJapanese(subject, options, PREDICATE)}${nounConjugationJapanese(verb, options, PREDICATE)}`;
        case PRIMARY_TYPE_VERB:
          return 'will need to do - verb';
        case PRIMARY_TYPE_ADJECTIVE:
          return 'will need to do - adjc';
        default:
          return createError('conjugations/predicate', 'predicateConjugation', 'topic.primaryType unknown');
      }   
    }
  } else {
    // ENGLISH
    if (subjectOrVerb(subject, verb)) {
      switch(subjectOrVerb(subject, verb).primaryType) {
        case PRIMARY_TYPE_NOUN:
          return nounConjugationEnglish(subject, options, PREDICATE);
        case PRIMARY_TYPE_VERB:
          return 'will need to do - verb';
        case PRIMARY_TYPE_ADJECTIVE:
          return 'will need to do - ajective';
        default:
          return createError('conjugations/predicate', 'predicateConjugation', 'topic.primaryType unknown');
      }    
    } else {
      switch(verb.primaryType) {
        case PRIMARY_TYPE_NOUN:
          return `${nounConjugationEnglish(subject, options, PREDICATE)}${nounConjugationEnglish(verb, options, PREDICATE)}`;
        case PRIMARY_TYPE_VERB:
          return 'will need to do - verb';
        case PRIMARY_TYPE_ADJECTIVE:
          return 'will need to do - ajective';
        default:
          return createError('conjugations/predicate', 'predicateConjugation', 'topic.primaryType unknown');
      }    
    }
  }
};

export const predicateConjugation = (subject: Util.Word | undefined, verb: Util.Word | undefined, options: Util.Options, type: string): string => (
  type === LANG_JAPANESE ? (
    // 小林さんは人。
    // 小林さんは人じゃない。
    `${determinePredicateConjugation(subject as Util.Word, verb as Util.Word, options, LANG_JAPANESE)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${determinePredicateConjugation(subject as Util.Word, verb as Util.Word, options, LANG_ENGLISH)}`
  )
);

const determinePredicate = (words: Util.Predicate, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes('QUESTION') ? ({
    type: PREDICATE,
    question: predicateConjugation(words.subject, words.verb, options, type),
    answer: predicateConjugation(words.subject, words.verb, options, type),
  }) : ({
    type: PREDICATE,
    statement: predicateConjugation(words.subject, words.verb, options, type)  
  })
);

const generatePredicateSentence = (options: Util.Options, words: Util.Predicate): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determinePredicate(words, options, LANG_JAPANESE),
  englishSentence: determinePredicate(words, options, LANG_ENGLISH)
});

export default generatePredicateSentence;
