import { randomArrayElement } from "../functions";

import {
  getOneWordPerson,
} from "../retrieve";

import {
  predicateConjugationJapanese,
  predicateConjugationEnglish,
} from "../conjugations/predicateConjugation";

import {
  NULL,
} from "../constants/generalConstants";

import {
  PREDICATE,

  politenessArray,
  polarityArray,
  tenseArray,

  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../constants/optionsConstants";


// LANG_JAPANESE SENTENCE CONFIG FUNCTIONS

const statementJapanese = (predicate: Util.Word, options: Util.Options): string => {
  // 小林さんは人。
  // 小林さんは人じゃない。
  return `${predicateConjugationJapanese(predicate, options)}`;
};

export const predicateJapanese = (words: Util.Predicate, options: Util.Options): Util.Sentence => ({
  type: PREDICATE,
  question: NULL,
  answer: NULL,
  statement: statementJapanese(words.predicate, options)
});

// LANG_ENGLISH SENTENCE CONFIG FUNCTIONS

const statementEnglish = (predicate: Util.Word, options: Util.Options): string => {
  // Kobayashi is a human.
  // Kobayashi is not a human.
  return `${predicateConjugationEnglish(predicate, options)}`;
};

export const predicateEnglish = (words: Util.Predicate, options: Util.Options): Util.Sentence => ({
  type: PREDICATE,
  question: NULL,
  answer: NULL,
  statement: statementEnglish(words.predicate, options)
});

// GENERATE BASIC QUESTION WORD DATA

const generateRandomPredicateWordData = (options: Util.Options, nouns: Util.Word[]): Util.EnglishJapaneseSentence => {
  const words = {
    predicate: getOneWordPerson(nouns),
  };

  return {
    japaneseSentence: predicateJapanese(words, options),
    englishSentence: predicateEnglish(words, options)
  };
};

// this needs to be res
const generateRandomPredicateOptions = (variation: string): Util.Options => ({
  sentenceType: PREDICATE,
  variation,
  politeness: politenessArray[randomArrayElement(politenessArray)],
  polarity: polarityArray[randomArrayElement(polarityArray)],
  tense: tenseArray[randomArrayElement(tenseArray)],
  __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
});

export const generatePredicateExercises = (nouns: Util.Word[], variation: string): Util.EnglishJapaneseOptionsSentence[] =>
  Array.from(Array(10)).map(() => {
    const options = generateRandomPredicateOptions(variation);
    const { englishSentence, japaneseSentence } = generateRandomPredicateWordData(options, nouns);
    return {
      options,
      englishSentence, 
      japaneseSentence,
    };
  });
