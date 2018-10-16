import {
  capitalise,
  randomArrayElement,
  appendSan,
  getOneWordPerson,
  getOneRandomHumanNameCategoryNoun,
} from '../functions';

import {
  nounConjugationJapanese,
  nounConjugationEnglish,
} from '../conjugation/noun';

import {
  NULL,
  ENGLISH,
  JAPANESE,

  STATEMENT_BASIC,

  VARIATION_POSITIVE,
  VARIATION_NEGATIVE,

  POLITENESS_TYPE_CASUAL,
  POLITENESS_TYPE_FORMAL,

  __TYPENAME_OPTIONS,
} from '../constants';

// UTIL FUNCTIONS

const convertWordsBasicStatement = (words: Util.BasicStatement, wordType: string): Util.BasicStatementString => (
  wordType === ENGLISH ? ({
    topicNoun: words.topicNoun.english,
    predicateNoun: words.predicateNoun.english,
  }) : ({
    topicNoun: words.topicNoun.japanese,
    predicateNoun: words.predicateNoun.japanese,
  })
);


// JAPANESE SENTENCE CONFIG FUNCTIONS

const statementJapanese = (topicNoun: string, predicateNoun: string, options: Util.Options): string => (
  // 小林さんは人。
  // 小林さんは人じゃない。
  `${appendSan(topicNoun)}は${nounConjugationJapanese(predicateNoun, options)}。`
);

const basicStatementJapanese = ({ topicNoun, predicateNoun }: Util.BasicStatementString, options: Util.Options): Util.Sentence => ({
  type: STATEMENT_BASIC,
  question: NULL,
  answer: NULL,
  statement: statementJapanese(
    topicNoun,
    predicateNoun,
    options,
  ),
});

export const basicStatementSentenceJapanese = (words: Util.BasicStatement, options: Util.Options): Util.Sentence => basicStatementJapanese(convertWordsBasicStatement(words, JAPANESE), options);


// ENGLISH SENTENCE CONFIG FUNCTIONS

const statementEnglish = (topicNoun: string, predicateNoun: string, options: Util.Options): string => (
  // Kobayashi is a human.
  // Kobayashi is not a human.
  `${capitalise(topicNoun)} ${nounConjugationEnglish('is', options)} a ${predicateNoun}。`
);

const basicStatementEnglish = ({ topicNoun, predicateNoun }: Util.BasicStatementString, options: Util.Options): Util.Sentence => ({
  type: STATEMENT_BASIC,
  question: NULL,
  answer: NULL,
  statement: statementEnglish(
    topicNoun,
    predicateNoun,
    options,
  ),
});

export const basicStatementSentenceEnglish = (words: Util.BasicStatement, options: Util.Options): Util.Sentence => basicStatementEnglish(convertWordsBasicStatement(words, ENGLISH), options);


// GENERATE BASIC QUESTION WORD DATA

const generateRandomBasicStatementWordData = (options: Util.Options, nouns: Util.Word[]): Util.EnglishJapaneseSentence => {
  const predicateNoun = getOneWordPerson(nouns);
  const words = {
    topicNoun: getOneRandomHumanNameCategoryNoun(nouns),
    predicateNoun,
  };

  return {
    japaneseSentence: basicStatementSentenceJapanese(words, options),
    englishSentence: basicStatementSentenceEnglish(words, options),
  };
};

const generateRandomBasicStatementOptions = (): Util.Options => {
  const politenessArray = [POLITENESS_TYPE_CASUAL, POLITENESS_TYPE_FORMAL];
  const variationArray = [VARIATION_POSITIVE, VARIATION_NEGATIVE];

  return {
    sentenceType: STATEMENT_BASIC,
    sentencePoliteness: politenessArray[0],
    sentenceVariation: variationArray[randomArrayElement(variationArray)],
    __typename: __TYPENAME_OPTIONS,
  }
};

export const generateBasicStatementExercises = (nouns: Util.Word[]): Util.EnglishJapaneseSentence[] => (
  Array.from(Array(10)).map(value => {
    const config = generateRandomBasicStatementOptions();
    return generateRandomBasicStatementWordData(config, nouns);
  })
);
