

import { 
  capitalizeFirstLetter,
  randomArrayElement,
} from '../functions';
import { nounPolitenessConjugation } from '../conjugation/noun';
import { 
  QUESTION_BASIC,

  QUESTION_VARIATION_POSITIVE,
  QUESTION_VARIATION_NEGATIVE,

  POLITENESS_TYPE_CASUAL,
  POLITENESS_TYPE_FORMAL,

  __TYPENAME_OPTIONS,

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
  type: QUESTION_BASIC,
  question: questionTypeJapanese(options.sentenceVariation, questionTopicNoun, questionPredicateNoun),
  answer: answerTypeJapanese(options.sentenceVariation, answerPredicateNoun, answerResponse),
  statement: 'NA',
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
  type: QUESTION_BASIC,
  question: `Is ${questionTopicNoun} ${questionPredicateNoun}?`,
  answer: `${answerResponse}, I am ${answerPredicateNoun}。`,
  statement: 'NA',
});

const basicWaQuestionOptionsEnglish = (words: Util.BasicWaQuestion, options: Util.Options): Util.BasicWaQuestionStringsWithOptions => ({
  questionTopicNoun: words.questionTopicNoun.english,
  questionPredicateNoun: words.questionPredicateNoun.english,
  answerResponse: capitalizeFirstLetter(words.answerResponse.english),
  answerPredicateNoun: words.answerPredicateNoun.english,
  options,
});

export const basicWaQuestionSentenceEnglish = (words: Util.BasicWaQuestion, options: Util.Options): Util.Sentence => basicWaQuestionEnglish(basicWaQuestionOptionsEnglish(words, options));

import {
  getOneWordPerson,
  getOneRandomHumanNameCategoryNoun,
  getOneRandomResponseCategoryNoun,
} from '../functions';

// GENERATE BASIC QUESTION WORD DATA

const generateRandomBasicQuestionWordData = (options: Util.Options, nouns: Util.Word[]): Util.EnglishJapaneseSentence => {
  const predicateNoun = getOneWordPerson(nouns);
  const words = {
    questionTopicNoun: getOneRandomHumanNameCategoryNoun(nouns),
    questionPredicateNoun: predicateNoun,
    answerResponse: getOneRandomResponseCategoryNoun(nouns),
    answerPredicateNoun: predicateNoun,
  };

  return {
    japaneseSentence: basicWaQuestionSentenceJapanese(words, options),
    englishSentence: basicWaQuestionSentenceEnglish(words, options),
  };
};

const generateRandomBasicQuestionOptions = (): Util.Options => {
  const politenessArray = [ POLITENESS_TYPE_CASUAL, POLITENESS_TYPE_FORMAL ];
  const variationArray = [ QUESTION_VARIATION_POSITIVE, QUESTION_VARIATION_NEGATIVE ];

  return {
    sentenceType: QUESTION_BASIC,
    sentencePoliteness: politenessArray[0],
    sentenceVariation: variationArray[randomArrayElement(variationArray)],
    __typename: __TYPENAME_OPTIONS,
  }
};

export const generateBasicQuestionExercises = (nouns: Util.Word[]): Util.EnglishJapaneseSentence[] => (
  Array.from(Array(10)).map(value => {
    const config = generateRandomBasicQuestionOptions();
    return generateRandomBasicQuestionWordData(config, nouns);
  })
);
