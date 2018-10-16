import {
  capitalise,
  randomArrayElement,
  appendSan,
  
  getOneWordPerson,
  getOneRandomHumanNameCategoryNoun,
  getOneRandomResponseCategoryNoun,
} from '../functions';

import {
  nounConjugationJapanese,
  nounConjugationEnglish,
} from '../conjugation/noun';

import {
  NULL,
  ENGLISH,
  JAPANESE,

  QUESTION_BASIC,

  VARIATION_POSITIVE,
  VARIATION_NEGATIVE,

  POLITENESS_TYPE_CASUAL,
  POLITENESS_TYPE_FORMAL,

  __TYPENAME_OPTIONS,

} from '../constants';

// UTIL FUNCTIONS

const convertWordsBasicQuestion = (words: Util.BasicQuestion, wordType: string): Util.BasicQuestionString => (
  wordType === ENGLISH ? ({
    questionTopicNoun: words.questionTopicNoun.english,
    questionPredicateNoun: words.questionPredicateNoun.english,
    answerResponse: words.answerResponse.english,
    answerPredicateNoun: words.answerPredicateNoun.english,
  }) : ({
    questionTopicNoun: words.questionTopicNoun.japanese,
    questionPredicateNoun: words.questionPredicateNoun.japanese,
    answerResponse: words.answerResponse.japanese,
    answerPredicateNoun: words.answerPredicateNoun.japanese,
  })
);


// JAPANESE SENTENCE CONFIG FUNCTIONS

const questionTypeJapanese = (questionTopicNoun: string, questionPredicateNoun: string, options: Util.Options): string => (
  // 小林さんは人か？
  // 小林さんは人じゃないか？
  `${appendSan(questionTopicNoun)}は${questionPredicateNoun}か？`
);

const answerTypeJapanese = (answerPredicateNoun: string, answerResponse: string, options: Util.Options): string => (
  // はい、人です。
  // いいえ、人じゃない。
  `${answerResponse}, ${answerPredicateNoun}。`
);

const BasicQuestionJapanese = ({ questionTopicNoun, questionPredicateNoun, answerPredicateNoun, answerResponse }: Util.BasicQuestionString, options: Util.Options): Util.Sentence => ({
  type: QUESTION_BASIC,
  question: questionTypeJapanese(
    questionTopicNoun,
    questionPredicateNoun,
    options,
  ),
  answer: answerTypeJapanese(
    nounConjugationJapanese(answerPredicateNoun, options),
    answerResponse,
    options,
  ),
  statement: NULL,
});

export const BasicQuestionSentenceJapanese = (words: Util.BasicQuestion, options: Util.Options): Util.Sentence => BasicQuestionJapanese(convertWordsBasicQuestion(words, JAPANESE), options);


// ENGLISH SENTENCE CONFIG FUNCTIONS

const questionTypeEnglish = (questionTopicNoun: string, questionPredicateNoun: string, options: Util.Options): string => (
  // Is Kobayashi a human?
  `Is ${questionTopicNoun} a ${questionPredicateNoun}?`
);

const answerTypeEnglish = (questionTopicNoun: string, answerPredicateNoun: string, answerResponse: string, options: Util.Options): string => (
  // Yes, Kobayashi is a human.
  // No, Kobayashi is not a human. 
  `${capitalise(nounConjugationEnglish(answerResponse, options))}, ${questionTopicNoun} ${nounConjugationEnglish('is', options)} a ${answerPredicateNoun}.`
);

const BasicQuestionEnglish = ({ questionTopicNoun, questionPredicateNoun, answerPredicateNoun, answerResponse }: Util.BasicQuestionString, options: Util.Options): Util.Sentence => ({
  type: QUESTION_BASIC,
  question: questionTypeEnglish(
    questionTopicNoun,
    questionPredicateNoun,
    options,
  ),
  answer: answerTypeEnglish(
    questionTopicNoun,
    answerPredicateNoun,
    answerResponse,
    options,
  ),
  statement: NULL,
});

export const BasicQuestionSentenceEnglish = (words: Util.BasicQuestion, options: Util.Options): Util.Sentence => BasicQuestionEnglish(convertWordsBasicQuestion(words, ENGLISH), options);


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
    japaneseSentence: BasicQuestionSentenceJapanese(words, options),
    englishSentence: BasicQuestionSentenceEnglish(words, options),
  };
};

const generateRandomBasicQuestionOptions = (): Util.Options => {
  const politenessArray = [POLITENESS_TYPE_CASUAL, POLITENESS_TYPE_FORMAL];
  const variationArray = [VARIATION_POSITIVE, VARIATION_NEGATIVE];

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
