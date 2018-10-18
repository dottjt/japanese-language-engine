import { randomArrayElement } from "../functions";

import {
  getOneRandomHumanNameCategoryNoun
} from "../retrieve";

import {
  topicConjugationJapanese,
  topicConjugationEnglish,
} from "../conjugations/topicConjugation";

import {
  NULL,
} from "../constants/generalConstants";

import {
  TOPIC,

  politenessArray,
  polarityArray,
  tenseArray,

  __TYPENAME_SENTENCE_DISPLAY_OPTIONS
} from "../constants/optionsConstants";


// LANG_JAPANESE SENTENCE CONFIG FUNCTIONS

const statementJapanese = (topic: Util.Word, options: Util.Options): string => {
  // 人だ。
  // 人じゃない。
  return `${topicConjugationJapanese(topic, options)}`;
};

export const topicJapanese = (words: Util.Topic, options: Util.Options): Util.Sentence => ({
  type: TOPIC,
  question: NULL,
  answer: NULL,
  statement: statementJapanese(words.topic, options)
});

// LANG_ENGLISH SENTENCE CONFIG FUNCTIONS

const statementEnglish = (topic: Util.Word, options: Util.Options): string => {
  // Kobayashi is a human.
  // Kobayashi is not a human.
  return `${topicConjugationEnglish(topic, options)}`;
};

export const topicEnglish = (words: Util.Topic, options: Util.Options): Util.Sentence => ({
  type: TOPIC,
  question: NULL,
  answer: NULL,
  statement: statementEnglish(words.topic, options)
});

// GENERATE BASIC QUESTION WORD DATA

const generateRandomTopicWordData = (options: Util.Options, nouns: Util.Word[]): Util.EnglishJapaneseSentence => {  
  const words = {
    topic: getOneRandomHumanNameCategoryNoun(nouns),
  };
  
  return {
    japaneseSentence: topicJapanese(words, options),
    englishSentence: topicEnglish(words, options)
  };
};

// this needs to be res
const generateRandomTopicOptions = (variation: string): Util.Options => ({
  sentenceType: TOPIC,
  variation,
  politeness: politenessArray[randomArrayElement(politenessArray)],
  polarity: polarityArray[randomArrayElement(polarityArray)],
  tense: tenseArray[randomArrayElement(tenseArray)],
  __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
});

export const generateTopicExercises = (nouns: Util.Word[], variation: string): Util.EnglishJapaneseOptionsSentence[] =>
  Array.from(Array(10)).map(() => {
    const options = generateRandomTopicOptions(variation);
    const { englishSentence, japaneseSentence } = generateRandomTopicWordData(options, nouns);
    return {
      options,
      englishSentence, 
      japaneseSentence,
    };
  });
