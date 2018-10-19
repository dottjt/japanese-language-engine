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
  verbConjugationJapanese,
  // verbConjugationEnglish,
} from '../../conjugations/verbConjugation';

import {  
  PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  PRIMARY_TYPE_ADJECTIVE,
} from '../../constants/wordConstants';

import {  
  PREDICATE,
} from '../../constants/optionsConstants';

const subjectOrVerb = (subject: Util.Word, verb: Util.Word) => {
  if ( (subject && !verb) ) {
    return subject;
  } else {
    return verb;
  };
};

const determinePredicateConjugation = (subject: Util.Word, verb: Util.Word, options: Util.Options, type: string, identifier: string): string => {
  if (type === LANG_JAPANESE) {
    if ((subject && !verb) || (!subject && verb)) {
      switch(subjectOrVerb(subject, verb).primaryType) {
        case PRIMARY_TYPE_NOUN:
          return nounConjugationJapanese(subjectOrVerb(subject, verb), options, identifier);
        case PRIMARY_TYPE_VERB:
          return verbConjugationJapanese(subjectOrVerb(subject, verb), options, identifier);
        case PRIMARY_TYPE_ADJECTIVE:
          return 'Not sure if it does this? I don\'t think it does';
        default:
          return createError('conjugations/predicate', 'predicateConjugation', 'topic.primaryType unknown');
      }
    } else {
      return `${nounConjugationJapanese(subject, options, identifier)}${nounConjugationJapanese(verb, options, identifier)}`;
    }
  } else {
    // ENGLISH
    if ((subject && !verb) || (!subject && verb)) {
      switch(subjectOrVerb(subject, verb).primaryType) {
        case PRIMARY_TYPE_NOUN:
          return nounConjugationEnglish(subjectOrVerb(subject, verb), options, identifier);
        case PRIMARY_TYPE_VERB:
          // return verbConjugationEnglish(subjectOrVerb(subject, verb), options, identifier);
          return 'will need to do - verb';
        case PRIMARY_TYPE_ADJECTIVE:
          return 'will need to do - ajective';
        default:
          return createError('conjugations/predicate', 'predicateConjugation', 'topic.primaryType unknown');
      }    
    } else {
      return `${nounConjugationJapanese(subject, options, identifier)}${verbConjugationJapanese(verb, options, identifier)}`;
    }
  }
};

export const predicateConjugation = (subject: Util.Word | undefined, verb: Util.Word | undefined, options: Util.Options, type: string, identifier: string): string => (
  type === LANG_JAPANESE ? (
    // 小林さんは人。
    // 小林さんは人じゃない。
    `${determinePredicateConjugation(subject as Util.Word, verb as Util.Word, options, LANG_JAPANESE, identifier)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${determinePredicateConjugation(subject as Util.Word, verb as Util.Word, options, LANG_ENGLISH, identifier)}`
  )
);

const determinePredicate = (words: Util.Predicate, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes('QUESTION') ? ({
    type: PREDICATE,
    question: predicateConjugation(words.subject, words.verb, options, type, PREDICATE),
    answer: predicateConjugation(words.subject, words.verb, options, type, PREDICATE),
  }) : ({
    type: PREDICATE,
    statement: predicateConjugation(words.subject, words.verb, options, type, PREDICATE)  
  })
);

const generatePredicateSentence = (options: Util.Options, words: Util.Predicate): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determinePredicate(words, options, LANG_JAPANESE),
  englishSentence: determinePredicate(words, options, LANG_ENGLISH)
});

export default generatePredicateSentence;
