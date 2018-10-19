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
  SUBJECT,
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../constants/optionsConstants";


const determineSubjectConjugation = (subject: Util.Word, options: Util.Options, type: string, identifier: string): string => {
  if (type === LANG_JAPANESE) {
    switch (subject.primaryType) {
      case PRIMARY_TYPE_NOUN:
        return nounConjugationJapanese(subject, options, identifier);
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
        return nounConjugationEnglish(subject, options, identifier);
      case PRIMARY_TYPE_VERB:
        return createError('conjugations/subject', 'subjectConjugation', `subject.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      case PRIMARY_TYPE_ADJECTIVE:
        return createError('conjugations/subject', 'subjectConjugation', `subject.primaryType ${PRIMARY_TYPE_VERB} cannot exist`);
      default:
        return createError('conjugations/subject', 'subjectConjugation', 'subject.primaryType unknown');
    }
  }
};

const subjectConjugation = (subject: Util.Word, options: Util.Options, type: string, identifier: string): string => (
  type === LANG_JAPANESE ? (
    // 人だ。
    // 人じゃない。
    `${determineSubjectConjugation(subject, options, type, identifier)}`
  ) : (
    // Kobayashi is a human.
    // Kobayashi is not a human.
    `${determineSubjectConjugation(subject, options, type, identifier)}`
  )
);

const determineSubject = (words: Util.Subject, options: Util.Options, type: string): Util.Sentence => (
  options.variation.includes("QUESTION") ? ({
    type: SUBJECT,
    question: subjectConjugation(words.subject, options, type, SUBJECT),
    answer: subjectConjugation(words.subject, options, type, SUBJECT),
  }) : ({
    type: SUBJECT,
    statement: subjectConjugation(words.subject, options, type, SUBJECT)  
  })
);

const generateSubjectSentence = (options: Util.Options, words: Util.Subject): Util.EnglishJapaneseSentence => ({
  japaneseSentence: determineSubject(words, options, LANG_JAPANESE),
  englishSentence: determineSubject(words, options, LANG_ENGLISH)
});

export default generateSubjectSentence;
