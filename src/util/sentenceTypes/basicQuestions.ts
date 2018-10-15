import Util from 'utilTypes';

import { capitalizeFirstLetter } from '../functions';
import { nounPolitenessConjugation } from '../conjugation/noun';
import { 
  QUESTION_WA_BASIC,

  QUESTION_VARIATION_POSITIVE,
  QUESTION_VARIATION_NEGATIVE,
} from '../constants';

// JAPANESE SENTENCE CONFIG FUNCTIONS

const questionTypeJapanese = (variation: string, questionTopicNoun: string, questionPredicateNoun: string): string => {
  switch(variation) {
    case QUESTION_VARIATION_POSITIVE:
      return `${questionTopicNoun}は${questionPredicateNoun}か？`; // 小林さんは人か？
    case QUESTION_VARIATION_NEGATIVE:
      return `${questionTopicNoun}は${questionPredicateNoun}か？`; // 小林さんは人じゃないか？
    default: 
      return 'questionType error';
  }
};

const answerTypeJapanese = (type: string, answerPredicateNoun: string, answerResponse: string): string => {
  switch(type) {
    case QUESTION_VARIATION_POSITIVE: // はい、人です。
      return `${answerResponse}, ${answerPredicateNoun}。`;
    case QUESTION_VARIATION_NEGATIVE:
      return `${answerResponse}, ${answerPredicateNoun}。`; // いいえ、人じゃない。
    default: 
      return 'answerType error';
  }
};

const basicWaQuestionJapanese = ({ questionTopicNoun, questionPredicateNoun, answerPredicateNoun, answerResponse, options }: Util.BasicWaQuestionStringsWithOptions): Util.Sentence => ({
  type: QUESTION_WA_BASIC,
  question: questionTypeJapanese(options.sentenceVariation, questionTopicNoun, questionPredicateNoun),
  answer: answerTypeJapanese(options.sentenceVariation, answerPredicateNoun, answerResponse),
});

const basicWaQuestionOptionsJapanese = (words: Util.BasicWaQuestion, options: Util.Options): Util.BasicWaQuestionStringsWithOptions  => ({
  questionTopicNoun: words.questionTopicNoun.japanese,
  questionPredicateNoun: words.questionPredicateNoun.japanese,
  answerResponse: words.answerResponse.japanese,
  answerPredicateNoun: nounPolitenessConjugation(words.answerPredicateNoun.japanese, options.sentencePoliteness, options.sentenceVariation),
  options,
});

export const basicWaQuestionSentenceJapanese = (words: Util.BasicWaQuestion, options: Util.Options): Util.Sentence => basicWaQuestionJapanese(basicWaQuestionOptionsJapanese(words, options));


// ENGLISH SENTENCE CONFIG FUNCTIONS

// const questionTypeEnglish = (variation: string, questionTopicNoun: string, questionPredicateNoun: string): string => {
//   switch(variation) {
//     case QUESTION_VARIATION_POSITIVE:
//       return `${questionTopicNoun}は${questionPredicateNoun}か？`; // 小林さんは人か？
//     case QUESTION_VARIATION_NEGATIVE:
//       return `${questionTopicNoun}は${questionPredicateNoun}か？`; // 小林さんは人じゃないか？
//     default: 
//       return 'questionType error';
//   }
// };

// const answerTypeEnglish = (type: string, answerPredicateNoun: string, answerResponse: string): string => {
//   switch(type) {
//     case QUESTION_VARIATION_POSITIVE: // はい、人です。
//       return `${answerResponse}, ${answerPredicateNoun}。`;
//     case QUESTION_VARIATION_NEGATIVE:
//       return `${answerResponse}, ${answerPredicateNoun}。`; // いいえ、人じゃない。
//     default: 
//       return 'answerType error';
//   }
// };

const basicWaQuestionEnglish = ({ questionTopicNoun, questionPredicateNoun, answerResponse, answerPredicateNoun }: Util.BasicWaQuestionStringsWithOptions): Util.Sentence => ({
  type: QUESTION_WA_BASIC,
  question: `Is ${questionTopicNoun} ${questionPredicateNoun}?`,
  answer: `${answerResponse}, I am ${answerPredicateNoun}。`,
});

const basicWaQuestionOptionsEnglish = (words: Util.BasicWaQuestion, options: Util.Options): Util.BasicWaQuestionStringsWithOptions => ({
  questionTopicNoun: words.questionTopicNoun.english,
  questionPredicateNoun: words.questionPredicateNoun.english,
  answerResponse: capitalizeFirstLetter(words.answerResponse.english),
  answerPredicateNoun: words.answerPredicateNoun.english,
  options,
});

export const basicWaQuestionSentenceEnglish = (words: Util.BasicWaQuestion, options: Util.Options): Util.Sentence => basicWaQuestionEnglish(basicWaQuestionOptionsEnglish(words, options));
