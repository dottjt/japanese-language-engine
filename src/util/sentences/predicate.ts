import { randomArrayElement } from "../functions";

import {
  getOneWordPerson,
  getOneRandomHumanNameCategoryNoun
} from "../retrieve";

import {
  topicConjugationJapanese,
  topicConjugationEnglish,
} from "../conjugations/topicConjugation";

import {
  predicateConjugationJapanese,
  predicateConjugationEnglish,
} from "../conjugations/predicateConjugation";

import {
  NULL,
} from "../constants/generalConstants";

import {
  TOPIC_PREDICATE,

  politenessArray,
  polarityArray,
  tenseArray,

  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../constants/optionsConstants";


// LANG_JAPANESE SENTENCE CONFIG FUNCTIONS

const statementJapanese = (topic: Util.Word, predicate: Util.Word, options: Util.Options): string => {
  // 小林さんは人。
  // 小林さんは人じゃない。
  const topicPhrase = topicConjugationJapanese(topic, options);
  const predicatePrhase = predicateConjugationJapanese(predicate, options);

  return `${topicPhrase}${predicatePrhase}`;
};

export const topicPredicateJapanese = (words: Util.TopicPredicate, options: Util.Options): Util.Sentence => ({
  type: TOPIC_PREDICATE,
  question: NULL,
  answer: NULL,
  statement: statementJapanese(words.topic, words.predicate, options)
});

// LANG_ENGLISH SENTENCE CONFIG FUNCTIONS

const statementEnglish = (topic: Util.Word, predicate: Util.Word, options: Util.Options): string => {
  // Kobayashi is a human.
  // Kobayashi is not a human.
  const topicPhrase = topicConjugationEnglish(topic, options);
  const predicatePhrase = predicateConjugationEnglish(predicate, options);

  return `${topicPhrase} ${predicatePhrase}`;
};

export const topicPredicateEnglish = (words: Util.TopicPredicate, options: Util.Options): Util.Sentence => ({
  type: TOPIC_PREDICATE,
  question: NULL,
  answer: NULL,
  statement: statementEnglish(words.topic, words.predicate, options)
});

// GENERATE BASIC QUESTION WORD DATA

const generateRandomTopicPredicateWordData = (options: Util.Options, nouns: Util.Word[]): Util.EnglishJapaneseSentence => {
  const predicate = getOneWordPerson(nouns);
  
  const words = {
    topic: getOneRandomHumanNameCategoryNoun(nouns),
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
  tense: tenseArray[randomArrayElement(tenseArray)],
  __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
});

export const generateTopicPredicateExercises = (nouns: Util.Word[], variation: string): Util.EnglishJapaneseOptionsSentence[] =>
  Array.from(Array(10)).map(() => {
    const options = generateRandomTopicPredicateOptions(variation);
    const { englishSentence, japaneseSentence } = generateRandomTopicPredicateWordData(options, nouns);
    return {
      options,
      englishSentence, 
      japaneseSentence,
    };
  });
