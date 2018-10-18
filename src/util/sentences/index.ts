import { createError } from '../functions';

import {
  getOneWordPerson,
  getOneRandomHumanNameCategoryNoun,
} from '../retrieve';

import {
  TOPIC,
  PREDICATE,
  TOPIC_PREDICATE,
} from '../constants/optionsConstants';

import generateTopicSentence from './topic';
import generatePredicateSentence from './predicate';
import generateTopicPredicateSentence from './topicPredicate';

const generateSentences = (options: Util.Options, words: Util.Topic | Util.Predicate | Util.TopicPredicate): Util.EnglishJapaneseSentence => {
  switch(options.sentenceType) {
    case TOPIC: 
      return generateTopicSentence(options, words as Util.Topic);
    case PREDICATE:
      return generatePredicateSentence(options, words as Util.Predicate);
    case TOPIC_PREDICATE:
      return generateTopicPredicateSentence(options, words as Util.TopicPredicate);
    default: 
      return {
        englishSentence: { type: createError('sentences', 'generateSentences', `${options.sentenceType} does not exist.`) },
        japaneseSentence: { type: createError('sentences', 'generateSentences', `${options.sentenceType} does not exist.`) }
      }
  }
};

const generateWords = (options: Util.Options, nouns: Util.Word[]): Util.Topic | Util.Predicate | Util.TopicPredicate => {
  switch(options.sentenceType) {
    case TOPIC: 
      return {
        topic: getOneWordPerson(nouns),
      };
    case PREDICATE:
      return {
        predicate: getOneWordPerson(nouns),
      };
    case TOPIC_PREDICATE:
      return {
        topic: getOneRandomHumanNameCategoryNoun(nouns),
        predicate: getOneWordPerson(nouns),
      };    
    default: 
      return { topic: { english: '', japanese: '', primaryType: '', category: [], meta: {} }, }
  }
};

const generateExercises = (nouns: Util.Word[], options: Util.Options, numberOfExercises: number): Util.EnglishJapaneseOptionsSentence[] =>
  Array.from(Array(numberOfExercises)).map(() => ({
    options,
    ...generateSentences(options, generateWords(options, nouns))
  }))

export default generateExercises;