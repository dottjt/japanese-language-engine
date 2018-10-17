import { randomArrayElement } from "../functions";

import {
  getOneWordPerson,
  getOneRandomHumanNameCategoryNoun
} from "../retrieve";

import {
  topicConjugationJapanese,
  topicConjugationEnglish,
} from "../conjugations/topic";

import {
  predicateConjugationJapanese,
  predicateConjugationEnglish,
} from "../conjugations/predicate";

import {
  NULL,
  
  // type
  TOPIC_PREDICATE,

  politenessArray,
  polarityArray,

  __TYPENAME_OPTIONS
} from "../constants";

// LANG_JAPANESE SENTENCE CONFIG FUNCTIONS

const statementJapanese = (topicNoun: Util.Word, predicate: Util.Word, options: Util.Options): string => {
  // 小林さんは人。
  // 小林さんは人じゃない。
  const topicPhrase = topicConjugationJapanese(topicNoun, options);
  const predicatePrhase = predicateConjugationJapanese(predicate, options);

  return `${topicPhrase}${predicatePrhase}`;
};

export const topicPredicateJapanese = (
  words: Util.TopicPredicate,
  options: Util.Options
): Util.Sentence => ({
  type: TOPIC_PREDICATE,
  question: NULL,
  answer: NULL,
  statement: statementJapanese(words.topicNoun, words.predicate, options)
});

// LANG_ENGLISH SENTENCE CONFIG FUNCTIONS

const statementEnglish = (
  topicNoun: Util.Word,
  predicate: Util.Word,
  options: Util.Options
): string => {
  // Kobayashi is a human.
  // Kobayashi is not a human.
  const topicPhrase = topicConjugationEnglish(topicNoun, options);
  const predicatePhrase = predicateConjugationEnglish(predicate, options);

  return `${topicPhrase} ${predicatePhrase}`;
};

export const topicPredicateEnglish = (
  words: Util.TopicPredicate,
  options: Util.Options
): Util.Sentence => ({
  type: TOPIC_PREDICATE,
  question: NULL,
  answer: NULL,
  statement: statementEnglish(words.topicNoun, words.predicate, options)
});

// GENERATE BASIC QUESTION WORD DATA

const generateRandomTopicPredicateWordData = (
  options: Util.Options,
  nouns: Util.Word[]
): Util.EnglishJapaneseSentence => {
  const predicate = getOneWordPerson(nouns);
  const words = {
    topicNoun: getOneRandomHumanNameCategoryNoun(nouns),
    predicate,
  };

  return {
    japaneseSentence: topicPredicateJapanese(words, options),
    englishSentence: topicPredicateEnglish(words, options)
  };
};

// this needs to be res
const generateRandomTopicPredicateOptions = (variation: string): Util.Options => ({
  sentenceType: TOPIC_PREDICATE,
  variation,
  politeness: politenessArray[randomArrayElement(politenessArray)],
  polarity: polarityArray[randomArrayElement(polarityArray)],
  __typename: __TYPENAME_OPTIONS,
});

export const generateTopicPredicateExercises = (nouns: Util.Word[], variation: string): Util.EnglishJapaneseSentence[] =>
  Array.from(Array(10)).map(() => {
    const config = generateRandomTopicPredicateOptions(variation);
    return generateRandomTopicPredicateWordData(config, nouns);
  });
