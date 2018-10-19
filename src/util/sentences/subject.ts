import {
  createError
} from '../functions';

import {
  LANG_ENGLISH,
  LANG_JAPANESE,
} from "../constants/generalConstants";

import {
  PRIMARY_TYPE_NOUN,
  PRIMARY_TYPE_VERB,
  PRIMARY_TYPE_ADJECTIVE
} from '../constants/wordConstants';

import { 
  nounConjugationJapanese,
  nounConjugationEnglish,
} from '../conjugations/nounConjugation';

import {
  TOPIC,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../constants/optionsConstants";


const determineSubjectConjugation = (subject: Util.Word, options: Util.Options, type: string): string => {
  if (type === LANG_JAPANESE) {
    switch (subject.primaryType) {
      case PRIMARY_TYPE_NOUN:
        return nounConjugationJapanese(subject, options, TOPIC);
      case PRIMARY_TYPE_VERB:
        return createError('conjugations/subject', 'subjectConjugation', `subject.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      case PRIMARY_TYPE_ADJECTIVE:
        return createError('conjugations/subject', 'subjectConjugation', `subject.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      default:
        return createError('conjugations/subject', 'subjectConjugation', `${subject.primaryType} unknown`);
    }
  } else {
    switch (subject.primaryType) {
      case PRIMARY_TYPE_NOUN:
        return nounConjugationEnglish(subject, options, TOPIC);
      case PRIMARY_TYPE_VERB:
        return createError('conjugations/subject', 'subjectConjugation', `subject.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      case PRIMARY_TYPE_ADJECTIVE:
        return createError('conjugations/subject', 'subjectConjugation', `subject.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      default:
        return createError('conjugations/subject', 'subjectConjugation', 'subject.primaryType unknown');
    }
  }
};

const subjectConjugation = (subject: Util.Word, options: Util.Options, type: string): string => (
  type === LANG_JAPANESE ? (
    // 人だ。
    // 人じゃない。
    `${determineSubjectConjugation(subject, options, type)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${determineSubjectConjugation(subject, options, type)}`
  )
);

const determineVerb = (words: Util.Subject, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes("QUESTION") ? ({
    type: TOPIC,
    question: subjectConjugation(words.subject, options, type),
    answer: subjectConjugation(words.subject, options, type),
  }) : ({
    type: TOPIC,
    statement: subjectConjugation(words.subject, options, type)  
  })
);

const generateVerbSentence = (options: Util.Options, words: Util.Subject): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determineVerb(words, options, LANG_JAPANESE),
  englishSentence: determineVerb(words, options, LANG_ENGLISH)
});

export default generateVerbSentence;
